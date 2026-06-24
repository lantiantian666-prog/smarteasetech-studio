import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0C10] text-white scroll-smooth">

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/40 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="font-semibold tracking-tight">
            SmartEaseTech Studio
          </div>

          <nav className="flex gap-6 text-sm text-white/60">
            <a href=" " className="hover:text-white">Philosophy</a >
            <a href="#product" className="hover:text-white">Product</a >
            <a href="#features" className="hover:text-white">Features</a >
            <a href="#manifesto" className="hover:text-white">Manifesto</a >
            <a href="#contact" className="hover:text-white">Contact</a >
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6 pt-28">
        <div className="max-w-3xl">

          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            SmartEaseTech Studio
          </h1>

          <p className="mt-6 text-lg text-white/70">
            Independent AI · App · Product Studio
          </p >

          <p className="mt-6 text-white/40 leading-relaxed">
            We design and build focused digital products with clarity,
            precision, and long-term usability.
          </p >

        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold">Design Philosophy</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-medium">Smart · Ease</h3>
              <p className="mt-2 text-white/50 text-sm">
                Make complex systems simple through intelligent design.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-medium">Simple · Elegant</h3>
              <p className="mt-2 text-white/50 text-sm">
                Build timeless products with minimal and thoughtful design.
              </p >
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
              <h3 className="font-medium">Safe · Empower</h3>
              <p className="mt-2 text-white/50 text-sm">
                Create trustworthy tools that protect and empower users.
              </p >
            </div>

          </div>

        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold">Flagship Product</h2>

          <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">

            <div>
              <h3 className="text-2xl font-medium">PawOptima Steward</h3>

              <p className="mt-4 text-white/60">
                A science-based feeding and health management system for modern pet families.
              </p >

              <ul className="mt-6 space-y-2 text-white/50 text-sm">
                <li>• Precision feeding calculator (weight, age, activity)</li>
                <li>• Health tracking timeline (meals, water, weight)</li>
                <li>• Nutrition analysis & OCR scanning</li>
                <li>• Family sharing & multi-device sync</li>
                <li>• Offline-first, privacy-focused design</li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src="/hero.png"
                alt="PawOptima"
                width={1000}
                height={800}
                className="w-full h-auto"
              />
            </div>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-28 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-3xl font-semibold">Core Capabilities</h2>

          <div className="mt-10 grid md:grid-cols-3 gap-6">

            {[
              ["Precision Intelligence", "Accurate feeding calculation based on scientific models."],
              ["Health System", "Unified timeline for all pet health activities."],
              ["Offline Privacy", "All data stored locally, fully offline-capable."]
            ].map(([t, d]) => (
              <div key={t} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <h3 className="font-medium">{t}</h3>
                <p className="mt-2 text-white/50 text-sm">{d}</p >
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* MANIFESTO */}
      <section id="manifesto" className="py-28 px-6 border-t border-white/5 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-3xl font-semibold">Manifesto</h2>

          <p className="mt-8 text-white/60 leading-relaxed">
            We believe technology should be intelligent, yet simple.<br />
            We believe design should be elegant and timeless.<br />
            We believe products should protect, empower, and serve people.<br /><br />

            This is the philosophy behind SmartEaseTech Studio.
          </p >

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6 border-t border-white/5 text-center">
        <h2 className="text-3xl font-semibold">Let’s Build Together</h2>

        <p className="mt-4 text-white/50">
          Open to product ideas, collaborations, and AI systems.
        </p >

        <a
          href="mailto:SmartEaseTechStudio@hotmail.com"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-white text-black font-medium hover:opacity-80"
        >
          Contact
        </a >
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-white/30 text-sm border-t border-white/5">
        © {new Date().getFullYear()} SmartEaseTech Studio. All rights reserved.
      </footer>

    </main>
  );
}