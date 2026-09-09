import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 🚀 终极稳定版引擎：全自动扫描、严格锁定分类排序、多重标题容错
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  let allPosts: any[] = [];

  if (fs.existsSync(postsDirectory)) {
    const categories = fs.readdirSync(postsDirectory);
    
    categories.forEach((category) => {
      const categoryPath = path.join(postsDirectory, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const fileNames = fs.readdirSync(categoryPath);
        fileNames.forEach((fileName) => {
          if (fileName.endsWith('.md')) {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(categoryPath, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            
            const { data, content } = matter(fileContents);

            // 智能计算阅读时间
            let wordCount = 1000;
            if (data.word_count_estimate) {
              const match = String(data.word_count_estimate).match(/\d+/);
              if (match) wordCount = parseInt(match[0]);
            } else {
              wordCount = content.length / 3;
            }
            const readTime = `${Math.ceil(wordCount / 200)} min read`;

            // 🚀 强制锁定排序权重：pet = 1 (最前), prayer = 2 (中间), invoice = 3 (下面)
            let categoryName = "Insights";
            let sortOrder = 99;
            if (category === "pet") {
              categoryName = "Pet Care";
              sortOrder = 1;
            } else if (category === "prayer") {
              categoryName = "Prayer & Faith";
              sortOrder = 2;
            } else if (category === "invoice") {
              categoryName = "Business Utility";
              sortOrder = 3;
            }

            // 多保险标题抓取：YAML 里的 title -> heading -> 或者去正文里抓取第一个 #
            let articleTitle = data.title || data.heading || data.subject;
            if (!articleTitle) {
              const matchTitle = content.match(/^#\s+(.+)$/m);
              if (matchTitle && matchTitle[1]) {
                articleTitle = matchTitle[1].trim();
              } else {
                articleTitle = slug.replace(/-/g, ' ');
              }
            }

            // 多保险副标题抓取
            const articleSubtitle = data.meta_description || data.subtitle || data.description || "";

            allPosts.push({
              id: slug,
              category: category,
              sortOrder: sortOrder,
              categoryName: categoryName,
              title: articleTitle,
              subtitle: articleSubtitle,
              date: data.date || 'September 2026',
              readTime: readTime,
            });
          }
        });
      }
    });
  }

  // 🚀 严格按权重排序：宠物(1) -> 祷告(2) -> 发票(3)
  allPosts.sort((a, b) => a.sortOrder - b.sortOrder);

  return allPosts;
}

export const metadata = {
  title: "Blog & Resources | SmartEaseTech Studio",
  description: "Explore our expert guides on pet nutrition, professional invoicing, and private prayer journaling.",
};

export default function BlogIndexPage() {
  const BLOG_ARTICLES = getAllPosts();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Insights & <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">Resources</span>
        </h1>
        <p className="text-base text-slate-400 font-light">
          In-depth guides, veterinary nutrition science, professional invoicing tips, and reflections on private, local-first software engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BLOG_ARTICLES.map((article) => {
          let badgeStyle = "";
          let borderHoverStyle = "";
          let titleHoverStyle = "";
          let linkHoverStyle = "";
          
          if (article.category === "pet") {
            badgeStyle = "bg-emerald-500/10 text-emerald-300 border border-emerald-500/20";
            borderHoverStyle = "hover:border-emerald-500/40";
            titleHoverStyle = "group-hover:text-emerald-400";
            linkHoverStyle = "text-emerald-400/80 group-hover:text-emerald-400";
          } else if (article.category === "invoice") {
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
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className={`px-3 py-1 rounded-full font-medium ${badgeStyle}`}>
                    {article.categoryName}
                  </span>
                  <span className="text-slate-500">{article.readTime}</span>
                </div>
                <h2 className={`text-xl font-semibold text-white transition-colors mb-3 leading-snug ${titleHoverStyle}`}>
                  {article.title}
                </h2>
                <p className="text-sm text-slate-400 font-light line-clamp-3 leading-relaxed mb-6">
                  {article.subtitle}
                </p>
              </div>
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