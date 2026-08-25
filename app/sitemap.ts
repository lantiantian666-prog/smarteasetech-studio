import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smarteasetechstudio.app'
  
  // 全部 12 篇博客文章的完整 slug 列表
  const blogSlugs = [
    // 宠物健康与喂养系列 (Pet Care)
    'how-much-to-feed-dog-cat',
    'foods-toxic-to-dogs-and-cats',
    'body-condition-score-guide',
    'puppy-kitten-growth-chart-by-breed',
    'safe-weight-loss-rate-dogs-cats',
    'mixed-raw-diet-calorie-calculator',
    
    // 信仰与祈祷系列 (Prayer & Faith)
    'how-to-start-a-prayer-journal',
    'bible-verses-for-anxiety',
    'prayer-for-someone-who-is-sick',
    'how-to-organize-a-prayer-list',
    'how-to-track-answered-prayers',
    'is-it-safe-to-use-a-prayer-app',
  ]

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    ...blogEntries,
  ]
}