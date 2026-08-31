/* An iPhone-style frame around a screenshot. `src` is a path in /public. */
export default function Phone({src, alt, className = "", w = 200}) {
  return (
    <div className={`relative shrink-0 ${className}`} style={{width: w}}>
      <div
        className="relative overflow-hidden rounded-[2rem] border-[6px] border-ink-800 bg-ink-800 shadow-xl dark:border-ink-700 dark:bg-ink-700"
        style={{aspectRatio: "9 / 19.5"}}
      >
        <img src={src} alt={alt} loading="lazy" className="size-full object-cover object-top" />
        {/* Dynamic Island */}
        <span
          className="pointer-events-none absolute left-1/2 top-2 h-[18px] w-[62px] -translate-x-1/2 rounded-full bg-ink-900"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
