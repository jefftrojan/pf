// /app/blog/[slug]/page.tsx

import React from 'react';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

const PostPage: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <p className="text-sm text-gray-500 mb-4">
        {data.date} • {data.author}
      </p>
      <div className="prose">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default PostPage;
