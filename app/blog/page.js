import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '../data/hotel';
import styles from './blog.module.css';

export const metadata = {
  title: 'Highland Journal & Travel Guides — The Grand Pavilion Ella',
  description: 'Guides to Ella, Nine Arches Bridge, Ceylon tea estates, hiking trails, and travel tips for Sri Lanka.',
};

export default function BlogPage() {
  return (
    <div className={styles.blogPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Journal</span>
          </div>
          <span className="badge badge-accent">Highland Journal</span>
          <h1 className={styles.pageTitle}>Travel Stories & Local Guides</h1>
          <p className={styles.pageSubtitle}>
            Curated insider recommendations to make your stay in Ella and Sri Lanka's central highlands truly unforgettable.
          </p>
        </div>
      </section>

      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.postsGrid}>
            {blogPosts.map((post) => (
              <article key={post.id} className={styles.postCard}>
                <div className={styles.imgWrapper}>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={550}
                    height={320}
                    className={styles.postImg}
                  />
                  <span className={styles.categoryBadge}>{post.category}</span>
                </div>
                <div className={styles.postBody}>
                  <div className={styles.postMeta}>
                    <span>{post.date}</span> • <span>By {post.author}</span>
                  </div>
                  <h2 className={styles.postTitle}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className={styles.readMoreLink}>
                    Read Full Story →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
