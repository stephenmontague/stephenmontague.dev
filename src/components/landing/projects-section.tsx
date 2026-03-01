import { ProjectCard } from "@/components/landing/project-card"
import { AnimatedElement } from "@/components/shared/animated-element"
import { projects } from "@/lib/constants"

export function ProjectsSection() {
	return (
		<section id='projects' className='py-8 md:py-12 lg:py-16'>
			<div className='mx-auto max-w-4xl px-6'>
				<AnimatedElement>
					<h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>Projects</h2>
					<div className='mt-2 h-px w-16 bg-linear-to-r from-primary to-accent' />
				</AnimatedElement>

				<div className='mt-12 grid gap-6'>
					{projects.map((project, i) => (
						<ProjectCard key={project.title} {...project} index={i} />
					))}
				</div>
			</div>
		</section>
	)
}
