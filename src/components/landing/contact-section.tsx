import { AnimatedElement } from "@/components/shared/animated-element"
import { GradientBlob } from "@/components/shared/gradient-blob"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/constants"
import { Mail } from "lucide-react"

export function ContactSection() {
	return (
		<section id='contact' className='relative overflow-hidden py-8 md:py-12 lg:py-16'>
			<GradientBlob className='left-1/4 top-1/3 h-80 w-80' color='primary' />

			<div className='relative mx-auto max-w-3xl px-6 text-center'>
				<AnimatedElement>
					<h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>
						Let&apos;s build something together
					</h2>
				</AnimatedElement>

				<AnimatedElement delay={0.1}>
					<p className='mx-auto mt-4 max-w-lg text-lg text-muted-foreground'>
						Need a custom website for your business? I&apos;d love to hear about your project.
					</p>
				</AnimatedElement>

				<AnimatedElement delay={0.2}>
					<div className='mt-8'>
						<Button
							asChild
							size='lg'
							className='bg-primary text-primary-foreground hover:bg-primary/90'>
							<a href={`mailto:${siteConfig.links.email}`}>
								<Mail className='mr-2 h-4 w-4' />
								Get in Touch
							</a>
						</Button>
					</div>
				</AnimatedElement>
			</div>
		</section>
	)
}
