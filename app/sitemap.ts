import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import { APPS_DATA } from './apps/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smarteasetechstudio.app';
  const postsDirectory = path.join(process.cwd(), 'content/posts');

  // 1. 固定核心页面与免费互动工具
  const routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    {
      url: `${baseUrl}/tools/pet-calorie-calculator`,
      lastModified: new Date(),
      priority: 0.9,
    },
    { url: `${baseUrl}/blog`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/support`, lastModified: new Date(), priority: 0.6 },
  ];

  // 2. 自动加入所有独立产品落地页 (/apps/*) 与博客专题页 (/blog/category/*)
  Object.values(APPS_DATA).forEach((app) => {
    routes.push({
      url: `${baseUrl}/apps/${app.slug}`,
      lastModified: new Date(),
      priority: 0.9,
    });
    routes.push({
      url: `${baseUrl}/blog/category/${app.blogCategory}`,
      lastModified: new Date(),
      priority: 0.8,
    });
  });

  // 3. 动态扫描所有 Markdown 文章
  if (fs.existsSync(postsDirectory)) {
    const categories = fs.readdirSync(postsDirectory);
    categories.forEach((category) => {
      const categoryPath = path.join(postsDirectory, category);
      if (fs.statSync(categoryPath).isDirectory()) {
        const fileNames = fs.readdirSync(categoryPath);
        fileNames.forEach((fileName) => {
          if (fileName.endsWith('.md')) {
            const slug = fileName.replace(/\.md$/, '');
            routes.push({
              url: `${baseUrl}/blog/${slug}`,
              lastModified: new Date(),
              priority: 0.7,
            });
          }
        });
      }
    });
  }

  return routes;
}