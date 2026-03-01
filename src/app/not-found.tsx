import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
	return (
		<section className='flex min-h-[60vh] flex-col items-center justify-center px-6 text-center'>
			<h1 className='font-heading text-6xl font-bold tracking-tight'>404</h1>
			<p className='mt-4 text-lg text-muted-foreground'>This page doesn&apos;t exist.</p>
			<Button asChild variant='outline' className='mt-8'>
				<Link href='/'>Go home</Link>
			</Button>
		</section>
	)
}
