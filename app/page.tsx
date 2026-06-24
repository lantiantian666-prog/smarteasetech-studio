export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-black">

      {/* GREEN BACKGROUND (restored) */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,200,150,0.06),transparent_70%)]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between">
          <div className="font-medium tracking-tight">
            SmartEaseTech
          </div>

          <nav className="flex gap-6 text-sm text-white/60">
            <a href=" " className="hover:text-white">App</a >
            <a href="#philosophy" className="hover:text-white">Philosophy</a >
            <a href="#contact" className="hover:text-white">Contact</a >
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-3xl z-10">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            Independent iOS Developer
          </h1>

          <p className="mt-6 text-white/60 text-lg">
            I design and build focused iOS applications.
          </p >

          <p className="mt-4 text-white/40 text-sm">
            Apple ecosystem · Swift · Product thinking
          </p >

        </div>
      </section>

      {/* FEATURED APP */}
      <section id="app" className="py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Featured App
          </h2>

          <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

            <h3 className="text-3xl font-semibold">
              PawOptima Steward 🐾
            </h3>

            <p className="mt-3 text-white/60">
              Pet Feeding & Health Lifecycle System
            </p >

            <p className="mt-6 text-white/40 text-sm leading-relaxed">
              A science-based iOS application that calculates precise feeding amounts,
              tracks health data, and builds long-term care history for pets.
            </p >

            {/* 3 IMAGE LAYOUT FIX */}
            <div className="mt-10 grid md:grid-cols-3 gap-4">

              {["/1.png", "/9.png", "/10.png"].map((img) => (
                <div
                  key={img}
                  className="rounded-2xl overflow-hidden border border-white/10 bg-black/30 aspect-[3/4] flex items-center justify-center"
                >
                  <img
                    src={img}
                    className="w-full h-full object-cover"
                    alt="app screenshot"
                  />
                </div>
              ))}

            </div>

            {/* FEATURES */}
            <div className="mt-10 grid md:grid-cols-3 gap-4">

              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p>Feeding Intelligence</p >
                <p className="text-white/50 text-sm mt-1">
                  Daily nutrition calculation
                </p >
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p>Health Tracking</p >
                <p className="text-white/50 text-sm mt-1">
                  Weight, meals, behavior logs
                </p >
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <p>Care System</p >
                <p className="text-white/50 text-sm mt-1">
                  Smart reminders & lifecycle care
                </p >
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl font-semibold mb-8">
            Philosophy
          </h2>

          <p className="text-white/40 text-sm leading-relaxed">
            Smart + Ease · Simple + Elegant · Safe + Empower — building intelligent, minimal, and trustworthy iOS systems.
          </p >

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 border-t border-white/10 text-center">

        <h2 className="text-3xl font-semibold">
          Contact
        </h2>

        {/* EMAIL FIXED (separate line) */}
        <p className="mt-4 text-white/60">
          SmartEaseTechStudio@hotmail.com
        </p >

        <a
          href="mailto:SmartEaseTechStudio@hotmail.com"
          className="inline-block mt-8 px-6 py-3 bg-white text-black rounded-full"
        >
          Send Email
        </a >

      </section>

    </main>
  );
}