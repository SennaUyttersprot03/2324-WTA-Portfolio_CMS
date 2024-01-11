import { Handlers, PageProps } from "$fresh/server.ts";
import AppButton from "../../components/atoms/AppButton.tsx";
import CommentCard from "../../components/molecules/CommentCard.tsx";
import Footer from "../../components/organisms/Footer.tsx";
import Header from "../../components/organisms/Header.tsx";
import Main from "../../components/organisms/Main.tsx";
import { deletePostById, postById } from "../../controllers/PostController.tsx";
import Comment from "../../types/Comment.tsx";
import Post from "../../types/Post.tsx";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    try {
      const response = await postById(_req, ctx);

      if (response.ok) {
        const data = await response.json();
        return ctx.render(data.post);
      }
      return ctx.renderNotFound();
    } catch (e) {
      return ctx.renderNotFound();
    }
  },

  async POST(_req, ctx) {
    try {
      const response = await deletePostById(_req, ctx);

      if (response.ok) {
        const headers = new Headers();
        headers.set("location", "/posts");
        return new Response(null, {
          status: 302,
          headers,
        });
      }
      return ctx.renderNotFound();
    } catch (e) {
      return ctx.renderNotFound();
    }
  },
};

export default function PostDetailPage({ data }: PageProps) {
  return (
    <>
      <Header />
      <Main>
        <div class="max-w-xl m-auto flex flex-col gap-6">
          <div class="flex flex-col gap-2">
            <div class="flex justify-between gap-4 flex-wrap">
              <h1 class="text-3xl font-bold">{data.title}</h1>
              <form method="post">
                <AppButton type="submit">Delete</AppButton>
              </form>
            </div>
            <p class="text-gray-500 text-sm">
              {new Date(data.createdAt).toLocaleString()}
            </p>
          </div>
          <p class="text-justify">
            {data.message}
          </p>
          <div class="mt-2">
            <h2 class="text-2xl font-bold mb-4">Comments</h2>
            <div class="flex flex-col gap-6">
              {data.comments?.map((comment: Comment, index: number) => (
                <>
                  {index !== 0 && <hr />}
                  <CommentCard comment={comment} key={index} />
                </>
              ))}
              {!data.comments && <p>No comments yet for this post</p>}
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
