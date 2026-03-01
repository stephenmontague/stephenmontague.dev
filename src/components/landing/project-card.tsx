"use client"

import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import { motion } from "motion/react"

interface ProjectCardProps {
	title: string
	subtitle: string
	description: string
	href: string
	tags: string[]
	index: number
}

export function ProjectCard({ title, subtitle, description, href, tags, index }: ProjectCardProps) {
	return (
		<motion.a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.6,
				delay: index * 0.15,
				ease: [0.21, 0.47, 0.32, 0.98]
			}}
			className='group relative block rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-8'>
			<div className='flex flex-col gap-3'>
				<div className='flex items-start justify-between gap-4'>
					<div>
						<h3 className='font-heading text-2xl font-semibold tracking-tight'>{title}</h3>
						<p className='text-sm text-muted-foreground'>{subtitle}</p>
					</div>
					<ExternalLink className='mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-primary' />
				</div>

				<p className='text-muted-foreground leading-relaxed'>{description}</p>

				<div className='flex flex-wrap gap-2 pt-1'>
					{tags.map((tag) => (
						<Badge key={tag} variant='secondary' className='text-xs'>
							{tag}
						</Badge>
					))}
				</div>
			</div>

			{/* Hover glow */}
			<div className='pointer-events-none absolute -inset-px rounded-xl bg-linear-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
		</motion.a>
	)
}
