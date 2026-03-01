"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

interface AnimatedElementProps {
	children: ReactNode
	delay?: number
	className?: string
	direction?: "up" | "down" | "left" | "right"
}

const directionOffset = {
	up: { x: 0, y: 24 },
	down: { x: 0, y: -24 },
	left: { x: 24, y: 0 },
	right: { x: -24, y: 0 }
}

export function AnimatedElement({ children, delay = 0, className, direction = "up" }: AnimatedElementProps) {
	const offset = directionOffset[direction]

	return (
		<motion.div
			initial={{ opacity: 0, x: offset.x, y: offset.y }}
			whileInView={{ opacity: 1, x: 0, y: 0 }}
			viewport={{ once: true, margin: "-80px" }}
			transition={{
				duration: 0.6,
				delay,
				ease: [0.21, 0.47, 0.32, 0.98]
			}}
			className={className}>
			{children}
		</motion.div>
	)
}
