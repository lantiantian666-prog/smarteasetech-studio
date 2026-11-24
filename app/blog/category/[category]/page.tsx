import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { APPS_DATA, type AppTheme } from '../../../apps/data';

const SITE_URL = 'https://www.smarteasetechstudio.app';

const CATEGORY_CONFIG: Record<
  string,
  {
    name: string;
    seoTitle: string;
    seoDescription: string;
    headline: string;
    intro: string;
  }
> = {
  pet: {
    name: 'Pet Care',
    seoTitle: 'Pet Nutrition & Feeding Guides',
    seoDescription:
      'Science-based dog and cat feeding guides, RER/DER calorie formulas, mixed diet ratios, and pet health tracking resources by PawOptima Steward.',
    headline: 'Pet Care & Nutrition Guides',
    intro:
      'Veterinary-backed feeding science, portion calculations, and practical health guides for dog and cat parents.',
  },
  prayer: {
    name: 'Prayer & Faith',
    seoTitle: 'Private Prayer Journal & Scripture Guides',
    seoDescription:
      'Practical reflections on daily prayer lists, tracking answered prayers, Scripture matching, and protecting spiritual privacy offline.',
    headline: 'Prayer & Faith Guides',
    intro:
      'Thoughtful guides on organizing prayer lists, reflecting on answered prayers, and keeping your spiritual journal private.',
  },
  invoice: {
    name: 'Business Utility',
    seoTitle: 'Freelance Invoicing & Contractor Billing Guides',
    seoDescription:
      'Actionable guides on offline PDF invoicing, contractor estimates, sales tax handling, and local-first financial workflows for solo businesses.',
    headline: 'Freelance Invoicing & Billing Guides',
    intro:
      'Clear billing workflows, estimate-to-invoice best practices, and local-first financial privacy tips for contractors and freelancers.',
  },
  'habit-tracking': {
    name: 'Habit & Routine',
    seoTitle: 'Habit Tracking, Momentum & Recovery Guides',
    seoDescription:
      'Evidence-informed guides on building lasting routines without streak anxiety, understanding behavioral load, and tracking habits privately.',
    headline: 'Habit & Routine Analytics Guides',
    intro:
      'Practical frameworks for sustainable consistency, routine recovery, and private on-device habit tracking.',
  },
};

const THEME_STYLES: Record<
  AppTheme,
  {
    badge: string;
    cardBorder: string;
    hoverBorder: string;
    titleHover: string;
    linkColor: string;
    primaryBtn: string;
    secondaryBtn: string;
  }
> = {
  emerald: {
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    cardBorder: 'border-emerald-900/50',
    hoverBorder: 'hover:border-emerald-500/40',
    titleHover: 'group-hover:text-emerald-400',
    linkColor: 'text-emerald-400/80 group-hover:text-emerald-400',
    primaryBtn: 'bg-emerald-600 hover:bg-emerald-500',
    secondaryBtn:
      'border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-200',
  },
  amber: {
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    cardBorder: 'border-amber-900/50',
    hoverBorder: 'hover:border-amber-500/40',
    titleHover: 'group-hover:text-amber-400',
    linkColor: 'text-amber-400/80 group-hover:text-amber-400',
    primaryBtn: 'bg-amber-600 hover:bg-amber-500',
    secondaryBtn:
      'border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-200',
  },
  cyan: {
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    cardBorder: 'border-cyan-900/50',
    hoverBorder: 'hover:border-cyan-500/40',
    titleHover: 'group-hover:text-cyan-400',
    linkColor: 'text-cyan-400/80 group-hover:text-cyan-400',
    primaryBtn: 'bg-cyan-600 hover:bg-cyan-500',
    secondaryBtn:
      'border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-200',
  },
  indigo: {
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    cardBorder: 'border-indigo-900/50',
    hoverBorder: 'hover:border-indigo-500/40',
    titleHover: 'group-hover:text-indigo-400',
    linkColor: 'text-indigo-400/80 group-hover:text-indigo-400',
    primaryBtn: 'bg-indigo-600 hover:bg-indigo-500',
    secondaryBtn:
      'border-indigo-500/30 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-200',
  },
};

function getPostsByCategory(category: string) {
  const categoryPath = path.join(process.cwd(), 'content/posts', category);
  if (!fs.existsSync(categoryPath) || !fs.statSync(categoryPath).isDirectory()) {
    return [];
  }

  return fs
    .readdirSync(categoryPath)
    .filter((fileName) => fileName.endsWith('.md'))
    .sort()
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(categoryPath, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      let wordCount = 1000;
      if (data.word_count_estimate) {
        const match = String(data.word_count_estimate).match(/\d+/);
        if (match) wordCount = parseInt(match[0], 10);
      } else {
        wordCount = content.length / 3;
      }

      let title = data.title || data.heading || data.subject;
      if (!title) {
        const matchTitle = content.match(/^#\s+(.+)$/m);
        title = matchTitle?.[1]?.trim() || slug.replace(/[-_]/g, ' ');
      }

      const subtitle =
        data.meta_description || data.subtitle || data.description || '';

      return {
        id: slug,
        title,
        subtitle,
        readTime: `${Math.ceil(wordCount / 200)} min read`,
      };
    });
}

export function generateStaticParams() {
  return Object.keys(CATEGORY_CONFIG).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const config = CATEGORY_CONFIG[category];
  if (!config) return { title: 'Category Not Found' };

  return {
    title: config.seoTitle,
    description: config.seoDescription,
    alternates: {
      canonical: `/blog/category/${category}`,
    },
  };
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const config = CATEGORY_CONFIG[category];
  const app = Object.values(APPS_DATA).find(
    (item) => item.blogCategory === category
  );

  if (!config || !app) {
    notFound();
  }

  const theme = THEME_STYLES[app.theme];
  const posts = getPostsByCategory(category);
  const pageUrl = `${SITE_URL}/blog/category/${category}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        name: config.headline,
        description: config.seoDescription,
        url: pageUrl,
        publisher: {
          '@type': 'Organization',
          name: 'SmartEaseTech Studio',
          url: SITE_URL,
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
            name: config.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* 面包屑导航 */}
      <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-400">
        <ol className="flex flex-wrap items-center gap-2">
          <li>
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/blog" className="hover:text-amber-300 transition-colors">
              Blog &amp; Resources
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            {config.name}
          </li>
        </ol>
      </nav>

      {/* 专题页标题 */}
      <header className="max-w-3xl space-y-4">
        <span
          className={`inline-flex items-center px-3.5 py-1 rounded-full border text-xs font-medium ${theme.badge}`}
        >
          {config.name} Topic Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
          {config.headline}
        </h1>
        <p className="text-base text-slate-300 font-light leading-relaxed">
          {config.intro}
        </p>
      </header>

      {/* 顶部所属 App 枢纽卡片（将专题权重集中导向产品落地页） */}
      <section
        className={`p-6 sm:p-8 rounded-3xl bg-[#05221b]/60 border ${theme.cardBorder} flex flex-col md:flex-row items-start md:items-center justify-between gap-6`}
      >
        <div className="flex items-center gap-4">
          <Image
            src={app.icon}
            alt={app.iconAlt}
            width={60}
            height={60}
            className="rounded-2xl shadow-md border border-white/10 shrink-0"
          />
          <div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Featured Local-First iOS App
            </p>
            <h2 className="text-xl font-bold text-white mt-0.5">{app.name}</h2>
            <p className="text-sm text-slate-300 font-light mt-1 max-w-xl">
              {app.seoDescription}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link
            href={`/apps/${app.slug}`}
            className={`inline-flex items-center gap-2 ${theme.primaryBtn} text-white px-6 py-2.5 rounded-full text-sm font-medium shadow-md transition-colors`}
          >
            <span>Explore {app.name}</span>
            <span>&rarr;</span>
          </Link>
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center px-5 py-2.5 rounded-full border text-sm font-medium transition-colors ${theme.secondaryBtn}`}
          >
            App Store
          </a>
        </div>
      </section>

      {/* 严格隔离：只列出本分类文章 */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((article) => (
          <Link
            key={article.id}
            href={`/blog/${article.id}`}
            className={`group relative p-8 rounded-3xl bg-[#05221b]/40 border border-emerald-900/40 ${theme.hoverBorder} transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between`}
          >
            <div>
              <div className="flex items-center justify-between text-xs mb-4">
                <span
                  className={`px-3 py-1 rounded-full border font-medium ${theme.badge}`}
                >
                  {config.name}
                </span>
                <span className="text-slate-500">{article.readTime}</span>
              </div>
              <h2
                className={`text-xl font-semibold text-white transition-colors mb-3 leading-snug ${theme.titleHover}`}
              >
                {article.title}
              </h2>
              <p className="text-sm text-slate-400 font-light line-clamp-3 leading-relaxed mb-6">
                {article.subtitle}
              </p>
            </div>
            <div
              className={`flex items-center text-xs font-medium gap-1 pt-4 border-t border-emerald-900/30 ${theme.linkColor}`}
            >
              <span>Read Full Guide</span>
              <span className="group-hover:translate-x-1 transition-transform">
                &rarr;
              </span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}