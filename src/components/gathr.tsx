import Image from "next/image";
import { gathr } from "@/content/site";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import { ButtonLink, Card, Chip, Section } from "./ui";

function BrowserShot({
  src,
  width,
  height,
  path,
  caption,
  priority = false,
}: {
  src: string;
  width: number;
  height: number;
  path: string;
  caption: string;
  priority?: boolean;
}) {
  return (
    <figure>
      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-lg shadow-black/5">
        <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="mx-auto truncate rounded-md bg-bg px-3 py-0.5 font-mono text-xs text-muted">
            gathr-meetup.vercel.app{path === "/" ? "" : path}
          </span>
        </div>
        <Image
          src={src}
          width={width}
          height={height}
          alt={`Screenshot of Gathr. ${caption}`}
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
      <figcaption className="mt-3 text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}

export function Gathr() {
  return (
    <Section
      id="gathr"
      label="Featured project"
      title="Gathr, built end to end"
      intro="A live product I designed, built, tested and deployed on my own."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#2b59ff] via-[#5b3dff] to-[#8b5cf6] p-6 text-white sm:p-8 lg:col-span-2 lg:row-span-2">
          <div aria-hidden className="absolute -right-16 -bottom-16 size-64 rounded-full bg-white/10 blur-2xl" />
          <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium">
            <span className="size-1.5 rounded-full bg-[#4ade80]" aria-hidden /> Live in production
          </p>
          <h3 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl">{gathr.name}</h3>
          <p className="mt-3 max-w-lg text-lg text-white/90 text-pretty">{gathr.tagline}</p>
          <p className="mt-3 max-w-lg text-white/75 text-pretty">{gathr.summary}</p>

          <ol className="mt-6 flex flex-wrap items-center gap-2 text-sm">
            {gathr.flow.map((f, i) => (
              <li key={f.step} className="flex items-center gap-2">
                <span className="rounded-lg bg-white/15 px-3 py-1.5 font-medium" title={f.text}>
                  {f.step}
                </span>
                {i < gathr.flow.length - 1 && <span aria-hidden>→</span>}
              </li>
            ))}
          </ol>

          <div className="relative mt-8 flex flex-wrap gap-3">
            <a
              href={gathr.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#2b2fd9] transition hover:-translate-y-0.5"
            >
              Open the live app <ArrowUpRightIcon />
            </a>
            <a
              href={gathr.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-4 py-2.5 text-sm font-medium transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              <GitHubIcon /> Source code
            </a>
          </div>
        </div>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted">Tested on every push</h3>
          <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-5">
            {gathr.quality.map((q) => (
              <div key={q.label} className="flex flex-col">
                <dt className="text-xs text-muted">{q.label}</dt>
                <dd className="order-first text-2xl font-semibold text-accent">{q.value}</dd>
              </div>
            ))}
          </dl>
        </Card>

        <Card className="p-6">
          <h3 className="text-sm font-medium text-muted">Built with</h3>
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {gathr.stack.map((st) => (
              <Chip key={st} small>
                {st}
              </Chip>
            ))}
          </ul>
        </Card>
      </div>

      <div className="mt-4 grid items-start gap-4 lg:grid-cols-[1fr_auto]">
        <BrowserShot {...gathr.screens.home} priority />
        <figure className="mx-auto w-48 sm:w-56">
          <div className="overflow-hidden rounded-[2rem] border-[6px] border-[#0d1020] bg-[#0d1020] shadow-xl dark:border-[#23283a]">
            <Image
              src={gathr.screens.mobile.src}
              width={gathr.screens.mobile.width}
              height={gathr.screens.mobile.height}
              alt="Gathr home page on a phone"
              className="block h-auto w-full rounded-[1.6rem]"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-muted">{gathr.screens.mobile.caption}</figcaption>
        </figure>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {gathr.screens.more.map((shot) => (
          <BrowserShot key={shot.src} {...shot} />
        ))}
      </div>

      <h3 className="mt-12 text-lg font-semibold">The parts that took real thought</h3>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {gathr.problems.map((pr, i) => (
          <li key={pr.title}>
            <Card className="group h-full p-5">
              <span className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</span>
              <h4 className="mt-1 font-semibold">{pr.title}</h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{pr.text}</p>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-6 sm:hidden">
        <ButtonLink href={gathr.live} external>
          Try Gathr <ArrowUpRightIcon />
        </ButtonLink>
      </div>
    </Section>
  );
}
