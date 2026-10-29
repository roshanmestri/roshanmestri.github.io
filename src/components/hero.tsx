import { profile, skills, stats } from "@/content/site";
import { FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { ButtonLink } from "./ui";

// Tokens for the code card; it stays dark in both themes, like an editor would.
const k = "text-[#c792ea]";
const s = "text-[#c3e88d]";
const p = "text-[#82aaff]";
const c = "text-[#697098]";

function CodeCard() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d1020] shadow-2xl shadow-accent/20">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-[#697098]">roshan.ts</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6 text-[#d6deeb]">
        <code>
          <span className={k}>const</span> roshan = {"{\n"}
          {"  "}<span className={p}>role</span>: <span className={s}>&quot;{profile.role}&quot;</span>,{"\n"}
          {"  "}<span className={p}>company</span>: <span className={s}>&quot;{profile.company}&quot;</span>,{"\n"}
          {"  "}<span className={p}>since</span>: <span className={s}>2022</span>,{"\n"}
          {"  "}<span className={p}>daily</span>: [<span className={s}>&quot;React&quot;</span>, <span className={s}>&quot;TypeScript&quot;</span>, <span className={s}>&quot;React Native&quot;</span>],{"\n"}
          {"  "}<span className={p}>shipped</span>: <span className={s}>&quot;Gathr&quot;</span>, <span className={c}>{"// full-stack, live"}</span>{"\n"}
          {"  "}<span className={p}>users</span>: <span className={s}>&quot;9M+&quot;</span>,{"\n"}
          {"};"}
        </code>
      </pre>
    </div>
  );
}

const marquee = [...new Set(skills.flatMap((g) => g.items))];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-14 pb-12 sm:px-6 sm:pt-20 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2.5 rounded-full border border-border bg-surface/80 px-3 py-1 text-sm text-muted backdrop-blur">
            <span className="animate-pulse-ring size-2 rounded-full bg-[#22c55e]" aria-hidden />
            {profile.role} · {profile.company}
          </p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
            {profile.headline[0]} <span className="text-gradient">{profile.headline[1]}</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted text-pretty">{profile.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={profile.resume} variant="primary" external>
              <FileIcon /> Download resume
            </ButtonLink>
            <ButtonLink href={profile.github} external>
              <GitHubIcon /> GitHub
            </ButtonLink>
            <ButtonLink href={profile.linkedin} external>
              <LinkedInIcon /> LinkedIn
            </ButtonLink>
            <ButtonLink href={`mailto:${profile.email}`}>
              <MailIcon /> Email
            </ButtonLink>
          </div>
        </div>

        <CodeCard />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 divide-border rounded-2xl border border-border bg-surface/80 backdrop-blur sm:grid-cols-4 sm:divide-x">
          {stats.map((st) => (
            <div key={st.label} className="flex flex-col gap-1 p-5">
              <dt className="text-sm text-muted">{st.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{st.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div
        aria-hidden
        className="relative mt-12 overflow-hidden border-y border-border bg-surface/60 py-3 [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-10 font-mono text-sm text-muted">
          {[...marquee, ...marquee].map((item, i) => (
            <span key={i} className="flex items-center gap-10">
              {item}
              <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
