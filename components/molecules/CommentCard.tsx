import Comment from "../../types/Comment.tsx";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div class="flex flex-col gap-4">
      <div class="flex flex-col gap-2">
        <p class="text-lg font-medium">{comment.author}</p>
        <p class="text-gray-500 text-sm">
          {new Date(comment.createdAt).toLocaleString()}
        </p>
      </div>
      <p class="text-justify">{comment.message}</p>
    </div>
  );
}
