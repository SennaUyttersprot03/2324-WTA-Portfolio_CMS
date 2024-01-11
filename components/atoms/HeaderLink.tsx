export default function HeaderLink(
  { href, children }: { href: string; children: string },
) {
  return (
    <li>
      <a
        href={href}
        class="aria-[current=page]:underline text-white text-lg"
      >
        {children}
      </a>
    </li>
  );
}
