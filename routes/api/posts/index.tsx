import { Handlers } from "$fresh/server.ts";
import { addPosts, getAllPosts } from "../../../controllers/PostController.tsx";
import Post from "../../../types/Post.tsx";

export const handler: Handlers<Post> = {
  async POST(req, _ctx) {
    return await addPosts(req, _ctx);
  },

  async GET(req, _ctx) {
    return await getAllPosts(req, _ctx);
  },
};
