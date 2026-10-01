type CritterProps = { className?: string; scale?: number; delay?: string };

export function Pig({ className = "", scale = 1, delay = "0s" }: CritterProps) {
  return (
    <div
      className={`critter ${className}`}
      style={{ ["--s" as string]: scale, animationDelay: delay }}
    >
      <div className="relative" style={{ width: 40 * scale, height: 28 * scale }}>
        <div className="absolute rounded-md" style={{ background: "#f3a6b2", left: 4 * scale, top: 6 * scale, width: 30 * scale, height: 16 * scale, boxShadow: "0 3px 0 rgba(0,0,0,0.15)" }} />
        <div className="absolute rounded-sm" style={{ background: "#f3a6b2", left: 26 * scale, top: 0, width: 14 * scale, height: 12 * scale, boxShadow: "0 2px 0 rgba(0,0,0,0.15)" }} />
        <div className="absolute rounded-sm" style={{ background: "#e88a9a", left: 33 * scale, top: 4 * scale, width: 6 * scale, height: 4 * scale }} />
        <div className="absolute rounded-sm" style={{ background: "#2b1d12", left: 36 * scale, top: 2 * scale, width: 2 * scale, height: 2 * scale }} />
        {[2, 12, 22, 28].map((x, i) => (
          <div key={i} className="absolute" style={{ background: "#e88a9a", left: x * scale, top: 20 * scale, width: 5 * scale, height: 7 * scale, borderRadius: 2 }} />
        ))}
      </div>
    </div>
  );
}

export function Sheep({ className = "", scale = 1, delay = "0s" }: CritterProps) {
  return (
    <div
      className={`critter ${className}`}
      style={{ ["--s" as string]: scale, animationDelay: delay }}
    >
      <div className="relative" style={{ width: 44 * scale, height: 30 * scale }}>
        <div className="absolute rounded-xl" style={{ background: "#fbfbfb", left: 4 * scale, top: 4 * scale, width: 32 * scale, height: 18 * scale, boxShadow: "inset 0 -3px 0 rgba(0,0,0,0.08), 0 3px 0 rgba(0,0,0,0.15)" }} />
        <div className="absolute rounded-sm" style={{ background: "#3b3b3b", left: 28 * scale, top: 2 * scale, width: 12 * scale, height: 10 * scale }} />
        {[4, 14, 24, 32].map((x, i) => (
          <div key={i} className="absolute" style={{ background: "#3b3b3b", left: x * scale, top: 20 * scale, width: 5 * scale, height: 8 * scale, borderRadius: 2 }} />
        ))}
      </div>
    </div>
  );
}

export function Chicken({ className = "", scale = 1, delay = "0s" }: CritterProps) {
  return (
    <div
      className={`critter ${className}`}
      style={{ ["--s" as string]: scale, animationDelay: delay }}
    >
      <div className="relative" style={{ width: 28 * scale, height: 26 * scale }}>
        <div className="absolute rounded-md" style={{ background: "#fcfcfc", left: 4 * scale, top: 8 * scale, width: 18 * scale, height: 12 * scale, boxShadow: "0 3px 0 rgba(0,0,0,0.15)" }} />
        <div className="absolute rounded-sm" style={{ background: "#fcfcfc", left: 14 * scale, top: 0, width: 10 * scale, height: 10 * scale }} />
        <div className="absolute" style={{ background: "#e8403d", left: 16 * scale, top: -2 * scale, width: 6 * scale, height: 4 * scale, borderRadius: 2 }} />
        <div className="absolute" style={{ background: "#f0a52e", left: 22 * scale, top: 4 * scale, width: 5 * scale, height: 3 * scale }} />
        <div className="absolute" style={{ background: "#f0a52e", left: 8 * scale, top: 20 * scale, width: 3 * scale, height: 5 * scale }} />
        <div className="absolute" style={{ background: "#f0a52e", left: 14 * scale, top: 20 * scale, width: 3 * scale, height: 5 * scale }} />
      </div>
    </div>
  );
}
