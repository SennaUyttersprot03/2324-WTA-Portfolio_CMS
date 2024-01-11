import Footer from "../components/organisms/Footer.tsx";
import Header from "../components/organisms/Header.tsx";
import Main from "../components/organisms/Main.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <div class="px-4 py-8 mx-auto bg-[#86efac]">
          <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
            <img
              class="my-6"
              src="/logo.svg"
              width="128"
              height="128"
              alt="the Fresh logo: a sliced lemon dripping with juice"
            />
            <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
            <p class="my-4">
              Try updating this message in the
              <code class="mx-2">./routes/index.tsx</code> file, and refresh.
            </p>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
}
