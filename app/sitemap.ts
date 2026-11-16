import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.smarteasetechstudio.app';
  const postsDirectory = path.join(process.cwd(), 'content/posts');
  
  // 默认加入固定核心页面
  let routes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/support`, lastModified: new Date() },
  ];

  // 动态扫描所有 Markdown 文章，确保带编号的 URL 原汁原味输出
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
            });
          }
        });
      }
    });
  }

  return routes;
}