import CreatePostForm from "../../islands/CreatePostForm.tsx";

export default function CreatePostPage() {
  return (
    <div class="max-w-screen-sm m-auto flex flex-col gap-4">
      <h1 class="text-center text-3xl font-bold">Create Post</h1>
      <CreatePostForm />
    </div>
  );
}
