"use client"

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
	{ href: "#about", label: "About" },
	{ href: "#projects", label: "Projects" },
	{ href: "/blog", label: "Blog" },
	{ href: "#contact", label: "Contact" }
]

export function Header() {
	const [mobileOpen, setMobileOpen] = useState(false)

	return (
		<header className='fixed top-0 left-0 right-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md'>
			<div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-6'>
				<Link href='/' className='font-heading text-xl font-semibold tracking-tight'>
					stephenmontague.dev
				</Link>

				{/* Desktop nav */}
				<nav className='hidden items-center gap-8 md:flex'>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className='group relative text-sm text-muted-foreground transition-colors hover:text-foreground'>
							{link.label}
							<span className='absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full' />
						</Link>
					))}
					<ThemeToggle />
				</nav>

				{/* Mobile toggle */}
				<div className='flex items-center gap-2 md:hidden'>
					<ThemeToggle />
					<button
						onClick={() => setMobileOpen(!mobileOpen)}
						className='p-2 text-muted-foreground hover:text-foreground'
						aria-label='Toggle menu'>
						{mobileOpen ? <X className='h-5 w-5' /> : <Menu className='h-5 w-5' />}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			<div
				className={cn(
					"overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-md transition-all duration-300 md:hidden",
					mobileOpen ? "max-h-64" : "max-h-0 border-none"
				)}>
				<nav className='flex flex-col gap-4 px-6 py-4'>
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							onClick={() => setMobileOpen(false)}
							className='text-sm text-muted-foreground transition-colors hover:text-foreground'>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	)
}
