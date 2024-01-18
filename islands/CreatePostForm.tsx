import { useState } from "preact/hooks";
import FormField from "../components/molecules/FormField.tsx";
import { TextArea } from "../components/molecules/TextArea.tsx";
import { JSX } from "preact/jsx-runtime";
import AppButton from "../components/atoms/AppButton.tsx";
import { isFilled } from "../validators/HelperFunctions.tsx";

interface FormValues {
  title: string;
  message: string;
}

export default function CreatePostForm() {
  const [formValues, setFormValues] = useState<FormValues>({
    title: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState<FormValues>({
    title: "",
    message: "",
  });

  // deno-lint-ignore no-explicit-any
  const handleChange = (e: any) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: JSX.TargetedEvent<HTMLFormElement, Event>) => {
    const isValid = validatePost();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const validatePost = () => {
    const errors = {} as FormValues;

    if (!isFilled(formValues.title)) {
      errors.title = "Please fill in a title";
    }

    if (!isFilled(formValues.message)) {
      errors.message = "Please fill in a message";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      class="flex flex-col gap-4"
    >
      <FormField
        label="Title"
        name="title"
        type="text"
        onInput={handleChange}
        error={formErrors.title}
      />
      <TextArea
        label="Message"
        name="message"
        type="text"
        onInput={handleChange}
        error={formErrors.message}
      />
      <AppButton type="submit">Create</AppButton>
    </form>
  );
}
