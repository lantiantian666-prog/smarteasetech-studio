import Image from "next/image";
import Link from "next/link";

const AppStoreButton = ({ text, href }: { text: string; href?: string }) => {
  const content = (
    <>
      <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor" className="text-white">
        <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 51 17.9 76.2 17.9 48.6-.1 90.4-82.5 102.6-119.3-39-19.9-50-46.7-50-81.2zM211 118.8c34.5-38.3 22-81.3 12-96.1-33 1.1-66.5 32.1-66.5 66.2 0 31.8 23.6 57 44.5 57 5.4 0 10.1-.6 10-27.1z"/>
      </svg>
      <div className="flex flex-col text-left">
        <span className="text-[10px] text-white/60 font-normal">Download on the</span>
        <span className="text-sm font-semibold">{text}</span>
      </div>
    </>
  );

  const baseStyles = "inline-flex items-center gap-3 bg-black/50 text-white border border-white/20 px-8 py-3.5 rounded-full font-medium shadow-lg backdrop-blur-sm transition-all duration-300";

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} hover:bg-white/10 hover:border-white/40`}>
        {content}
      </a>
    );
  }

  return (
    <div className={`${baseStyles} opacity-50 cursor-not-allowed grayscale`}>
      {content}
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden font-sans tracking-wide">
      {/* 极客光晕背景 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-zinc-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.12),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.08),transparent_60%)]" />
      </div>

      {/* 网站头部 */}
      <header className="py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">SmartEaseTech Studio</h1>
        <p className="mt-5 text-lg text-white/60 font-medium">Crafting elegant, local-first applications.</p>
      </header>

      {/* 核心产品展示区 */}
      <section className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="space-y-40">
          
          {/* App 1: PawOptima Steward */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/pawoptima-icon.png" alt="PawOptima Steward Icon" width={64} height={64} className="rounded-2xl shadow-lg border border-white/10" />
                <h2 className="text-3xl font-bold text-white">PawOptima Steward</h2>
              </div>
              <p className="text-white/70 mb-10 leading-relaxed max-w-sm lg:max-w-none text-lg">
                The complete, science-based feeding and health system for dogs and cats — 100% offline, no subscription, no account.
              </p>
              <AppStoreButton text="App Store" href="https://apps.apple.com/app/id6782809353" />
            </div>
            <div className="lg:w-2/3 grid grid-cols-3 gap-4 lg:gap-6">
              <Image src="/pawoptima-1.png" alt="PawOptima Screenshot 1" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
              <Image src="/pawoptima-2.png" alt="PawOptima Screenshot 2" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
              <Image src="/pawoptima-3.png" alt="PawOptima Screenshot 3" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
            </div>
          </div>

          {/* App 2: Pray Verses */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/prayverses-icon.png" alt="Pray Verses Icon" width={64} height={64} className="rounded-2xl shadow-lg border border-white/10" />
                <h2 className="text-3xl font-bold text-white">Pray Verses</h2>
              </div>
              <p className="text-white/70 mb-10 leading-relaxed max-w-sm lg:max-w-none text-lg">
                The private, offline prayer journal that matches Scripture to what&apos;s actually on your heart. 100% free, forever.
              </p>
              <AppStoreButton text="App Store" href="https://apps.apple.com/app/6788009023" />
            </div>
            <div className="lg:w-2/3 grid grid-cols-3 gap-4 lg:gap-6">
              <Image src="/prayverses-1.png" alt="Pray Verses Screenshot 1" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
              <Image src="/prayverses-2.png" alt="Pray Verses Screenshot 2" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
              <Image src="/prayverses-3.png" alt="Pray Verses Screenshot 3" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
            </div>
          </div>

          {/* App 3: InvoiceHive (Coming Soon) */}
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 opacity-60">
            <div className="lg:w-1/3 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/invoicehive-icon.png" alt="InvoiceHive Icon" width={64} height={64} className="rounded-2xl shadow-lg border border-white/10" />
                <h2 className="text-3xl font-bold text-white">InvoiceHive</h2>
              </div>
              <p className="text-white/70 mb-10 leading-relaxed max-w-sm lg:max-w-none text-lg">
                Professional Invoicing. Create, manage, and send invoices offline, ensuring ultimate privacy and speed.
              </p>
              <AppStoreButton text="Coming Soon" />
            </div>
            <div className="lg:w-2/3 grid grid-cols-3 gap-4 lg:gap-6">
              <Image src="/invoicehive-1.png" alt="InvoiceHive Screenshot 1" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
              <Image src="/invoicehive-2.png" alt="InvoiceHive Screenshot 2" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
              <Image src="/invoicehive-3.png" alt="InvoiceHive Screenshot 3" width={300} height={600} className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/10 bg-white/5" />
            </div>
          </div>

        </div>
      </section>

      {/* SEO 博客引流矩阵 */}
      <section className="py-24 mt-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category 1: Pet Care */}
          <div className="mb-20">
            <div className="mb-10 border-l-4 border-emerald-500 pl-4">
              <h2 className="text-2xl font-bold text-white">Pet Care Guides & Resources</h2>
              <p className="mt-2 text-white/50 text-sm">Science-based nutrition and wellness resources for PawOptima Steward users.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               <Link href="/blog/how-much-to-feed-dog-cat" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-emerald-400 transition-colors">How Much Should You Feed Your Dog or Cat?</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Learn the veterinary formula used to calculate daily calorie needs.</p>
               </Link>
               <Link href="/blog/foods-toxic-to-dogs-and-cats" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-emerald-400 transition-colors">25 Foods Toxic to Dogs and Cats</h3>
                  <p className="text-sm text-white/60 leading-relaxed">A practical guide to everyday foods that are dangerous, plus what to do in an emergency.</p>
               </Link>
               <Link href="/blog/body-condition-score-guide" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-emerald-400 transition-colors">Body Condition Score Guide</h3>
                  <p className="text-sm text-white/60 leading-relaxed">How to read the 9-point BCS used to assess if a pet is overweight.</p>
               </Link>
               <Link href="/blog/puppy-kitten-growth-chart-by-breed" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-emerald-400 transition-colors">Puppy & Kitten Growth Charts</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Why growth should be tracked against breed-specific percentile curves.</p>
               </Link>
               <Link href="/blog/safe-weight-loss-rate-dogs-cats" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-emerald-400 transition-colors">Safe Weight Loss Rate</h3>
                  <p className="text-sm text-white/60 leading-relaxed">How quickly should an overweight pet safely lose weight?</p>
               </Link>
               <Link href="/blog/mixed-raw-diet-calorie-calculator" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-emerald-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-emerald-400 transition-colors">Mixed & Raw Diet Calculator</h3>
                  <p className="text-sm text-white/60 leading-relaxed">How to correctly split daily calories across multiple foods.</p>
               </Link>
            </div>
          </div>

          {/* Category 2: Prayer & Faith */}
          <div>
            <div className="mb-10 border-l-4 border-amber-500 pl-4">
              <h2 className="text-2xl font-bold text-white">Spiritual & Prayer Resources</h2>
              <p className="mt-2 text-white/50 text-sm">Guides and reflections to deepen your faith journey with Pray Verses.</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
               <Link href="/blog/how-to-start-a-prayer-journal" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-amber-400 transition-colors">How to Start a Prayer Journal</h3>
                  <p className="text-sm text-white/60 leading-relaxed">A practical, no-pressure guide to starting a prayer journal.</p>
               </Link>
               <Link href="/blog/bible-verses-for-anxiety" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-amber-400 transition-colors">Bible Verses for Anxiety</h3>
                  <p className="text-sm text-white/60 leading-relaxed">20 comforting Bible verses for anxiety and worry, with context.</p>
               </Link>
               <Link href="/blog/prayer-for-someone-who-is-sick" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-amber-400 transition-colors">Praying for the Sick</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Practical guidance and Bible-based prayers for when someone is sick.</p>
               </Link>
               <Link href="/blog/how-to-organize-a-prayer-list" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-amber-400 transition-colors">How to Organize a Prayer List</h3>
                  <p className="text-sm text-white/60 leading-relaxed">A step-by-step system so nothing important gets forgotten.</p>
               </Link>
               <Link href="/blog/how-to-track-answered-prayers" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-amber-400 transition-colors">Tracking Answered Prayers</h3>
                  <p className="text-sm text-white/60 leading-relaxed">Why keeping a record builds faith over time.</p>
               </Link>
               <Link href="/blog/is-it-safe-to-use-a-prayer-app" className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-amber-500/50 hover:bg-white/10 transition-all group">
                  <h3 className="font-semibold text-lg mb-3 text-white group-hover:text-amber-400 transition-colors">Is Your Prayer App Safe?</h3>
                  <p className="text-sm text-white/60 leading-relaxed">A practical guide to privacy — what to check before you trust an app.</p>
               </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 底部版权 */}
      <footer className="py-12 flex justify-center items-center gap-8 text-sm text-white/40 border-t border-white/10">
        <a href="https://hazel-ray-a96.notion.site/Support-Privacy-SmartEaseTech-Studio-3c1626d5f29a80bb9e53eb137608daec" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          Privacy Policy
        </a>
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
          Terms of Service
        </a>
      </footer>
    </main>
  );
}