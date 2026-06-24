export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-black">

      {/* 🌿 GREEN BRAND BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,200,160,0.08),transparent_70%)]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">

          <div className="font-medium tracking-tight">
            SmartEaseTech Studio
          </div>

          <nav className="flex gap-6 text-sm text-white/60">
            <a href=" " className="hover:text-white">App</a >
            <a href="#philosophy" className="hover:text-white">Philosophy</a >
            <a href="#download" className="hover:text-white">Download</a >
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-3xl z-10">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            SmartEaseTech Studio
          </h1>

          <p className="mt-6 text-white/60 text-lg">
            Independent iOS App Studio
          </p >

          <p className="mt-4 text-white/40 text-sm leading-relaxed">
            We design focused, science-based iOS applications that simplify
            everyday life through intelligent, human-centered design.
          </p >

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Brand Philosophy
          </h2>

          <p className="mt-6 text-white/50 text-sm leading-relaxed">
            Built on clarity, intelligence, and trust — we design tools that feel simple, yet are powered by deep systems thinking.
          </p >

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Smart · Ease</h3>
              <p className="text-white/50 text-sm mt-2">
                Turn complexity into effortless experiences.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Simple · Elegant</h3>
              <p className="text-white/50 text-sm mt-2">
                Minimal design with long-term clarity.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Safe · Empower</h3>
              <p className="text-white/50 text-sm mt-2">
                Trust-first systems that protect and empower users.
              </p >
            </div>

          </div>

        </div>
      </section>

      {/* APP */}
      <section id="app" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Featured App
          </h2>

          <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

            <h3 className="text-3xl font-semibold">
              PawOptima Steward
            </h3>

            <p className="mt-3 text-white/60">
              Science-based Pet Feeding & Health System
            </p >

            <p className="mt-6 text-white/40 text-sm leading-relaxed">
              A precision iOS application that calculates daily feeding needs,
              tracks long-term health data, and builds a complete care lifecycle for pets.
            </p >

            {/* 🟢 APPLE-LEVEL IMAGE GRID */}
            <div className="mt-12 grid md:grid-cols-3 gap-8 items-stretch">

              {["/1.png", "/9.png", "/10.png"].map((img) => (
                <div
                  key={img}
                  className="
                    rounded-3xl
                    border border-white/10
                    bg-white/5
                    p-4
                    backdrop-blur-xl
                    shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                    hover:scale-[1.02]
                    transition-transform duration-300
                  "
                >
                  <div className="flex items-center justify-center">
                    <img
                      src={img}
                      alt="app preview"
                      className="w-full h-auto object-contain rounded-2xl"
                    />
                  </div>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" className="py-28 px-6 border-t border-white/10 text-center">

        <h2 className="text-3xl font-semibold">
          Download App
        </h2>

        <p className="mt-4 text-white/50">
          Available on the App Store
        </p >

        <p className="mt-6 text-white/40 text-sm">
          PawOptima Steward — Smart, science-based pet care system
        </p >

        <a
          href="#"
          className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-full font-medium"
        >
          Download on App Store
        </a >

      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/40 text-sm border-t border-white/10">

        <div>SmartEaseTech Studio</div>

        <div className="mt-2 text-white/30">
          Smart · Ease · Simple · Elegant · Safe · Empower
        </div>

        <div className="mt-4 text-white/40">
          SmartEaseTechStudio@hotmail.com
        </div>

      </footer>

    </main>
  );
}