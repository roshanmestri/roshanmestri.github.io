import { earlierRoles, fyntune } from "@/content/site";
import { Card, Chip, Section } from "./ui";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've worked"
      intro="From shipping modules to owning how the frontend is planned, built and released."
    >
      <Card className="overflow-hidden">
        <div className="grid gap-6 border-b border-border bg-accent-soft/60 p-6 sm:p-8 lg:grid-cols-[1fr_1.6fr] lg:gap-10">
          <div>
            <div className="flex items-center gap-4">
              <div
                aria-hidden
                className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[#2b59ff] to-[#8b5cf6] text-lg font-bold text-white"
              >
                FT
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-semibold">{fyntune.company}</h3>
                <p className="text-sm text-muted">{fyntune.short}</p>
              </div>
            </div>
            <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">Period</dt>
                <dd className="mt-0.5">{fyntune.period}</dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-muted">Tenure</dt>
                <dd className="mt-0.5">{fyntune.tenure}</dd>
              </div>
            </dl>
            <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tools used">
              {fyntune.stack.map((st) => (
                <Chip key={st} small>
                  {st}
                </Chip>
              ))}
            </ul>
          </div>
          <p className="text-lg leading-relaxed text-pretty lg:text-xl">{fyntune.story}</p>
        </div>

        <div className="grid gap-px bg-border md:grid-cols-3">
          {fyntune.pillars.map((pillar, i) => (
            <div key={pillar.title} className="bg-surface p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-lg bg-accent-soft font-mono text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <h4 className="text-lg font-semibold">{pillar.title}</h4>
              </div>
              <p className="mt-2 text-sm text-muted">{pillar.lead}</p>
              <ul className="mt-4 space-y-3">
                {pillar.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed">
                    <span aria-hidden className="mt-2 size-1.5 shrink-0 rotate-45 bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Card>

      <h3 className="mt-10 font-mono text-xs font-medium uppercase tracking-widest text-muted">Growth at FynTune</h3>
      <ol className="mt-4 grid gap-4 md:grid-cols-2">
        {fyntune.roles.map((role) => (
          <li key={role.title}>
            <Card className={`h-full p-6 ${role.current ? "border-accent/60 ring-1 ring-accent/20" : ""}`}>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h4 className="text-lg font-semibold">{role.title}</h4>
                {role.current ? (
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-[#22c55e]/15 px-2 py-0.5 text-xs font-medium text-[#16a34a] dark:text-[#4ade80]">
                    <span className="animate-pulse-ring size-1.5 rounded-full bg-[#22c55e]" aria-hidden />
                    Current
                  </span>
                ) : null}
              </div>
              <p className="mt-0.5 font-mono text-sm text-muted">{role.period}</p>
              <p className="mt-3 leading-relaxed text-muted">{role.summary}</p>
              <dl className="mt-5 grid grid-cols-3 gap-3">
                {role.highlights.map((h) => (
                  <div key={h.label} className="flex flex-col rounded-xl border border-border bg-bg p-3">
                    <dt className="text-xs leading-snug text-muted">{h.label}</dt>
                    <dd className="order-first text-2xl font-semibold tracking-tight text-accent">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </li>
        ))}
      </ol>

      <h3 className="mt-10 font-mono text-xs font-medium uppercase tracking-widest text-muted">Before FynTune</h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {earlierRoles.map((r) => (
          <li key={r.company}>
            <Card className="h-full p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <h4 className="font-semibold">{r.company}</h4>
                <span className="font-mono text-xs text-muted">{r.period}</span>
              </div>
              <p className="text-sm text-accent">{r.title}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{r.text}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tools used">
                {r.stack.map((st) => (
                  <Chip key={st} small>
                    {st}
                  </Chip>
                ))}
              </ul>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
