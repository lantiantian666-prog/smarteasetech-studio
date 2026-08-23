import Link from "next/link";
import { notFound } from "next/navigation";

// ==========================================
// 独立博客页面数据与内容
// ==========================================
const ARTICLES_CONTENT = [
  {
    id: "calories",
    title: "How Much Should I Feed My Dog or Cat?",
    subtitle: "A Science-Based Guide to Daily Calories",
    date: "August 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>One of the most common questions every pet owner asks is:</p>
        <p className="text-lg text-emerald-400 font-medium italic border-l-4 border-emerald-500 pl-4 py-1">
          &quot;How much should I feed my dog or cat?&quot;
        </p>
        <p>The answer is rarely as simple as reading the feeding chart on a bag of food. Two pets of the same weight may need very different amounts of food depending on their age, activity level, body condition, whether they are neutered, and many other factors.</p>
        <p>This guide explains how daily calorie needs are determined, what affects your pet&apos;s energy requirements, and how to calculate a more personalized feeding plan.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Feeding Charts Are Only a Starting Point</h3>
        <p>Most commercial pet foods include feeding recommendations on the package. These charts are designed for a wide range of animals and should be considered general estimates rather than exact recommendations.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Determines Daily Calorie Needs?</h3>
        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Body Weight & Life Stage</h4>
        <p>Weight is the foundation of every feeding calculation. However, puppies require extra calories to support healthy growth, large-breed puppies need carefully controlled energy intake, and senior pets often become less active and may need fewer calories.</p>
        
        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Activity Level & Body Condition</h4>
        <p>An active pet burns significantly more calories. Veterinarians commonly use the Body Condition Score (BCS) to evaluate whether a pet is underweight, ideal, or overweight, which provides a better picture than the scale alone.</p>

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>There is no universal answer to the question, &quot;How much should I feed my dog or cat?&quot; Healthy feeding depends on multiple factors working together. Using a science-based approach—and monitoring your pet&apos;s progress over time—can help support lifelong health.</p>
        </div>
      </div>
    )
  },
  {
    id: "raw-food-guide",
    title: "Raw Food Guide: Essential Tips for Beginners",
    subtitle: "Essential tips and nutritional balance for raw feeding.",
    date: "August 2026",
    readTime: "7 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Raw feeding is becoming increasingly popular among pet owners who want to provide a diet closer to what dogs and cats might eat in the wild.</p>
        <p>However, switching to a raw diet requires careful planning. It is not as simple as just feeding raw meat from the grocery store. A poorly constructed raw diet can lead to severe nutritional deficiencies or bacterial infections.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Nutritional Balance is Key</h3>
        <p>A common mistake in raw feeding is offering only muscle meat. A balanced raw diet must include appropriate ratios of:</p>
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Muscle meat for protein and energy</li>
          <li>Edible bones for calcium and phosphorus</li>
          <li>Secreting organs (like liver) for essential vitamins</li>
          <li>Safe vegetables or supplements to ensure all micro-nutrients are met</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Hygiene and Safe Handling</h3>
        <p>Handling raw meat for pets requires the exact same hygiene standards as preparing raw meat for yourself. Always wash your hands, clean preparation surfaces thoroughly with hot soapy water, and ensure the meat is stored at safe temperatures.</p>

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>Before transitioning your pet to a raw diet, it is highly recommended to consult with a veterinary nutritionist to ensure the recipe you choose meets all of your pet&apos;s complex dietary requirements.</p>
        </div>
      </div>
    )
  },
  {
    id: "checklist",
    title: "The Complete Pet Health Record Checklist",
    subtitle: "What Every Dog and Cat Owner Should Track",
    date: "August 2026",
    readTime: "8 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Over the years, every pet builds a health history—from vaccinations and deworming to weight changes, medications, and routine checkups. Keeping these records organized helps ensure routine care isn&apos;t overlooked.</p>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">The Essential Checklist</h3>
        <div className="space-y-6 mt-6">
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">1. Body Weight and Growth</h4>
            <p>Weight is one of the simplest indicators of overall health. Regular weight tracking helps you notice gradual changes that may otherwise go unnoticed.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">2. Feeding & Water Intake</h4>
            <p>Helpful records include daily food portions, food type, changes in diet, and sudden increases or decreases in drinking habits.</p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">3. Vaccinations & Parasite Prevention</h4>
            <p>Keeping an accurate history helps you remember vaccine types, booster schedules, and preventive schedules to avoid missed or duplicated treatments.</p>
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Digital Records Make Life Easier</h3>
        <p>Paper records can easily become scattered. Digital records offer quick searching, easy updates, chronological timelines, and convenient access whenever needed.</p>

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>Keeping a complete pet health record isn&apos;t just about staying organized—it&apos;s about supporting your companion&apos;s lifelong well-being.</p>
        </div>
      </div>
    )
  }
];

// 静态渲染：提前把文章打包装好
export function generateStaticParams() {
  return ARTICLES_CONTENT.map((article) => ({
    slug: article.id,
  }));
}

// 核心修复：加入 async / await 强制异步解析参数，完美兼容所有 Next.js 版本
export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const article = ARTICLES_CONTENT.find((a) => a.id === resolvedParams.slug);
  if (!article) return { title: "Article Not Found" };
  return { title: `${article.title} | SmartEaseTech Studio`, description: article.subtitle };
}

// 核心修复：组件改为 async，并等待 params 解析完成
export default async function BlogPost({ params }: any) {
  const resolvedParams = await params;
  const article = ARTICLES_CONTENT.find((a) => a.id === resolvedParams.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-zinc-950">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center">
          <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
            &larr; Back to Home
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-24">
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex gap-4 text-xs text-white/40 mb-4">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-emerald-400 font-medium">
            {article.subtitle}
          </p>
        </div>
        <div className="prose prose-invert max-w-none">
          {article.content}
        </div>
      </article>

      <footer className="py-10 border-t border-white/10 text-center">
        <div className="mb-4 text-white/40 text-sm">&copy; {new Date().getFullYear()} SmartEaseTech Studio. All rights reserved.</div>
      </footer>
    </main>
  );
}