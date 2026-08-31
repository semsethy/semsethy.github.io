import {motion} from "framer-motion";
import {profile, social} from "../data/site";
import Icon from "../components/Icon";

const socials = [
  {name: "github", url: social.github, label: "GitHub"},
  {name: "linkedin", url: social.linkedin, label: "LinkedIn"},
  {name: "telegram", url: social.telegram, label: "Telegram"},
  {name: "mail", url: `mailto:${social.email}`, label: "Email"}
];

export default function Hero() {
  return (
    <div id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-backdrop" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-35 blur-3xl"
        style={{background: "radial-gradient(circle, var(--color-brand-300), transparent 62%)"}}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-5 pt-14 pb-4 sm:pt-20 sm:pb-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-14">
          <div>
            <motion.div
              initial={{opacity: 0, y: 14}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.5}}
              className="inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1.5 text-xs font-medium backdrop-blur dark:bg-white/5"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-brand-500" />
              </span>
              {profile.available}
            </motion.div>

            <motion.h1
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.55, delay: 0.06}}
              className="mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]"
            >
              Hi, I'm Sethy —{" "}
              <span className="bg-gradient-to-r from-brand-600 to-brand-400 bg-clip-text text-transparent dark:from-brand-300 dark:to-brand-500">
                an iOS developer
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.55, delay: 0.14}}
              className="mt-5 max-w-xl text-base leading-relaxed muted sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{opacity: 0, y: 18}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.55, delay: 0.22}}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-brand-700 hover:shadow-md"
              >
                See my work <Icon name="arrow" className="size-4" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-brand-50 dark:hover:bg-brand-950"
              >
                <Icon name="download" className="size-4" /> Download CV
              </a>
              <div className="ml-1 flex items-center gap-1">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="grid size-9 place-items-center rounded-full transition-colors muted hover:bg-brand-50 hover:text-brand-600 dark:hover:bg-brand-950 dark:hover:text-brand-300"
                  >
                    <Icon name={s.name} className="size-[18px]" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Compact portrait */}
          <motion.div
            initial={{opacity: 0, scale: 0.94}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.6, delay: 0.15}}
            className="relative mx-auto w-[190px] shrink-0 sm:w-[220px]"
          >
            <div
              className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-brand-400/30 to-sun-400/25 blur-xl"
              aria-hidden="true"
            />
            <div
              className="relative overflow-hidden rounded-3xl border shadow-lg"
              style={{backgroundColor: "var(--card)"}}
            >
              <img
                src={profile.photo}
                alt={`${profile.name}, ${profile.role}`}
                className="aspect-[959/1187] w-full object-cover"
                loading="eager"
              />
            </div>
            <div
              className="absolute -bottom-4 -left-6 flex items-center gap-2 rounded-full border px-3 py-2 shadow-md backdrop-blur"
              style={{backgroundColor: "color-mix(in srgb, var(--card) 88%, transparent)"}}
            >
              <span className="grid size-6 place-items-center rounded-full bg-brand-600 text-white">
                <Icon name="apple" className="size-3.5" />
              </span>
              <span className="text-xs font-medium">iOS Developer</span>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
