import { PixelCloud, PixelBit, SunGlow, Hills } from "./Decor";
import { Pig, Sheep, Chicken, Cow, Bee, Wolf, Villager } from "./Critters";
import { TypingName } from "./TypingName";
import { JournalBook } from "./JournalBook";
import { TeleportOrb } from "./TeleportOrb";

export function Hero() {
  return (
    <section className="mc-sky relative overflow-hidden pt-28 pb-24 px-6">
      <SunGlow className="top-10 right-[8%]" size={260} />
      <PixelCloud className="top-16 left-[10%]" size={64} />
      <PixelCloud className="top-28 right-[18%]" size={48} />
      <PixelCloud className="bottom-10 left-[22%]" size={40} />
      <PixelBit className="top-24 left-[32%]" delay="0.4s" />
      <PixelBit className="top-40 right-[26%]" color="#4aedd9" delay="1.2s" />
      <PixelBit className="bottom-24 right-[12%]" color="#ff8585" delay="2s" />

      <div className="relative mx-auto max-w-4xl text-center flex flex-col items-center gap-3">
        <div className="mc-achievement inline-block px-6 py-4">
          <TypingName text="Celine Nhi Vo" />
        </div>
        <p className="font-mono-px text-2xl text-ink/80 max-w-xl">
          CS student at Georgia Tech, crafting cozy corners of the internet
        </p>
        <TeleportOrb targetId="education" className="mt-2" />
      </div>

      <div className="relative mt-14">
        <JournalBook />
      </div>

      <Pig className="bottom-6 left-[15%] z-10" scale={1.3} delay="0s" />
      <Sheep className="bottom-4 right-[20%] z-10" scale={1.2} delay="1.5s" />
      <Chicken className="bottom-8 left-[46%] z-10" scale={1.4} delay="3s" />
      <Cow className="bottom-2 right-[6%] z-10" scale={1.2} delay="2.2s" />
      <Wolf className="bottom-4 left-[4%] z-10" scale={1.1} delay="1s" />
      <Villager className="bottom-2 left-[62%] z-10" scale={1} delay="0.6s" />
      <Bee className="bottom-24 left-[36%] z-10" scale={1.2} delay="0.3s" />
      <Bee className="bottom-28 right-[36%] z-10" scale={1} delay="1.6s" />

      <Hills />
    </section>
  );
}
