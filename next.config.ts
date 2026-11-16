import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🚀 集中处理 301 永久重定向，挽回旧版 Sitemap 的 SEO 权重
  async redirects() {
    return [
      // 宠物类旧链接跳转
      { source: '/blog/how-much-to-feed-dog-cat', destination: '/blog/01-how-much-to-feed-dog-cat', permanent: true },
      { source: '/blog/foods-toxic-to-dogs-and-cats', destination: '/blog/02-toxic-foods-dogs-cats', permanent: true },
      { source: '/blog/body-condition-score-guide', destination: '/blog/03-body-condition-score-guide', permanent: true },
      { source: '/blog/puppy-kitten-growth-chart-by-breed', destination: '/blog/04-puppy-kitten-growth-chart-by-breed', permanent: true },
      { source: '/blog/safe-weight-loss-rate-dogs-cats', destination: '/blog/05-safe-weight-loss-rate-dogs-cats', permanent: true },
      { source: '/blog/mixed-raw-diet-calorie-calculator', destination: '/blog/06-mixed-raw-diet-calorie-calculator', permanent: true },
      
      // 祈祷类旧链接跳转
      { source: '/blog/how-to-start-a-prayer-journal', destination: '/blog/01_how-to-start-a-prayer-journal', permanent: true },
      { source: '/blog/bible-verses-for-anxiety', destination: '/blog/02_bible-verses-for-anxiety', permanent: true },
      { source: '/blog/prayer-for-someone-who-is-sick', destination: '/blog/03_prayer-for-someone-who-is-sick', permanent: true },
      { source: '/blog/how-to-organize-a-prayer-list', destination: '/blog/04_how-to-organize-a-prayer-list', permanent: true },
      { source: '/blog/how-to-track-answered-prayers', destination: '/blog/05_track-answered-prayers', permanent: true },
      { source: '/blog/is-it-safe-to-use-a-prayer-app', destination: '/blog/06_is-it-safe-to-use-a-prayer-app', permanent: true },
    ];
  },
};

export default nextConfig;