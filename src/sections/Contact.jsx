import {Reveal} from "../components/Section";
import Icon from "../components/Icon";
import {contact, social, profile} from "../data/site";

const cards = [
  {icon: "mail", label: "Email", value: social.email, href: `mailto:${social.email}`},
  {icon: "telegram", label: "Telegram", value: `@${social.telegram.split("/").pop()}`, href: social.telegram},
  {icon: "phone", label: "Phone", value: social.phone, href: `tel:${social.phone.replace(/\s/g, "")}`},
  {icon: "pin", label: "Based in", value: contact.address, href: null}
];

export default function Contact() {
  if (!contact.display) return null;
  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border p-8 sm:p-12" style={{backgroundColor: "var(--card)"}}>
            <div
              className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full opacity-30 blur-3xl"
              style={{background: "radial-gradient(circle, var(--color-brand-400), transparent 68%)"}}
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600 dark:text-brand-300">
                  <span className="h-px w-6 bg-brand-500/60" />
                  Contact
                </span>
                <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{contact.title}</h2>
                <p className="mt-3 max-w-md text-base muted">{contact.subtitle}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${social.email}`}
                    className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
                  >
                    <Icon name="mail" className="size-4" /> Send an email
                  </a>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-brand-50 dark:hover:bg-brand-950"
                  >
                    <Icon name="download" className="size-4" /> Download CV
                  </a>
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {cards.map((c) => {
                  const Tag = c.href ? "a" : "div";
                  return (
                    <Tag
                      key={c.label}
                      {...(c.href ? {href: c.href, target: c.href.startsWith("http") ? "_blank" : undefined, rel: "noreferrer"} : {})}
                      className={`rounded-2xl border p-4 transition-all ${c.href ? "hover:-translate-y-0.5 hover:border-brand-400 hover:shadow-sm" : ""}`}
                      style={{backgroundColor: "var(--page)"}}
                    >
                      <span className="grid size-9 place-items-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950 dark:text-brand-300">
                        <Icon name={c.icon} className="size-4" />
                      </span>
                      <p className="mt-3 text-xs uppercase tracking-wide muted">{c.label}</p>
                      <p className="mt-0.5 break-words text-sm font-medium">{c.value}</p>
                    </Tag>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
