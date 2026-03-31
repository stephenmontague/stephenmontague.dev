"use client"

import { GradientBlob } from "@/components/shared/gradient-blob"
import { Button } from "@/components/ui/button"
import { motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"

export function HeroSection() {
	return (
		<section className='relative overflow-hidden pt-8 pb-8 md:pt-12 md:pb-10 lg:pt-16 lg:pb-12'>
			<GradientBlob className='right-1/4 top-1/4 h-96 w-96' color='primary' />
			<GradientBlob className='-right-12 top-1/2 h-72 w-72' color='accent' />

			<div className='relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1fr_auto] md:items-center md:gap-16 lg:gap-24'>
				{/* Text */}
				<div className='flex flex-col gap-6'>
					<motion.h1
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
						className='font-heading text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl'>
						<span className='inline-block bg-linear-to-r from-primary to-accent bg-clip-text text-transparent'>
							Stephen
						</span>
						<br />
						<span className='text-foreground'>Montague</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.15,
							ease: [0.21, 0.47, 0.32, 0.98]
						}}
						className='text-lg text-muted-foreground sm:text-xl'>
						Believer. Husband. Father. Builder.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.6,
							delay: 0.3,
							ease: [0.21, 0.47, 0.32, 0.98]
						}}
						className='flex flex-wrap gap-3 pt-2'>
						<Button
							asChild
							size='lg'
							className='bg-primary text-primary-foreground hover:bg-primary/90'>
							<Link href='#projects'>View Projects</Link>
						</Button>
						<Button asChild variant='outline' size='lg'>
							<Link href='/blog'>Read Blog</Link>
						</Button>
					</motion.div>
				</div>

				{/* Headshot */}
				<motion.div
					initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
					animate={{ opacity: 1, scale: 1, rotate: 2 }}
					transition={{
						duration: 0.7,
						delay: 0.2,
						ease: [0.21, 0.47, 0.32, 0.98]
					}}
					className='relative mx-auto md:mx-0'>
					<div className='relative h-80 w-64 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-border/50 sm:h-88 sm:w-72 lg:h-96 lg:w-80'>
						<div className='absolute inset-0 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20' />
						<Image
							src='/headshot.jpg'
							alt='Stephen Montague'
							fill
							priority
							className='object-cover'
							sizes='(max-width: 640px) 256px, (max-width: 1024px) 288px, 320px'
								style={{ objectPosition: 'center top' }}
						/>
					</div>
					{/* Glow behind the photo */}
					<div className='absolute -inset-4 -z-10 rounded-3xl bg-primary/10 blur-2xl' />
				</motion.div>
			</div>
		</section>
	)
}
