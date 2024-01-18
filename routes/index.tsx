import Footer from "../components/organisms/Footer.tsx";
import Header from "../components/organisms/Header.tsx";
import Main from "../components/organisms/Main.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <div class="px-4 py-8 mx-auto">
          <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <h1 class="text-4xl font-bold">Welcome to my portfolio CMS</h1>
            <p class="my-4">
              This is a simple CMS built with Fresh and Tailwind CSS.
            </p>
            <p>Go to the posts page where you can add an interesting post!</p>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
