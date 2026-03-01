import { BlogCard } from "@/components/blog/blog-card"
import { AnimatedElement } from "@/components/shared/animated-element"
import { getAllPosts } from "@/lib/blog"
import type { Metadata } from "next"

export const metadata: Metadata = {
	title: "Blog",
	description: "Thoughts on software engineering, web development, and building products."
}

export default async function BlogPage() {
	const posts = await getAllPosts()

	return (
		<section className='mx-auto max-w-4xl px-6 py-24 md:py-32'>
			<AnimatedElement>
				<h1 className='font-heading text-4xl font-bold tracking-tight sm:text-5xl'>Blog</h1>
				<div className='mt-2 h-px w-16 bg-linear-to-r from-primary to-accent' />
			</AnimatedElement>

			<div className='mt-12 grid gap-6'>
				{posts.length === 0 ? (
					<p className='text-muted-foreground'>Posts coming soon.</p>
				) : (
					posts.map((post, i) => <BlogCard key={post.slug} post={post} index={i} />)
				)}
			</div>
		</section>
	)
}
