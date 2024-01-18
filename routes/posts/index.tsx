import { Handlers, PageProps } from "$fresh/server.ts";
import AppButtonLink from "../../components/atoms/AppButtonLink.tsx";
import PostCard from "../../components/molecules/PostCard.tsx";
import Footer from "../../components/organisms/Footer.tsx";
import Header from "../../components/organisms/Header.tsx";
import Main from "../../components/organisms/Main.tsx";
import Post from "../../types/Post.tsx";
import { fetchGraphQL } from "../../graphql/FetchService.ts"

export const handler: Handlers = {
  async GET(_req, _ctx) {
    try {
      const query = `query {
        posts {
          id
          title
          message
        }
      }`;
      const { data } = await fetchGraphQL(query)
      return _ctx.render(data);
    } catch (error) {
      return _ctx.renderNotFound();
    }
  },
};

export default function PostsPage({ data } : PageProps) {
  return (
    <>
      <Header />
      <Main>
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
      </Main>
      <Footer />
    </>
  );
}
