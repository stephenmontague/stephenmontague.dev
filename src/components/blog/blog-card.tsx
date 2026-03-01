"use client"

import { Badge } from "@/components/ui/badge"
import { parseLocalDate } from "@/lib/utils"
import type { BlogPostMeta } from "@/types/blog"
import { motion } from "motion/react"
import Link from "next/link"

interface BlogCardProps {
	post: BlogPostMeta
	index: number
}

export function BlogCard({ post, index }: BlogCardProps) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.6,
				delay: index * 0.1,
				ease: [0.21, 0.47, 0.32, 0.98]
			}}>
			<Link
				href={`/blog/${post.slug}`}
				className='group block rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5'>
				<div className='flex flex-col gap-2'>
					<time className='text-sm text-muted-foreground'>
						{parseLocalDate(post.date).toLocaleDateString("en-US", {
							year: "numeric",
							month: "long",
							day: "numeric"
						})}
					</time>
					<h3 className='font-heading text-xl font-semibold tracking-tight group-hover:text-primary transition-colors'>
						{post.title}
					</h3>
					<p className='text-muted-foreground'>{post.description}</p>
					<div className='flex flex-wrap gap-2 pt-1'>
						{post.tags.map((tag) => (
							<Badge key={tag} variant='secondary' className='text-xs'>
								{tag}
							</Badge>
						))}
					</div>
				</div>
			</Link>
		</motion.div>
	)
}
