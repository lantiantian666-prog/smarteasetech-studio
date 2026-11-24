import type { Metadata } from 'next';
import Link from 'next/link';
import CalculatorClient from './CalculatorClient';

const SITE_URL = 'https://www.smarteasetechstudio.app';
const PAGE_PATH = '/tools/pet-calorie-calculator';
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;

const FAQS = [
  {
    question: 'How do you calculate a dog or cat’s daily calorie needs?',
    answer:
      'Veterinary nutrition starts with Resting Energy Requirement: RER = 70 × (weight in kg)^0.75. You then multiply RER by a life-stage factor to estimate Daily Energy Requirement (DER)—for example, 1.6× for a typical neutered adult dog or 1.2× for an indoor neutered adult cat.',
  },
  {
    question: 'Why does the formula use kg^0.75 instead of a simple per-pound rule?',
    answer:
      'Metabolic rate scales with metabolic body size rather than straight body weight. Raising kilograms to the 0.75 power accurately reflects why a 5 lb toy dog burns far more calories per pound than a 90 lb giant breed.',
  },
  {
    question: 'What is the 90/10 rule for pet treats?',
    answer:
      'Veterinary nutritionists recommend keeping treats, chews, and meal toppers at or below 10% of your pet’s daily calories, leaving at least 90% for complete and balanced main meals so essential vitamins and minerals are not diluted.',
  },
  {
    question: 'Should I use current weight or ideal weight for an overweight pet?',
    answer:
      'For pets at an ideal Body Condition Score (BCS 4–5/9), use current weight. For overweight pets (BCS 6/9 or higher), calculating from current weight maintains excess fat—use ideal target weight with a controlled weight-loss plan and veterinary guidance, especially to protect cats from hepatic lipidosis.',
  },
  {
    question: 'How do I convert daily calories into grams or cups of my pet’s food?',
    answer:
      'Check the Calorie Content statement on your pet food bag or can (usually listed in kcal/kg and kcal/cup). Divide your pet’s daily main-meal calorie budget by the food’s energy density, or use PawOptima Steward on iOS to scan labels with OCR and calculate mixed wet-and-dry portions automatically.',
  },
];

export const metadata: Metadata = {
  title: {
    absolute:
      'Free Dog & Cat Calorie Calculator (RER & DER) | PawOptima Steward',
  },
  description:
    'Calculate your dog or cat’s daily maintenance calories (RER & DER) and 90/10 treat limit instantly using veterinary formulas. Free, private, no login required.',
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    siteName: 'SmartEaseTech Studio',
    title: 'Free Dog & Cat Calorie Calculator (RER & DER) | PawOptima Steward',
    description:
      'Instant veterinary RER & DER calorie estimator for dogs and cats with 90/10 meal and treat breakdown.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Free Dog and Cat RER DER Calorie Calculator by PawOptima Steward',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Dog & Cat Calorie Calculator (RER & DER)',
    description:
      'Estimate daily maintenance calories and safe treat limits for dogs and cats using veterinary RER/DER formulas.',
    images: ['/og-image.png'],
  },
};

export default function PetCalorieCalculatorPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        name: 'Dog & Cat Calorie Calculator (RER & DER)',
        url: PAGE_URL,
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'All',
        browserRequirements: 'Requires JavaScript',
        description:
          'Free online veterinary RER and DER calorie calculator for dogs and cats by SmartEaseTech Studio.',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        publisher: {
          '@type': 'Organization',
          name: 'SmartEaseTech Studio',
          url: SITE_URL,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: FAQS.map((faq) => ({
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
            name: 'PawOptima Steward',
            item: `${SITE_URL}/apps/pawoptima`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Pet Calorie Calculator',
            item: PAGE_URL,
          },
        ],
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-16 text-slate-100">
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
            <Link
              href="/apps/pawoptima"
              className="hover:text-amber-300 transition-colors"
            >
              PawOptima Steward
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-white" aria-current="page">
            Pet Calorie Calculator
          </li>
        </ol>
      </nav>

      {/* 页面标题区 */}
      <header className="max-w-3xl space-y-4">
        <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs font-medium">
          Free Veterinary Nutrition Tool · 100% Private
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Dog &amp; Cat Calorie Calculator{' '}
          <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-transparent">
            (RER &amp; DER)
          </span>
        </h1>
        <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
          Estimate your dog or cat&apos;s daily maintenance calories and safe
          10% treat budget in seconds using the standard veterinary{' '}
          <span className="font-mono text-emerald-300">70 × (kg)^0.75</span>{' '}
          formula — no account or email required.
        </p>
      </header>

      {/* 交互计算器组件 */}
      <CalculatorClient />

      {/* 科学原理与系数科普区（承接 Google 长尾词与精选摘要） */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-6">
        <div className="p-8 rounded-3xl bg-[#05221b]/40 border border-emerald-900/40 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            How the RER &amp; DER Formula Works
          </h2>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Every feeding plan starts with{' '}
            <strong className="text-white font-medium">
              Resting Energy Requirement (RER)
            </strong>{' '}
            — the calories a pet burns just to breathe, circulate blood, and
            maintain organ function at rest:
          </p>
          <div className="p-4 rounded-2xl bg-slate-950/70 border border-emerald-900/50 font-mono text-sm text-emerald-300">
            RER = 70 × (Weight in kg) ^ 0.75
            <br />
            DER = RER × Life-Stage Factor
          </div>
          <p className="text-sm text-slate-300 font-light leading-relaxed">
            Because back-of-the-bag feeding charts often overestimate portions
            for indoor neutered pets, starting from your pet&apos;s actual RER
            and life-stage multiplier gives a much safer baseline before
            adjusting for body condition and activity.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#05221b]/40 border border-emerald-900/40 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Standard Maintenance Multipliers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="border-b border-emerald-900/50 text-xs uppercase text-slate-400">
                  <th className="py-2.5 pr-4">Life Stage</th>
                  <th className="py-2.5 pr-4">Dog</th>
                  <th className="py-2.5">Cat</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-900/30 text-slate-300">
                <tr>
                  <td className="py-2.5 pr-4 font-medium text-white">
                    Neutered Adult (Moderate)
                  </td>
                  <td className="py-2.5 pr-4 text-emerald-300">1.6×</td>
                  <td className="py-2.5 text-emerald-300">1.2×</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-medium text-white">
                    Intact Adult (Moderate)
                  </td>
                  <td className="py-2.5 pr-4 text-emerald-300">1.8×</td>
                  <td className="py-2.5 text-emerald-300">1.4×</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-medium text-white">
                    Growth (Puppy / Kitten)
                  </td>
                  <td className="py-2.5 pr-4">2.0× baseline</td>
                  <td className="py-2.5">2.5× (&lt;4m) / 2.0×</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-4 font-medium text-white">
                    Senior Maintenance
                  </td>
                  <td className="py-2.5 pr-4">1.2×</td>
                  <td className="py-2.5">1.1×</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Disclaimer: This calculator provides general educational estimates
            for healthy pets at an ideal body condition. Consult your
            veterinarian for pets with medical conditions, severe obesity, or
            specialized nutritional needs.
          </p>
        </div>
      </section>

      {/* FAQ 区块 */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Frequently Asked Questions
        </h2>
        <dl className="divide-y divide-emerald-900/30 rounded-2xl border border-emerald-900/40 bg-[#05221b]/40">
          {FAQS.map((faq) => (
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

      {/* 延伸阅读入口 */}
      <section className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-[#05221b]/40 border border-emerald-900/40 text-sm">
        <span className="text-slate-300">
          Want deeper veterinary feeding guides and mixed-diet tips?
        </span>
        <Link
          href="/blog/category/pet"
          className="text-emerald-300 hover:text-emerald-200 font-semibold transition-colors"
        >
          Browse Pet Nutrition Guides &rarr;
        </Link>
      </section>
    </div>
  );
}