import { profile } from "@/content/site";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-14 sm:py-20">
      <div className="relative overflow-hidden rounded-3xl bg-[#0d1020] px-6 py-12 text-white sm:px-12 sm:py-14">
        <div aria-hidden className="absolute -top-24 -right-24 size-72 rounded-full bg-[#2b59ff]/40 blur-3xl" />
        <div aria-hidden className="absolute -bottom-24 -left-10 size-60 rounded-full bg-[#8b5cf6]/30 blur-3xl" />
        <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-[#8ea6ff]">Contact</p>
            <h2 id="contact-title" className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s build something.
            </h2>
            <p className="mt-4 max-w-lg text-lg text-white/70">
              Got a role, a project or a question about anything here? Email reaches me fastest.
            </p>
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { href: `mailto:${profile.email}`, label: profile.email, icon: <MailIcon />, external: false },
              { href: profile.linkedin, label: "LinkedIn", icon: <LinkedInIcon />, external: true },
              { href: profile.github, label: "GitHub", icon: <GitHubIcon />, external: true },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  {...(l.external && { target: "_blank", rel: "noopener noreferrer" })}
                  className="flex items-center gap-3 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-medium break-all transition hover:border-white/40 hover:bg-white/10"
                >
                  {l.icon}
                  {l.label}
                  <span aria-hidden className="ml-auto">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
