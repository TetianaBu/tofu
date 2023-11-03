import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

async function readContentFile(type, fileName) {
  const filePath = path.join(
    process.cwd(),
    `content-${type}`,
    `${fileName}.mdx`
  );
  return fs.readFile(filePath, "utf8");
}

export async function getBlogPostList(type) {
  try {
    const fileNames = await fs.readdir(
      path.join(process.cwd(), `content-${type}`)
    );
    const blogPosts = [];

    for (let fileName of fileNames) {
      fileName = fileName.replace(".mdx", "");

      const rawContent = await readContentFile(type, fileName);
      const { data: frontmatter } = matter(rawContent);

      blogPosts.push({
        slug: fileName,
        ...frontmatter,
      });
    }

    return blogPosts;
  } catch (error) {
    console.error("Error fetching blog posts:", error);
  }
}

export async function loadBlogPost(type, slug) {
  try {
    const rawContent = await readContentFile(type, slug);
    const { data: frontmatter, content } = matter(rawContent);
    return { frontmatter, content };
  } catch (error) {
    console.error("Error loading blog post:", error);
  }
}
