import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

/** Parse a YYYY-MM-DD string as local time (avoids UTC off-by-one). */
export function parseLocalDate(dateStr: string) {
	const [y, m, d] = dateStr.split("-").map(Number)
	return new Date(y, m - 1, d)
}
