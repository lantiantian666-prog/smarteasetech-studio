\export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-black">

      {/* GREEN BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(0,200,160,0.06),transparent_70%)]" />
      </div>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center z-10 max-w-3xl">

          <h1 className="text-5xl md:text-6xl font-semibold">
            SmartEaseTech Studio
          </h1>

          <p className="mt-6 text-white/60">
            Independent iOS App Studio
          </p >

        </div>
      </section>

      {/* APP SECTION */}
      <section className="py-28 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-semibold">
            PawOptima Steward
          </h2>

          <p className="mt-4 text-white/50 text-sm">
            Science-based Pet Feeding & Health System
          </p >

          {/* IMAGE GRID (FIXED - NO CROP) */}
          <div className="mt-10 grid md:grid-cols-3 gap-6">

            {["/1.png", "/9.png", "/10.png"].map((img) => (
              <div
                key={img}
                className="rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center p-4"
              >
                <img
                  src={img}
                  alt="app preview"
                  className="max-w-full max-h-[420px] w-auto h-auto object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            Feeding Intelligence
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            Health Tracking
          </div>

          <div className="p-6 rounded-2xl border border-white/10 bg-white/5">
            Care System
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-28 text-center border-t border-white/10">

        <h2 className="text-3xl font-semibold">
          Contact
        </h2>

        <p className="mt-4 text-white/50">
          SmartEaseTechStudio@hotmail.com
        </p >

      </section>

    </main>
  );
}