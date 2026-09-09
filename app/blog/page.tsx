import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// 🚀 核心引擎：全自动扫描本地文件夹并提取 Markdown 元数据
function getAllPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const categories = ['pet', 'prayer', 'invoice']; // 自动扫描您的三大独立分类
  let allPosts: any[] = [];

  categories.forEach((category) => {
    const categoryPath = path.join(postsDirectory, category);
    // 确保文件夹存在，避免报错
    if (fs.existsSync(categoryPath)) {
      const fileNames = fs.readdirSync(categoryPath);
      fileNames.forEach((fileName) => {
        if (fileName.endsWith('.md')) {
          const slug = fileName.replace(/\.md$/, '');
          const fullPath = path.join(categoryPath, fileName);
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          
          // 使用 gray-matter 解析 Markdown 顶部的 Frontmatter 数据
          const { data } = matter(fileContents);

          // 智能计算阅读时间 (按每分钟 200 字估算)
          let wordCount = 1000;
          if (data.word_count_estimate) {
            const match = data.word_count_estimate.match(/\d+/);
            if (match) wordCount = parseInt(match[0]);
          }
          const readTime = `${Math.ceil(wordCount / 200)} min read`;

          // 映射分类名称
          let categoryName = "Insights";
          if (category === "pet") categoryName = "Pet Care";
          else if (category === "invoice") categoryName = "Business Utility";
          else if (category === "prayer") categoryName = "Prayer & Faith";

          allPosts.push({
            id: slug,
            category: category,
            categoryName: categoryName,
            title: data.title || 'Untitled Article',
            // 自动将 meta_description 映射为副标题摘要
            subtitle: data.meta_description || data.subtitle || '',
            date: data.date || 'September 2026',
            readTime: readTime,
          });
        }
      });
    }
  });

  return allPosts;
}

export const metadata = {
  title: "Blog & Resources | SmartEaseTech Studio",
  description: "Explore our expert guides on pet nutrition, professional invoicing, and private prayer journaling.",
};

export default function BlogIndexPage() {
  // 引擎启动：实时拉取所有文章数据
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
          // 智能卡片颜色判定 (发票专区 invoice 触发青色)
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