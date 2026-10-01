const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "XP" },
  { href: "#projects", label: "Builds" },
  { href: "#education", label: "Skills" },
  { href: "#contact", label: "Trade" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 flex justify-center px-4 pt-4">
      <nav className="mc-panel-dark flex items-center gap-1 p-1.5">
        <span className="font-pixel text-[10px] text-gold px-3 [text-shadow:1px_1px_0_#000]">
          CNV
        </span>
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="mc-slot font-mono-px text-lg text-ink px-3 py-1 hover:brightness-95 transition"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
