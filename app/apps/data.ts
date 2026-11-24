export type AppTheme = 'emerald' | 'amber' | 'cyan' | 'indigo';

export interface AppData {
  slug: string;
  name: string;
  badge: string;
  theme: AppTheme;
  blogCategory: string;
  seoTitle: string;
  seoDescription: string;
  headline: string;
  subheadline: string;
  trustPoints: string[];
  appStoreUrl: string;
  icon: string;
  iconAlt: string;
  applicationCategory: string;
  screenshots: { src: string; alt: string }[];
  features: { title: string; description: string }[];
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonOtherLabel: string;
  comparisonRows: { feature: string; ours: string; others: string }[];
  faqs: { question: string; answer: string }[];
}

export const APPS_DATA: Record<string, AppData> = {
  pawoptima: {
    slug: 'pawoptima',
    name: 'PawOptima Steward',
    badge: 'Pet Care & Nutrition · 100% Offline',
    theme: 'emerald',
    blogCategory: 'pet',
    seoTitle: 'PawOptima Steward — Dog & Cat Calorie Calculator App',
    seoDescription:
      'Calculate exact dog and cat RER/DER calories, scan pet food labels with OCR, and track growth across 206 breeds—100% offline on iOS.',
    headline: 'Science-Based Dog & Cat Feeding Calculator & Health Tracker',
    subheadline:
      'Calculate daily RER and DER calories, plan mixed wet and dry portions, scan pet food nutrition labels with on-device OCR, and monitor weight across 206 breeds—privately on your iPhone.',
    trustPoints: [
      '100% Local-First & Offline',
      'No Account Required',
      '206 Dog & Cat Breeds',
      'On-Device OCR Label Scanner',
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6782809353',
    icon: '/pawoptima-icon.png',
    iconAlt: 'PawOptima Steward offline dog and cat nutrition app icon for iOS',
    applicationCategory: 'LifestyleApplication',
    screenshots: [
      {
        src: '/pawoptima-1.png',
        alt: 'PawOptima Steward RER and DER daily pet calorie calculator screen on iPhone',
      },
      {
        src: '/pawoptima-2.png',
        alt: 'PawOptima Steward mixed wet and dry pet food portion tracker on iOS',
      },
      {
        src: '/pawoptima-3.png',
        alt: 'PawOptima Steward breed growth curve and weight log dashboard on iPhone',
      },
    ],
    features: [
      {
        title: 'Veterinary RER & DER Calorie Engine',
        description:
          'Compute Resting and Daily Energy Requirements based on body weight, life stage, neuter status, and activity level—no guesswork from generic bag charts.',
      },
      {
        title: 'Mixed Wet, Dry & Raw Diet Portions',
        description:
          'Combine kibble, canned food, freeze-dried toppers, and treats while automatically balancing daily gram portions and the 90/10 treat budget.',
      },
      {
        title: 'On-Device OCR Nutrition Scanner',
        description:
          'Point your iPhone camera at pet food labels to capture kcal/kg and guaranteed analysis locally without uploading photos to external servers.',
      },
      {
        title: '206 Breed Growth & Weight Curves',
        description:
          'Track puppy and kitten milestones or manage adult weight loss with structured Body Condition Score (BCS) check-ins and visual trend charts.',
      },
      {
        title: 'iOS Home Screen Widgets',
        description:
          'Log daily meals and check remaining calorie budgets right from your Home Screen in a single tap.',
      },
      {
        title: 'Private & Offline by Design',
        description:
          'All pet health records, diets, and weight logs stay securely on your device with zero mandatory cloud sign-up.',
      },
    ],
    comparisonTitle: 'PawOptima Steward vs. Generic Pet Trackers',
    comparisonSubtitle:
      'Built for pet owners who want real nutritional math and complete privacy instead of social feeds and cloud accounts.',
    comparisonOtherLabel: 'Typical Cloud Pet Apps',
    comparisonRows: [
      {
        feature: 'RER / DER Scientific Calculation',
        ours: 'Built-in veterinary formulas by life stage & weight',
        others: 'Basic reminders or manual notes only',
      },
      {
        feature: 'Mixed Wet & Dry Portion Splits',
        ours: 'Automatic gram calculation across multiple foods',
        others: 'Rarely supported without spreadsheets',
      },
      {
        feature: 'Nutrition Label OCR Scanning',
        ours: 'Fast on-device camera scanning',
        others: 'Manual typing or cloud-dependent databases',
      },
      {
        feature: 'Account & Privacy',
        ours: 'No login required — 100% local-first',
        others: 'Mandatory account & data tracking',
      },
      {
        feature: 'Offline Reliability',
        ours: 'Works anywhere without internet',
        others: 'Requires cloud sync to view or edit',
      },
    ],
    faqs: [
      {
        question: 'How does PawOptima Steward calculate my dog or cat’s daily calories?',
        answer:
          'PawOptima Steward uses standard veterinary Resting Energy Requirement (RER) and Daily Energy Requirement (DER) equations adjusted for body weight, life stage, neuter status, and activity level. Always consult a veterinarian for pets with medical conditions.',
      },
      {
        question: 'Can I calculate portions for mixed wet and dry pet food?',
        answer:
          'Yes. You can save multiple dry kibble, canned wet food, and topper profiles, and PawOptima Steward calculates exact daily and per-meal gram portions across your chosen mix.',
      },
      {
        question: 'Does the OCR nutrition label scanner require an internet connection?',
        answer:
          'No. Label scanning and calorie calculations run directly on your iPhone using local processing, so you can scan bags right in the pet store or at home offline.',
      },
      {
        question: 'Do I need to create an account to use PawOptima Steward?',
        answer:
          'No account or email registration is required. Your pet profiles, feeding logs, and weight history stay privately on your device.',
      },
      {
        question: 'How is PawOptima Steward priced?',
        answer:
          'PawOptima Steward is free to download on the App Store so you can start tracking right away, with optional Pro plans managed securely through Apple In-App Purchase.',
      },
    ],
  },

  'pray-verses': {
    slug: 'pray-verses',
    name: 'Pray Verses',
    badge: 'Faith & Prayer Journal · Local Encryption',
    theme: 'amber',
    blogCategory: 'prayer',
    seoTitle: 'Pray Verses — Private Offline Prayer Journal for iOS',
    seoDescription:
      'Private, offline iOS prayer journal with local encryption. Match Scripture to daily needs, organize prayer lists, and track answered prayers.',
    headline: 'A Private, Offline Prayer Journal With Matched Bible Verses',
    subheadline:
      'Match Scripture to what is actually on your heart, organize prayer lists by family and need, and record answered prayers over time—protected with local on-device encryption and zero cloud tracking.',
    trustPoints: [
      '100% Offline & Local-First',
      'On-Device Encryption',
      'No Account or Login',
      'Zero Ads & Zero Tracking',
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6788009023',
    icon: '/prayverses-icon.png',
    iconAlt: 'Pray Verses private offline Christian prayer journal app icon for iOS',
    applicationCategory: 'LifestyleApplication',
    screenshots: [
      {
        src: '/prayverses-1.png',
        alt: 'Pray Verses offline prayer journal matching Bible verses to daily needs on iPhone',
      },
      {
        src: '/prayverses-2.png',
        alt: 'Pray Verses organized prayer list by family, friends, and categories on iOS',
      },
      {
        src: '/prayverses-3.png',
        alt: 'Pray Verses locally encrypted answered prayer history tracker on iPhone',
      },
    ],
    features: [
      {
        title: 'Scripture Matched to Real-Life Needs',
        description:
          'Find relevant Bible verses mapped to anxiety, gratitude, healing, guidance, and 80+ structured human need tags—completely offline.',
      },
      {
        title: 'Structured Prayer Lists by Person & Topic',
        description:
          'Organize requests for family, friends, church, and personal growth so no promise to pray is ever forgotten.',
      },
      {
        title: 'Answered Prayer Timeline',
        description:
          'Mark prayers as answered with personal reflections and look back over months and years of faithfulness.',
      },
      {
        title: 'Local On-Device Encryption',
        description:
          'Personal prayer journals often hold your most sensitive thoughts. Pray Verses keeps names and entries encrypted locally on your device.',
      },
      {
        title: 'Calm, Distraction-Free Design',
        description:
          'No social feeds, no pop-up ads, and no noisy notifications—just a quiet space built natively for reflection.',
      },
      {
        title: 'Works Anywhere Without Internet',
        description:
          'Read matched verses, write entries, and review your prayer list on flights, retreats, or offline mornings.',
      },
    ],
    comparisonTitle: 'Pray Verses vs. Cloud Prayer Apps',
    comparisonSubtitle:
      'Designed for people who treat prayer as deeply personal and want zero third-party data collection.',
    comparisonOtherLabel: 'Typical Cloud Prayer Apps',
    comparisonRows: [
      {
        feature: 'Privacy & Data Storage',
        ours: 'Locally encrypted on your iOS device only',
        others: 'Uploaded to third-party cloud servers',
      },
      {
        feature: 'Account Registration',
        ours: 'None required — open and pray immediately',
        others: 'Mandatory email or social login',
      },
      {
        feature: 'Offline Access',
        ours: '100% functional without Wi-Fi or cell service',
        others: 'Limited or unavailable offline',
      },
      {
        feature: 'Ads & Social Noise',
        ours: 'Zero ads, zero tracking, zero feeds',
        others: 'Frequent upsells, feeds, or analytics tracking',
      },
      {
        feature: 'Answered Prayer History',
        ours: 'Private timeline with personal notes',
        others: 'Often gated or stored on remote accounts',
      },
    ],
    faqs: [
      {
        question: 'Are my prayer requests uploaded to any server?',
        answer:
          'No. Pray Verses is built with a local-first architecture and on-device encryption. Your prayer lists, personal notes, and answered prayer entries stay strictly on your iPhone or iPad.',
      },
      {
        question: 'Can I use Pray Verses completely offline?',
        answer:
          'Yes. Both the Scripture matching reference and your personal prayer journal work 100% offline with no internet connection required.',
      },
      {
        question: 'Do I need to create an account to start journaling?',
        answer:
          'No. There is no account wall, email verification, or cloud sign-in. You can start recording prayers and exploring matched verses immediately.',
      },
      {
        question: 'How does Pray Verses help organize a large prayer list?',
        answer:
          'You can categorize requests by person, family group, or life topic, and separate active prayers from answered prayers so your daily focus stays clear.',
      },
      {
        question: 'Where can I download Pray Verses?',
        answer:
          'Pray Verses is available on the Apple App Store for iPhone and iPad. You can download it directly from the App Store button on this page.',
      },
    ],
  },

  invoicehive: {
    slug: 'invoicehive',
    name: 'InvoiceHive',
    badge: 'Business Utility · Local-First Invoicing',
    theme: 'cyan',
    blogCategory: 'invoice',
    seoTitle: 'InvoiceHive — Offline PDF Invoice & Estimate App iOS',
    seoDescription:
      'Create clean PDF invoices and estimates offline on iOS. Local-first billing and payment tracking for freelancers—no account required.',
    headline: 'Offline Invoice & Estimate Maker Built for iOS Freelancers',
    subheadline:
      'Draft itemized estimates, convert approved quotes into professional PDF invoices in one tap, and track client payments—completely offline with zero account lock-in.',
    trustPoints: [
      'Works 100% Offline',
      'No Account Required',
      'Client-Ready PDF Export',
      'Financial Records Stay On-Device',
    ],
    appStoreUrl: 'https://apps.apple.com/app/id6800766422',
    icon: '/invoicehive-icon.png',
    iconAlt: 'InvoiceHive offline PDF invoice and estimate maker app icon for iOS',
    applicationCategory: 'BusinessApplication',
    screenshots: [
      {
        src: '/invoicehive-1.png',
        alt: 'InvoiceHive offline contractor estimate and quote editor on iPhone',
      },
      {
        src: '/invoicehive-2.png',
        alt: 'InvoiceHive clean client-ready PDF invoice generator on iOS',
      },
      {
        src: '/invoicehive-3.png',
        alt: 'InvoiceHive local-first freelance payment tracking dashboard on iPhone',
      },
    ],
    features: [
      {
        title: 'True Offline & Local-First Billing',
        description:
          'Create estimates, edit line items, calculate totals, and export crisp PDF invoices on job sites or flights without waiting on web dashboards.',
      },
      {
        title: 'One-Tap Estimate-to-Invoice Flow',
        description:
          'Once a client approves your quote, turn it into a numbered invoice instantly without re-typing client details, items, or tax settings.',
      },
      {
        title: 'Clean, Client-Ready PDF Documents',
        description:
          'Customize your studio name, branding, payment instructions, and invoice numbers to generate sharp PDFs ready for email, Messages, or AirDrop.',
      },
      {
        title: 'Clear Payment & Balance Tracking',
        description:
          'Record partial or full payments, filter unpaid or overdue balances at a glance, and stay organized without bloated accounting software.',
      },
      {
        title: 'Flexible Tax & Multi-Region Ready',
        description:
          'Configure item-level or invoice-level tax rates and currency formatting tailored to independent contractors and solo studios.',
      },
      {
        title: 'Zero Cloud Account Harvesting',
        description:
          'Your client rates, contact details, and revenue history stay privately on your iOS device—never stored on third-party SaaS servers.',
      },
    ],
    comparisonTitle: 'InvoiceHive vs. Cloud SaaS Invoice Apps',
    comparisonSubtitle:
      'Built for independent contractors, tradespeople, and freelancers who want fast private billing without heavy cloud platforms.',
    comparisonOtherLabel: 'Typical Cloud Invoice Apps',
    comparisonRows: [
      {
        feature: 'Works 100% Offline',
        ours: 'Yes — draft, edit & export PDFs anywhere',
        others: 'Limited or requires internet sync',
      },
      {
        feature: 'Account Registration',
        ours: 'None required — start in seconds',
        others: 'Mandatory signup & cloud login',
      },
      {
        feature: 'Financial Data Privacy',
        ours: 'Local-first — stored privately on your device',
        others: 'Hosted on third-party SaaS servers',
      },
      {
        feature: 'Estimate-to-Invoice Conversion',
        ours: 'One-tap conversion with payment tracking',
        others: 'Often restricted to higher-tier plans',
      },
      {
        feature: 'Native iOS Speed',
        ours: 'Lightweight native Swift app',
        others: 'Heavy cross-platform web wrappers',
      },
    ],
    faqs: [
      {
        question: 'Can I create and export PDF invoices completely offline on iPhone?',
        answer:
          'Yes. InvoiceHive runs locally on your device, so you can draft estimates, convert them to invoices, calculate tax, and generate PDFs without Wi-Fi or cellular data. You only need a connection when sending the finished PDF to your client.',
      },
      {
        question: 'Do I need to create an account to use InvoiceHive?',
        answer:
          'No. InvoiceHive requires no email registration, no password setup, and no cloud account. You can open the app and build your first estimate or invoice right away.',
      },
      {
        question: 'Where are my client records and invoices stored?',
        answer:
          'All client details, estimates, invoices, and payment statuses are stored locally on your iOS device. SmartEaseTech Studio does not collect or host your billing data on external servers.',
      },
      {
        question: 'Can I turn an approved estimate into an invoice automatically?',
        answer:
          'Yes. With a single tap, any saved estimate converts into a numbered invoice while preserving all line items, rates, taxes, and notes.',
      },
      {
        question: 'How does pricing work for InvoiceHive?',
        answer:
          'InvoiceHive is free to download on the App Store so you can explore the workflow first, with optional Pro plans available via Apple In-App Purchase.',
      },
    ],
  },

  habitsense: {
    slug: 'habitsense',
    name: 'HabitSense',
    badge: 'Habit & Routine Analytics · Privacy-First',
    theme: 'indigo',
    blogCategory: 'habit-tracking',
    seoTitle: 'HabitSense — Private Local-First Habit Tracker iOS',
    seoDescription:
      'Track daily habits in a tap without streak pressure. Explore Behavior Landscapes, momentum, recovery, and weekly patterns privately on iOS.',
    headline: 'Build Better Habits Without Streak Pressure—Privately on iOS',
    subheadline:
      'Log habits in a single tap and see the full story behind your routines: Behavior Landscapes, Momentum, Behavioral Load, resilient recovery tracking, and on-device pattern discovery.',
    trustPoints: [
      '100% On-Device Analytics',
      'No Account · No Ads · No SDKs',
      'Optional iCloud Drive Backup',
      'CSV & PDF Export Included',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/habitsense-habit-tracker/id6832557919',
    icon: '/habitsense-icon.png',
    iconAlt: 'HabitSense private local-first habit tracker app icon for iOS',
    applicationCategory: 'ProductivityApplication',
    screenshots: [
      {
        src: '/habitsense-1.png',
        alt: 'HabitSense daily habit tracking Today Ring and one-tap logging on iPhone',
      },
      {
        src: '/habitsense-2.png',
        alt: 'HabitSense Behavior Landscape visual habit consistency calendar on iOS',
      },
      {
        src: '/habitsense-3.png',
        alt: 'HabitSense momentum, recovery, and weekly routine pattern analytics on iPhone',
      },
    ],
    features: [
      {
        title: 'Flexible Habit Tracking Modes',
        description:
          'Go beyond simple checkboxes—track completions, counts, timed sessions, numeric values, and habits you want to reduce on daily, weekly, or custom schedules.',
      },
      {
        title: 'Behavior Landscape Visual History',
        description:
          'Examine consistency across days, months, quarters, and years as clear visual squares so you spot real shifts instead of fixating on a single broken streak.',
      },
      {
        title: 'Momentum & Behavioral Load',
        description:
          'See whether your consistency is trending up or down alongside how much your current routine is asking of you, helping you adjust before burnout hits.',
      },
      {
        title: 'Recovery Tracking & Free Days',
        description:
          'Real life includes travel and busy weeks. Use intentional Free Days, private Day Notes, and recovery metrics to measure how smoothly you bounce back.',
      },
      {
        title: 'Pattern Discovery & Behavior Lab',
        description:
          'Uncover weekday trends, reliable time windows, and habit co-occurrence with confidence levels, plus run personal experiments in Behavior Lab.',
      },
      {
        title: 'Strict Local-First Privacy Controls',
        description:
          'Zero account required, zero ads, and zero third-party tracking SDKs. Keep everything on-device with optional backups to your own iCloud Drive and CSV/PDF export.',
      },
    ],
    comparisonTitle: 'HabitSense vs. Streak-Obsessed Habit Apps',
    comparisonSubtitle:
      'Designed to reveal sustainable long-term patterns instead of punishing you for a single missed day.',
    comparisonOtherLabel: 'Typical Streak Habit Apps',
    comparisonRows: [
      {
        feature: 'Missed-Day Philosophy',
        ours: 'Measures recovery, momentum & Free Days',
        others: 'Resets streak to zero after one interruption',
      },
      {
        feature: 'Routine Insights',
        ours: 'Behavior Landscapes, Load & weekly patterns on-device',
        others: 'Simple checkmark counts only',
      },
      {
        feature: 'Privacy & Accounts',
        ours: 'No login, no ads, no third-party SDKs',
        others: 'Mandatory cloud account & behavioral tracking',
      },
      {
        feature: 'Data Portability',
        ours: 'CSV, PDF export & optional personal iCloud Drive backup',
        others: 'Locked inside proprietary cloud servers',
      },
      {
        feature: 'Daily Friction',
        ours: 'One-tap Today Ring, Widgets & Shortcuts',
        others: 'Cluttered gamified screens and pop-ups',
      },
    ],
    faqs: [
      {
        question: 'How is HabitSense different from standard streak-based habit trackers?',
        answer:
          'Instead of treating a single missed day as failure, HabitSense visualizes long-term consistency with Behavior Landscapes and calculates Momentum, Behavioral Load, and recovery patterns so you can build sustainable routines.',
      },
      {
        question: 'What is included in the free version vs. HabitSense Pro?',
        answer:
          'The free version lets you track up to three habits with core logging tools and day/month Behavior Landscape views. HabitSense Pro unlocks unlimited habits, deeper pattern discovery, adaptive goals, Year in Behavior, and quarter/year/all-time landscape views via Apple In-App Purchase.',
      },
      {
        question: 'Does HabitSense collect my routine data or require an account?',
        answer:
          'No. HabitSense is local-first with no account required, no ads, and no third-party tracking SDKs. All metrics are calculated directly on your iPhone or iPad.',
      },
      {
        question: 'Can I back up or export my habit history?',
        answer:
          'Yes. Your records stay on your device by default, and you can optionally save backups to your own iCloud Drive or export your data as CSV, PDF, or backup files anytime.',
      },
      {
        question: 'Does HabitSense support iOS Widgets and Shortcuts?',
        answer:
          'Yes. HabitSense includes one-tap logging, customizable Today Rings, adaptive reminders, Home Screen widgets, and Apple Shortcuts support.',
      },
    ],
  },
};