import Link from 'next/link';

// 21 篇文章的元数据索引 (9篇宠物 + 6篇祷告 + 6篇发票商业)
const BLOG_ARTICLES = [
  // ---------------------------------------------------------
  // 宠物分类 (Pet Care - 9篇)
  // ---------------------------------------------------------
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
  {
    id: "how-to-read-pet-food-label",
    category: "pet",
    categoryName: "Pet Care",
    title: "How to Actually Read a Pet Food Label (Most Owners Skip the Number That Matters Most)",
    subtitle: "Guaranteed analysis, calorie content, and AAFCO statements explained — a plain-English guide to reading pet food labels and finding the number you actually need.[cite: 1]",
    date: "September 2026",
    readTime: "5 min read",
  },
  {
    id: "multi-person-pet-care-without-cloud",
    category: "pet",
    categoryName: "Pet Care",
    title: "How to Coordinate Pet Care Across Multiple People Without a Shared Cloud Account",
    subtitle: "Living with roommates or family members who all feed the same pet? Here's why \"who fed the dog today\" is a real problem, and how to solve it without a cloud account.[cite: 2]",
    date: "September 2026",
    readTime: "5 min read",
  },
  {
    id: "senior-dog-cat-nutrition-guide",
    category: "pet",
    categoryName: "Pet Care",
    title: "Senior Dog and Cat Nutrition — When and How to Adjust Feeding as Your Pet Ages",
    subtitle: "How aging changes a dog or cat's calorie needs, when to start adjusting feeding for a senior pet, and the mistakes that lead to unnoticed weight change in older pets.[cite: 3]",
    date: "September 2026",
    readTime: "5 min read",
  },

  // ---------------------------------------------------------
  // 祷告分类 (Prayer & Faith - 6篇)
  // ---------------------------------------------------------
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
  },

  // ---------------------------------------------------------
  // 商业工具分类 (Business Utility - 6篇)
  // ---------------------------------------------------------
  {
    id: "convert-estimate-to-invoice-without-retyping",
    category: "business",
    categoryName: "Business Utility",
    title: "The Best Way to Convert an Estimate Into an Invoice (Without Re-Typing Everything)",
    subtitle: "Why rebuilding a document from scratch after a client says \"yes\" is a waste of time — and what a proper estimate-to-invoice workflow looks like.[cite: 4]",
    date: "September 2026",
    readTime: "4 min read",
  },
  {
    id: "how-to-create-an-invoice-freelancer-guide",
    category: "business",
    categoryName: "Business Utility",
    title: "How to Create an Invoice as a Freelancer: Free Step-by-Step Guide (2026)",
    subtitle: "Learn exactly what a freelance invoice needs, see a real example, and get paid faster with this simple, no-nonsense walkthrough.[cite: 5]",
    date: "September 2026",
    readTime: "5 min read",
  },
  {
    id: "what-must-be-on-small-business-invoice-legal",
    category: "business",
    categoryName: "Business Utility",
    title: "What Must Be on a Small Business Invoice? Legal Requirements in the US, UK, Canada & Australia",
    subtitle: "A plain-English breakdown of the invoice fields that make your billing legally valid in each English-speaking market.[cite: 6]",
    date: "September 2026",
    readTime: "5 min read",
  },
  {
    id: "invoice-vs-estimate-vs-quote-difference",
    category: "business",
    categoryName: "Business Utility",
    title: "Invoice vs. Estimate vs. Quote: What's the Difference (and When to Use Each)",
    subtitle: "Freelancers and contractors often use these words interchangeably — here's exactly what separates them and how to use each one correctly.[cite: 7]",
    date: "September 2026",
    readTime: "4 min read",
  },
  {
    id: "sales-tax-invoices-all-50-us-states-guide",
    category: "business",
    categoryName: "Business Utility",
    title: "How to Calculate Sales Tax for Invoices Across All 50 US States",
    subtitle: "US sales tax isn't federal — here's how state-by-state rates actually work, and how to stop guessing on every invoice you send.[cite: 8]",
    date: "September 2026",
    readTime: "5 min read",
  },
  {
    id: "contractor-invoicing-101-get-paid-faster",
    category: "business",
    categoryName: "Business Utility",
    title: "Contractor Invoicing 101: How to Get Paid Faster on Every Job",
    subtitle: "Practical invoicing habits for general contractors and tradespeople — from deposits to photo documentation to avoiding payment disputes.[cite: 9]",
    date: "September 2026",
    readTime: "4 min read",
  }
];

export const metadata = {
  title: "Blog & Resources | SmartEaseTech Studio",
  description: "Explore our expert guides on pet nutrition, professional invoicing, and private prayer journaling.",
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
          In-depth guides, veterinary nutrition science, professional invoicing tips, and reflections on private, local-first software engineering.
        </p>
      </div>

      {/* 文章网格列表 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_ARTICLES.map((article) => {
          // 智能卡片颜色判定 (翡翠绿 / 青色 / 琥珀金)
          let badgeStyle = "";
          let borderHoverStyle = "";
          let titleHoverStyle = "";
          let linkHoverStyle = "";
          
          if (article.category === "pet") {
            badgeStyle = "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20";
            borderHoverStyle = "hover:border-emerald-500/40";
            titleHoverStyle = "group-hover:text-emerald-400";
            linkHoverStyle = "text-emerald-400/80 group-hover:text-emerald-400";
          } else if (article.category === "business") {
            badgeStyle = "bg-cyan-500/10 text-cyan-300 border border-cyan-500/20";
            borderHoverStyle = "hover:border-cyan-500/40";
            titleHoverStyle = "group-hover:text-cyan-400";
            linkHoverStyle = "text-cyan-400/80 group-hover:text-cyan-400";
          } else {
            badgeStyle = "bg-amber-500/10 text-amber-300 border border-amber-500/20";
            borderHoverStyle = "hover:border-amber-500/40";
            titleHoverStyle = "group-hover:text-amber-400";
            linkHoverStyle = "text-amber-400/80 group-hover:text-amber-400";
          }

          return (
            <Link 
              key={article.id} 
              href={`/blog/${article.id}`}
              className={`group relative p-8 rounded-3xl bg-[#05221b]/40 border border-emerald-900/40 ${borderHoverStyle} transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between`}
            >
              <div>
                {/* 分类标签与阅读时间 */}
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className={`px-3 py-1 rounded-full font-medium ${badgeStyle}`}>
                    {article.categoryName}
                  </span>
                  <span className="text-slate-500">{article.readTime}</span>
                </div>

                {/* 标题 */}
                <h2 className={`text-xl font-semibold text-white transition-colors mb-3 leading-snug ${titleHoverStyle}`}>
                  {article.title}
                </h2>

                {/* 副标题摘要 */}
                <p className="text-sm text-slate-400 font-light line-clamp-3 leading-relaxed mb-6">
                  {article.subtitle}
                </p>
              </div>

              {/* 底部阅读更多引导 */}
              <div className={`flex items-center text-xs font-medium gap-1 pt-4 border-t border-emerald-900/30 ${linkHoverStyle}`}>
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