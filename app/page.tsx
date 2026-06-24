import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* NAV */}
      <header className="flex items-center justify-between px-10 py-6 border-b border-gray-100">
        <div className="text-lg font-semibold tracking-tight">
          SmartEaseTech Studio
        </div>

        <nav className="flex gap-8 text-sm text-gray-600">
          <a href=" ">Overview</a >
          <a href="#">Products</a >
          <a href="#">Research</a >
          <a href="#">Contact</a >
        </nav>
      </header>

      {/* HERO */}
      <section className="relative flex flex-col items-center text-center px-6 pt-24 pb-20">

        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight max-w-4xl">
          Build Intelligent Tools for Everyday Life
        </h1>

        <p className="mt-6 text-lg text-gray-500 max-w-2xl">
          A minimalist studio focused on AI-powered applications, system design, and elegant user experience.
        </p >

        <div className="mt-10 flex gap-4">
          <button className="px-6 py-3 rounded-full bg-black text-white text-sm">
            Explore Work
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-300 text-sm">
            Contact
          </button>
        </div>

        {/* IMAGE STACK */}
        <div className="mt-20 relative w-full max-w-5xl h-[520px]">

          {/* center image */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[60%]">
            <Image
              src="/hero.png"
              alt="hero"
              width={1200}
              height={800}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          {/* left image */}
          <div className="absolute left-[8%] top-24 w-[40%]">
            <Image
              src="/science.png"
              alt="science"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl opacity-90"
            />
          </div>

          {/* right image */}
          <div className="absolute right-[8%] top-24 w-[40%]">
            <Image
              src="/pro.png"
              alt="pro"
              width={800}
              height={600}
              className="rounded-2xl shadow-xl opacity-90"
            />
          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-10 py-24 grid md:grid-cols-3 gap-10 border-t border-gray-100">

        <div>
          <h3 className="text-lg font-semibold">Local-first Design</h3>
          <p className="text-gray-500 mt-2">
            Privacy-focused architecture with on-device intelligence.
          </p >
        </div>

        <div>
          <h3 className="text-lg font-semibold">AI Native Apps</h3>
          <p className="text-gray-500 mt-2">
            Built from the ground up with AI-driven workflows.
          </p >
        </div>

        <div>
          <h3 className="text-lg font-semibold">Minimal Experience</h3>
          <p className="text-gray-500 mt-2">
            Clean interfaces inspired by Apple design language.
          </p >
        </div>

      </section>

      {/* FOOTER */}
      <footer className="px-10 py-10 text-center text-sm text-gray-400 border-t border-gray-100">
        © {new Date().getFullYear()} SmartEaseTech Studio. All rights reserved.
      </footer>

    </main>
  );
}