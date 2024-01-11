import { JSX } from "preact/jsx-runtime";

interface Props {
  label: string;
  type: string;
  name: string;
  onInput: (e: JSX.TargetedEvent<HTMLInputElement, Event>) => void;
  error: string;
}

export default function FormField(
  { label, type, name, onInput, error }: Props,
) {
  return (
    <div class="flex flex-col gap-3">
      <label htmlFor="title">{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        class="border shadow rounded py-2 px-3"
        onInput={onInput}
      />
      {error && <p class="text-red-600">{error}</p>}
    </div>
  );
}
