export default function AppButtonLink(
  { href, children }: { href: string; children: string },
) {
  return (
    <a
      href={href}
      class="pl-4 pr-4 pt-2 pb-2 bg-blue-700 text-slate-50 rounded-lg"
    >
      {children}
    </a>
  );
}
