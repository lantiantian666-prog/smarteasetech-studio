import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'
// 🚀 引入谷歌官方的 GA4 组件
import { GoogleAnalytics } from '@next/third-parties/google'
// 🚀 引入 Next.js 官方的异步脚本优化组件
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

// 🚀 全局元数据配置（不写 alternates.canonical，避免子页面误继承首页规范链接）
export const metadata: Metadata = {
  metadataBase: new URL('https://www.smarteasetechstudio.app'),
  title: {
    default: 'SmartEaseTech Studio | Local-First & Privacy-Focused iOS Apps',
    template: '%s | SmartEaseTech Studio',
  },
  description:
    'Independent iOS studio crafting local-first, privacy-focused apps including PawOptima Steward, InvoiceHive, Pray Verses, and HabitSense.',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'SmartEaseTech Studio | Local-First & Privacy-Focused iOS Apps',
    description:
      'Crafting minimalist, elegant, and empowering local-first iOS applications with absolute privacy.',
    url: 'https://www.smarteasetechstudio.app',
    siteName: 'SmartEaseTech Studio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SmartEaseTech Studio Local-First iOS Applications',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SmartEaseTech Studio | Local-First & Privacy-Focused iOS Apps',
    description: 'Minimalist, local-first iOS applications.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 🚀 全站工作室实体结构化数据 (Organization JSON-LD)
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SmartEaseTech Studio',
    url: 'https://www.smarteasetechstudio.app',
    logo: 'https://www.smarteasetechstudio.app/og-image.png',
    email: 'SmartEaseTechStudio@hotmail.com',
  }

  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#031814] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-amber-500 selection:text-black print:bg-white print:text-black`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgJsonLd).replace(/</g, '\\u003c'),
          }}
        />

        {/* 背景氛围层：沉浸式深绿底色 + 翡翠绿与琥珀金交织的微光 */}
        <div className="fixed inset-0 -z-50 pointer-events-none overflow-hidden print:hidden">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-emerald-900/20 rounded-full blur-[150px]" />
        </div>

        {/* 顶部导航栏：Floating Gold-Accent Navbar */}
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl print:hidden">
          <div className="backdrop-blur-2xl bg-[#05221b]/80 border border-amber-500/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] rounded-2xl px-6 py-3.5 flex items-center justify-between transition-all duration-300">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-white flex items-center gap-2.5 group"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.8)] group-hover:scale-125 transition-transform" />
              <span className="bg-gradient-to-r from-white via-slate-100 to-amber-200/80 bg-clip-text text-transparent">
                SmartEaseTech
              </span>
            </Link>

            <nav className="flex items-center space-x-6 sm:space-x-8">
              <Link
                href="/"
                className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors"
              >
                Blog &amp; Resources
              </Link>
              <Link
                href="/support"
                className="text-sm font-medium text-slate-300 hover:text-amber-300 transition-colors hidden sm:block"
              >
                Support
              </Link>
            </nav>
          </div>
        </header>

        {/* 页面主体内容 */}
        <main className="flex-grow pt-28 print:pt-0">{children}</main>

        {/* 底部区域 (Footer) */}
        <footer className="py-12 border-t border-emerald-900/40 bg-[#02100d]/80 backdrop-blur-md text-center text-sm text-slate-500 print:hidden">
          <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-500">
              Crafted with precision. Local-first &amp; Privacy-focused.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://hazel-ray-a96.notion.site/Support-Privacy-SmartEaseTech-Studio-3c1626d5f29a80bb9e53eb137608daec"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors text-xs"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-300 transition-colors text-xs"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </footer>

        {/* 🚀 GA4 流量监控代码 */}
        <GoogleAnalytics gaId="G-EYSV8LFEQX" />

        {/* 🚀 Cloudflare Web Analytics 无 Cookie 隐私流量统计 */}
        <Script
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "bbd7d2072d2f407fa7435a7ad2bfc263"}'
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}