import Image from 'next/image';
import Link from 'next/link';

export default function SupportPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16 text-slate-100">
      
      {/* 头部标题区域 */}
      <section className="text-center space-y-4 pt-8">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
          Technical <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">Support</span>
        </h1>
        <p className="text-slate-300 font-light max-w-xl mx-auto">
          We are here to help you get the most out of our local-first applications. Reach out or explore our ecosystem below.
        </p>
      </section>

      {/* 联系与反馈卡片 */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#05221b]/60 border border-emerald-900/40 backdrop-blur-sm space-y-6 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
          Contact & Feedback
        </div>
        <h2 className="text-2xl font-bold text-white">Get in Touch</h2>
        <p className="text-slate-300 font-light leading-relaxed">
          If you encounter any issues, bugs, or have feature suggestions regarding our apps, please feel free to drop us an email. We typically respond within 24–48 hours.
        </p>
        <div>
          <a 
            href="mailto:SmartEaseTechStudio@hotmail.com" 
            className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300"
          >
            <span>SmartEaseTechStudio@hotmail.com</span>
            <span>&rarr;</span>
          </a>
        </div>
      </section>

      {/* 工作室核心理念 (Studio Philosophy) */}
      <section className="p-8 sm:p-10 rounded-3xl bg-[#05221b]/40 border border-amber-900/40 backdrop-blur-sm space-y-6 shadow-xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-medium">
          Studio Philosophy
        </div>
        <p className="text-slate-200 font-light leading-relaxed text-lg italic">
          &ldquo;Crafting minimalist, elegant, and empowering experiences through intelligent technology — anchored in a local-first and privacy-centric vision.&rdquo;
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-amber-300 mb-1">Smart · Ease</h3>
            <p className="text-xs text-slate-400">Intelligent & Effortless</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-amber-300 mb-1">Simple · Elegant</h3>
            <p className="text-xs text-slate-400">Minimalist & Refined</p>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <h3 className="font-bold text-amber-300 mb-1">Safe · Empower</h3>
            <p className="text-xs text-slate-400">Local-First & Privacy-Centric</p>
          </div>
        </div>
      </section>

      {/* 产品矩阵快速索引 */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-white tracking-tight text-center">
          Our App Ecosystem
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-emerald-500/20 space-y-3">
            <h3 className="font-bold text-emerald-400">PawOptima Steward</h3>
            <p className="text-xs text-slate-400">Science-based pet feeding, nutrition, and health system for dogs and cats.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-amber-500/20 space-y-3">
            <h3 className="font-bold text-amber-400">Pray Verses</h3>
            <p className="text-xs text-slate-400">Private, offline prayer journal matching Scripture to your heart.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-950/60 border border-cyan-500/20 space-y-3">
            <h3 className="font-bold text-cyan-400">InvoiceHive <span className="text-[10px] uppercase px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 ml-1">Soon</span></h3>
            <p className="text-xs text-slate-400">Local-first invoicing and billing utility for independent creators.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
