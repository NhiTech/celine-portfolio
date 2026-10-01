import { experiences } from "@/lib/data";
import { accentColor } from "@/lib/colors";
import { Section } from "./Section";
import { Stars, MoonGlow } from "./Decor";
import { Creeper, Zombie, Skeleton } from "./Critters";

export function Experience() {
  return (
    <Section id="experience" title="EXPERIENCE" subtitle="[ night raid ]" biome="night">
      <Stars />
      <MoonGlow className="top-4 right-[8%]" size={140} />
      <Creeper className="top-6 left-[6%] z-10" scale={1.3} delay="0s" />
      <Zombie className="top-16 right-[5%] z-10" scale={1.1} delay="1.2s" />
      <Skeleton className="bottom-6 left-[10%] z-10" scale={1.1} delay="2.1s" />
      <Creeper className="bottom-10 right-[14%] z-10" scale={1} delay="3s" />

      <div className="grid gap-5 sm:grid-cols-2 relative">
        {experiences.map((exp) => (
          <div key={exp.company} className="mc-panel-night p-5">
            <div
              className="mb-3 inline-block px-2 py-0.5 font-pixel text-[9px] text-black"
              style={{ background: accentColor[exp.color] }}
            >
              QUEST
            </div>
            <div className="flex items-baseline justify-between gap-2 flex-wrap">
              <h3 className="font-pixel text-xs text-[#8ef08e]">{exp.company}</h3>
            </div>
            <p className="font-mono-px text-lg text-[#d7dcf2]/90 mt-1">
              {exp.role} · {exp.location}
            </p>
            <p className="font-mono-px text-base text-[#d7dcf2]/55">{exp.dates}</p>
            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((b) => (
                <li key={b} className="font-mono-px text-lg leading-snug text-[#e4e7f6]/90 pl-5 relative before:content-['▸'] before:absolute before:left-0 before:text-[#8ef08e]">
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
