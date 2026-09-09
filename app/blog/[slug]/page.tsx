import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

// 🚀 核心引擎：智能遍历所有子文件夹，兼容多种标题字段的 Markdown 读取
function getPostBySlug(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  if (fs.existsSync(postsDirectory)) {
    const categories = fs.readdirSync(postsDirectory);
    for (const category of categories) {
      const categoryPath = path.join(postsDirectory, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const fullPath = path.join(categoryPath, `${slug}.md`);
        if (fs.existsSync(fullPath)) {
          const fileContents = fs.readFileSync(fullPath, 'utf8');
          const { data, content } = matter(fileContents);
          
          let wordCount = 1000;
          if (data.word_count_estimate) {
            const match = String(data.word_count_estimate).match(/\d+/);
            if (match) wordCount = parseInt(match[0]);
          }

          // 💡 强力容错：兼容多种标题与描述字段名
          const articleTitle = data.title || data.heading || data.subject || "Untitled Article";
          const articleSubtitle = data.meta_description || data.subtitle || data.description || "";

          return {
            id: slug,
            category: category,
            title: articleTitle,
            subtitle: articleSubtitle,
            date: data.date || 'September 2026',
            readTime: `${Math.ceil(wordCount / 200)} min read`,
            content: content,
          };
        }
      }
    }
  }
  return null;
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  let paths: any[] = [];

  if (fs.existsSync(postsDirectory)) {
    const categories = fs.readdirSync(postsDirectory);
    categories.forEach((category) => {
      const categoryPath = path.join(postsDirectory, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const fileNames = fs.readdirSync(categoryPath);
        fileNames.forEach((fileName) => {
          if (fileName.endsWith('.md')) {
            paths.push({ slug: fileName.replace(/\.md$/, '') });
          }
        });
      }
    });
  }

  return paths;
}

export async function generateMetadata({ params }: any) {
  const resolvedParams = await params;
  const article = getPostBySlug(resolvedParams.slug);
  if (!article) return { title: "Article Not Found" };
  return { title: `${article.title} | SmartEaseTech Studio`, description: article.subtitle };
}

export default async function BlogPost({ params }: any) {
  const resolvedParams = await params;
  const article = getPostBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const isPet = article.category === "pet";
  const isInvoice = article.category === "invoice";
  
  let ctaAppName, ctaAppSlogan, ctaAppIcon, ctaAppLink, ctaColorTheme;

  if (isPet) {
    ctaAppName = "PawOptima Steward";
    ctaAppSlogan = "The complete, science-based feeding and health system for dogs and cats — 100% offline, no subscription, no account.";
    ctaAppIcon = "/pawoptima-icon.png";
    ctaAppLink = "https://apps.apple.com/app/id6782809353";
    ctaColorTheme = "emerald";
  } else if (isInvoice) {
    ctaAppName = "InvoiceHive";
    ctaAppSlogan = "The local-first, privacy-focused invoicing and billing utility built for independent developers, freelancers, and small studios.";
    ctaAppIcon = "/invoicehive-icon.png";
    ctaAppLink = "https://apps.apple.com/app/id6800766422";
    ctaColorTheme = "cyan";
  } else {
    ctaAppName = "Pray Verses";
    ctaAppSlogan = "The private, offline prayer journal that matches Scripture to what's actually on your heart.";
    ctaAppIcon = "/prayverses-icon.png";
    ctaAppLink = "https://apps.apple.com/app/id6788009023";
    ctaColorTheme = "amber";
  }

  return (
    <main className="min-h-screen text-white relative overflow-hidden bg-zinc-950">
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-4 flex items-center">
          <Link href="/blog" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2">
            &larr; Back to Blog
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-12">
        <div className="border-b border-white/10 pb-8 mb-10">
          <div className="flex gap-4 text-xs text-white/40 mb-4">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white mb-4">
            {article.title}
          </h1>
          <p className={`text-lg font-medium text-${ctaColorTheme}-400`}>
            {article.subtitle}
          </p>
        </div>
        
        <div className="prose prose-invert max-w-none mb-16">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        <div className={`mt-16 p-8 rounded-3xl border border-${ctaColorTheme}-500/30 bg-white/5 flex flex-col md:flex-row items-center gap-6 justify-between`}>
          <div className="flex items-center gap-6 text-left">
            <Image src={ctaAppIcon} alt={ctaAppName} width={80} height={80} className="rounded-2xl shadow-lg border border-white/10 shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{ctaAppName}</h3>
              <p className="text-sm text-white/70 max-w-sm">{ctaAppSlogan}</p>
            </div>
          </div>
          <a 
            href={ctaAppLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`shrink-0 inline-flex items-center gap-3 bg-${ctaColorTheme}-600 hover:bg-${ctaColorTheme}-500 text-white px-8 py-3.5 rounded-full font-medium shadow-lg transition-all duration-300`}
          >
            <svg viewBox="0 0 384 512" width="16" height="16" fill="currentColor">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 51 17.9 76.2 17.9 48.6-.1 90.4-82.5 102.6-119.3-39-19.9-50-46.7-50-81.2zM211 118.8c34.5-38.3 22-81.3 12-96.1-33 1.1-66.5 32.1-66.5 66.2 0 31.8 23.6 57 44.5 57 5.4 0 10.1-.6 10-27.1z"/>
            </svg>
            Download Now
          </a>
        </div>
      </article>
    </main>
  );
}