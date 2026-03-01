import { BlogPostLayout } from "@/components/blog/blog-post-layout"
import { getAllPosts, getPost } from "@/lib/blog"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
	const posts = await getAllPosts()
	return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
	try {
		const { slug } = await params
		const { metadata } = await getPost(slug)
		return {
			title: metadata.title,
			description: metadata.description,
			openGraph: {
				type: "article",
				title: metadata.title,
				description: metadata.description,
				publishedTime: metadata.date
			}
		}
	} catch {
		return {}
	}
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
	let post
	const { slug } = await params

	try {
		post = await getPost(slug)
	} catch {
		notFound()
	}

	const { default: Post, metadata } = post

	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		headline: metadata.title,
		datePublished: metadata.date,
		description: metadata.description,
		author: {
			"@type": "Person",
			name: "Stephen Montague",
			url: "https://stephenmontague.dev"
		}
	}

	return (
		<BlogPostLayout metadata={metadata}>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
				}}
			/>
			<Post />
		</BlogPostLayout>
	)
}
