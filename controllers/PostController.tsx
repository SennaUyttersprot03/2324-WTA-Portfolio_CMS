///<reference lib="deno.unstable" />
import Post from "../types/Post.tsx";
import { FreshContext } from "$fresh/server.ts";
import { validatePost } from "../validators/PostValidator.tsx";
import { hasErrors } from "../validators/HelperFunctions.tsx";

const kv = await Deno.openKv();

const getAllPosts = async (req: Request, ctx: FreshContext) => {
  const records = kv.list({ prefix: ["post"] });
  const posts: Post[] = [];
  for await (const record of records) {
    posts.push(record.value as Post);
  }
  return new Response(
    JSON.stringify({ message: "Here are all posts", posts }),
  );
};

const addPosts = async (req: Request, ctx: FreshContext) => {
  const body = (await req.json()) as Post;
  const errors = validatePost(body);

  if (hasErrors(errors)) {
    return new Response(
      JSON.stringify({ message: "The given data was invalid", errors }),
      { status: 422 },
    );
  }
  const post = { ...body, id: Date.now(), createdAt: new Date() };

  const postKey = ["post", post.id];
  await kv.set(postKey, post);

  const url = Deno.env.get("JAMSTACK_URL") || "";
  await fetch(url);

  return new Response(
    JSON.stringify({ message: "Post successfully created", post }),
    { status: 201 },
  );
};

const postById = async (req: Request, ctx: FreshContext) => {
  const id = ctx.params.id;
  const record = await kv.get(["post", Number.parseInt(id)]);
  const post = record.value as Post;

  if (!post) {
    return new Response(JSON.stringify({ message: "Post not found" }), {
      status: 404,
    });
  }
  return new Response(JSON.stringify({ message: "Here is your post", post }));
};

const deletePostById = async (req: Request, ctx: FreshContext) => {
  const id = ctx.params.id;
  await kv.delete(["post", Number.parseInt(id)]);

  const url = Deno.env.get("JAMSTACK_URL") || "";
  await fetch(url);

  return new Response(
    JSON.stringify({ message: "Post successfully deleted" }),
  );
};

export { addPosts, deletePostById, getAllPosts, postById };
