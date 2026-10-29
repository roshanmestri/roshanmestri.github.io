import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Gathr } from "@/components/gathr";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Skills } from "@/components/skills";
import { profile } from "@/content/site";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-20 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Gathr />
          <Experience />
          <Skills />
          <Contact />
        </div>
      </main>
      <footer className="mx-auto max-w-6xl px-4 pb-10 text-sm text-muted sm:px-6">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js, hosted on GitHub Pages.
      </footer>
    </>
  );
}
