// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $api_posts_id_comments_index from "./routes/api/posts/[id]/comments/index.tsx";
import * as $api_posts_id_index from "./routes/api/posts/[id]/index.tsx";
import * as $api_posts_index from "./routes/api/posts/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $posts_add from "./routes/posts/add.tsx";
import * as $posts_index from "./routes/posts/index.tsx";
import * as $CreatePostForm from "./islands/CreatePostForm.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/api/posts/[id]/comments/index.tsx": $api_posts_id_comments_index,
    "./routes/api/posts/[id]/index.tsx": $api_posts_id_index,
    "./routes/api/posts/index.tsx": $api_posts_index,
    "./routes/index.tsx": $index,
    "./routes/posts/add.tsx": $posts_add,
    "./routes/posts/index.tsx": $posts_index,
  },
  islands: {
    "./islands/CreatePostForm.tsx": $CreatePostForm,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
