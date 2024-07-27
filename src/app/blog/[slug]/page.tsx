'use client';
// src/app/blog/[slug]/page.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";

type Post = {
  title: string;
  date: string;
  author: string;
  tags: string[];
  content: string;
};

const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then(response => response.json())
      .then(data => setPost(data))
      .catch(error => setError(error.message));
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
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </div>
  );
};

export default BlogPost;
