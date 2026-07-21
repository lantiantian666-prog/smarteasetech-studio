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
    date: "July 2026",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>One of the most common questions every pet owner asks is:</p >
        <p className="text-lg text-emerald-400 font-medium italic border-l-4 border-emerald-500 pl-4 py-1">
          &quot;How much should I feed my dog or cat?&quot;
        </p >
        <p>The answer is rarely as simple as reading the feeding chart on a bag of food. Two pets of the same weight may need very different amounts of food depending on their age, activity level, body condition, whether they are neutered, and many other factors. Feeding too much can gradually lead to obesity, while feeding too little may prevent healthy growth or cause nutritional deficiencies.</p >
        <p>This guide explains how daily calorie needs are determined, what affects your pet&apos;s energy requirements, and how to calculate a more personalized feeding plan.</p >

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Feeding Charts Are Only a Starting Point</h3>
        <p>Most commercial pet foods include feeding recommendations on the package. These charts are designed for a wide range of animals and should be considered general estimates rather than exact recommendations.</p >
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Is highly active or mostly indoors</li>
          <li>Has recently been neutered or spayed</li>
          <li>Needs to lose or gain weight</li>
          <li>Is a growing puppy or kitten</li>
          <li>Is pregnant or nursing</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Determines Daily Calorie Needs?</h3>
        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Body Weight & Life Stage</h4>
        <p>Weight is the foundation of every feeding calculation. However, puppies require extra calories to support healthy growth, large-breed puppies need carefully controlled energy intake, and senior pets often become less active and may need fewer calories.</p >
        
        <h4 className="text-lg font-medium text-emerald-400 mt-6 mb-2">Activity Level & Body Condition</h4>
        <p>An active pet burns significantly more calories. Veterinarians commonly use the Body Condition Score (BCS) to evaluate whether a pet is underweight, ideal, or overweight, which provides a better picture than the scale alone.</p >

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>There is no universal answer to the question, &quot;How much should I feed my dog or cat?&quot; Healthy feeding depends on multiple factors working together. Using a science-based approach—and monitoring your pet&apos;s progress over time—can help support lifelong health.</p >
          <p className="text-sm text-white/50 mt-6">Feeding recommendations are intended as general guidance and should not replace professional veterinary advice.</p >
        </div>
      </div>
    )
  },
  {
    id: "bcs",
    title: "Is My Dog or Cat Overweight?",
    subtitle: "A Complete Guide to Body Condition Score (BCS)",
    date: "July 2026",
    readTime: "7 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>One of the biggest health challenges facing modern pets is obesity. Many owners believe their dog or cat is at a healthy weight simply because they see them every day.</p >
        <p>Maintaining a healthy body condition is about much more than appearance. It plays an important role in long-term health, mobility, and quality of life.</p >

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Body Weight Alone Doesn&apos;t Tell the Whole Story</h3>
        <p>Stepping on a scale tells you how much your pet weighs, but it doesn&apos;t tell you whether that weight is healthy. Two Labrador Retrievers may both weigh 30 kg (66 lb), yet one may have an ideal body condition while the other carries excessive body fat.</p >

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Is Body Condition Score (BCS)?</h3>
        <p>When assessing body condition, professionals look at:</p >
        <ul className="list-disc pl-5 space-y-1 text-white/70">
          <li>Whether the ribs can be easily felt</li>
          <li>The shape of the waist when viewed from above</li>
          <li>The abdominal tuck when viewed from the side</li>
          <li>Overall muscle and body shape</li>
        </ul>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Obesity Matters</h3>
        <p>Excess body fat is associated with joint stress, reduced mobility, diabetes, and heart strain. Weight gain is usually the result of overfeeding, too many treats, low activity, or aging.</p >

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>Body Condition Score provides valuable information that body weight alone cannot. By combining regular weight monitoring, appropriate feeding, and consistent activity, pet owners can better support their companion&apos;s long-term health.</p >
        </div>
      </div>
    )
  },
  {
    id: "checklist",
    title: "The Complete Pet Health Record Checklist",
    subtitle: "What Every Dog and Cat Owner Should Track",
    date: "July 2026",
    readTime: "8 min read",
    content: (
      <div className="space-y-6 text-white/80 leading-relaxed font-light text-[15px] md:text-base">
        <p>Over the years, every pet builds a health history—from vaccinations and deworming to weight changes, medications, and routine checkups. Keeping these records organized helps ensure routine care isn&apos;t overlooked.</p >

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">The Essential Checklist</h3>
        <div className="space-y-6 mt-6">
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">1. Body Weight and Growth</h4>
            <p>Weight is one of the simplest indicators of overall health. Regular weight tracking helps you notice gradual changes that may otherwise go unnoticed.</p >
          </div>
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">2. Feeding & Water Intake</h4>
            <p>Helpful records include daily food portions, food type, changes in diet, and sudden increases or decreases in drinking habits.</p >
          </div>
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">3. Vaccinations & Parasite Prevention</h4>
            <p>Keeping an accurate history helps you remember vaccine types, booster schedules, and preventive schedules to avoid missed or duplicated treatments.</p >
          </div>
          <div>
            <h4 className="text-lg font-medium text-emerald-400 mb-2">4. Veterinary Visits & Medications</h4>
            <p>Recording appointments allows you to review physical examinations, tests, and follow-ups. If your pet receives medication, maintaining a complete dosage history is vital.</p >
          </div>
        </div>

        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Digital Records Make Life Easier</h3>
        <p>Paper records can easily become scattered. Digital records offer quick searching, easy updates, chronological timelines, and convenient access whenever needed.</p >

        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>Keeping a complete pet health record isn&apos;t just about staying organized—it&apos;s about supporting your companion&apos;s lifelong well-being.</p >
        </div>
      </div>
    )
  }
];

// ==========================================
// 核心修复：强制生成静态路由参数，防止 Vercel 打包报错
// ==========================================
export async function generateStaticParams() {
  return [
    { slug: "calories" },
    { slug: "bcs" },
    { slug: "checklist" },
  ];
}

// 动态生成网页 SEO 标题
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = ARTICLES_CONTENT.find((a) => a.id === params.slug);
  if (!article) return { title: "Article Not Found" };
  
  return {
    title: `${article.title} | SmartEaseTech Studio`,
    description: article.subtitle,
  };
}

// 博客页面主组件
export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = ARTICLES_CONTENT.find((a) => a.id === params.slug);

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
          </p >
        </div>

        <div className="prose prose-invert max-w-none">
          {article.content}
        </div>
      </article>

      <footer className="py-10 border-t border-white/10 text-center">
        <div className="mb-4 text-white/40 text-sm">&copy; {new Date().getFullYear()} Minghua Li. All rights reserved.</div>
      </footer>
    </main>
  );
}