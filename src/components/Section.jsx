import {motion} from "framer-motion";

export function Reveal({children, delay = 0, className = ""}) {
  return (
    <motion.div
      className={className}
      initial={{opacity: 0, y: 18}}
      whileInView={{opacity: 1, y: 0}}
      viewport={{once: true, margin: "-60px"}}
      transition={{duration: 0.5, delay, ease: [0.22, 1, 0.36, 1]}}
    >
      {children}
    </motion.div>
  );
}

export function Eyebrow({children}) {
  return (
    <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600 dark:text-brand-300">
      <span className="h-px w-6 bg-brand-500/60" />
      {children}
    </span>
  );
}

export default function Section({id, eyebrow, title, subtitle, children, className = "", tight = false}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-6xl px-5 ${tight ? "py-12" : "py-16 sm:py-22"} ${className}`}>
      {(eyebrow || title) && (
        <Reveal className="mb-10 sm:mb-14">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          {title && (
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
          )}
          {subtitle && <p className="mt-3 max-w-2xl text-base muted">{subtitle}</p>}
        </Reveal>
      )}
      {children}
    </section>
  );
}
