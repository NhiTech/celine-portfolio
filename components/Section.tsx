import { BlockRow } from "./Decor";

type Biome = "jungle" | "desert" | "end";

const biomeConfig: Record<Biome, { bg: string; heading: string; sub: string }> = {
  jungle: { bg: "biome-jungle", heading: "text-[#eafff0]", sub: "text-[#c9ecd4]" },
  desert: { bg: "biome-desert", heading: "text-[#5a3a1b]", sub: "text-[#8a5a2b]" },
  end: { bg: "biome-end", heading: "text-[#e9d9ff]", sub: "text-[#b89ce0]" },
};

export function Section({
  id,
  title,
  subtitle,
  biome,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  biome?: Biome;
  children: React.ReactNode;
}) {
  const cfg = biome ? biomeConfig[biome] : null;

  return (
    <section id={id} className={`relative px-6 py-20 ${cfg ? cfg.bg : ""}`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className={`font-pixel text-xl sm:text-2xl [text-shadow:2px_2px_0_rgba(0,0,0,0.25)] ${
              cfg ? cfg.heading : "text-grass-dark"
            }`}
          >
            {title}
          </h2>
          {subtitle && (
            <p className={`font-mono-px text-xl mt-2 ${cfg ? cfg.sub : "text-ink/60"}`}>
              {subtitle}
            </p>
          )}
          <div className="mt-4">
            <BlockRow />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}
