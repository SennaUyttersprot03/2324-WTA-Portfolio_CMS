import { type PageProps } from "$fresh/server.ts";
import Header from "../components/organisms/Header.tsx";

export default function App({ Component }: PageProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Portfolio-CMS</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Header />
        <main class="pt-8 pb-8 pl-4 pr-4 max-w-screen-2xl min-h-screen m-auto">
          <Component />
        </main>
        <footer class="max-w-screen-2xl m-auto p-4 text-center bg-blue-700 text-white">
          <p>Portfolio CMS - 2024</p>
        </footer>
      </body>
    </html>
  );
}
