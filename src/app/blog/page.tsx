'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./blog.module.css"; // Ensure this file exists and has your styles

type Post = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setPosts(data))
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        <div className={styles.cardContainer}>
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`} legacyBehavior>
              <a className={styles.card}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
                <p>By {post.author}</p>
                <p>Tags: {post.tags ? post.tags.join(', ') : 'No tags'}</p>
              </a>
            </Link>
          ))}
        </div>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Blog;

