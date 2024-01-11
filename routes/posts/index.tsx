import { Handlers, PageProps } from "$fresh/server.ts";
import AppButtonLink from "../../components/atoms/AppButtonLink.tsx";
import PostCard from "../../components/molecules/PostCard.tsx";
import { getAllPosts } from "../../controllers/PostController.tsx";
import Post from "../../types/Post.tsx";

export const handler: Handlers = {
  async GET(_req, _ctx) {
    try {
      const response = await getAllPosts(_req, _ctx);
      const posts = await response.json() as Post[];
      return _ctx.render(posts);
    } catch (error) {
      return _ctx.renderNotFound();
    }
  },
};

export default function PostsPage({ data }: PageProps) {
  return (
    <div>
      <div class="flex flex-row justify-between align-middle">
        <h1 class="text-3xl font-bold">Posts</h1>
        <AppButtonLink href="/posts/add">New Post</AppButtonLink>
      </div>
      <div class="flex flex-row justify-start gap-4 flex-wrap">
        {data.posts.map((post: Post, index: number) => (
          <PostCard post={post} key={index} />
        ))}
      </div>
    </div>
  );
}
