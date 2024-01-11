import { JSX } from "preact/jsx-runtime";

interface Props {
  label: string;
  type: string;
  name: string;
  onInput: (e: JSX.TargetedEvent<HTMLTextAreaElement, Event>) => void;
  error: string;
}

export function TextArea({ label, type, name, onInput, error }: Props) {
  return (
    <div class="flex flex-col gap-3">
      <label htmlFor="title">{label}</label>
      <textarea
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
