import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export async function GET(request: Request, { params }: { params: any }) {
  const { slug } = params;
  
  const postsDirectory = path.join(process.cwd(), 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    return NextResponse.json({ data, content });
  } catch (error) {
    console.error('Error fetching post:', error);
    return NextResponse.json({ error: 'Error fetching post.' }, { status: 500 });
  }
}
