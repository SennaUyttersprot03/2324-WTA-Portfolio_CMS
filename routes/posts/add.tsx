import { Handlers, PageProps } from "$fresh/server.ts";
import Footer from "../../components/organisms/Footer.tsx";
import Header from "../../components/organisms/Header.tsx";
import Main from "../../components/organisms/Main.tsx";
import { fetchGraphQL } from "../../graphql/FetchService.ts";
import CreatePostForm from "../../islands/CreatePostForm.tsx";

export const handler: Handlers = {
  async POST(req, ctx) {
    try {
      const formData = await req.formData();

      const mutation = `mutation {
        createPost(title: "${formData.get("title")}", message: "${
        formData.get("message")
      }") {
          id
        }
      }`;
      const response = await fetchGraphQL(mutation);

      if (response.errors) {
        const message = JSON.parse(response.errors[0].message);
        return ctx.render(message);
      }

      const headers = new Headers();
      headers.set("location", "/posts");
      return new Response(null, {
        status: 302,
        headers,
      });
    } catch (e) {
      return ctx.renderNotFound();
    }
  },
};

export default function CreatePostPage({ data }: PageProps) {
  return (
    <>
      <Header />
      <Main>
        <div class="max-w-screen-sm m-auto flex flex-col gap-4">
          <h1 class="text-center text-3xl font-bold">Create Post</h1>
          {data && (
            <ul class="list-disc ml-4">
              {Object.keys(data).map((key: string, index: number) => (
                <li class="text-red-700">{data[key]}</li>
              ))}
            </ul>
          )}
          <CreatePostForm />
        </div>
      </Main>
      <Footer />
    </>
  );
}
