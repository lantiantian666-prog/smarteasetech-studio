import Link from 'next/link';

// 12 篇文章的元数据索引 (6篇宠物 + 6篇祷告)
const BLOG_ARTICLES = [
  // 宠物分类 (Pet Care - 6篇)
  {
    id: "how-much-to-feed-dog-cat",
    category: "pet",
    categoryName: "Pet Care",
    title: "How Much Should You Feed Your Dog or Cat? The Science Behind Daily Calorie Needs",
    subtitle: "Learn the veterinary formula used to calculate how much to feed a dog or cat each day, based on weight, life stage, and activity level.",
    date: "August 2026",
    readTime: "7 min read",
  },
  {
    id: "foods-toxic-to-dogs-and-cats",
    category: "pet",
    categoryName: "Pet Care",
    title: "25 Common Human Foods That Are Toxic to Dogs and Cats",
    subtitle: "A practical guide to everyday foods that are dangerous for dogs and cats — from chocolate and grapes to xylitol.",
    date: "August 2026",
    readTime: "8 min read",
  },
  {
    id: "body-condition-score-guide",
    category: "pet",
    categoryName: "Pet Care",
    title: "Is Your Dog or Cat Overweight? How to Read the 9-Point Body Condition Score",
    subtitle: "A step-by-step guide to assessing whether a dog or cat is underweight, ideal, or overweight using hands-on veterinary checks.",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    id: "puppy-kitten-growth-chart-by-breed",
    category: "pet",
    categoryName: "Pet Care",
    title: "Puppy and Kitten Growth Charts by Breed — Is My Pet Growing at a Healthy Rate?",
    subtitle: "Learn why pet growth should be tracked against breed-specific percentile curves instead of generic weight charts.",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    id: "safe-weight-loss-rate-dogs-cats",
    category: "pet",
    categoryName: "Pet Care",
    title: "Safe Weight Loss for Dogs and Cats — How Fast Is Too Fast?",
    subtitle: "A guide to safe weight-loss rate guidelines, why cats need extra caution, and how to build a sustainable plan.",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    id: "mixed-raw-diet-calorie-calculator",
    category: "pet",
    categoryName: "Pet Care",
    title: "How to Calculate Calories for Mixed, Raw, and Multi-Food Diets",
    subtitle: "How to correctly split daily calories across multiple foods like kibble, wet food, and raw without overfeeding.",
    date: "August 2026",
    readTime: "6 min read",
  },

  // 祷告分类 (Prayer & Faith - 6篇)
  {
    id: "how-to-start-a-prayer-journal",
    category: "prayer",
    categoryName: "Prayer & Faith",
    title: "How to Start a Prayer Journal: A Simple Guide for Beginners",
    subtitle: "A practical, no-pressure guide to starting a prayer journal — what to write, how often, and why it deepens your faith.",
    date: "August 2026",
    readTime: "5 min read",
  },
  {
    id: "bible-verses-for-anxiety",
    category: "prayer",
    categoryName: "Prayer & Faith",
    title: "Bible Verses for Anxiety: 20 Scriptures to Calm a Worried Heart",
    subtitle: "Twenty comforting Bible verses for anxiety and worry, with context and guidance on how to pray through them.",
    date: "August 2026",
    readTime: "7 min read",
  },
  {
    id: "prayer-for-someone-who-is-sick",
    category: "prayer",
    categoryName: "Prayer & Faith",
    title: "How to Pray for Someone Who Is Sick: Scripture-Based Prayers That Help",
    subtitle: "Practical guidance and Bible-based prayers for when someone you love is facing illness or health uncertainty.",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    id: "how-to-organize-a-prayer-list",
    category: "prayer",
    categoryName: "Prayer & Faith",
    title: "How to Organize a Prayer List So You Actually Use It",
    subtitle: "A step-by-step system for organizing a prayer list by person and category so nothing gets forgotten.",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    id: "how-to-track-answered-prayers",
    category: "prayer",
    categoryName: "Prayer & Faith",
    title: "How to Track Answered Prayers (And Why It Changes How You Pray)",
    subtitle: "Why keeping a record of answered prayers builds faith over time, and a simple system for tracking them.",
    date: "August 2026",
    readTime: "6 min read",
  },
  {
    id: "is-it-safe-to-use-a-prayer-app",
    category: "prayer",
    categoryName: "Prayer & Faith",
    title: "Is It Safe to Use a Prayer App? What to Check Before You Trust One",
    subtitle: "A practical guide to prayer app privacy — data collection, local storage, encryption, and questions to ask.",
    date: "August 2026",
    readTime: "6 min read",
  }
];

export const metadata = {
  title: "Blog & Resources | SmartEaseTech Studio",
  description: "Explore our expert guides on pet nutrition, science-based feeding, and private prayer journaling.",
};

export default function BlogIndexPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      {/* 顶部标题区 */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Insights & <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">Resources</span>
        </h1>
        <p className="text-base text-slate-400 font-light">
          In-depth guides, veterinary nutrition science, and reflections on private, local-first software engineering.
        </p>
      </div>

      {/* 文章网格列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_ARTICLES.map((article) => {
          const isPet = article.category === "pet";
          return (
            <Link 
              key={article.id} 
              href={`/blog/${article.id}`}
              className="group relative p-8 rounded-3xl bg-[#05221b]/40 border border-emerald-900/40 hover:border-amber-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              <div>
                {/* 分类标签与阅读时间 */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className={`px-3 py-1 rounded-full font-medium ${
                    isPet 
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20' 
                      : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                  }`}>
                    {article.categoryName}
                  </span>
                  <span className="text-slate-500">{article.readTime}</span>
                </div>

                {/* 标题 */}
                <h2 className="text-xl font-semibold text-white group-hover:text-amber-300 transition-colors mb-3 leading-snug">
                  {article.title}
                </h2>

                {/* 副标题摘要 */}
                <p className="text-sm text-slate-400 font-light line-clamp-3 leading-relaxed mb-6">
                  {article.subtitle}
                </p>
              </div>

              {/* 底部阅读更多引导 */}
              <div className="flex items-center text-xs font-medium text-amber-400/80 group-hover:text-amber-300 gap-1 pt-4 border-t border-emerald-900/30">
                <span>Read Full Guide</span>
                <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
}