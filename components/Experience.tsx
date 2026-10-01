import { experiences } from "@/lib/data";
import { accentColor } from "@/lib/colors";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title="EXPERIENCE" subtitle="[ jungle quest log ]" biome="jungle">
      <div className="grid gap-5 sm:grid-cols-2">
        {experiences.map((exp) => (
          <div key={exp.company} className="mc-panel-jungle p-5">
            <div
              className="mb-3 inline-block px-2 py-0.5 font-pixel text-[9px] text-black"
              style={{ background: accentColor[exp.color] }}
            >
              QUEST
            </div>
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <h3 className="font-pixel text-xs text-[#1d3318]">{exp.company}</h3>
            </div>
            <p className="font-mono-px text-lg text-[#3a2a12]/85 mt-1">
              {exp.role} · {exp.location}
            </p>
            <p className="font-mono-px text-base text-[#3a2a12]/60">{exp.dates}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((b) => (
                <li key={b} className="font-mono-px text-lg leading-snug text-[#2b1d0d]/90 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#1d3318]">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
