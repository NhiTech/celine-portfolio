export function JournalBook() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">
      <div className="mc-panel-dark grid grid-cols-1 sm:grid-cols-2 gap-1 p-1">
        {/* left slot — photo */}
        <div className="mc-slot relative p-8 flex flex-col items-center justify-center gap-4">
          <div className="mc-panel-desert h-36 w-36 sm:h-44 sm:w-44 flex items-center justify-center">
            <span className="font-pixel text-3xl text-dirt-dark">CV</span>
          </div>
          <p className="font-mono-px text-lg text-ink/80">[ swap me for a real photo ]</p>
        </div>

        {/* right slot — about */}
        <div className="mc-slot relative p-8 flex flex-col justify-center gap-3">
          <h2 className="font-pixel text-sm text-gold [text-shadow:2px_2px_0_#000]">
            ABOUT.TXT
          </h2>
          <p className="font-mono-px text-lg leading-snug text-ink/80">
            I&apos;m a Computer Science student at Georgia Tech, concentrating in
            Media &amp; People — I love building things that feel as good as
            they work. Most of my time goes into shipping full-stack products
            end to end, from the first customer interview to the last
            deployed commit.
          </p>
          <p className="font-mono-px text-lg leading-snug text-ink/80">
            Outside of code, I&apos;m a Helen Fellow teaching K-12 kids that AI
            can be fun and approachable, not scary.
          </p>
        </div>
      </div>
    </div>
  );
}
