import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ScreenshotGrid from '../../components/ScreenshotGrid';
import { APPS_DATA, type AppTheme } from '../data';

const SITE_URL = 'https://www.smarteasetechstudio.app';

const THEME_STYLES: Record<
  AppTheme,
  {
    sectionBorder: string;
    iconBorder: string;
    badge: string;
    primaryBtn: string;
    accentText: string;
    screenshotBorder: string;
    tableHighlightHeader: string;
    tableHighlightCell: string;
    guideHover: string;
  }
> = {
  emerald: {
    sectionBorder: 'border-emerald-900/50',
    iconBorder: 'border-emerald-500/30',
    badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
    primaryBtn: 'bg-emerald-600 hover:bg-emerald-500',
    accentText: 'text-emerald-400',
    screenshotBorder: 'border-emerald-500/20',
    tableHighlightHeader: 'bg-emerald-500/15 text-emerald-300',
    tableHighlightCell: 'bg-emerald-500/5 text-white',
    guideHover: 'hover:border-emerald-500/40 hover:text-emerald-300',
  },
  amber: {
    sectionBorder: 'border-amber-900/50',
    iconBorder: 'border-amber-500/30',
    badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
    primaryBtn: 'bg-amber-600 hover:bg-amber-500',
    accentText: 'text-amber-400',
    screenshotBorder: 'border-amber-500/20',
    tableHighlightHeader: 'bg-amber-500/15 text-amber-300',
    tableHighlightCell: 'bg-amber-500/5 text-white',
    guideHover: 'hover:border-amber-500/40 hover:text-amber-300',
  },
  cyan: {
    sectionBorder: 'border-cyan-900/50',
    iconBorder: 'border-cyan-500/30',
    badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
    primaryBtn: 'bg-cyan-600 hover:bg-cyan-500',
    accentText: 'text-cyan-400',
    screenshotBorder: 'border-cyan-500/20',
    tableHighlightHeader: 'bg-cyan-500/15 text-cyan-300',
    tableHighlightCell: 'bg-cyan-500/5 text-white',
    guideHover: 'hover:border-cyan-500/40 hover:text-cyan-300',
  },
  indigo: {
    sectionBorder: 'border-indigo-900/50',
    iconBorder: 'border-indigo-500/30',
    badge: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
    primaryBtn: 'bg-indigo-600 hover:bg-indigo-500',
    accentText: 'text-indigo-400',
    screenshotBorder: 'border-indigo-500/20',
    tableHighlightHeader: 'bg-indigo-500/15 text-indigo-300',
    tableHighlightCell: 'bg-indigo-500/5 text-white',
    guideHover: 'hover:border-indigo-500/40 hover:text-indigo-300',
  },
};

function getCategoryGuides(blogCategory: string) {
  const categoryDir = path.join(process.cwd(), 'content/posts', blogCategory);
  if (!fs.existsSync(categoryDir)) return [];

  const fileNames = fs
    .readdirSync(categoryDir)
    .filter((file) => file.endsWith('.md'))
    .sort()
    .slice(0, 5);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(categoryDir, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    const title =
      data.title || data.heading || data.subject || slug.replace(/[-_]/g, ' ');
    return { slug, title };
  });
}

export function generateStaticParams() {
  return Object.keys(APPS_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = APPS_DATA[slug];
  if (!app) return { title: 'App Not Found' };

  const pagePath = `/apps/${app.slug}`;
  const pageUrl = `${SITE_URL}${pagePath}`;

  return {
    title: {
      absolute: app.seoTitle,
    },
    description: app.seoDescription,
    alternates: {
      canonical: pagePath,
    },
    openGraph: {
      type: 'website',
      url: pageUrl,
      siteName: 'SmartEaseTech Studio',
      title: app.seoTitle,
      description: app.seoDescription,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: app.seoTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: app.seoTitle,
      description: app.seoDescription,
      images: ['/og-image.png'],
    },
  };
}

export default async function AppLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = APPS_DATA[slug];

  if (!app) {
    notFound();
  }

  const theme = THEME_STYLES[app.theme];
  const guides = getCategoryGuides(app.blogCategory);
  const pageUrl = `${SITE_URL}/apps/${app.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: app.name,
        operatingSystem: 'iOS',
        applicationCategory: app.applicationCategory,
        url: pageUrl,
        downloadUrl: app.appStoreUrl,
        image: `${SITE_URL}${app.icon}`,
        screenshot: app.screenshots.map((s) => `${SITE_URL}${s.src}`),
        description: app.seoDescription,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        author: {
          '@type': 'Organization',
          name: 'SmartEaseTech Studio',
          url: SITE_URL,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: app.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
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
            name: app.name,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-20 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />

      {/* 面包屑导航 */}
      <nav aria-label="Breadcrumb" className="text-xs font-medium text-slate-400">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-amber-300 transition-colors">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            {app.name}
          </li>
        </ol>
      </nav>

      {/* 1. 首屏 Hero 区 */}
      <section
        className={`p-8 sm:p-12 rounded-3xl bg-[#05221b]/50 border ${theme.sectionBorder} backdrop-blur-sm grid grid-cols-1 lg:grid-cols-12 gap-12 items-center shadow-2xl`}
      >
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-3.5">
            <Image
              src={app.icon}
              alt={app.iconAlt}
              width={64}
              height={64}
              priority
              className={`rounded-2xl shadow-lg border ${theme.iconBorder}`}
            />
            <span
              className={`inline-flex items-center px-3.5 py-1 rounded-full border text-xs font-medium ${theme.badge}`}
            >
              {app.badge}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {app.headline}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            {app.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href={app.appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-3 ${theme.primaryBtn} text-white px-8 py-3.5 rounded-full font-semibold shadow-lg transition-all duration-300 group`}
            >
              <span>Download on the App Store</span>
              <span className="group-hover:translate-x-0.5 transition-transform">
                &rarr;
              </span>
            </a>
            {app.slug === 'pawoptima' ? (
              <Link
                href="/tools/pet-calorie-calculator"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-emerald-500/35 bg-emerald-500/10 hover:bg-emerald-500/20 text-sm font-medium text-emerald-200 transition-colors"
              >
                <span>Try Free Calorie Calculator</span>
                <span>&rarr;</span>
              </Link>
            ) : (
              <a
                href="#compare"
                className="inline-flex items-center px-6 py-3.5 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 text-sm font-medium text-slate-200 transition-colors"
              >
                See How It Compares
              </a>
            )}
          </div>

          <ul className="flex flex-wrap gap-x-5 gap-y-2 pt-2 text-xs text-slate-400">
            {app.trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <span className={theme.accentText}>✓</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <ScreenshotGrid
            borderClass={theme.screenshotBorder}
            screenshots={app.screenshots}
          />
          <p className="mt-6 text-center text-xs text-slate-500">
            Tap any screenshot to zoom in
          </p>
        </div>
      </section>

      {/* 2. 核心功能网格 */}
      <section className="space-y-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Built Native for iOS — Fast, Private, and Reliable
          </h2>
          <p className="mt-2 text-slate-400 font-light">
            Every feature in {app.name} is engineered to run directly on your
            device with zero cloud friction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {app.features.map((feat) => (
            <div
              key={feat.title}
              className="p-6 rounded-2xl bg-[#05221b]/40 border border-emerald-900/40 space-y-2.5"
            >
              <h3 className={`text-base font-bold ${theme.accentText}`}>
                {feat.title}
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. 功能对比表 */}
      <section id="compare" className="scroll-mt-28 space-y-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            {app.comparisonTitle}
          </h2>
          <p className="mt-2 text-slate-400 font-light">
            {app.comparisonSubtitle}
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-emerald-900/40 bg-[#05221b]/40">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-emerald-900/40 bg-slate-950/50">
                <th className="px-6 py-4 font-semibold text-slate-300">
                  Feature
                </th>
                <th className={`px-6 py-4 font-bold ${theme.tableHighlightHeader}`}>
                  {app.name} (iOS)
                </th>
                <th className="px-6 py-4 font-semibold text-slate-400">
                  {app.comparisonOtherLabel}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-emerald-900/30">
              {app.comparisonRows.map((row) => (
                <tr key={row.feature}>
                  <td className="px-6 py-4 font-medium text-white">
                    {row.feature}
                  </td>
                  <td className={`px-6 py-4 font-medium ${theme.tableHighlightCell}`}>
                    {row.ours}
                  </td>
                  <td className="px-6 py-4 text-slate-400">{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. 页面可见 FAQ */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Frequently Asked Questions
        </h2>
        <dl className="divide-y divide-emerald-900/30 rounded-2xl border border-emerald-900/40 bg-[#05221b]/40">
          {app.faqs.map((faq) => (
            <div key={faq.question} className="p-6">
              <dt className="text-base font-semibold text-white">
                {faq.question}
              </dt>
              <dd className="mt-2 text-sm text-slate-300 font-light leading-relaxed">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 5. 精选垂类指南 */}
      {guides.length > 0 && (
        <section className="space-y-5">
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Helpful Guides for {app.name}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/blog/${guide.slug}`}
                className={`p-5 rounded-2xl bg-[#05221b]/40 border border-emerald-900/40 text-sm font-medium text-slate-200 transition-colors flex items-center justify-between gap-4 ${theme.guideHover}`}
              >
                <span>{guide.title}</span>
                <span className="shrink-0">&rarr;</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* 6. 底部主转化区 */}
      <section
        className={`p-8 sm:p-12 rounded-3xl bg-[#05221b]/60 border ${theme.sectionBorder} text-center space-y-5`}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Ready to Try {app.name} on iPhone?
        </h2>
        <p className="max-w-xl mx-auto text-sm text-slate-300 font-light">
          Download from the App Store today—local-first, offline-ready, and
          built with complete respect for your privacy.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={app.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-3 ${theme.primaryBtn} text-white px-8 py-3.5 rounded-full font-semibold shadow-lg transition-all duration-300`}
          >
            Get {app.name} on the App Store &rarr;
          </a>
          <Link
            href="/support"
            className="text-sm text-slate-400 hover:text-amber-300 transition-colors underline underline-offset-4"
          >
            Need help? Visit Support &amp; FAQ
          </Link>
        </div>
      </section>
    </div>
  );
}