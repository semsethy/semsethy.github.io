import Section, {Reveal} from "../components/Section";
import Icon from "../components/Icon";
import {testimonials} from "../data/site";

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

function PendingCard() {
  return (
    <div
      className="flex h-full min-h-[220px] flex-col items-center justify-center rounded-2xl border border-dashed p-8 text-center"
      style={{backgroundColor: "var(--card)"}}
    >
      <span className="grid size-10 place-items-center rounded-full bg-[var(--page)] muted">
        <Icon name="quote" className="size-5" />
      </span>
      <p className="mt-4 text-sm font-medium">A space reserved</p>
      <p className="mt-1 max-w-[26ch] text-xs muted">for a colleague&apos;s words.</p>
    </div>
  );
}

function Card({t, solo}) {
  return (
    <figure
      className={`relative flex h-full flex-col rounded-2xl border p-6 sm:p-8 ${solo ? "sm:p-10" : ""}`}
      style={{backgroundColor: "var(--card)"}}
    >
      <Icon name="quote" className={`text-brand-200 dark:text-brand-900 ${solo ? "size-10" : "size-8"}`} />
      <blockquote className={`mt-3 mb-7 leading-relaxed ${solo ? "text-lg sm:text-xl" : "text-[15px]"}`}>
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-auto flex items-center gap-3 border-t pt-5">
        {t.photo ? (
          <img
            src={t.photo}
            alt={t.author}
            loading="lazy"
            className="size-11 shrink-0 rounded-full border object-cover shadow-sm"
          />
        ) : (
          <span className="grid size-11 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-semibold text-white">
            {initials(t.author)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{t.author}</p>
          <p className="truncate text-xs muted">{t.title}</p>
          <p className="truncate text-xs muted">{t.org}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  if (!testimonials.display || testimonials.items.length === 0) return null;
  const solo = testimonials.items.length === 1;

  return (
    <Section id="testimonials" eyebrow="Testimonials" title={testimonials.title} subtitle={testimonials.subtitle}>
      <div className={solo ? "mx-auto max-w-3xl" : "grid gap-4 md:grid-cols-2"}>
        {testimonials.items.map((t, i) => (
          <Reveal key={t.pending ? `pending-${i}` : t.quote.slice(0, 40)} delay={i * 0.07} className="h-full">
            {t.pending ? <PendingCard /> : <Card t={t} solo={solo} />}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
