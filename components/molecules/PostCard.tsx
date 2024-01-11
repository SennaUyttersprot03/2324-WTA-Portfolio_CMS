import Post from "../../types/Post.tsx";

export default function PostCard({ post }: { post: Post }) {
  return (
    <div class="my-4 p-4 bg-white rounded-md shadow-md w-80 flex flex-col gap-2">
      <h2 class="text-2xl font-semibold">{post.title}</h2>
      <p class="text-gray-700 truncate">{post.message}</p>
      <a
        href={"/posts/" + post.id}
        class="font-medium text-blue-700 dark:text-blue-600 hover:underline"
      >
        Read Post
      </a>
    </div>
  );
}
