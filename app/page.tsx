
import { useState } from "react";
import Image from "next/image";


// ==========================================
// 三篇科普文章的数据结构（用于极简、优雅的弹窗阅读排版）
// ==========================================
const ARTICLES = [
  {
    id: "calories",
    title: "How Much Should I Feed My Dog or Cat?",
    subtitle: "A Science-Based Guide to Daily Calories",
    excerpt: "Two pets of the same weight may need very different amounts of food. Learn how veterinarians estimate daily calorie needs and how to build a personalized feeding plan.",
    date: "July 2026",
    readTime: "5 min read",
    content: (
      <div className="space-y-8 text-white/80 leading-relaxed">
        <p className="text-xl text-emerald-400 font-medium italic border-l-4 border-emerald-500 pl-4 py-1">
          "How much should I feed my dog or cat?"
        </p>
        <p>
          The answer is rarely as simple as reading the feeding chart on a bag of food. Two pets of the same weight may need very different amounts of food depending on their age, activity level, body condition, whether they are neutered, and many other factors.
        </p>


        <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
          <h4 className="text-lg font-semibold text-white mb-4">Why Feeding Charts Are Only a Starting Point</h4>
          <p className="mb-4">Most commercial pet foods include general estimates on the package. However, a standardized chart cannot account for your pet's individual reality:</p>
          <ul className="grid md:grid-cols-2 gap-3 text-sm text-white/60">
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Is highly active or mostly indoors</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Has recently been neutered or spayed</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Needs to lose or gain weight</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Is a growing puppy or kitten</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Is pregnant or nursing</li>
            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Has a naturally lean or stocky build</li>
          </ul>
        </div>


        <div>
          <h4 className="text-xl font-semibold text-white mb-4">What Determines Daily Calorie Needs?</h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01]">
              <h5 className="font-medium text-emerald-400 mb-2">Body Weight & Metabolic Rate</h5>
              <p className="text-sm text-white/60">Weight is the foundation, but calorie needs do not increase in a perfectly straight line as body weight increases. Calculations are based on metabolic energy requirements rather than simple weight multiplication.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01]">
              <h5 className="font-medium text-emerald-400 mb-2">Life Stage</h5>
              <p className="text-sm text-white/60">Puppies and kittens require extra calories to support rapid, healthy skeletal and organ growth, while senior pets often become less active and require fewer daily calories.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01]">
              <h5 className="font-medium text-emerald-400 mb-2">Activity Level & BCS</h5>
              <p className="text-sm text-white/60">Working or highly playful pets burn significantly more calories. Veterinarians commonly use the Body Condition Score (BCS) to evaluate overall body fat distribution rather than relying solely on a scale.</p>
            </div>
            <div className="p-5 rounded-xl border border-white/5 bg-white/[0.01]">
              <h5 className="font-medium text-emerald-400 mb-2">Food Types & Treats</h5>
              <p className="text-sm text-white/60">Dry food contains more calories per gram than wet food due to moisture differences. Additionally, treats should be kept to approximately 10% or less of total daily calories.</p>
            </div>
          </div>
        </div>


        <div className="border-t border-white/10 pt-6">
          <h4 className="text-xl font-semibold text-white mb-3">How PawOptima Steward Can Help</h4>
          <p className="mb-4">Instead of relying solely on generalized feeding charts, PawOptima Steward simplifies everyday feeding and health management by allowing you to:</p>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-start gap-2">✨ <strong>Calculate science-based daily calorie needs</strong> tailored to species, age, weight, and sterilization status.</li>
            <li className="flex items-start gap-2">✨ <strong>Estimate feeding portions down to the gram</strong> for dry food, wet food, or mixed diets.</li>
            <li className="flex items-start gap-2">✨ <strong>Track meals, water, weight, and stool quality</strong> over long-term interactive trends.</li>
            <li className="flex items-start gap-2">✨ <strong>Store your data safely and locally</strong> with our uncompromising privacy-first architecture.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "bcs",
    title: "Is My Dog or Cat Overweight?",
    subtitle: "A Complete Guide to Body Condition Score (BCS)",
    excerpt: "Maintaining a healthy body condition plays an important role in your pet's long-term mobility and lifespan. Learn how veterinarians evaluate Body Condition Score (BCS) at home.",
    date: "July 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-8 text-white/80 leading-relaxed">
        <p>
          One of the biggest health challenges facing modern pets is obesity. Gradual weight gain can be difficult to notice, and many overweight pets appear "normal" to their families. However, maintaining a healthy body condition is about much more than appearance—it directly impacts joint mobility and life expectancy.
        </p>


        <div className="grid md:grid-cols-2 gap-6 my-6">
          <div className="p-5 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.02]">
            <h5 className="font-semibold text-emerald-400 mb-2">Scale Weight (Quantitative)</h5>
            <p className="text-sm text-white/60">Measures total mass. Two dogs of the same breed may both weigh 30 kg, yet one may be at an ideal muscle mass while the other carries dangerous excessive body fat.</p>
          </div>
          <div className="p-5 rounded-xl border border-purple-500/10 bg-purple-500/[0.02]">
            <h5 className="font-semibold text-purple-400 mb-2">Body Condition Score (Qualitative)</h5>
            <p className="text-sm text-white/60">Estimates actual body fat percentage by evaluating how your pet's ribs, waist, and abdominal tuck look and physically feel.</p>
          </div>
        </div>


        <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
          <h4 className="text-lg font-semibold text-white mb-4">At-Home BCS Assessment Checklist</h4>
          <p className="text-sm text-white/60 mb-4">Vets commonly use a 5-point or 9-point scale to grade condition. You can check these three key areas at home:</p>
          <div className="space-y-4">
            <div className="flex gap-4">
              <span className="text-emerald-400 font-bold">01</span>
              <div>
                <h5 className="font-medium text-white">Rib Test</h5>
                <p className="text-sm text-white/50">Run your hands gently along your pet's rib cage. You should be able to easily feel the ribs under a thin layer of skin, similar to the back of your knuckles.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-emerald-400 font-bold">02</span>
              <div>
                <h5 className="font-medium text-white">Overhead View (Waist)</h5>
                <p className="text-sm text-white/50">Look down at your pet from above. You should see an hourglass shape, with a clear indentation behind the rib cage forming a waist.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span className="text-emerald-400 font-bold">03</span>
              <div>
                <h5 className="font-medium text-white">Side Profile (Abdominal Tuck)</h5>
                <p className="text-sm text-white/50">Kneel down to view them from the side. The stomach should slope upward from the end of the rib cage toward the back legs.</p>
              </div>
            </div>
          </div>
        </div>


        <div className="p-6 rounded-xl border border-amber-500/10 bg-amber-500/[0.01]">
          <h4 className="text-lg font-semibold text-amber-400 mb-3">Why Excess Weight Matters</h4>
          <p className="text-sm mb-4">Obesity is a chronic inflammatory state that puts stress on nearly every system in your pet's body, increasing the risk of:</p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-white/60">
            <li>• Arthritis and severe joint stress</li>
            <li>• Diabetes (especially in cats)</li>
            <li>• Heart and respiratory disease</li>
            <li>• Reduced exercise tolerance and stamina</li>
            <li>• Shorter lifespan and lower quality of life</li>
          </ul>
        </div>


        <div className="border-t border-white/10 pt-6">
          <h4 className="text-xl font-semibold text-white mb-3">How PawOptima Steward Supports Weight Management</h4>
          <p className="text-sm text-white/70 mb-4">PawOptima Steward helps you transition from guessing to precise management with tools built for daily consistency:</p>
          <ul className="space-y-2 text-sm text-white/60">
            <li>✔️ <strong>Log body weight & BCS</strong> side-by-side to capture a holistic health trend.</li>
            <li>✔️ <strong>Formulate safe, gradual weight goals</strong> to prevent rapid, harmful calorie restriction.</li>
            <li>✔️ <strong>Monitor treats & calorie intake</strong> easily to identify hidden contributors to weight gain.</li>
            <li>✔️ <strong>Visualize growth or weight curves</strong> via beautiful, built-in interactive charts.</li>
          </ul>
        </div>
      </div>
    )
  },
  {
    id: "checklist",
    title: "The Complete Pet Health Record Checklist",
    subtitle: "What Every Dog and Cat Owner Should Track",
    excerpt: "Paper veterinary records can easily become scattered. Discover the essential health history metrics every pet owner should track and why a unified digital record is safer.",
    date: "July 2026",
    readTime: "7 min read",
    content: (
      <div className="space-y-8 text-white/80 leading-relaxed">
        <p>
          Caring for a pet involves much more than providing food and water. Over the years, every pet builds a unique medical history. Keeping these records organized helps ensure routine care isn't overlooked and lets you act swiftly during medical emergencies.
        </p>


        <div>
          <h4 className="text-xl font-semibold text-white mb-4">The Essential 10-Point Health Checklist</h4>
          <div className="space-y-4">
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">1. Basic Identification</strong>
              <p className="text-sm text-white/50 mt-1">Name, breed, date of birth, sex, spay/neuter status, microchip numbers, and registration files.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">2. Body Weight & Growth</strong>
              <p className="text-sm text-white/50 mt-1">Regular weight points to catch gradual gains, unexpected drops, or track proper juvenile development.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">3. Feeding & Nutrition History</strong>
              <p className="text-sm text-white/50 mt-1">Exact daily portions, food brands, diet changes, and known food allergies or ingredient sensitivities.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">4. Daily Water Intake</strong>
              <p className="text-sm text-white/50 mt-1">Sudden shifts in drinking habits can serve as early indicators for underlying medical changes.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">5. Stool & Digestive Patterns</strong>
              <p className="text-sm text-white/50 mt-1">Frequency, consistency, and digestive history to pinpoint environmental or food-related sensitivities.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">6. Vaccinations</strong>
              <p className="text-sm text-white/50 mt-1">Vaccination types, dates administered, and booster schedules for boarding, travel, or vet visits.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">7. Deworming & Parasite Control</strong>
              <p className="text-sm text-white/50 mt-1">Preventive schedules (flea, tick, heartworm products) to avoid missed or duplicated treatments.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">8. Medications & Active Conditions</strong>
              <p className="text-sm text-white/50 mt-1">Medication names, active dosages, durations, and noted adverse side effects.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">9. Veterinary Timelines</strong>
              <p className="text-sm text-white/50 mt-1">Physical exam notes, diagnostic lab tests, prescriptions, and scheduled clinical follow-ups.</p>
            </div>
            <div className="p-4 rounded-xl border border-white/5 bg-white/[0.01]">
              <strong className="text-emerald-400">10. Everyday Grooming & Hygiene</strong>
              <p className="text-sm text-white/50 mt-1">Dental care routines, ear cleaning frequency, baths, nail trimming, and physical exercise logs.</p>
            </div>
          </div>
        </div>


        <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
          <h4 className="text-lg font-semibold text-white mb-3">Why Digital Records Make Life Easier</h4>
          <p className="text-sm text-white/60 mb-4">Paper clinic sheets and invoices easily get scattered or lost. Managing records digitally on your iOS device offers absolute peace of mind:</p>
          <ul className="grid md:grid-cols-2 gap-3 text-xs text-white/50">
            <li className="flex items-center gap-2">✓ Instant global keyword search</li>
            <li className="flex items-center gap-2">✓ Dynamic chronological timeline</li>
            <li className="flex items-center gap-2">✓ Proactive local push notifications</li>
            <li className="flex items-center gap-2">✓ One-click PDF clinic report generation</li>
          </ul>
        </div>


        <div className="border-t border-white/10 pt-6">
          <h4 className="text-xl font-semibold text-white mb-3">Organize It All with PawOptima Steward</h4>
          <p className="text-sm text-white/70 mb-4">PawOptima Steward acts as your pet's dedicated health portfolio. Track daily measurements alongside professional clinical dates under an uncompromising local, offline data-protection architecture. Every meal, vaccine, and vet appointment forms a lifelong record supporting informed, confident conversations with your veterinarian.</p>
        </div>
      </div>
    )
  }
];


export default function Home() {
  const [activeArticle, setActiveArticle] = useState<typeof ARTICLES[0] | null>(null);


  return (
    <main className="min-h-screen text-white relative overflow-hidden">


      {/* =========================
          BACKGROUND
      ========================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,255,180,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(120,80,255,0.10),transparent_60%)]" />
      </div>


      {/* NAV */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">


          <div className="font-semibold tracking-wide">
            SmartEaseTech Studio
          </div>


          <nav className="flex gap-6 text-sm text-white/60">
            <a href="#app" className="hover:text-white transition-colors">App</a>
            <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
            <a href="#insights" className="hover:text-white transition-colors">Insights</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>


        </div>
      </header>


      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-24">
        <div className="text-center max-w-3xl">


          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            SmartEaseTech Studio
          </h1>


          <p className="mt-6 text-white/60 text-lg">
            A Boutique iOS Design & Development Studio
          </p>


          <p className="mt-4 text-white/40 text-sm tracking-wide">
            Privacy-first · Science-based · Long-term design
          </p>


        </div>
      </section>


      {/* APP SECTION */}
      <section id="app" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">


          <h2 className="text-2xl font-semibold">
            Our Featured App
          </h2>


          <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/5">


            <h3 className="text-3xl font-semibold">
              PawOptima Steward
            </h3>


            <p className="mt-3 text-white/60">
              Science-based Pet Feeding & Health System
            </p>


            <p className="mt-6 text-white/40 text-sm max-w-2xl">
              Calculates precise feeding needs and builds long-term pet health tracking.
            </p>


            {/* =========================
                IMAGES
            ========================= */}
            <div className="mt-10 grid md:grid-cols-3 gap-6">


              {["/1.png", "/9.png", "/10.png"].map((img, index) => (
                <div key={img} className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                  <Image
                    src={img}
                    width={300}
                    height={600}
                    className="w-full h-auto object-contain block"
                    alt={`PawOptima Steward Interface Screenshot ${index + 1}`}
                  />
                </div>
              ))}


            </div>


            {/* =========================
                APP STORE BUTTON
            ========================= */}
            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.02] transition-transform"
              >
                 Download on the App Store
              </a>
            </div>


          </div>
        </div>
      </section>


      {/* PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-6 border-t border-white/10 text-center">


        <h2 className="text-2xl font-semibold">
          Our Philosophy
        </h2>


        <p className="mt-6 max-w-2xl mx-auto text-white/60 leading-relaxed">
          At SmartEaseTech, we combine scientific research with elegant engineering. Our team is dedicated to building long-term, privacy-first solutions that empower users' daily lives.
        </p>


        <p className="mt-8 text-white/40 text-sm font-medium tracking-widest uppercase">
          Smart · Ease · Simple · Elegant · Safe · Empower
        </p>


      </section>


      {/* INSIGHTS / LIBRARY SECTION */}
      <section id="insights" className="py-24 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          
          <div className="text-center md:text-left mb-12">
            <h2 className="text-2xl font-semibold">Insights & Guides</h2>
            <p className="mt-2 text-white/50 text-sm">Explore our scientific resources on pet nutrition, body evaluation, and systemic record-keeping.</p>
          </div>


          <div className="grid md:grid-cols-3 gap-6">
            {ARTICLES.map((article) => (
              <div 
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
                  <p className="text-xs text-white/50 mt-1 mb-4">{article.subtitle}</p>
                  <p className="text-sm text-white/40 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
                
                <button 
                  onClick={() => setActiveArticle(article)}
                  className="mt-6 text-xs text-white/60 hover:text-white font-medium flex items-center gap-1 transition-colors self-start"
                >
                  Read Full Article →
                </button>
              </div>
            ))}
          </div>


        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="py-24 px-6 border-t border-white/10 text-center">


        <h2 className="text-3xl font-semibold">
          Get in Touch
        </h2>


        <p className="mt-6">
          <a 
            href="mailto:SmartEaseTechStudio@hotmail.com" 
            className="text-white/60 hover:text-white transition-colors text-lg"
          >
            SmartEaseTechStudio@hotmail.com
          </a>
        </p>


      </section>


      {/* FOOTER */}
      <footer className="py-10 border-t border-white/10 text-center">


        <div className="mb-4 text-white/40 text-sm">
          &copy; {new Date().getFullYear()} Minghua Li. All rights reserved.
        </div>
        
        <div className="flex justify-center gap-6 text-white/40 text-sm">
          <a
            href="https://hazel-ray-a96.notion.site/Support-Privacy-389626d5f29a80e0bf7bdbee5cd89c31"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>


          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
        </div>


      </footer>


      {/* ==========================================
          IMMERSIVE READER MODAL (沉浸式阅读器弹窗)
      ========================================== */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl transition-all">
          <div 
            className="w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950/90 p-6 md:p-10 shadow-2xl relative scrollbar-thin scrollbar-thumb-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 text-white/60 hover:text-white transition-all text-sm"
              aria-label="Close reader"
            >
              ✕
            </button>


            {/* Article Header */}
            <div className="border-b border-white/10 pb-6 mb-8">
              <div className="flex gap-4 text-xs text-white/40 mb-2">
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>
              <h2 className="text-2xl md:text-3.5xl font-semibold tracking-tight leading-tight text-white">
                {activeArticle.title}
              </h2>
              <p className="text-md text-emerald-400 mt-2 font-medium">
                {activeArticle.subtitle}
              </p>
            </div>


            {/* Article Content */}
            <div className="prose prose-invert max-w-none">
              {activeArticle.content}
            </div>


            {/* Modal Bottom Close Action */}
            <div className="mt-12 pt-6 border-t border-white/10 flex justify-end">
              <button 
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-sm font-medium transition-all"
              >
                Close Article
              </button>
            </div>


          </div>
        </div>
      )}


    </main>
  );
}