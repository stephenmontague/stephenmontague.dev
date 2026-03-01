import { AboutSection } from "@/components/landing/about-section"
import { ContactSection } from "@/components/landing/contact-section"
import { HeroSection } from "@/components/landing/hero-section"
import { ProjectsSection } from "@/components/landing/projects-section"

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Stephen Montague",
	url: "https://stephenmontague.dev",
	jobTitle: "Software Engineer",
	knowsAbout: ["Web Development", "Next.js", "React", "TypeScript"],
	sameAs: ["https://github.com/stephenmontague", "https://linkedin.com/in/stephendmontague"]
}

export default function Home() {
	return (
		<>
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
				}}
			/>
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<ContactSection />
		</>
	)
}
