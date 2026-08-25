import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      
      {/* 工作室 Hero 头部区域 */}
      <section className="text-center max-w-3xl mx-auto pt-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          SmartEaseTech <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">Studio</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
          Crafting elegant, local-first applications. Your data stays on your device — private, secure, and always under your control.
        </p>
      </section>

      {/* 产品展示区 1：PawOptima Steward (宠物科学喂养) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-emerald-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
            Pet Care & Nutrition
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            PawOptima Steward
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The complete, science-based feeding and health system for dogs and cats. Calculate precise RER/DER calories, track mixed diets, scan nutrition labels with OCR, and monitor growth curves across 206 breeds — 100% offline and private.
          </p>
          <div className="pt-2">
            <a 
              href="https://apps.apple.com/app/id6782809353" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300"
            >
              Download on the App Store
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-emerald-900/40 to-slate-900/80 border border-emerald-500/20 flex items-center justify-center text-emerald-400/60 text-sm font-mono shadow-inner">
            PawOptima Preview Showcase
          </div>
        </div>
      </section>

      {/* 产品展示区 2：Pray Verses (隐私祷告日志) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-amber-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-medium">
            Faith & Prayer Journal
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Pray Verses
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The private, offline prayer journal that matches Scripture to what&apos;s actually on your heart. Organize prayer lists by person and category, track answered prayers over time, and experience complete peace of mind with local encryption.
          </p>
          <div className="pt-2">
            <a 
              href="https://apps.apple.com/app/6788009023" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300"
            >
              Download on the App Store
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-amber-900/40 to-slate-900/80 border border-amber-500/20 flex items-center justify-center text-amber-400/60 text-sm font-mono shadow-inner">
            Pray Verses Preview Showcase
          </div>
        </div>
      </section>

    </div>
  );
}