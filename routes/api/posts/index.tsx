///<reference lib="deno.unstable" />

import { Handlers } from "$fresh/server.ts";
import Post from "../../../types/Post.tsx";
import { hasErrors } from "../../../validators/HelperFunctions.tsx";
import { validatePost } from "../../../validators/PostValidator.tsx";

const kv = await Deno.openKv();

export const handler: Handlers<Post> = {
  async POST(req, _ctx) {
    const body = (await req.json()) as Post;
    const errors = validatePost(body);

    if (hasErrors(errors)) {
      return new Response(
        JSON.stringify({ message: "The given data was invalid", errors }),
        { status: 422 },
      );
    }
    const post = { ...body, id: Date.now(), createdAt: new Date() };

    const postKey = ["post", post.id];
    await kv.set(postKey, post);

    return new Response(
      JSON.stringify({ message: "Post successfully createed", post }),
      { status: 201 },
    );
  },

  async GET(req, _ctx) {
    const records = kv.list({ prefix: ["post"] });
    const posts: Post[] = [];
    for await (const record of records) {
      posts.push(record.value as Post);
    }
    return new Response(
      JSON.stringify({ message: "Here are all posts", posts }),
    );
  },
};
