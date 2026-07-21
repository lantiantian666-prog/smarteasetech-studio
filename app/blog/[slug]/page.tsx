import Link from "next/link";
import { notFound } from "next/navigation";

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
        <p className="text-lg text-emerald-400 font-medium italic border-l-4 border-emerald-500 pl-4 py-1">&quot;How much should I feed my dog or cat?&quot;</p >
        <p>The answer is rarely as simple as reading the feeding chart on a bag of food. Two pets of the same weight may need very different amounts of food depending on their age, activity level, body condition, whether they are neutered, and many other factors.</p >
        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Feeding Charts Are Only a Starting Point</h3>
        <p>Most commercial pet foods include feeding recommendations on the package. These charts are designed for a wide range of animals and should be considered general estimates rather than exact recommendations.</p >
        <div className="border-t border-white/10 mt-10 pt-8">
          <h3 className="text-xl font-semibold text-white mb-4">Final Thoughts</h3>
          <p>Healthy feeding depends on multiple factors working together. Using a science-based approach can help support lifelong health.</p >
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
        <p>One of the biggest health challenges facing modern pets is obesity. Gradual weight gain can be difficult to notice, and many overweight pets appear &quot;normal&quot; to their families.</p >
        <h3 className="text-xl font-semibold text-white mt-10 mb-4">What Is Body Condition Score (BCS)?</h3>
        <p>Body Condition Score is a practical method used by veterinarians to estimate the amount of body fat a pet carries. BCS evaluates how your pet looks and feels instead of focusing only on the scale.</p >
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
        <h3 className="text-xl font-semibold text-white mt-10 mb-4">Why Digital Records Make Life Easier</h3>
        <p>Paper records can easily become scattered. Digital records offer quick searching, easy updates, chronological timelines, and convenient access whenever needed.</p >
      </div>
    )
  }
];

export async function generateStaticParams() {
  return [{ slug: "calories" }, { slug: "bcs" }, { slug: "checklist" }];
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = ARTICLES_CONTENT.find((a) => a.id === params.slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | SmartEaseTech Studio`,
    description: article.subtitle,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = ARTICLES_CONTENT.find((a) => a.id === params.slug);
  if (!article) notFound();

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
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white mb-4">{article.title}</h1>
          <p className="text-lg text-emerald-400 font-medium">{article.subtitle}</p >
        </div>
        <div className="prose prose-invert max-w-none">{article.content}</div>
      </article>
      <footer className="py-10 border-t border-white/10 text-center">
        <div className="mb-4 text-white/40 text-sm">&copy; {new Date().getFullYear()} Minghua Li. All rights reserved.</div>
      </footer>
    </main>
  );
}