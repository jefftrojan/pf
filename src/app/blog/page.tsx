"use client";

import { useState, useEffect } from "react";

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
      .then(data => {
        const formattedPosts = data.map((post: any) => ({
          title: post.data.title,
          date: post.data.date,
          author: post.data.author,
          tags: post.data.tags,
          slug: post.filename.replace('.md', ''),
        }));
        setPosts(formattedPosts);
      })
      .catch(error => setError(error.message));
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
              <p>By {post.author}</p>
              <p>Tags: {post.tags ? post.tags.join(', ') : 'No tags'}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
};

export default Blog;
