import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SmartEaseTech Studio',
  description: 'Crafting elegant, local-first applications.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0B0F19] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-emerald-500 selection:text-white`}>
        
        {/* 背景微光氛围层：打造立体空间感，绝对告别单调大黑屏 */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>

        {/* 高级感悬浮毛玻璃导航栏 (Floating Glass Navbar) */}
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
          <div className="backdrop-blur-2xl bg-slate-900/80 border border-slate-700/50 shadow-2xl rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300">
            
            {/* 工作室 Logo：带有微光渐变 */}
            <Link href="/" className="text-lg font-bold tracking-tight text-white flex items-center gap-2 group">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)] group-hover:scale-125 transition-transform" />
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                SmartEaseTech
              </span>
            </Link>

            {/* 导航菜单 */}
            <nav className="flex items-center space-x-6 sm:space-x-8">
              <Link href="/" className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all">
                Blog & Resources
              </Link>
              <a href="mailto:SmartEaseTechStudio@hotmail.com" className="text-sm font-medium text-slate-300 hover:text-white hover:scale-105 transition-all hidden sm:block">
                Support
              </a>
            </nav>

          </div>
        </header>

        {/* 页面主体内容：顶部留出空间，完美适配悬浮岛导航 */}
        <main className="flex-grow pt-28">
          {children}
        </main>
        
        {/* 高级感底部区域 (Footer) */}
        <footer className="py-12 border-t border-slate-800/80 bg-slate-950/60 backdrop-blur-md text-center text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-600">
              Crafted with precision. Local-first & Privacy-focused.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://hazel-ray-a96.notion.site/Support-Privacy-SmartEaseTech-Studio-3c1626d5f29a80bb9e53eb137608daec" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors text-xs">
                Privacy Policy
              </a>
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors text-xs">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}