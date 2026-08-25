import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://smarteasetechstudio.app'
  
  // 所有博客文章的 slug 列表
  const blogSlugs = [
    'how-much-to-feed-dog-cat',
    'foods-toxic-to-dogs-and-cats',
    'body-condition-score-guide',
    'calories',
    'bcs',
    'checklist',
    // 如果还有其他博客文章，可以直接往这里加
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