// src/app/blog/[slug]/page.tsx
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm"; // For GitHub Flavored Markdown support

type Post = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
};

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      fetch(`/api/posts/${slug}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data); // Debugging
          setPost(data);
        })
        .catch(error => {
          console.error('Error fetching post:', error);
          setError(error.message);
        });
    }
  }, [slug]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>By {post.author}</p>
      <p>Tags: {post.tags ? post.tags.join(', ') : 'No tags'}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
