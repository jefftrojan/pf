import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(request: any) {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map(filename => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
      ...data,
      slug: filename.replace(/\.mdx?$/, ''), // Extracting slug from filename
    };
  });

  return new Response(JSON.stringify(posts), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
