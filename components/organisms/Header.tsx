import HeaderLink from "../atoms/HeaderLink.tsx";

export default function Header() {
  return (
    <header class="p-6 bg-blue-700">
      <ul class="flex flex-row justify-center gap-10 flex-wrap max-w-screen-2xl m-auto">
        <HeaderLink href="/">Home</HeaderLink>
        <HeaderLink href="/projects">Projects</HeaderLink>
        <HeaderLink href="/posts">Posts</HeaderLink>
      </ul>
    </header>
  );
}
