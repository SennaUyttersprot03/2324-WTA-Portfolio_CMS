import Post from "../types/Post.tsx";
import { isFilled } from "./HelperFunctions.tsx";

export function validatePost(post: Post) {
  const errors = {} as Post;
  if (!isFilled(post.title)) {
    errors.title = "Title is required";
  }

  if (!isFilled(post.message)) {
    errors.message = "Message required";
  }

  return errors;
}
