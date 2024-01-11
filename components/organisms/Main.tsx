import { JSX } from "preact/jsx-runtime";

export default function Main({ children }: { children: JSX.Element }) {
  return (
    <main class="pt-8 pb-8 pl-4 pr-4 max-w-screen-2xl min-h-screen m-auto">
      {children}
    </main>
  );
}
