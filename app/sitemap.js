import { rooms, blogPosts, hotelInfo } from './data/hotel';

export default function sitemap() {
  const baseUrl = 'https://www.thegrandpavilion.lk';

  const staticRoutes = [
    '',
    '/rooms',
    '/amenities',
    '/dining',
    '/offers',
    '/gallery',
    '/location',
    '/events',
    '/reviews',
    '/contact',
    '/faq',
    '/blog',
    '/booking',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  const roomRoutes = rooms.map((room) => ({
    url: `${baseUrl}/rooms/${room.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...roomRoutes, ...blogRoutes];
}
