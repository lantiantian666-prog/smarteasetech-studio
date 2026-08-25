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
      <body className={`${inter.className} bg-zinc-950 text-white min-h-screen flex flex-col antialiased`}>
        
        {/* 加强版全局固定导航栏 (Fixed Navbar) */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-xl font-extrabold tracking-tight text-white hover:text-emerald-400 transition-colors">
              SmartEaseTech
            </Link>
            <nav className="flex items-center space-x-6 sm:space-x-8">
              <Link href="/" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                Blog & Resources
              </Link>
              <a href="mailto:SmartEaseTechStudio@hotmail.com" className="text-sm font-medium text-white/70 hover:text-white transition-colors hidden sm:block">
                Support
              </a>
            </nav>
          </div>
        </header>

        {/* 页面主体内容：加入 pt-16 确保内容不会被 fixed 导航栏遮挡 */}
        <main className="flex-grow pt-16">
          {children}
        </main>
        
        {/* 全局底部合规链接 (Footer) */}
        <footer className="py-8 border-t border-white/10 bg-zinc-950 text-center text-sm text-white/40">
          <div className="flex justify-center items-center gap-6">
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