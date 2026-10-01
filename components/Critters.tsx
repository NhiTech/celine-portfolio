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

export function Creeper({ className = "", scale = 1, delay = "0s" }: CritterProps) {
  return (
    <div
      className={`critter ${className}`}
      style={{ ["--s" as string]: scale, animationDelay: delay, filter: "drop-shadow(0 0 6px #5ac75a99)" }}
    >
      <div className="relative" style={{ width: 26 * scale, height: 34 * scale }}>
        <div className="absolute" style={{ background: "#54b843", left: 0, top: 0, width: 26 * scale, height: 34 * scale, borderRadius: 3, boxShadow: "0 3px 0 rgba(0,0,0,0.3)" }} />
        {/* face */}
        <div className="absolute" style={{ background: "#132312", left: 5 * scale, top: 6 * scale, width: 5 * scale, height: 6 * scale }} />
        <div className="absolute" style={{ background: "#132312", left: 16 * scale, top: 6 * scale, width: 5 * scale, height: 6 * scale }} />
        <div className="absolute" style={{ background: "#132312", left: 9 * scale, top: 14 * scale, width: 8 * scale, height: 4 * scale }} />
        <div className="absolute" style={{ background: "#132312", left: 7 * scale, top: 18 * scale, width: 4 * scale, height: 5 * scale }} />
        <div className="absolute" style={{ background: "#132312", left: 15 * scale, top: 18 * scale, width: 4 * scale, height: 5 * scale }} />
      </div>
    </div>
  );
}

export function Zombie({ className = "", scale = 1, delay = "0s" }: CritterProps) {
  return (
    <div
      className={`critter ${className}`}
      style={{ ["--s" as string]: scale, animationDelay: delay }}
    >
      <div className="relative" style={{ width: 20 * scale, height: 36 * scale }}>
        <div className="absolute rounded-sm" style={{ background: "#4f8a5c", left: 4 * scale, top: 0, width: 12 * scale, height: 10 * scale }} />
        <div className="absolute" style={{ background: "#132312", left: 6 * scale, top: 4 * scale, width: 2.5 * scale, height: 2.5 * scale }} />
        <div className="absolute" style={{ background: "#132312", left: 12 * scale, top: 4 * scale, width: 2.5 * scale, height: 2.5 * scale }} />
        <div className="absolute" style={{ background: "#3a6ea8", left: 2 * scale, top: 10 * scale, width: 16 * scale, height: 14 * scale, borderRadius: 2, boxShadow: "0 3px 0 rgba(0,0,0,0.3)" }} />
        <div className="absolute" style={{ background: "#4f8a5c", left: 0, top: 11 * scale, width: 4 * scale, height: 10 * scale }} />
        <div className="absolute" style={{ background: "#4f8a5c", left: 16 * scale, top: 11 * scale, width: 4 * scale, height: 10 * scale }} />
        {[4, 11].map((x, i) => (
          <div key={i} className="absolute" style={{ background: "#2b2b2b", left: x * scale, top: 24 * scale, width: 5 * scale, height: 12 * scale }} />
        ))}
      </div>
    </div>
  );
}

export function Skeleton({ className = "", scale = 1, delay = "0s" }: CritterProps) {
  return (
    <div
      className={`critter ${className}`}
      style={{ ["--s" as string]: scale, animationDelay: delay }}
    >
      <div className="relative" style={{ width: 20 * scale, height: 36 * scale }}>
        <div className="absolute rounded-sm" style={{ background: "#e9e6d8", left: 4 * scale, top: 0, width: 12 * scale, height: 10 * scale }} />
        <div className="absolute" style={{ background: "#1c1c1c", left: 6 * scale, top: 4 * scale, width: 2.5 * scale, height: 2.5 * scale }} />
        <div className="absolute" style={{ background: "#1c1c1c", left: 12 * scale, top: 4 * scale, width: 2.5 * scale, height: 2.5 * scale }} />
        <div className="absolute" style={{ background: "#d8d4c4", left: 3 * scale, top: 10 * scale, width: 14 * scale, height: 13 * scale, borderRadius: 2, boxShadow: "0 3px 0 rgba(0,0,0,0.3)" }} />
        {[4, 11].map((x, i) => (
          <div key={i} className="absolute" style={{ background: "#d8d4c4", left: x * scale, top: 23 * scale, width: 5 * scale, height: 13 * scale }} />
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
