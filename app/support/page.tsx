export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16 text-slate-100">
      
      <section className="text-center space-y-4 pt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Technical{" "}
          <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">
            Support
          </span>
        </h1>

        <p className="text-slate-300 font-light max-w-xl mx-auto">
          We are here to help you get the most out of our local-first applications.
          Reach out or explore our ecosystem below.
        </p>
      </section>

      <section className="p-8 sm:p-10 rounded-3xl bg-[#05221b]/60 border border-emerald-900/40 backdrop-blur-sm space-y-6 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
          Contact & Feedback
        </div>

        <h2 className="text-2xl font-bold text-white">
          Get in Touch
        </h2>

        <p className="text-slate-300 font-light leading-relaxed">
          If you encounter any issues, bugs, or have feature suggestions
          regarding our apps, please feel free to drop us an email.
          We typically respond within 24–48 hours.
        </p>

        <div className="inline-block p-4 rounded-2xl bg-slate-900/80 border border-emerald-500/30 text-emerald-300 font-mono text-lg select-all shadow-inner">
          SmartEaseTechStudio@hotmail.com
        </div>
      </section>

      <section className="p-8 sm:p-10 rounded-3xl bg-[#05221b]/40 border border-amber-900/40 backdrop-blur-sm space-y-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-medium">
          Studio Philosophy
        </div>

        <p className="text-slate-200 font-light leading-relaxed text-lg italic">
          &ldquo;Crafting minimalist, elegant, and empowering experiences
          through intelligent technology — anchored in a local-first and
          privacy-centric vision.&rdquo;
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-amber-300 mb-1">
              Smart · Ease
            </h3>
            <p className="text-xs text-slate-400">
              Intelligent & Effortless
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-amber-300 mb-1">
              Simple · Elegant
            </h3>
            <p className="text-xs text-slate-400">
              Minimalist & Refined
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-amber-300 mb-1">
              Safe · Empower
            </h3>
            <p className="text-xs text-slate-400">
              Local-First & Privacy-Centric
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight text-center">
          Our App Ecosystem
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <a 
            href="https://apps.apple.com/app/id6782809353" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block p-6 rounded-2xl bg-slate-950/60 border border-emerald-500/20 space-y-3 hover:bg-slate-900/80 hover:border-emerald-500/50 transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
              PawOptima Steward
            </h3>
            <p className="text-xs text-slate-400">
              Science-based pet feeding, nutrition, and health system for dogs and cats.
            </p>
          </a>

          <a 
            href="https://apps.apple.com/app/id6788009023" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block p-6 rounded-2xl bg-slate-950/60 border border-amber-500/20 space-y-3 hover:bg-slate-900/80 hover:border-amber-500/50 transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-amber-400 group-hover:text-amber-300 transition-colors">
              Pray Verses
            </h3>
            <p className="text-xs text-slate-400">
              Private, offline prayer journal matching Scripture to your heart.
            </p>
          </a>

          <a 
            href="https://apps.apple.com/app/id6800766422" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group block p-6 rounded-2xl bg-slate-950/60 border border-cyan-500/20 space-y-3 hover:bg-slate-900/80 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer"
          >
            <h3 className="font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center justify-between">
              InvoiceHive
              <svg viewBox="0 0 384 512" width="12" height="12" fill="currentColor" className="opacity-0 group-hover:opacity-100 transition-opacity">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 51 17.9 76.2 17.9 48.6-.1 90.4-82.5 102.6-119.3-39-19.9-50-46.7-50-81.2zM211 118.8c34.5-38.3 22-81.3 12-96.1-33 1.1-66.5 32.1-66.5 66.2 0 31.8 23.6 57 44.5 57 5.4 0 10.1-.6 10-27.1z"/>
              </svg>
            </h3>
            <p className="text-xs text-slate-400">
              Local-first invoicing and billing utility for independent creators.
            </p>
          </a>
        </div>
      </section>

    </div>
  );
}