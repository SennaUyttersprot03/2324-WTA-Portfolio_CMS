import { Handlers } from "$fresh/server.ts";
import Post from "../../../../types/Post.tsx";

const kv = await Deno.openKv();

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const id = ctx.params.id;
    const record = await kv.get(["post", Number.parseInt(id)]);
    const post = record.value as Post;

    if (!post) {
      return new Response(JSON.stringify({ message: "Post not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify({ message: "Here is your post", post }));
  },

  async DELETE(_req, ctx) {
    const id = ctx.params.id;
    await kv.delete(["post", Number.parseInt(id)]);
    return new Response(
      JSON.stringify({ message: "Post successfully deleted" }),
    );
  },
};
