import { projects } from "@/lib/data";
import { accentColor } from "@/lib/colors";
import { Section } from "./Section";
import { Bubbles } from "./Decor";
import { Fish, Turtle, Dolphin, Boat } from "./Critters";

export function Projects() {
  return (
    <Section id="projects" title="BUILDS" subtitle="[ coral reef ]" biome="ocean">
      <Bubbles />
      <Fish className="top-[18%] left-[4%] z-10" scale={1.4} color="#ff8a3d" delay="0s" />
      <Fish className="top-[55%] right-[6%] z-10" scale={1.1} color="#ffd93d" delay="2s" />
      <Turtle className="bottom-[10%] left-[10%] z-10" scale={1.3} delay="1s" />
      <Dolphin className="top-[10%] right-[12%] z-10" scale={1.2} delay="0.5s" />
      <Boat className="top-[4%] left-[42%] z-10" scale={1.3} delay="0.8s" />

      <div className="grid gap-5 sm:grid-cols-2 relative">
        {projects.map((p) => (
          <a
            key={p.name}
            href={p.link}
            target={p.link ? "_blank" : undefined}
            rel={p.link ? "noopener noreferrer" : undefined}
            className="mc-panel-ocean block p-6 transition hover:brightness-[1.03]"
          >
            <div
              className="mb-3 inline-block px-2 py-0.5 font-pixel text-[9px] text-black"
              style={{ background: accentColor[p.color] }}
            >
              BUILD
            </div>
            <h3 className="font-pixel text-sm text-[#0e6f85]">{p.name}</h3>
            <p className="font-mono-px text-lg text-[#0e6f85]/90 mb-1">{p.tagline}</p>
            <p className="font-mono-px text-base text-[#0e6f85]/60 mb-3">{p.dates}</p>
            <ul className="space-y-1.5">
              {p.bullets.map((b) => (
                <li key={b} className="font-mono-px text-lg leading-snug text-[#0a3d4a]/90 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#ff8a65]">
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
