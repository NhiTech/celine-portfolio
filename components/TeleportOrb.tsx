"use client";

import { useState } from "react";

export function TeleportOrb({
  targetId,
  className = "",
}: {
  targetId: string;
  className?: string;
}) {
  const [flashing, setFlashing] = useState(false);

  const handleClick = () => {
    setFlashing(true);
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth", block: "start" });
    window.setTimeout(() => setFlashing(false), 700);
  };

  return (
    <>
      <div className={`flex flex-col items-center gap-1.5 ${className}`}>
        <button
          onClick={handleClick}
          aria-label={`Teleport to ${targetId}`}
          className="ender-orb h-14 w-14 rounded-full"
        />
        <span className="font-pixel text-[8px] text-white [text-shadow:1px_1px_0_#000]">
          CLICK ME
        </span>
      </div>
      <div className={`teleport-flash ${flashing ? "active" : ""}`} />
    </>
  );
}
