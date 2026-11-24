import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import { APPS_DATA, type AppTheme } from '../../apps/data';

const SITE_URL = 'https://www.smarteasetechstudio.app';

const CATEGORY_LABELS: Record<string, string> = {
  pet: 'Pet Care',
  prayer: 'Prayer & Faith',
  invoice: 'Business Utility',
  'habit-tracking': 'Habit & Routine',
};

const THEME_STYLES: Record<
  AppTheme,
  {
    badge: string;
    subtitle: string;
    ctaBorder: string;
    primaryBtn: string;
    secondaryBtn: string;
    relatedHover: string;
  }
> = {
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    subtitle: 'text-emerald-400',
    ctaBorder: 'border-emerald-500/30',
    primaryBtn: 'bg-emerald-600 hover:bg-emerald-500',
    secondaryBtn:
      'border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200',
    relatedHover: 'hover:border-emerald-500/40 hover:text-emerald-300',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    subtitle: 'text-amber-400',
    ctaBorder: 'border-amber-500/30',
    primaryBtn: 'bg-amber-600 hover:bg-amber-500',
    secondaryBtn:
      'border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200',
    relatedHover: 'hover:border-amber-500/40 hover:text-amber-300',
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    subtitle: 'text-cyan-400',
    ctaBorder: 'border-cyan-500/30',
    primaryBtn: 'bg-cyan-600 hover:bg-cyan-500',
    secondaryBtn:
      'border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200',
    relatedHover: 'hover:border-cyan-500/40 hover:text-cyan-300',
  },
  indigo: {
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    subtitle: 'text-indigo-400',
    ctaBorder: 'border-indigo-500/30',
    primaryBtn: 'bg-indigo-600 hover:bg-indigo-500',
    secondaryBtn:
      'border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-200',
    relatedHover: 'hover:border-indigo-500/40 hover:text-indigo-300',
  },
};

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
            if (match) wordCount = parseInt(match[0], 10);
          } else {
            wordCount = content.length / 3;
          }

          let articleTitle = data.title || data.heading || data.subject;
          if (!articleTitle) {
            const matchTitle = content.match(/^#\s+(.+)$/m);
            articleTitle =
              matchTitle?.[1]?.trim() || slug.replace(/[-_]/g, ' ');
          }

          const articleSubtitle =
            data.meta_description || data.subtitle || data.description || '';

          return {
            id: slug,
            category,
            title: articleTitle,
            subtitle: articleSubtitle,
            date: data.date ? String(data.date) : 'September 2026',
            readTime: `${Math.ceil(wordCount / 200)} min read`,
            content,
          };
        }
      }
    }
  }
  return null;
}

// 严格按同一 category 抓取最多 4 篇相关文章（严禁跨垂类推荐）
function getRelatedPosts(category: string, currentSlug: string) {
  const categoryPath = path.join(process.cwd(), 'content/posts', category);
  if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(categoryPath)
    .filter((file) => file.endsWith('.md') && file !== `${currentSlug}.md`)
    .sort()
    .slice(0, 4)
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const fileContents = fs.readFileSync(path.join(categoryPath, file), 'utf8');
      const { data, content } = matter(fileContents);

      let title = data.title || data.heading || data.subject;
      if (!title) {
        const matchTitle = content.match(/^#\s+(.+)$/m);
        title = matchTitle?.[1]?.trim() || slug.replace(/[-_]/g, ' ');
      }

      return { slug, title };
    });
}

// 将日期安全转为 ISO 格式供 Article Schema 使用
function toIsoDate(rawDate: string): string | undefined {
  if (/^\d{4}-\d{2}-\d{2}/.test(rawDate)) {
    return rawDate.slice(0, 10);
  }
  const parsed = Date.parse(rawDate);
  if (!Number.isNaN(parsed)) {
    return new Date(parsed).toISOString().slice(0, 10);
  }
  return undefined;
}

export function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  const paths: { slug: string }[] = [];

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const article = getPostBySlug(resolvedParams.slug);
  if (!article) return { title: 'Article Not Found' };

  const pagePath = `/blog/${article.id}`;
  return {
    title: article.title,
    description: article.subtitle,
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      type: 'article',
      url: `${SITE_URL}${pagePath}`,
      title: article.title,
      description: article.subtitle,
      images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const article = getPostBySlug(resolvedParams.slug);

  if (!article) {
    notFound();
  }

  const app =
    Object.values(APPS_DATA).find(
      (item) => item.blogCategory === article.category
    ) || APPS_DATA['pray-verses'];

  const theme = THEME_STYLES[app.theme];
  const categoryLabel = CATEGORY_LABELS[article.category] || 'Insights';
  const relatedPosts = getRelatedPosts(article.category, article.id);
  const pageUrl = `${SITE_URL}/blog/${article.id}`;
  const isoDate = toIsoDate(article.date);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: article.title,
        description: article.subtitle,
        image: `${SITE_URL}/og-image.png`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': pageUrl,
        },
        ...(isoDate ? { datePublished: isoDate } : {}),
        author: {
          '@type': 'Organization',
          name: 'SmartEaseTech Studio',
          url: SITE_URL,
        },
        publisher: {
          '@type': 'Organization',
          name: 'SmartEaseTech Studio',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/og-image.png`,
          },
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog & Resources',
            item: `${SITE_URL}/blog`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: categoryLabel,
            item: `${SITE_URL}/blog/category/${article.category}`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: article.title,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* 面包屑导航（锚定本垂类专题） */}
      <nav
        aria-label="Breadcrumb"
        className="mb-8 text-xs font-medium text-slate-400"
      >
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-amber-300 transition-colors">
              Blog
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={`/blog/category/${article.category}`}
              className="hover:text-amber-300 transition-colors"
            >
              {categoryLabel}
            </Link>
          </li>
        </ol>
      </nav>

      <article>
        {/* 文章头部 */}
        <header className="border-b border-emerald-900/40 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <Link
              href={`/blog/category/${article.category}`}
              className={`px-3 py-1 rounded-full border font-medium ${theme.badge}`}
            >
              {categoryLabel}
            </Link>
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
            {article.title}
          </h1>
          {article.subtitle && (
            <p className={`text-lg font-medium leading-relaxed ${theme.subtitle}`}>
              {article.subtitle}
            </p>
          )}
        </header>

        {/* 正文区域 */}
        <div className="prose prose-invert prose-lg max-w-none mb-16">
          <ReactMarkdown>{article.content}</ReactMarkdown>
        </div>

        {/* 底部专属产品回流卡片（Spoke → Hub 权重汇聚 + App Store 转化） */}
        <section
          className={`mt-16 p-8 rounded-3xl border ${theme.ctaBorder} bg-[#05221b]/60 backdrop-blur-sm flex flex-col gap-6`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            <Image
              src={app.icon}
              alt={app.iconAlt}
              width={72}
              height={72}
              className="rounded-2xl shadow-lg border border-white/10 shrink-0"
            />
            <div>
              <h2 className="text-2xl font-bold text-white mb-1.5">
                {app.name}
              </h2>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {app.seoDescription}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
            <Link
              href={`/apps/${app.slug}`}
              className={`inline-flex items-center gap-2 ${theme.primaryBtn} text-white px-7 py-3 rounded-full text-sm font-semibold shadow-lg transition-all duration-300`}
            >
              <span>Explore {app.name}</span>
              <span>&rarr;</span>
            </Link>
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 border px-6 py-3 rounded-full text-sm font-medium transition-colors ${theme.secondaryBtn}`}
            >
              <svg
                viewBox="0 0 384 512"
                width="14"
                height="14"
                fill="currentColor"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 51 17.9 76.2 17.9 48.6-.1 90.4-82.5 102.6-119.3-39-19.9-50-46.7-50-81.2zM211 118.8c34.5-38.3 22-81.3 12-96.1-33 1.1-66.5 32.1-66.5 66.2 0 31.8 23.6 57 44.5 57 5.4 0 10.1-.6 10-27.1z" />
              </svg>
              <span>Download on App Store</span>
            </a>
          </div>
        </section>

        {/* 相关阅读（严格隔离：只推荐同分类文章） */}
        {relatedPosts.length > 0 && (
          <section className="mt-14 pt-10 border-t border-emerald-900/40 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">
                More {categoryLabel} Guides
              </h2>
              <Link
                href={`/blog/category/${article.category}`}
                className="text-xs font-medium text-slate-400 hover:text-amber-300 transition-colors"
              >
                View all &rarr;
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className={`p-5 rounded-2xl bg-[#05221b]/40 border border-emerald-900/40 text-sm font-medium text-slate-200 transition-colors flex items-center justify-between gap-3 ${theme.relatedHover}`}
                >
                  <span className="line-clamp-2">{post.title}</span>
                  <span className="shrink-0">&rarr;</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
}