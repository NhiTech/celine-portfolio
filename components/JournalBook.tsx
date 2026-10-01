export function JournalBook() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="mc-panel-dark grid grid-cols-1 sm:grid-cols-2 gap-1 p-1">
        {/* left slot — photo */}
        <div className="mc-slot relative p-8 flex flex-col items-center justify-center gap-4">
          <div className="mc-panel-desert h-36 w-36 sm:h-44 sm:w-44 overflow-hidden p-1.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/celine.jpg"
              alt="Celine Nhi Vo"
              className="h-full w-full rounded-md object-cover"
              style={{ objectPosition: "50% 20%" }}
            />
          </div>
          <p className="font-pixel text-[10px] text-dirt-dark">CELINE.PNG</p>
        </div>

        {/* right slot — about */}
        <div className="mc-slot relative p-8 flex flex-col justify-center gap-3">
          <h2 className="font-pixel text-sm text-gold [text-shadow:2px_2px_0_#000]">
            ABOUT.TXT
          </h2>
          <p className="font-mono-px text-lg leading-snug text-ink/80">
            I&apos;m a Computer Science student at Georgia Tech, concentrating in
            Media &amp; People. I love building things that help us in our
            day-to-day lives — tools that quietly make things a little
            easier.
          </p>
          <p className="font-pixel text-[11px] leading-relaxed text-dirt-dark border-l-4 border-gold pl-3">
            &ldquo;if I&apos;m struggling with something, someone out there
            is probably struggling with it too.&rdquo;
          </p>
          <p className="font-mono-px text-lg leading-snug text-ink/80">
            Outside of code, I&apos;m a Red Bull Student Ambassador and a
            Helen Fellow, teaching younger students that AI can be fun and
            approachable, not scary.
          </p>
        </div>
      </div>
    </div>
  );
}
