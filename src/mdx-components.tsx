import type { MDXComponents } from "mdx/types"

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		h1: ({ children }) => (
			<h1 className='mb-6 mt-12 font-heading text-4xl font-bold tracking-tight first:mt-0'>{children}</h1>
		),
		h2: ({ children }) => (
			<h2 className='mb-4 mt-10 font-heading text-3xl font-semibold tracking-tight'>{children}</h2>
		),
		h3: ({ children }) => (
			<h3 className='mb-3 mt-8 font-heading text-2xl font-semibold tracking-tight'>{children}</h3>
		),
		p: ({ children }) => <p className='mb-5 leading-relaxed text-muted-foreground'>{children}</p>,
		a: ({ href, children }) => (
			<a
				href={href}
				className='text-primary underline decoration-primary/30 underline-offset-4 transition-colors hover:decoration-primary'
				target={href?.startsWith("http") ? "_blank" : undefined}
				rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}>
				{children}
			</a>
		),
		ul: ({ children }) => <ul className='mb-5 list-disc space-y-1 pl-6 text-muted-foreground'>{children}</ul>,
		ol: ({ children }) => <ol className='mb-5 list-decimal space-y-1 pl-6 text-muted-foreground'>{children}</ol>,
		blockquote: ({ children }) => (
			<blockquote className='my-6 border-l-2 border-primary/50 pl-6 italic text-muted-foreground'>
				{children}
			</blockquote>
		),
		code: ({ children }) => <code className='rounded bg-muted px-1.5 py-0.5 font-mono text-sm'>{children}</code>,
		pre: ({ children }) => (
			<pre className='my-6 overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-sm'>
				{children}
			</pre>
		),
		...components
	}
}
