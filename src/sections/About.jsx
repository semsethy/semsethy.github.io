import Section, {Reveal} from "../components/Section";
import Icon from "../components/Icon";
import {about} from "../data/site";

export default function About() {
  if (!about.display) return null;
  return (
    <Section id="about" eyebrow="About" title={about.title} subtitle={about.intro}>
      <div className="grid gap-4 sm:grid-cols-2">
        {about.pillars.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.06}>
            <div className="group h-full rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-md" style={{backgroundColor: "var(--card)"}}>
              <div className="mb-4 grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-950 dark:text-brand-300">
                <Icon name={p.icon} className="size-5" />
              </div>
              <h3 className="font-display text-base font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed muted">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}
