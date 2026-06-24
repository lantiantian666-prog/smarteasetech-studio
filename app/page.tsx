export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-black">

      {/* 🌿 GREEN BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,200,160,0.08),transparent_70%)]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* ✔ 工作室名称（你要的） */}
          <div className="font-semibold tracking-tight text-white">
            SmartEaseTech Studio
          </div>

          <nav className="flex gap-6 text-sm text-white/60">
            <a href=" " className="hover:text-white">App</a >
            <a href="#philosophy" className="hover:text-white">Philosophy</a >
            <a href="#contact" className="hover:text-white">Contact</a >
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 z-10">
        <div className="text-center max-w-3xl">

          {/* ✔ 修正：这里必须是工作室名 */}
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            SmartEaseTech Studio
          </h1>

          <p className="mt-6 text-white/60 text-lg">
            Independent iOS App Developer
          </p >

          <p className="mt-4 text-white/40 text-sm leading-relaxed">
            Science-based, privacy-first applications designed for clarity, precision, and long-term usability.
          </p >

          {/* ✔ App Store按钮（正确位置） */}
          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="
                px-7 py-3
                rounded-full
                bg-white text-black
                font-medium
                shadow-lg
                hover:scale-[1.02]
                transition
              "
            >
               Download on the App Store
            </a >
          </div>

        </div>
      </section>

      {/* APP */}
      <section id="app" className="py-28 px-6 border-t border-white/10 relative z-10">
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
              Calculates precise feeding needs and builds long-term health tracking for pets.
            </p >

            {/* SCREENSHOTS */}
            <div className="mt-12 grid md:grid-cols-3 gap-8">

              {["/1.png", "/9.png", "/10.png"].map((img) => (
                <div
                  key={img}
                  className="rounded-3xl border border-white/10 bg-white/5 p-4"
                >
                  <img
                    src={img}
                    className="w-full h-auto object-contain rounded-2xl"
                    alt="app"
                  />
                </div>
              ))}

            </div>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-28 px-6 border-t border-white/10 relative z-10">
        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-semibold">
            Philosophy
          </h2>

          <p className="mt-6 text-white/50 text-sm">
            Smart · Ease · Simple · Elegant · Safe · Empower
          </p >

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 border-t border-white/10 text-center relative z-10">

        <h2 className="text-3xl font-semibold">
          Contact
        </h2>

        <p className="mt-4 text-white/50">
          SmartEaseTechStudio@hotmail.com
        </p >

      </section>

      {/* FOOTER */}
      <footer className="relative z-50 py-10 text-center text-white/40 text-sm border-t border-white/10">

        <div className="font-medium">
          SmartEaseTech Studio
        </div>

        <div className="mt-6 flex justify-center gap-6 text-white/40 text-sm">
          <a
            href="https://hazel-ray-a96.notion.site/Support-Privacy-389626d5f29a80e0bf7bdbee5cd89c31"
            target="_blank"
            className="hover:text-white"
          >
            Privacy Policy
          </a >

          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            className="hover:text-white"
          >
            Terms of Use
          </a >
        </div>

      </footer>

    </main>
  );
}