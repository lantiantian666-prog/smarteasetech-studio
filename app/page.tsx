'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  // 🚀 新增：用于追踪当前被点击放大的图片路径
  const [enlargedImg, setEnlargedImg] = useState<string | null>(null);

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
          <div className="flex items-center gap-3">
            <Image 
              src="/pawoptima-icon.png" 
              alt="PawOptima Steward Icon" 
              width={56} 
              height={56} 
              className="rounded-2xl shadow-md border border-emerald-500/30"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
              Pet Care & Nutrition
            </div>
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
              className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300 group"
            >
              <span>Download on the App Store</span>
              <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>
        
        {/* PawOptima 3张真实截图展示 (增加点击放大交互) */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            onClick={() => setEnlargedImg('/pawoptima-1.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-emerald-500/20 bg-slate-950 shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            <Image src="/pawoptima-1.png" alt="PawOptima Screenshot 1" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
          <div 
            onClick={() => setEnlargedImg('/pawoptima-2.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-emerald-500/20 bg-slate-950 shadow-xl transform translate-y-4 hover:translate-y-3 transition-transform"
          >
            <Image src="/pawoptima-2.png" alt="PawOptima Screenshot 2" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
          <div 
            onClick={() => setEnlargedImg('/pawoptima-3.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-emerald-500/20 bg-slate-950 shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            <Image src="/pawoptima-3.png" alt="PawOptima Screenshot 3" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* 产品 2：Pray Verses (已上架 - 琥珀金主题) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-amber-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/prayverses-icon.png" 
              alt="Pray Verses Icon" 
              width={56} 
              height={56} 
              className="rounded-2xl shadow-md border border-amber-500/30"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-medium">
              Faith & Prayer Journal
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Pray Verses
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The private, offline prayer journal that matches Scripture to what&apos;s actually on your heart. Organize prayer lists by person and category, track answered prayers over time, and experience complete peace of mind with local encryption.
          </p>
          <div className="pt-2">
            <a 
              href="https://apps.apple.com/app/id6788009023" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-500 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300 group"
            >
              <span>Download on the App Store</span>
              <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
            </a>
          </div>
        </div>

        {/* Pray Verses 3张真实截图展示 (增加点击放大交互) */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            onClick={() => setEnlargedImg('/prayverses-1.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-950 shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            <Image src="/prayverses-1.png" alt="Pray Verses Screenshot 1" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
          <div 
            onClick={() => setEnlargedImg('/prayverses-2.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-950 shadow-xl transform translate-y-4 hover:translate-y-3 transition-transform"
          >
            <Image src="/prayverses-2.png" alt="Pray Verses Screenshot 2" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
          <div 
            onClick={() => setEnlargedImg('/prayverses-3.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-amber-500/20 bg-slate-950 shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            <Image src="/prayverses-3.png" alt="Pray Verses Screenshot 3" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* 产品 3：InvoiceHive (即将上架 / Coming Soon - 青色主题) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-cyan-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image 
              src="/invoicehive-icon.png" 
              alt="InvoiceHive Icon" 
              width={56} 
              height={56} 
              className="rounded-2xl shadow-md border border-cyan-500/30"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium">
              Business Utility • Coming Soon
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight flex items-center gap-3">
            InvoiceHive
            <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-medium tracking-wide">
              Coming Soon
            </span>
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The local-first, privacy-focused invoicing and billing utility built for independent developers, freelancers, and small studios. Manage clients, generate professional invoices, and keep your financial records securely on-device.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-2 bg-slate-800/80 text-cyan-300/80 px-8 py-3.5 rounded-full font-medium border border-cyan-500/20 cursor-not-allowed select-none shadow-inner">
              Coming Soon to App Store
            </span>
          </div>
        </div>

        {/* InvoiceHive 3张真实截图展示 (增加点击放大交互) */}
        <div className="grid grid-cols-3 gap-3">
          <div 
            onClick={() => setEnlargedImg('/invoicehive-1.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950 shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            <Image src="/invoicehive-1.png" alt="InvoiceHive Screenshot 1" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
          <div 
            onClick={() => setEnlargedImg('/invoicehive-2.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950 shadow-xl transform translate-y-4 hover:translate-y-3 transition-transform"
          >
            <Image src="/invoicehive-2.png" alt="InvoiceHive Screenshot 2" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
          <div 
            onClick={() => setEnlargedImg('/invoicehive-3.png')}
            className="cursor-zoom-in rounded-2xl overflow-hidden border border-cyan-500/20 bg-slate-950 shadow-xl transform hover:-translate-y-1 transition-transform"
          >
            <Image src="/invoicehive-3.png" alt="InvoiceHive Screenshot 3" width={300} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </section>

      {/* 🚀 新增：全屏图片放大遮罩层 (Lightbox) */}
      {enlargedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#031814]/90 backdrop-blur-md p-4 sm:p-8 cursor-zoom-out transition-opacity"
          onClick={() => setEnlargedImg(null)}
        >
          {/* 使用标准 img 标签以实现自适应且不裁剪的缩放 */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={enlargedImg} 
            alt="Enlarged App Screenshot" 
            className="max-h-[95vh] max-w-[95vw] object-contain rounded-2xl shadow-[0_0_50px_rgba(251,191,36,0.15)] ring-1 ring-amber-500/20"
          />
        </div>
      )}
      
    </div>
  );
}