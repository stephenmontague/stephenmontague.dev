import Link from "next/link"
import { AnimatedElement } from "@/components/shared/animated-element"
import { getAllPosts } from "@/lib/blog"
import { parseLocalDate } from "@/lib/utils"

export async function AboutSection() {
	const posts = (await getAllPosts()).slice(0, 3)

	return (
		<section id='about' className='py-8 md:py-12 lg:py-16'>
			<div className='mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1fr] lg:gap-16'>
				{/* About - left */}
				<div>
					<AnimatedElement>
						<h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>About</h2>
						<div className='mt-2 h-px w-16 bg-linear-to-r from-primary to-accent' />
					</AnimatedElement>

					<AnimatedElement delay={0.1} className='mt-8'>
						<div className='space-y-5 text-lg leading-relaxed text-muted-foreground'>
							<p>
								I&apos;m a believer in Jesus Christ, a husband, and a father - and those things
								shape everything else I do.
							</p>
							<p>
								By day, I work as a Technical Resource on the Go to Market team at Temporal.
								Before that, I spent four years as a software engineer in the supply chain
								industry. But nights and weekends, I&apos;m building - websites for friends,
								small businesses, and ideas of my own.
							</p>
							<p>
								Every project I take on is crafted from scratch. No templates, no page
								builders, no compromises. Just clean code, thoughtful design, and
								software that&apos;s built to last.
							</p>
						</div>
					</AnimatedElement>
				</div>

				{/* Recent posts - right */}
				<div>
					<AnimatedElement delay={0.15}>
						<h2 className='font-heading text-3xl font-bold tracking-tight sm:text-4xl'>Recent Posts</h2>
						<div className='mt-2 h-px w-16 bg-linear-to-r from-primary to-accent' />
					</AnimatedElement>

					<div className='mt-8 flex flex-col gap-4'>
						{posts.length === 0 ? (
							<p className='text-muted-foreground'>Posts coming soon.</p>
						) : (
							posts.map((post, i) => (
								<AnimatedElement key={post.slug} delay={0.2 + i * 0.1}>
									<Link
										href={`/blog/${post.slug}`}
										className='group block rounded-lg border border-border/50 bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5'
									>
										<time className='text-xs text-muted-foreground'>
											{parseLocalDate(post.date).toLocaleDateString("en-US", {
												year: "numeric",
												month: "short",
												day: "numeric",
											})}
										</time>
										<h3 className='mt-1 font-heading text-base font-semibold tracking-tight transition-colors group-hover:text-primary'>
											{post.title}
										</h3>
										<p className='mt-1 text-sm text-muted-foreground line-clamp-2'>
											{post.description}
										</p>
									</Link>
								</AnimatedElement>
							))
						)}

						{posts.length > 0 && (
							<AnimatedElement delay={0.2 + posts.length * 0.1}>
								<Link
									href='/blog'
									className='mt-1 inline-block text-sm text-primary transition-colors hover:text-primary/80'
								>
									View all posts &rarr;
								</Link>
							</AnimatedElement>
						)}
					</div>
				</div>
			</div>
		</section>
	)
}
