import type { BlogPostMeta } from "@/types/blog"
import fs from "fs"
import path from "path"

const contentDir = path.join(process.cwd(), "src/content/blog")

export async function getAllPosts(): Promise<BlogPostMeta[]> {
	if (!fs.existsSync(contentDir)) return []

	const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"))

	const posts: BlogPostMeta[] = await Promise.all(
		files.map(async (file) => {
			const slug = file.replace(/\.mdx$/, "")
			const mod = await import(`@/content/blog/${slug}.mdx`)
			return {
				...mod.metadata,
				slug
			}
		})
	)

	return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getPost(slug: string) {
	const mod = await import(`@/content/blog/${slug}.mdx`)
	return {
		default: mod.default,
		metadata: { ...mod.metadata, slug } as BlogPostMeta
	}
}
