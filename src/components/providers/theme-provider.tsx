"use client"

import { defaultPalette } from "@/lib/themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { createContext, useContext, useEffect, useState, type ReactNode } from "react"

type PaletteContextType = {
	palette: string
	setPalette: (palette: string) => void
}

const PaletteContext = createContext<PaletteContextType>({
	palette: defaultPalette,
	setPalette: () => {}
})

export function usePalette() {
	return useContext(PaletteContext)
}

function getInitialPalette() {
	if (typeof window === "undefined") return defaultPalette
	return localStorage.getItem("palette") ?? defaultPalette
}

function PaletteProvider({ children }: { children: ReactNode }) {
	const [palette, setPaletteState] = useState(getInitialPalette)

	function setPalette(p: string) {
		setPaletteState(p)
		localStorage.setItem("palette", p)
		document.documentElement.setAttribute("data-palette", p)
	}

	useEffect(() => {
		document.documentElement.setAttribute("data-palette", palette)
	}, [palette])

	return <PaletteContext.Provider value={{ palette, setPalette }}>{children}</PaletteContext.Provider>
}

export function Providers({ children }: { children: ReactNode }) {
	return (
		<NextThemesProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
			<PaletteProvider>{children}</PaletteProvider>
		</NextThemesProvider>
	)
}
