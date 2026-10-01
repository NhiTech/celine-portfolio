import { education } from "@/lib/data";
import { Section } from "./Section";
import { Stars } from "./Decor";
import { Enderman } from "./Critters";

export function Education() {
  return (
    <Section id="education" title="SKILLS" subtitle="[ the end ]" biome="end">
      <Stars />
      <Enderman className="top-10 left-[8%] z-10" scale={1.1} delay="0.5s" />
      <Enderman className="bottom-10 right-[10%] z-10" scale={0.9} delay="2s" />
      <div className="mc-panel-end mx-auto max-w-xl p-8 text-center">
        <h3 className="font-pixel text-sm text-[#e9d9ff]">{education.school}</h3>
        <p className="font-mono-px text-lg text-[#d8c6f0]/90 mt-2">
          {education.degree} · {education.location}
        </p>
        <p className="font-mono-px text-lg text-[#d8c6f0]/75">{education.concentration}</p>
        <p className="font-mono-px text-base text-[#b89ce0] mt-2">{education.dates}</p>
      </div>
    </Section>
  );
}
