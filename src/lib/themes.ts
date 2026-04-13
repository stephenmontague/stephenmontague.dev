export interface Palette {
	name: string
	label: string
}

export const palettes: Palette[] = [
	{ name: "blue-purple", label: "Blue Purple" }
	// Add more palettes here — each needs matching CSS variables in globals.css
	// { name: "forest", label: "Forest" },
]

export const defaultPalette = "blue-purple"
