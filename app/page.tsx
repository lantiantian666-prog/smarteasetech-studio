import Image from "next/image";
import Link from "next/link";

// 主页文章列表元数据
const ARTICLES = [
  {
    id: "calories",
    title: "How Much Should I Feed My Dog or Cat?",
    subtitle: "A Science-Based Guide to Daily Calories",
    excerpt: "The answer is rarely as simple as reading the feeding chart on a bag of food. Two pets of the same weight may need very different amounts of food.",
    date: "July 2026",
    readTime: "6 min read",
  },
  {
    id: "bcs",
    title: "Is My Dog or Cat Overweight?",
    subtitle: "A Complete Guide to Body Condition Score (BCS)",
    excerpt: "Maintaining a healthy body condition is about much more than appearance. It plays an important role in long-term health, mobility, and quality of life.",
    date: "July 2026",
    readTime: "7 min read",
  },
  {
    id: "checklist",
    title: "The Complete Pet Health Record Checklist",
    subtitle: "What Every Dog and Cat Owner Should Track",
    excerpt: "Over the years, every pet builds a health history. Keeping these records organized can make everyday care easier and help you quickly find important information.",
    date: "July 2026",
    readTime: "8 min read",
  }
];

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
      </div>

      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-semibold tracking-wide">SmartEaseTech Studio</div>
          <nav className="flex gap-6 text-sm text-white/60">
            <a href=" " className="hover:text-white transition-colors">App</a >
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a >
            <a href="#insights" className="hover:text-white transition-colors">Insights</a >
            <a href="#contact" className="hover:text-white transition-colors">Contact</a >
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">SmartEaseTech Studio</h1>
          <p className="mt-6 text-white/60 text-lg">A Boutique iOS Design & Development Studio</p >
          <p className="mt-4 text-white/40 text-sm tracking-wide">Privacy-first · Science-based · Long-term design</p >
        </div>
      </section>

      {/* APP SECTION */}
      <section id="app" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-semibold">Our Featured App</h2>
          <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-3xl font-semibold">PawOptima Steward</h3>
            <p className="mt-3 text-white/60">Science-based Pet Feeding & Health System</p >
            <p className="mt-6 text-white/40 text-sm max-w-2xl">Calculates precise feeding needs and builds long-term pet health tracking.</p >
            <div className="mt-10 grid md:grid-cols-3 gap-6">
              {["/1.png", "/9.png", "/10.png"].map((img, index) => (
                <div key={img} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                  <Image src={img} width={300} height={600} className="w-full h-auto object-contain block" alt={`PawOptima Steward Screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <a href="#" className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.02] transition-transform">
                 Download on the App Store
              </a >
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-2xl font-semibold">Our Philosophy</h2>
        <p className="mt-6 max-w-2xl mx-auto text-white/60 leading-relaxed">
          At SmartEaseTech, we combine scientific research with elegant engineering. Our team is dedicated to building long-term, privacy-first solutions that empower users&apos; daily lives.
        </p >
        <p className="mt-8 text-white/40 text-sm font-medium tracking-widest uppercase">Smart · Ease · Simple · Elegant · Safe · Empower</p >
      </section>

      {/* INSIGHTS SECTION - 已经彻底修改为 Link 路由结构 */}
      <section id="insights" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl font-semibold">Insights & Guides</h2>
            <p className="mt-2 text-white/50 text-sm">Explore our scientific resources on pet nutrition, body evaluation, and systemic record-keeping.</p >
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <Link 
                href={`/blog/${article.id}`} 
                key={article.id}
                className="p-6 rounded-2xl border border-white/10 bg-white/5 flex flex-col justify-between hover:border-white/20 hover:bg-white/[0.07] transition-all group"
              >
                <div>
                  <div className="flex justify-between items-center text-xs text-white/40 mb-4">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold group-hover:text-emerald-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-white/50 mt-1 mb-4">{article.subtitle}</p >
                  <p className="text-sm text-white/40 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p >
                </div>
                <div className="mt-6 text-xs text-white/60 group-hover:text-white font-medium flex items-center gap-1 transition-colors self-start">
                  Read Full Article &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">
        <h2 className="text-3xl font-semibold">Get in Touch</h2>
        <p className="mt-6">
          <a href="mailto:SmartEaseTechStudio@hotmail.com" className="text-white/60 hover:text-white transition-colors text-lg">SmartEaseTechStudio@hotmail.com</a >
        </p >
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center">
        <div className="mb-4 text-white/40 text-sm">&copy; {new Date().getFullYear()} Minghua Li. All rights reserved.</div>
        <div className="flex justify-center gap-6 text-white/40 text-sm">
          <a href="https://hazel-ray-a96.notion.site/Support-Privacy-389626d5f29a80e0bf7bdbee5cd89c31" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a >
          <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Terms of Use</a >
        </div>
      </footer>
    </main>
  );
}