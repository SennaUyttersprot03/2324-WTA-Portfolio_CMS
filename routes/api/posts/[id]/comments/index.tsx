import { Handlers } from "$fresh/server.ts";
import { addComment } from "../../../../../controllers/CommentController.tsx";
import Post from "../../../../../types/Post.tsx";

export const handler: Handlers<Post> = {
  async POST(req, ctx) {
    return await addComment(req, ctx);
  },
};
