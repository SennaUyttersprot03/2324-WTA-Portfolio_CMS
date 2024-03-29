// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $login_index from "./routes/login/index.tsx";
import * as $posts_id_ from "./routes/posts/[id].tsx";
import * as $posts_add from "./routes/posts/add.tsx";
import * as $posts_index from "./routes/posts/index.tsx";
import * as $CreatePostForm from "./islands/CreatePostForm.tsx";
import * as $LoginForm from "./islands/LoginForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
    "./routes/login/index.tsx": $login_index,
    "./routes/posts/[id].tsx": $posts_id_,
    "./routes/posts/add.tsx": $posts_add,
    "./routes/posts/index.tsx": $posts_index,
  },
  islands: {
    "./islands/CreatePostForm.tsx": $CreatePostForm,
    "./islands/LoginForm.tsx": $LoginForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
