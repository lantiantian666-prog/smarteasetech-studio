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
    <html lang="en">
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen flex flex-col`}>
        
        {/* 全局悬浮导航栏 (Navbar) */}
        <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-2xl">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              
              {/* 左侧 Logo */}
              <div className="shrink-0 flex items-center">
                <Link href="/" className="text-xl font-extrabold tracking-tight text-white hover:text-emerald-400 transition-colors">
                  SmartEaseTech
                </Link>
              </div>
              
              {/* 右侧菜单项 */}
              <div className="flex items-center space-x-6 md:space-x-8">
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                  Home
                </Link>
                {/* 注意：这里的 /blog 路由咱们下一步才建，现在点它会 404，属于正常现象 */}
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm font-medium">
                  Blog & Resources
                </Link>
                <a href="mailto:SmartEaseTechStudio@hotmail.com" className="text-white/70 hover:text-white transition-colors text-sm font-medium hidden sm:block">
                  Support
                </a>
              </div>

            </div>
          </div>
        </nav>

        {/* 页面主体内容 */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* 全局底部版权与合规链接 (Footer) */}
        <footer className="py-8 border-t border-white/10 bg-black/20 text-center text-sm text-white/40">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a href="https://hazel-ray-a96.notion.site/Support-Privacy-SmartEaseTech-Studio-3c1626d5f29a80bb9e53eb137608daec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </footer>

      </body>
    </html>
  )
}