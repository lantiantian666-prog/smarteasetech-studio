import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="font-semibold tracking-wide">
            SmartEaseTech Studio
          </div>

          <nav className="flex gap-6 text-sm text-white/60">
            <a href=" " className="hover:text-white transition-colors">App</a >
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a >
            <a href="#contact" className="hover:text-white transition-colors">Contact</a >
          </nav>

        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            SmartEaseTech Studio
          </h1>

          <p className="mt-6 text-white/60 text-lg">
            A Boutique iOS Design & Development Studio
          </p >

          <p className="mt-4 text-white/40 text-sm tracking-wide">
            Privacy-first · Science-based · Long-term design
          </p >

        </div>
      </section>

      {/* APP SECTION */}
      <section id="app" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-semibold">
            Our Featured App
          </h2>

          <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/5">

            <h3 className="text-3xl font-semibold">
              PawOptima Steward
            </h3>

            <p className="mt-3 text-white/60">
              Science-based Pet Feeding & Health System
            </p >

            <p className="mt-6 text-white/40 text-sm max-w-2xl">
              Calculates precise feeding needs and builds long-term pet health tracking.
            </p >

            {/* =========================
                IMAGES
            ========================= */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">

              {["/1.png", "/9.png", "/10.png"].map((img, index) => (
                <div key={img} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                  <Image
                    src={img}
                    width={300}
                    height={600}
                    className="w-full h-auto object-contain block"
                    alt={`PawOptima Steward Interface Screenshot ${index + 1}`}
                  />
                </div>
              ))}

            </div>

            {/* =========================
                APP STORE BUTTON
            ========================= */}
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.02] transition-transform"
              >
                 Download on the App Store
              </a >
            </div>

          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-6 border-t border-white/10 text-center">

        <h2 className="text-2xl font-semibold">
          Our Philosophy
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/60 leading-relaxed">
          At SmartEaseTech, we combine scientific research with elegant engineering. Our team is dedicated to building long-term, privacy-first solutions that empower users' daily lives.
        </p >

        <p className="mt-8 text-white/40 text-sm font-medium tracking-widest uppercase">
          Smart · Ease · Simple · Elegant · Safe · Empower
        </p >

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">

        <h2 className="text-3xl font-semibold">
          Get in Touch
        </h2>

        <p className="mt-6">
          <a 
            href="mailto:SmartEaseTechStudio@hotmail.com" 
            className="text-white/60 hover:text-white transition-colors text-lg"
          >
            SmartEaseTechStudio@hotmail.com
          </a >
        </p >

      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10">
        
        <div className="flex justify-center gap-6 text-white/40 text-sm">
          <a
            href="https://hazel-ray-a96.notion.site/Support-Privacy-389626d5f29a80e0bf7bdbee5cd89c31"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a >

          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a >
        </div>

      </footer>

    </main>
  );
}