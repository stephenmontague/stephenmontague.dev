import { Badge } from "@/components/ui/badge"
import { parseLocalDate } from "@/lib/utils"
import type { BlogPostMeta } from "@/types/blog"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface BlogPostLayoutProps {
	metadata: BlogPostMeta
	children: React.ReactNode
}

export function BlogPostLayout({ metadata, children }: BlogPostLayoutProps) {
	return (
		<article className='mx-auto max-w-3xl px-6 py-24 md:py-32'>
			<Link
				href='/blog'
				className='mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground'>
				<ArrowLeft className='h-3.5 w-3.5' />
				Back to blog
			</Link>

			<header className='mb-12'>
				<time className='text-sm text-muted-foreground'>
					{parseLocalDate(metadata.date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "long",
						day: "numeric"
					})}
				</time>
				<h1 className='mt-2 font-heading text-4xl font-bold tracking-tight sm:text-5xl'>{metadata.title}</h1>
				{metadata.tags.length > 0 && (
					<div className='mt-4 flex flex-wrap gap-2'>
						{metadata.tags.map((tag) => (
							<Badge key={tag} variant='secondary' className='text-xs'>
								{tag}
							</Badge>
						))}
					</div>
				)}
			</header>

			<div className='prose-custom'>{children}</div>
		</article>
	)
}
