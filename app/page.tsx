import Image from "next/image";
import Link from "next/link";

// 通用 App Store 按钮组件，使用官方规范样式
const AppStoreButton = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 bg-black text-white px-8 py-3.5 rounded-full font-medium hover:scale-105 active:scale-100 transition-all duration-300 shadow-md hover:shadow-lg"
  >
    {/* Apple 徽标 */}
    <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor" className="text-white">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 51 17.9 76.2 17.9 48.6-.1 90.4-82.5 102.6-119.3-39-19.9-50-46.7-50-81.2zM211 118.8c34.5-38.3 22-81.3 12-96.1-33 1.1-66.5 32.1-66.5 66.2 0 31.8 23.6 57 44.5 57 5.4 0 10.1-.6 10-27.1z"/>
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[10px] text-gray-400 font-normal">Download on the</span>
      <span className="text-sm font-semibold">{text}</span>
    </div>
  </Link>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-gray-100 font-sans tracking-wide">
      {/* 顶部 Header */}
      <header className="py-20 text-center bg-slate-950/50 border-b border-gray-800">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          SmartEaseTech Studio
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Crafting elegant, local-first applications.
        </p>
      </header>

      {/* App 产品矩阵展示区 */}
      <section className="max-w-6xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="space-y-36">
          
          {/* 第一个 App：PawOptima */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-3xl font-bold mb-4 text-white">PawOptima</h2>
              <p className="text-gray-300 mb-10 leading-relaxed max-w-sm lg:max-w-none">
                Calculate Nutrition & Track Pet Health. Simplified wellness management with comprehensive health tracking.
              </p>
              {/* 正式黑苹果下载按钮 */}
              <AppStoreButton href="https://apps.apple.com/app/pawoptima/id1234567890" text="App Store" />
            </div>
            {/* PawOptima 截图展示区 */}
            <div className="lg:w-2/3 grid grid-cols-3 gap-4 lg:gap-6">
              <Image src="/PawOptima1.png" alt="PawOptima Screenshot 1" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-800 hover:-translate-y-1 hover:border-gray-700 transition-all duration-300" />
              <Image src="/PawOptima2.png" alt="PawOptima Screenshot 2" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-800 hover:-translate-y-1 hover:border-gray-700 transition-all duration-300 delay-75" />
              <Image src="/PawOptima3.png" alt="PawOptima Screenshot 3" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-800 hover:-translate-y-1 hover:border-gray-700 transition-all duration-300 delay-150" />
            </div>
          </div>

          {/* 第二个 App：InvoiceHive */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
              <h2 className="text-3xl font-bold mb-4 text-white">InvoiceHive</h2>
              <p className="text-gray-300 mb-10 leading-relaxed max-w-sm lg:max-w-none">
                Professional Invoicing. Create, Manage, and Send invoices offline, ensuring privacy and speed.
              </p>
              {/* 正式黑苹果下载按钮 */}
              <AppStoreButton href="https://apps.apple.com/app/invoicehive/id0987654321" text="App Store" />
            </div>
            {/* InvoiceHive 截图展示区 */}
            <div className="lg:w-2/3 grid grid-cols-3 gap-4 lg:gap-6">
              <Image src="/InvoiceHive1.png" alt="InvoiceHive Screenshot 1" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-800 hover:-translate-y-1 hover:border-gray-700 transition-all duration-300" />
              <Image src="/InvoiceHive2.png" alt="InvoiceHive Screenshot 2" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-800 hover:-translate-y-1 hover:border-gray-700 transition-all duration-300 delay-75" />
              <Image src="/InvoiceHive3.png" alt="InvoiceHive Screenshot 3" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-800 hover:-translate-y-1 hover:border-gray-700 transition-all duration-300 delay-150" />
            </div>
          </div>

        </div>
      </section>

      {/* 博客文章专区 */}
      <section className="bg-slate-900 py-24 border-t border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-16 text-white">Pet Care Guides & Resources</h2>
          <div className="grid gap-10 md:grid-cols-3">
             <Link href="/blog/calories" className="block p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 hover:shadow-sm transition-all border border-transparent hover:border-gray-200">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Cat Calories Calculator</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Learn how to accurately calculate your cat's daily calorie needs.</p>
             </Link>
             <Link href="/blog/raw-food-guide" className="block p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 hover:shadow-sm transition-all border border-transparent hover:border-gray-200">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">Raw Food Guide</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Essential tips and nutritional balance for raw feeding.</p>
             </Link>
             <Link href="/blog/checklist" className="block p-8 rounded-3xl bg-gray-50 hover:bg-gray-100 hover:shadow-sm transition-all border border-transparent hover:border-gray-200">
                <h3 className="font-semibold text-lg mb-3 text-gray-900">New Kitten Checklist</h3>
                <p className="text-sm text-gray-500 leading-relaxed">Everything you need to prepare for your new furry family member.</p>
             </Link>
          </div>
        </div>
      </section>

      {/* 极简底部 Footer（仅保留隐私与政策链接） */}
      <footer className="py-12 flex justify-center items-center gap-8 text-sm text-gray-500 bg-slate-950">
        <Link href="/privacy" className="hover:text-white transition-colors duration-300">
          Privacy Policy
        </Link>
        <Link href="/terms" className="hover:text-white transition-colors duration-300">
          Terms of Service
        </Link>
      </footer>
    </main>
  );
}