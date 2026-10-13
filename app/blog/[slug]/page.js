import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../data/hotel';
import styles from './post-detail.module.css';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} — The Grand Pavilion`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className={styles.postPage}>
      <header className={styles.postHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <Link href="/blog">Journal</Link> <span>/</span> <span>{post.title}</span>
          </div>
          <span className="badge badge-accent">{post.category}</span>
          <h1 className={styles.postTitle}>{post.title}</h1>
          <div className={styles.postMeta}>
            <span>Published on {post.date}</span> • <span>Written by {post.author}</span>
          </div>
        </div>
      </header>

      <div className={`container ${styles.postContainer}`}>
        <div className={styles.heroImgWrapper}>
          <Image
            src={post.image}
            alt={post.title}
            width={960}
            height={500}
            priority
            className={styles.heroImg}
          />
        </div>

        <div className={styles.postContent}>
          {post.content.split('\n\n').map((paragraph, idx) => {
            if (paragraph.startsWith('**') && paragraph.includes('**\n')) {
              const parts = paragraph.split('**\n');
              return (
                <div key={idx} className={styles.sectionBlock}>
                  <h3>{parts[0].replace(/\*\*/g, '')}</h3>
                  <p>{parts[1]}</p>
                </div>
              );
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={idx}>{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            return <p key={idx}>{paragraph.replace(/\*\*/g, '')}</p>;
          })}
        </div>

        <div className={styles.postCta}>
          <h3>Planning Your Holiday to Ella?</h3>
          <p>Book directly with The Grand Pavilion for the best available rates, complimentary arrival drinks, and bespoke tour planning.</p>
          <Link href="/booking" className="btn btn-accent btn-lg">
            Reserve Your Sanctuary
          </Link>
        </div>
      </div>
    </article>
  );
}
