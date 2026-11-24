import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import ScreenshotGrid from './components/ScreenshotGrid';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 space-y-24">
      {/* 工作室 Hero 头部区域 */}
      <section className="text-center max-w-3xl mx-auto pt-8">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-6">
          SmartEaseTech{' '}
          <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">
            Studio
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
          Crafting elegant, local-first applications. Your data stays on your
          device — private, secure, and always under your control.
        </p>
      </section>

      {/* 产品 1：PawOptima Steward (翡翠绿主题) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-emerald-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/pawoptima-icon.png"
              alt="PawOptima Steward offline dog and cat nutrition app icon for iOS"
              width={56}
              height={56}
              className="rounded-2xl shadow-md border border-emerald-500/30"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
              Pet Care &amp; Nutrition
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            <Link
              href="/apps/pawoptima"
              className="hover:text-emerald-300 transition-colors"
            >
              PawOptima Steward
            </Link>
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The complete, science-based feeding and health system for dogs and
            cats. Calculate precise RER/DER calories, track mixed diets, scan
            nutrition labels with OCR, and monitor growth curves across 206
            breeds — 100% offline and private.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/apps/pawoptima"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300 group"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </Link>
            <a
              href="https://apps.apple.com/app/id6782809353"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200 px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              App Store
            </a>
          </div>
        </div>

        <ScreenshotGrid
          borderClass="border-emerald-500/20"
          screenshots={[
            {
              src: '/pawoptima-1.png',
              alt: 'PawOptima Steward RER and DER daily pet calorie calculator screen on iPhone',
            },
            {
              src: '/pawoptima-2.png',
              alt: 'PawOptima Steward mixed wet and dry pet food portion tracker on iOS',
            },
            {
              src: '/pawoptima-3.png',
              alt: 'PawOptima Steward breed growth curve and weight log dashboard on iPhone',
            },
          ]}
        />
      </section>

      {/* 产品 2：Pray Verses (琥珀金主题) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-amber-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/prayverses-icon.png"
              alt="Pray Verses private offline Christian prayer journal app icon for iOS"
              width={56}
              height={56}
              className="rounded-2xl shadow-md border border-amber-500/30"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20 text-xs font-medium">
              Faith &amp; Prayer Journal
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            <Link
              href="/apps/pray-verses"
              className="hover:text-amber-300 transition-colors"
            >
              Pray Verses
            </Link>
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The private, offline prayer journal that matches Scripture to
            what&apos;s actually on your heart. Organize prayer lists by person
            and category, track answered prayers over time, and experience
            complete peace of mind with local encryption.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/apps/pray-verses"
              className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-500 text-white px-7 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300 group"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </Link>
            <a
              href="https://apps.apple.com/app/id6788009023"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              App Store
            </a>
          </div>
        </div>

        <ScreenshotGrid
          borderClass="border-amber-500/20"
          screenshots={[
            {
              src: '/prayverses-1.png',
              alt: 'Pray Verses offline prayer journal matching Bible verses to daily needs on iPhone',
            },
            {
              src: '/prayverses-2.png',
              alt: 'Pray Verses organized prayer list by family, friends, and categories on iOS',
            },
            {
              src: '/prayverses-3.png',
              alt: 'Pray Verses locally encrypted answered prayer history tracker on iPhone',
            },
          ]}
        />
      </section>

      {/* 产品 3：InvoiceHive (青色主题) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-cyan-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/invoicehive-icon.png"
              alt="InvoiceHive offline PDF invoice and estimate maker app icon for iOS"
              width={56}
              height={56}
              className="rounded-2xl shadow-md border border-cyan-500/30"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-xs font-medium">
              Business Utility
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            <Link
              href="/apps/invoicehive"
              className="hover:text-cyan-300 transition-colors"
            >
              InvoiceHive
            </Link>
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            The local-first, privacy-focused invoicing and billing utility built
            for independent developers, freelancers, and small studios. Manage
            clients, generate professional invoices, and keep your financial
            records securely on-device.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/apps/invoicehive"
              className="inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-500 text-white px-7 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300 group"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </Link>
            <a
              href="https://apps.apple.com/app/id6800766422"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200 px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              App Store
            </a>
          </div>
        </div>

        <ScreenshotGrid
          borderClass="border-cyan-500/20"
          screenshots={[
            {
              src: '/invoicehive-1.png',
              alt: 'InvoiceHive offline contractor estimate and quote editor on iPhone',
            },
            {
              src: '/invoicehive-2.png',
              alt: 'InvoiceHive clean client-ready PDF invoice generator on iOS',
            },
            {
              src: '/invoicehive-3.png',
              alt: 'InvoiceHive local-first freelance payment tracking dashboard on iPhone',
            },
          ]}
        />
      </section>

      {/* 产品 4：HabitSense (靛蓝主题) */}
      <section className="p-8 sm:p-12 rounded-3xl bg-[#05221b]/40 border border-indigo-900/40 backdrop-blur-sm grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Image
              src="/habitsense-icon.png"
              alt="HabitSense private local-first habit tracker app icon for iOS"
              width={56}
              height={56}
              className="rounded-2xl shadow-md border border-indigo-500/30"
            />
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-medium">
              Habit &amp; Routine Analytics
            </div>
          </div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            <Link
              href="/apps/habitsense"
              className="hover:text-indigo-300 transition-colors"
            >
              HabitSense
            </Link>
          </h2>
          <p className="text-slate-300 font-light leading-relaxed">
            Track your habits in a tap without streak pressure. Explore Behavior
            Landscapes, measure momentum and behavioral load, plan resilient
            recovery, and uncover weekly routine patterns — 100% locally and
            privately on your device.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-3">
            <Link
              href="/apps/habitsense"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-7 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300 group"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </Link>
            <a
              href="https://apps.apple.com/us/app/habitsense-habit-tracker/id6832557919"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-200 px-6 py-3.5 rounded-full text-sm font-medium transition-colors"
            >
              App Store
            </a>
          </div>
        </div>

        <ScreenshotGrid
          borderClass="border-indigo-500/20"
          screenshots={[
            {
              src: '/habitsense-1.png',
              alt: 'HabitSense daily habit tracking Today Ring and one-tap logging on iPhone',
            },
            {
              src: '/habitsense-2.png',
              alt: 'HabitSense Behavior Landscape visual habit consistency calendar on iOS',
            },
            {
              src: '/habitsense-3.png',
              alt: 'HabitSense momentum, recovery, and weekly routine pattern analytics on iPhone',
            },
          ]}
        />
      </section>
    </div>
  );
}