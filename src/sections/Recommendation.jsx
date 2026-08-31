import {Reveal} from "../components/Section";
import Icon from "../components/Icon";
import {recommendation as rec} from "../data/site";

export default function Recommendation() {
  if (!rec.display) return null;
  const hasFile = Boolean(rec.file);

  return (
    <section id="recommendation" className="mx-auto w-full max-w-6xl px-5 py-8">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border" style={{backgroundColor: "var(--card)"}}>
          <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600 dark:text-brand-300">
                <span className="h-px w-6 bg-brand-500/60" />
                {rec.title}
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                Letter of recommendation
              </h2>

              {rec.pullQuote ? (
                <blockquote className="mt-4 border-l-2 border-brand-400 pl-4 text-[15px] leading-relaxed italic">
                  “{rec.pullQuote}”
                </blockquote>
              ) : (
                <p className="mt-4 max-w-xl text-sm leading-relaxed muted">{rec.placeholderNote}</p>
              )}

              <div className="mt-5 flex items-center gap-3">
                {rec.photo ? (
                  <img
                    src={rec.photo}
                    alt={rec.author}
                    loading="lazy"
                    className="size-11 shrink-0 rounded-full border object-cover shadow-sm"
                  />
                ) : (
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">
                    {rec.author
                      .split(/[\s-]+/)
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                )}
                <div>
                  <p className="text-sm font-semibold">{rec.author}</p>
                  <p className="text-xs muted">
                    {rec.authorTitle} · {rec.org}
                  </p>
                </div>
              </div>

              {hasFile && (
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={rec.file}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-700"
                  >
                    <Icon name="doc" className="size-4" /> Read the letter
                  </a>
                  <a
                    href={rec.file}
                    download
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-brand-50 dark:hover:bg-brand-950"
                  >
                    <Icon name="download" className="size-4" /> Download PDF
                  </a>
                </div>
              )}
            </div>

            {/* Letter preview */}
            <div className="relative mx-auto w-full max-w-[240px] lg:mx-0">
              <div
                className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand-400/20 to-sun-400/20 blur-lg"
                aria-hidden="true"
              />
              {rec.image ? (
                <a
                  href={rec.file || rec.image}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block overflow-hidden rounded-xl border shadow-lg transition-transform hover:-translate-y-0.5"
                  aria-label="Open the recommendation letter"
                >
                  <img
                    src={rec.image}
                    alt={`Letter of recommendation from ${rec.author}`}
                    loading="lazy"
                    className="block w-full"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-medium text-ink-800 opacity-0 shadow transition-opacity group-hover:opacity-100">
                    Open full letter
                  </span>
                </a>
              ) : (
                <div
                  className="relative grid aspect-[3/4] place-items-center overflow-hidden rounded-xl border p-5 text-center shadow-lg"
                  style={{backgroundColor: "var(--page)"}}
                >
                  <div>
                    <Icon name="doc" className="mx-auto size-10 text-brand-300 dark:text-brand-800" />
                    <p className="mt-3 text-xs font-medium">Letter of recommendation</p>
                    <p className="mt-1 text-[11px] muted">Available on request</p>
                  </div>
                </div>
              )}
              <p className="mt-2 text-center text-[11px] muted lg:text-left">
                Contact details redacted for privacy.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
