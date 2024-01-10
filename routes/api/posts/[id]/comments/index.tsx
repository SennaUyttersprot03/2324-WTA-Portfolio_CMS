import { Handlers } from "$fresh/server.ts";
import Comment from "../../../../../types/Comment.tsx";
import Post from "../../../../../types/Post.tsx";
import { validateComment } from "../../../../../validators/CommentValidator.tsx";
import { hasErrors } from "../../../../../validators/HelperFunctions.tsx";

const kv = await Deno.openKv();

export const handler: Handlers<Post> = {
  async POST(req, ctx) {
    const id = ctx.params.id;
    const body = await req.json();
    const errors = validateComment(body);

    if (hasErrors(errors)) {
      return new Response(
        JSON.stringify({ message: "The given data was invalid", errors }),
        { status: 422 },
      );
    }

    const record = await kv.get(["post", Number.parseInt(id)]);
    const post = record.value as Post;
    const comments = post.comments || [] as Comment[];

    comments.push({ ...body, createdAt: new Date() });
    post.comments = comments;

    const postKey = ["post", post.id];
    await kv.set(postKey, post);

    return new Response(
      JSON.stringify({ message: "Comment successfully added", post }),
      { status: 201 },
    );
  },
};
