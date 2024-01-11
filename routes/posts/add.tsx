import Footer from "../../components/organisms/Footer.tsx";
import Header from "../../components/organisms/Header.tsx";
import Main from "../../components/organisms/Main.tsx";
import CreatePostForm from "../../islands/CreatePostForm.tsx";

export default function CreatePostPage() {
  return (
    <>
      <Header />
      <Main>
        <div class="max-w-screen-sm m-auto flex flex-col gap-4">
          <h1 class="text-center text-3xl font-bold">Create Post</h1>
          <CreatePostForm />
        </div>
      </Main>
      <Footer />
    </>
  );
}
