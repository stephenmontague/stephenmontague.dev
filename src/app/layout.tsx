import { Footer } from "@/components/layout/footer"
import { Header } from "@/components/layout/header"
import { Providers } from "@/components/providers/theme-provider"
import { GrainOverlay } from "@/components/shared/grain-overlay"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"]
})

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"]
})

const inter = Inter({
	variable: "--font-heading",
	subsets: ["latin"],
	display: "swap",
})

export const metadata: Metadata = {
	metadataBase: new URL("https://stephenmontague.dev"),
	title: {
		default: "Stephen Montague | Custom Web Development",
		template: "%s | Stephen Montague"
	},
	description:
		"Custom web development for businesses that want to stand out. Creator of colinandcraig.com and mustardseedlife.com.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://stephenmontague.dev",
		siteName: "Stephen Montague"
	},
	twitter: {
		card: "summary_large_image"
	},
	robots: {
		index: true,
		follow: true
	}
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>
				<Providers>
					<GrainOverlay />
					<Header />
					<main className='min-h-screen pt-16'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
