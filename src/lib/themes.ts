export interface Palette {
	name: string
	label: string
}

export const palettes: Palette[] = [
	{ name: "forest", label: "Forest" }
	// Add more palettes here — each needs matching CSS variables in globals.css
	// { name: "ocean", label: "Ocean" },
]

export const defaultPalette = "forest"
