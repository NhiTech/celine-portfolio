import { projects } from "@/lib/data";
import { accentColor } from "@/lib/colors";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="projects" title="BUILDS" subtitle="[ desert workshop ]" biome="desert">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target={p.link ? "_blank" : undefined}
            rel={p.link ? "noopener noreferrer" : undefined}
            className="mc-panel-desert block p-6 transition hover:brightness-[1.03]"
          >
            <div
              className="mb-3 inline-block px-2 py-0.5 font-pixel text-[9px] text-black"
              style={{ background: accentColor[p.color] }}
            >
              BUILD
            </div>
            <h3 className="font-pixel text-sm text-[#5a3a1b]">{p.name}</h3>
            <p className="font-mono-px text-lg text-[#6b4a22]/90 mb-1">{p.tagline}</p>
            <p className="font-mono-px text-base text-[#6b4a22]/60 mb-3">{p.dates}</p>
            <ul className="space-y-1.5">
              {p.bullets.map((b) => (
                <li key={b} className="font-mono-px text-lg leading-snug text-[#4a3014]/90 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8a5a2b]">
                  {b}
                </li>
              ))}
            </ul>
            {p.link && (
              <span className="mc-btn mt-4 inline-block px-4 py-2 font-pixel text-[9px]">
                VISIT ↗
              </span>
            )}
          </a>
        ))}
      </div>
    </Section>
  );
}
