export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-black">

      {/* 🌿 PREMIUM GREEN BRAND BACKGROUND */}
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
            <a href=" " className="hover:text-white">Philosophy</a >
            <a href="#app" className="hover:text-white">PawOptima</a >
            <a href="#features" className="hover:text-white">Features</a >
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
            We build focused, science-based, and user-friendly iOS applications
            that simplify everyday life through intelligent design.
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
            SmartEaseTech Studio is built on a simple belief: technology should feel natural, calm, and intelligent.
          </p >

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Smart · Ease</h3>
              <p className="text-white/50 text-sm mt-2">
                Make complex systems effortless through intelligent design.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Simple · Elegant</h3>
              <p className="text-white/50 text-sm mt-2">
                Build minimal, timeless, and focused user experiences.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Safe · Empower</h3>
              <p className="text-white/50 text-sm mt-2">
                Create trustworthy tools that protect and empower users.
              </p >
            </div>

          </div>

        </div>
      </section>

      {/* APP */}
      <section id="app" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Flagship App
          </h2>

          <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/5">

            <h3 className="text-3xl font-semibold">
              PawOptima Steward
            </h3>

            <p className="mt-3 text-white/60">
              Science-based Pet Feeding & Health System
            </p >

            <p className="mt-6 text-white/40 text-sm leading-relaxed">
              A precision-focused iOS application that calculates daily feeding needs,
              tracks long-term health data, and builds a complete care history for pets.
            </p >

            {/* 3 IMAGE GRID (FIXED LAYOUT) */}
            <div className="mt-10 grid md:grid-cols-3 gap-4">

              {["/1.png", "/9.png", "/10.png"].map((img) => (
                <div
                  key={img}
                  className="aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-black/30"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="app preview"
                  />
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Core Features
          </h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Precision Feeding</h3>
              <p className="text-white/50 text-sm mt-2">
                Scientific calculation based on weight, age, and activity level.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Health Lifecycle</h3>
              <p className="text-white/50 text-sm mt-2">
                Unified tracking of meals, weight, and health history.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3>Family Care System</h3>
              <p className="text-white/50 text-sm mt-2">
                Shared pet care with multi-device synchronization.
              </p >
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
          PawOptima Steward — Smart pet care for modern families
        </p >

        {/* APP STORE CTA */}
        <a
          href="#"
          className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-full font-medium"
        >
          Download on App Store
        </a >

      </section>

      {/* FOOTER (NO COPYRIGHT TEXT AS REQUESTED) */}
      <footer className="py-10 text-center text-white/40 text-sm border-t border-white/10">

        SmartEaseTech Studio

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