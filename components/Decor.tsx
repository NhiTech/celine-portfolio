export function PixelCloud({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return <div className={`pixel-cloud ${className}`} style={{ width: size, height: size * 0.4 }} />;
}

export function PixelBit({
  className = "",
  color = "#ffd36b",
  delay = "0s",
}: {
  className?: string;
  color?: string;
  delay?: string;
}) {
  return (
    <div
      className={`pixel-bit ${className}`}
      style={{
        width: 10,
        height: 10,
        background: color,
        boxShadow: `0 0 10px 2px ${color}99`,
        animationDelay: delay,
      }}
    />
  );
}

export function BlockRow() {
  const palette = ["var(--grass)", "var(--dirt)", "var(--grass-dark)", "var(--gold)"];
  const blocks = Array.from({ length: 16 }, (_, i) => palette[i % palette.length]);
  return (
    <div className="block-row">
      {blocks.map((c, i) => (
        <span key={i} style={{ background: c }} />
      ))}
    </div>
  );
}

export function SunGlow({ className = "", size = 220 }: { className?: string; size?: number }) {
  return <div className={`sun-glow ${className}`} style={{ width: size, height: size }} />;
}

export function Stars() {
  const stars = [
    { top: "8%", left: "12%", size: 3, delay: "0s" },
    { top: "18%", left: "82%", size: 4, delay: "0.5s" },
    { top: "40%", left: "6%", size: 2, delay: "1s" },
    { top: "65%", left: "90%", size: 3, delay: "1.5s" },
    { top: "80%", left: "20%", size: 2, delay: "0.3s" },
    { top: "25%", left: "50%", size: 2, delay: "1.2s" },
    { top: "55%", left: "35%", size: 3, delay: "0.8s" },
    { top: "12%", left: "65%", size: 2, delay: "1.8s" },
  ];
  return (
    <>
      {stars.map((s, i) => (
        <div
          key={i}
          className="star"
          style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay }}
        />
      ))}
    </>
  );
}

export function MoonGlow({ className = "", size = 160 }: { className?: string; size?: number }) {
  return <div className={`moon-glow ${className}`} style={{ width: size, height: size }} />;
}

export function Bubbles() {
  const bubbles = [
    { left: "8%", size: 8, delay: "0s" },
    { left: "20%", size: 5, delay: "1.4s" },
    { left: "35%", size: 7, delay: "0.6s" },
    { left: "55%", size: 6, delay: "2.1s" },
    { left: "72%", size: 9, delay: "0.9s" },
    { left: "88%", size: 5, delay: "1.8s" },
  ];
  return (
    <>
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="bubble"
          style={{ left: b.left, bottom: "4%", width: b.size, height: b.size, animationDelay: b.delay }}
        />
      ))}
    </>
  );
}

export function Hills() {
  return (
    <div className="hills h-28 sm:h-36">
      <div className="hill-back absolute inset-x-0 bottom-0 h-full opacity-90" />
      <div className="hill-front absolute inset-x-0 bottom-0 h-3/4" />
    </div>
  );
}
