"use client";

import { useEffect, useState } from "react";

export function TypingName({ text }: { text: string }) {
  const [shown, setShown] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 110);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 className="font-pixel text-2xl sm:text-4xl leading-relaxed text-white [text-shadow:3px_3px_0_#000]">
      <span className={shown.length < text.length ? "type-cursor" : ""}>{shown}</span>
    </h1>
  );
}
