import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'SmartEaseTech Studio',
  description: 'Crafting elegant, local-first applications.',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} relative min-h-screen overflow-x-hidden bg-[#0B0F19] text-slate-100 antialiased selection:bg-emerald-500 selection:text-white`}
      >
        {/* =========================================================
            Ambient Background
            ========================================================= */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        >
          {/* Deep atmospheric glow */}
          <div className="absolute left-[10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-emerald-500/[0.07] blur-[120px]" />

          <div className="absolute right-[5%] top-[20%] h-[30rem] w-[30rem] rounded-full bg-slate-500/[0.06] blur-[130px]" />

          <div className="absolute bottom-[-10%] left-[35%] h-[26rem] w-[26rem] rounded-full bg-emerald-900/[0.08] blur-[120px]" />

          {/* Very subtle center illumination */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.035),transparent_45%)]" />
        </div>

        {/* =========================================================
            Floating Glass Navigation
            ========================================================= */}
        <header className="relative z-50">
          <div className="fixed left-1/2 top-4 w-[92%] max-w-5xl -translate-x-1/2">
            <div className="flex items-center justify-between rounded-2xl border border-white/[0.08] bg-slate-900/70 px-5 py-3.5 shadow-2xl shadow-black/30 backdrop-blur-2xl sm:px-6">
              
              {/* Brand */}
              <Link
                href="/"
                className="group flex items-center gap-2.5"
              >
                <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                  <span className="absolute h-2.5 w-2.5 rounded-full bg-emerald-400/20 blur-[4px]" />
                  <span className="relative h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.55)] transition-transform duration-300 group-hover:scale-125" />
                </span>

                <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
                  SmartEaseTech
                </span>
              </Link>

              {/* Navigation */}
              <nav
                aria-label="Main navigation"
                className="flex items-center gap-5 sm:gap-8"
              >
                <Link
                  href="/"
                  className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  Home
                </Link>

                <Link
                  href="/blog"
                  className="text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white"
                >
                  <span className="hidden sm:inline">Blog & Resources</span>
                  <span className="sm:hidden">Blog</span>
                </Link>

                <a
                  href="mailto:SmartEaseTechStudio@hotmail.com"
                  className="hidden text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white sm:block"
                >
                  Support
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* =========================================================
            Main Content
            ========================================================= */}
        <main className="relative z-10 flex min-h-screen flex-col pt-28">
          <div className="flex-1">
            {children}
          </div>
        </main>

        {/* =========================================================
            Footer
            ========================================================= */}
        <footer className="relative z-10 border-t border-white/[0.06] bg-slate-950/40 py-10 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-4 sm:flex-row">
            
            <p className="text-center text-xs text-slate-500 sm:text-left">
              Crafted with precision. Local-first & Privacy-focused.
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://hazel-ray-a96.notion.site/Support-Privacy-SmartEaseTech-Studio-3c1626d5f29a80bb9e53eb137608daec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                Privacy Policy
              </a>

              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-slate-500 transition-colors hover:text-slate-300"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}