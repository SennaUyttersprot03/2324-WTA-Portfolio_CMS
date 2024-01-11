import { Handlers } from "$fresh/server.ts";
import {
  deletePostById,
  postById,
} from "../../../../controllers/PostController.tsx";
import Post from "../../../../types/Post.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    return await postById(_req, ctx);
  },

  async DELETE(_req, ctx) {
    return await deletePostById(_req, ctx);
  },
};
