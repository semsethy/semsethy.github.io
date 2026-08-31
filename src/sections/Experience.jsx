import Section, {Reveal} from "../components/Section";
import {experience} from "../data/site";

export default function Experience() {
  if (!experience.display) return null;
  return (
    <Section id="experience" eyebrow="Career" title={experience.title} subtitle={experience.subtitle}>
      <div className="relative">
        <div className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-[var(--line)] sm:block" aria-hidden="true" />
        <div className="space-y-6">
          {experience.jobs.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.08}>
              <div className="relative sm:pl-12">
                <span className="absolute left-0 top-7 hidden size-8 place-items-center rounded-full border bg-[var(--card)] sm:grid">
                  <span className={`size-2.5 rounded-full ${job.current ? "bg-brand-500" : "bg-[var(--muted)]"}`} />
                </span>

                <article className="rounded-2xl border p-6 sm:p-7" style={{backgroundColor: "var(--card)"}}>
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-brand-600 dark:text-brand-300">{job.company}</p>
                      <p className="mt-1 text-xs muted">
                        {job.team} · {job.location}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                        job.current
                          ? "bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300"
                          : "border muted"
                      }`}
                    >
                      {job.period}
                    </span>
                  </div>

                  {job.summary && <p className="mt-4 text-sm leading-relaxed">{job.summary}</p>}

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((pt) => (
                      <li key={pt} className="flex gap-3 text-sm leading-relaxed muted">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-400" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5 border-t pt-5">
                    {job.stack.map((s) => (
                      <span key={s} className="rounded-md bg-[var(--page)] px-2 py-1 text-xs font-medium muted">
                        {s}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
