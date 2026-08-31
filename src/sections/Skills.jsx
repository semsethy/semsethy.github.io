import Section, {Reveal} from "../components/Section";
import Icon from "../components/Icon";
import {skills} from "../data/site";

export default function Skills() {
  if (!skills.display) return null;
  return (
    <Section id="skills" eyebrow="Toolkit" title={skills.title} subtitle={skills.subtitle}>
      <div className="grid gap-4 lg:grid-cols-3">
        {skills.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.07}>
            <div className="h-full rounded-2xl border p-6" style={{backgroundColor: "var(--card)"}}>
              <div className="flex items-center gap-2.5">
                <Icon name="spark" className="size-4 text-brand-500" />
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider">{g.name}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-1.5">
                {g.items.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg border bg-[var(--page)] px-2.5 py-1.5 text-xs font-medium transition-colors hover:border-brand-400 hover:text-brand-600 dark:hover:text-brand-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}
