import Icon from "./Icon";
import {profile, social} from "../data/site";

const links = [
  {name: "github", url: social.github, label: "GitHub"},
  {name: "linkedin", url: social.linkedin, label: "LinkedIn"},
  {name: "telegram", url: social.telegram, label: "Telegram"},
  {name: "mail", url: `mailto:${social.email}`, label: "Email"}
];

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row">
        <p className="text-sm muted">
          © {new Date().getFullYear()} {profile.name} · Built with React, Vite &amp; Tailwind
        </p>
        <div className="flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              aria-label={l.label}
              className="grid size-9 place-items-center rounded-full transition-colors muted hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 dark:hover:text-brand-300"
            >
              <Icon name={l.name} className="size-[18px]" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
