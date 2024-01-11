import { useState } from "preact/hooks";
import AppButton from "../components/atoms/AppButton.tsx";
import FormField from "../components/molecules/FormField.tsx";

interface FormValues {
  email: string;
  password: string;
}

export default function LoginForm() {
  const [formValues, setFormValues] = useState({} as FormValues);
  const [formErrors, setFormErrors] = useState({} as FormValues);

  //   deno-lint-ignore no-explicit-any
  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      class="w-full flex flex-col gap-4"
    >
      <FormField
        label="Email"
        type="text"
        name="email"
        error={formErrors.email}
        onInput={handleChange}
      />
      <FormField
        label="Password"
        type="password"
        name="password"
        error={formErrors.password}
        onInput={handleChange}
      />
      <AppButton
        type="submit"
        class="w-full pl-4 pr-4 pt-2 pb-2 bg-blue-700 text-slate-50 rounded-lg"
      >
        Login
      </AppButton>
    </form>
  );
}
