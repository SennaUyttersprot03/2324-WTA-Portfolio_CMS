export default function AppButton(
  { type, children }: { type: string; children: string },
) {
  return (
    <button
      type={type}
      class="pl-4 pr-4 pt-2 pb-2 bg-blue-700 text-slate-50 rounded-lg"
    >
      {children}
    </button>
  );
}
