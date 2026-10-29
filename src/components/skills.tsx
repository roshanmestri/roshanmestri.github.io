import { extras, skills } from "@/content/site";
import { Card, Chip, Section } from "./ui";

export function Skills() {
  return (
    <Section id="skills" label="Skills" title="What I work with">
      <div className="grid gap-4 sm:grid-cols-3">
        {skills.map((sk) => (
          <Card key={sk.group} className="p-5">
            <h3 className="text-sm font-semibold">{sk.group}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {sk.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <ul className="mt-4 grid gap-4 sm:grid-cols-3">
        {extras.map((e) => (
          <li key={e.title} className="rounded-2xl border border-dashed border-border p-5">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-sm font-semibold">{e.title}</p>
              {e.period && <p className="shrink-0 font-mono text-xs text-muted">{e.period}</p>}
            </div>
            <p className="mt-1.5 text-sm text-muted">{e.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
