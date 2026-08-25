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
      <body className={`${inter.className} bg-[#031814] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-black`}>
        
        {/* 背景氛围层：沉浸式深绿底色 + 翡翠绿与琥珀金交织的微光，绝对拒绝黑色 */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[150px]" />
        </div>

        {/* 顶部导航栏：高级感金色边框与微光点缀 (Floating Gold-Accent Navbar) */}
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl">
          <div className="backdrop-blur-2xl bg-[#05221b]/80 border border-amber-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300">
            
            {/* 工作室 Logo：带有琥珀金光芒点缀 */}
            <Link href="/" className="text-lg font-bold tracking-tight text-white flex items-center gap-2.5 group">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:scale-125 transition-transform" />
              <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200/80 bg-clip-text text-transparent">
                SmartEaseTech
              </span>
            </Link>

            {/* 导航菜单 */}
            <nav className="flex items-center space-x-6 sm:space-x-8">
              <Link href="/" className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors">
                Blog & Resources
              </Link>
              <a href="mailto:SmartEaseTechStudio@hotmail.com" className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors hidden sm:block">
                Support
              </a>
            </nav>

          </div>
        </header>

        {/* 页面主体内容 */}
        <main className="flex-grow pt-28">
          {children}
        </main>
        
        {/* 底部区域 (Footer) */}
        <footer className="py-12 border-t border-emerald-900/40 bg-[#02100d]/80 backdrop-blur-md text-center text-sm text-slate-500">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Crafted with precision. Local-first & Privacy-focused.
            </p>
            <div className="flex items-center gap-6">
              <a href="https://hazel-ray-a96.notion.site/Support-Privacy-SmartEaseTech-Studio-3c1626d5f29a80bb9e53eb137608daec" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors text-xs">
                Privacy Policy
              </a>
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-300 transition-colors text-xs">
                Terms of Service
              </a>
            </div>
          </div>
        </footer>

      </body>
    </html>
  )
}