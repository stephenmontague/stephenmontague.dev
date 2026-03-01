import { cn } from "@/lib/utils"

interface GradientBlobProps {
	className?: string
	color?: "primary" | "accent"
}

export function GradientBlob({ className, color = "primary" }: GradientBlobProps) {
	return (
		<div
			aria-hidden
			className={cn(
				"pointer-events-none absolute rounded-full blur-3xl",
				color === "primary" ? "bg-gradient-start opacity-[0.07]" : "bg-gradient-end opacity-[0.05]",
				className
			)}
		/>
	)
}
