import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans tracking-wide">
      {/* 顶部 Header */}
      <header className="py-16 text-center bg-white border-b border-gray-100">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
          SmartEaseTech Studio
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Crafting elegant, local-first applications.
        </p>
      </header>

      {/* App 产品矩阵展示区 */}
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <div className="space-y-32">
          
          {/* 第一个 App：PawOptima */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">PawOptima</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                [文案预留位：App的一句话核心卖点与介绍，后续准备好后在此替换]
              </p>
              {/* 占位下载按钮 */}
              <button className="bg-gray-200 text-gray-400 px-8 py-3 rounded-full font-medium cursor-not-allowed transition-all">
                Download Link (Coming Soon)
              </button>
            </div>
            {/* PawOptima 截图展示区 */}
            <div className="lg:w-2/3 grid grid-cols-3 gap-4 lg:gap-6">
              <Image src="/PawOptima1.png" alt="PawOptima Screenshot 1" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100 hover:-translate-y-1 transition-transform duration-300" />
              <Image src="/PawOptima2.png" alt="PawOptima Screenshot 2" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100 hover:-translate-y-1 transition-transform duration-300 delay-75" />
              <Image src="/PawOptima3.png" alt="PawOptima Screenshot 3" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100 hover:-translate-y-1 transition-transform duration-300 delay-150" />
            </div>
          </div>

          {/* 第二个 App：InvoiceHive */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-3xl font-bold mb-4">InvoiceHive</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                [文案预留位：App的一句话核心卖点与介绍，后续准备好后在此替换]
              </p>
              {/* 占位下载按钮 */}
              <button className="bg-gray-200 text-gray-400 px-8 py-3 rounded-full font-medium cursor-not-allowed transition-all">
                Download Link (Coming Soon)
              </button>
            </div>
            {/* InvoiceHive 截图展示区 */}
            <div className="lg:w-2/3 grid grid-cols-3 gap-4 lg:gap-6">
              <Image src="/InvoiceHive1.png" alt="InvoiceHive Screenshot 1" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100 hover:-translate-y-1 transition-transform duration-300" />
              <Image src="/InvoiceHive2.png" alt="InvoiceHive Screenshot 2" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100 hover:-translate-y-1 transition-transform duration-300 delay-75" />
              <Image src="/InvoiceHive3.png" alt="InvoiceHive Screenshot 3" width={300} height={600} className="rounded-2xl shadow-xl w-full h-auto object-cover border border-gray-100 hover:-translate-y-1 transition-transform duration-300 delay-150" />
            </div>
          </div>

        </div>
      </section>

      {/* 博客文章专区（为您保留） */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">Pet Care Guides & Resources</h2>
          <div className="grid gap-8 md:grid-cols-3">
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

      {/* 极简底部 Footer（已去掉个人版权） */}
      <footer className="py-10 text-center text-sm text-gray-400 bg-gray-50">
        <p>© {new Date().getFullYear()} SmartEaseTech Studio. All rights reserved.</p>
      </footer>
    </main>
  );
}