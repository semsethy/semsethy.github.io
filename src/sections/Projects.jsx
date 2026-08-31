import Section, {Reveal} from "../components/Section";
import Icon from "../components/Icon";
import Phone from "../components/Phone";
import {projects} from "../data/site";

const statusChip = {
  live: "bg-brand-600 text-white",
  wip: "bg-sun-400/20 text-sun-500 dark:text-sun-400"
};
const statusText = {live: "Live on the App Store", wip: "In development"};

function Gallery({shots, name, framed = true}) {
  if (!shots?.length) return null;
  return (
    <div className="-mx-6 mt-6 overflow-x-auto px-6 pb-2 no-scrollbar sm:-mx-7 sm:px-7">
      <div className="flex gap-4">
        {shots.map((sh) => (
          <figure key={sh.src} className="shrink-0">
            {framed ? (
              <Phone src={sh.src} alt={`${name} — ${sh.label}`} w={168} />
            ) : (
              <img
                src={sh.src}
                alt={`${name} — ${sh.label}`}
                loading="lazy"
                className="w-[190px] rounded-xl border object-cover shadow-sm"
              />
            )}
            <figcaption className="mt-2 text-center text-[11px] muted">{sh.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({p}) {
  const isImgIcon = typeof p.icon === "string" && p.icon.startsWith("/");
  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg sm:p-7"
      style={{backgroundColor: "var(--card)"}}
    >
      <div
        className={`pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-60 ${
          p.accent === "sun" ? "bg-sun-400/40" : "bg-brand-400/40"
        }`}
        aria-hidden="true"
      />

      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {isImgIcon ? (
            <img
              src={p.icon}
              alt=""
              className="size-12 shrink-0 rounded-[12px] border object-cover shadow-sm"
            />
          ) : (
            <span
              className={`grid size-11 shrink-0 place-items-center rounded-xl ${
                p.accent === "sun"
                  ? "bg-sun-400/15 text-sun-500"
                  : "bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300"
              }`}
            >
              <Icon name="phoneApp" className="size-5" />
            </span>
          )}
          <div>
            <h3 className="font-display text-lg font-semibold">{p.name}</h3>
            <p className="text-xs muted">{p.org}</p>
          </div>
        </div>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-[11px] font-medium ${statusChip[p.status]}`}>
          {statusText[p.status]}
        </span>
      </div>

      <p className="relative mt-4 text-sm leading-relaxed muted">{p.blurb}</p>

      {p.meta?.length > 0 && (
        <dl className="relative mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-xl border sm:grid-cols-4" style={{backgroundColor: "var(--line)"}}>
          {p.meta.map((m) => (
            <div key={m.label} className="px-3 py-2.5" style={{backgroundColor: "var(--page)"}}>
              <dt className="text-[10px] uppercase tracking-wide muted">{m.label}</dt>
              <dd className="mt-0.5 text-sm font-medium">{m.value}</dd>
            </div>
          ))}
        </dl>
      )}

      <div className="relative mt-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] muted">What I worked with</p>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md bg-[var(--page)] px-2 py-1 text-xs font-medium muted">
              {s}
            </span>
          ))}
        </div>
      </div>

      <Gallery shots={p.shots} name={p.name} framed={p.framedShots !== false} />

      <div className="relative mt-auto pt-5">
        {(p.appStoreUrl || p.repo) && (
          <div className="flex flex-wrap gap-2 border-t pt-4">
            {p.appStoreUrl && (
              <a
                href={p.appStoreUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                <Icon name="apple" className="size-4" /> View on the App Store
              </a>
            )}
            {p.repo && (
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-50 dark:hover:bg-brand-950"
              >
                <Icon name="github" className="size-4" /> Source on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default function Projects() {
  if (!projects.display) return null;
  return (
    <Section id="projects" eyebrow="Work" title={projects.title} subtitle={projects.subtitle}>
      <div className="space-y-12">
        {projects.groups.map((g) => (
          <div key={g.label}>
            <Reveal>
              <div className="mb-5 flex items-baseline gap-3">
                <h3 className="font-display text-sm font-semibold uppercase tracking-wider">{g.label}</h3>
                <span className="h-px flex-1 bg-[var(--line)]" />
                <span className="text-xs muted">{g.note}</span>
              </div>
            </Reveal>
            <div className="grid gap-4 lg:grid-cols-2">
              {g.items.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.07} className={g.items.length === 1 ? "lg:col-span-2" : ""}>
                  <ProjectCard p={p} />
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
