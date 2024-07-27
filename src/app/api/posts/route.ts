import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";
import matter from "gray-matter";

export async function GET() {
  try {
    const postsDirectory = path.join(process.cwd(), "posts");
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return { filename, data };
    });

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching posts:", (error as Error).message);
    return NextResponse.json({ error: `Error fetching posts: ${(error as Error).message}` }, { status: 500 });
  }
}
