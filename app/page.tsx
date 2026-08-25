import Link from 'next/link';
import Image from 'next/image';

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

      {/* 产品 1：PawOptima Steward (已上架 - 翡翠绿主题) */}
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
        {/* 多设备预览图展示区 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-950 border border-emerald-500/20 p-4 flex flex-col justify-between shadow-xl">
            <span className="text-xs font-mono text-emerald-400/80">Smart Feeding</span>
            <div className="w-full h-32 rounded-xl bg-emerald-900/20 border border-emerald-500/10 flex items-center justify-center text-xs text-emerald-300/60">
              App UI Preview 1
            </div>
          </div>
          <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-emerald-950/80 to-slate-950 border border-emerald-500/20 p-4 flex flex-col justify-between shadow-xl mt-6">
            <span className="text-xs font-mono text-emerald-400/80">Health Records</span>
            <div className="w-full h-32 rounded-xl bg-emerald-900/20 border border-emerald-500/10 flex items-center justify-center text-xs text-emerald-300/60">
              App UI Preview 2
            </div>
          </div>
        </div>
      </section>

      {/* 产品 2：Pray Verses (已上架 - 琥珀金主题) */}
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
        {/* 多设备预览图展示区 */}
        <div className="grid grid-cols-2 gap-4">
          <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-amber-950/80 to-slate-950 border border-amber-500/20 p-4 flex flex-col justify-between shadow-xl">
            <span className="text-xs font-mono text-amber-400/80">Prayer Lists</span>
            <div className="w-full h-32 rounded-xl bg-amber-900/20 border border-amber-500/10 flex items-center justify-center text-xs text-amber-300/60">
              App UI Preview 1
            </div>
          </div>
          <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-br from-amber-950/80 to-slate-950 border border-amber-500/20 p-4 flex flex-col justify-between shadow-xl mt-6">
            <span className="text-xs font-mono text-amber-400/80">Answered Archive</span>
            <div className="w-full h-32 rounded-xl bg-amber-900/20 border border-amber-500/10 flex items-center justify-center text-xs text-amber-300/60">
              App UI Preview 2
            </div>
          </div>
        </div>
      </section>

      {/* 产品 3：InvoiceHive (即将上架 / Coming Soon - 科技蓝/青色主题) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-cyan-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium">
            Business Utility & Invoicing • Coming Soon
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            InvoiceHive
            <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-normal">
              Coming Soon
            </span>
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The local-first, privacy-focused invoicing and billing utility built for independent developers, freelancers, and small studios. Manage clients, generate professional invoices, and keep your financial records securely on-device.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 bg-slate-800 text-slate-400 px-8 py-3.5 rounded-full font-medium border border-slate-700/60 cursor-not-allowed select-none">
              即将上架 (Coming Soon)
            </span>
          </div>
        </div>
        {/* 即将上架预览占位区 */}
        <div className="h-64 sm:h-80 rounded-2xl bg-gradient-to-br from-cyan-950/40 to-slate-950/80 border border-cyan-500/20 p-6 flex flex-col justify-between shadow-inner">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono text-cyan-400/80">Invoice & Billing Workflow</span>
            <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-mono">In Development</span>
          </div>
          <div className="w-full h-36 rounded-xl bg-cyan-950/40 border border-cyan-500/10 flex items-center justify-center text-cyan-400/50 text-sm font-mono">
            InvoiceHive Preview Showcase
          </div>
          <p className="text-xs text-slate-400 italic text-center">
            Finalizing local database audit & interface polish. Stay tuned!
          </p>
        </div>
      </section>

    </div>
  );
}