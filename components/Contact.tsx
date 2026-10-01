import { PixelCloud, PixelBit, SunGlow, Hills } from "./Decor";
import { contact } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="mc-sky relative overflow-hidden px-6 py-24 text-center">
      <SunGlow className="bottom-0 left-[10%]" size={200} />
      <PixelCloud className="top-8 left-[14%]" size={48} />
      <PixelCloud className="bottom-24 right-[16%]" size={56} />
      <PixelBit className="top-10 right-[22%]" color="#ffd36b" delay="0.8s" />
      <PixelBit className="bottom-32 left-[24%]" color="#4aedd9" delay="1.6s" />

      <div className="relative max-w-lg mx-auto">
        <div className="mc-achievement inline-block px-6 py-4 mb-6">
          <h2 className="font-pixel text-base text-gold [text-shadow:2px_2px_0_#000]">
            LET&apos;S TRADE
          </h2>
        </div>
        <p className="font-mono-px text-xl text-ink/80 mb-8">
          always happy to chat about products, internships, or cozy web design.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href={`mailto:${contact.email}`} className="mc-btn px-6 py-3 font-pixel text-[10px]">
            SAY HI
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mc-btn px-6 py-3 font-pixel text-[10px]"
          >
            GITHUB
          </a>
        </div>
      </div>

      <Hills />
    </section>
  );
}
