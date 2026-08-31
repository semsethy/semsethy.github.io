import Section, {Reveal} from "../components/Section";
import Icon from "../components/Icon";
import {education, certifications} from "../data/site";

function CertCard({c}) {
  return (
    <a
      href={c.url}
      target="_blank"
      rel="noreferrer"
      className="group relative flex flex-col overflow-hidden rounded-2xl border transition-all hover:-translate-y-1 hover:shadow-lg"
      style={{backgroundColor: "var(--card)"}}
    >
      <div className="relative aspect-[4/3] overflow-hidden" style={{backgroundColor: "var(--page)"}}>
        <img
          src={c.cover}
          alt={c.name}
          loading="lazy"
          className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent opacity-70" />
        {c.badge && (
          <img
            src={c.badge}
            alt=""
            className="absolute bottom-3 left-3 size-10 rounded-full border-2 border-white/90 bg-white object-contain shadow-md"
          />
        )}
        <span className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 text-ink-800 opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
          <Icon name="external" className="size-3.5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h4 className="text-sm font-semibold leading-snug transition-colors group-hover:text-brand-600 dark:group-hover:text-brand-300">
          {c.name}
        </h4>
        <p className="mt-1 text-xs muted">
          {c.issuer}
          {c.year ? ` · ${c.year}` : ""}
        </p>
      </div>
    </a>
  );
}

export default function Education() {
  if (!education.display && !certifications.display) return null;
  return (
    <Section id="education" eyebrow="Background" title={education.title}>
      {education.display && (
        <div className="grid gap-3 sm:grid-cols-3">
          {education.schools.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.06}>
              <div
                className="flex h-full flex-col rounded-2xl border p-5"
                style={{backgroundColor: "var(--card)"}}
              >
                {s.logo ? (
                  <img src={s.logo} alt="" className="size-12 rounded-xl object-contain" />
                ) : (
                  <span className="grid size-12 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300">
                    <Icon name="book" className="size-5" />
                  </span>
                )}
                <h3 className="mt-4 text-sm font-semibold">{s.name}</h3>
                <p className="mt-1 text-sm muted">{s.credential}</p>
                <span className="mt-3 inline-block w-fit rounded-full bg-[var(--page)] px-2.5 py-1 text-xs muted">
                  {s.period}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      )}

      {certifications.display && (
        <div className="mt-14">
          <Reveal>
            <div className="mb-5 flex items-baseline gap-3">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider">
                {certifications.title}
              </h3>
              <span className="h-px flex-1 bg-[var(--line)]" />
              <span className="text-xs muted">{certifications.subtitle}</span>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.items.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.06}>
                <CertCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
