import { getAllPosts } from "@/lib/blog"
import type { MetadataRoute } from "next"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const posts = await getAllPosts()

	const blogEntries = posts.map((post) => ({
		url: `https://stephenmontague.dev/blog/${post.slug}`,
		lastModified: new Date(post.date),
		changeFrequency: "monthly" as const,
		priority: 0.7
	}))

	return [
		{
			url: "https://stephenmontague.dev",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 1
		},
		{
			url: "https://stephenmontague.dev/blog",
			lastModified: new Date(),
			changeFrequency: "weekly",
			priority: 0.8
		},
		...blogEntries
	]
}
