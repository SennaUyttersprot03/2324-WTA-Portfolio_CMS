import LoginForm from "../../islands/LoginForm.tsx";

export default function LoginPage() {
  return (
    <>
      <header></header>
      <main class="flex flex-col justify-center items-center min-h-screen">
        <div class="flex flex-col justify-center items-center w-96 shadow-2xl p-8 rounded-lg">
          <h1 class="text-3xl font-bold">Login</h1>
          <LoginForm />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
