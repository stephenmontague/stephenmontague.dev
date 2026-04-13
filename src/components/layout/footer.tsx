import { Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

const socials = [
	{
		href: "https://github.com/stephenmontague",
		label: "GitHub",
		icon: Github
	},
	{
		href: "https://linkedin.com/in/stephendmontague",
		label: "LinkedIn",
		icon: Linkedin
	},
	{
		href: "mailto:hello@stephenmontague.dev",
		label: "Email",
		icon: Mail
	}
]

export function Footer() {
	return (
		<footer className='border-t border-border/50'>
			<div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row'>
				<div className='flex items-center gap-2 text-sm text-muted-foreground'>
					<Image src='/android-chrome-192x192.png' alt='SM logo' width={20} height={20} className='rounded-sm' />
					<p>&copy; {new Date().getFullYear()} stephenmontague.dev LLC</p>
				</div>
				<div className='flex items-center gap-4'>
					{socials.map((social) => (
						<a
							key={social.label}
							href={social.href}
							target='_blank'
							rel='noopener noreferrer'
							className='text-muted-foreground transition-colors hover:text-foreground'
							aria-label={social.label}>
							<social.icon className='h-4 w-4' />
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}
