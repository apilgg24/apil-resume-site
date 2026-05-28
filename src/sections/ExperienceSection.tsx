import { siteData } from "../data/siteData"
import { useReveal } from "../hooks/useReveal"

export default function ExperienceSection() {
  const { experience } = siteData
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="bg-marine-bg-alt py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div ref={headerRef} className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-marine-accent">
            Career
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-marine-primary sm:text-4xl">
            Experience
          </h2>
          <p className="mt-3 max-w-2xl text-marine-muted">
            Where I've shipped product, learned the craft, and grown as an engineer.
          </p>
        </div>

        {/* Timeline: explicit rail + explicitly-placed dots. Each list item
            reserves 3rem of left padding (the rail sits at left 11px). */}
        <ol className="relative mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-2.75 top-3 bottom-3 w-0.5 rounded-full bg-marine-border"
          />
          {experience.map((item, idx) => (
            <TimelineItem
              key={`${item.company}-${item.role}`}
              item={item}
              index={idx}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

function TimelineItem({
  item,
  index,
}: {
  item: (typeof siteData.experience)[number]
  index: number
}) {
  const ref = useReveal<HTMLLIElement>()
  const isCurrent = /present/i.test(item.period)

  return (
    <li
      ref={ref}
      className={`reveal relative pl-12 ${index === 0 ? "" : "mt-10"}`}
      style={{ transitionDelay: `${Math.min(index * 80, 240)}ms` }}
    >
      {/* Dot on the rail. h-6 w-6 = 24px; ring-4 (4px) gives a 32px masked
          area that fully covers the 2px rail line passing behind it. */}
      <span
        aria-hidden
        className="absolute left-0 top-3 grid h-6 w-6 place-items-center rounded-full bg-linear-to-br from-marine-accent to-marine-primary shadow-md ring-4 ring-marine-bg-alt"
      >
        {isCurrent ? (
          <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
        ) : (
          <span className="h-2 w-2 rounded-full bg-white/85" />
        )}
      </span>

      <div className="rounded-2xl border border-marine-border bg-marine-surface p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-marine-text sm:text-xl">
              {item.role}
            </h3>
            <p className="mt-0.5 font-medium text-marine-accent">{item.company}</p>
            {item.location && (
              <p className="mt-0.5 text-sm text-marine-muted">{item.location}</p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {isCurrent && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Current
              </span>
            )}
            <span className="rounded-full border border-marine-border bg-marine-bg-alt/60 px-3 py-1 text-xs font-medium text-marine-muted">
              {item.period}
            </span>
          </div>
        </div>

        <ul className="mt-5 space-y-2.5">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-marine-muted">
              <svg
                aria-hidden
                className="mt-0.5 h-4 w-4 shrink-0 text-marine-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {item.tech && item.tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-marine-border bg-marine-bg-alt/60 px-2.5 py-0.5 text-xs font-medium text-marine-accent"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {item.featuredIn && (
          <div className="mt-4">
            <a
              href={item.featuredIn.url}
              target="_blank"
              rel="noreferrer"
              className="group/featured inline-flex items-center gap-1.5 rounded-full bg-linear-to-r from-marine-primary to-marine-primary-dark px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm ring-1 ring-marine-primary/20 transition-all hover:shadow-md hover:ring-marine-primary/40"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-marine-accent shadow-[0_0_0_3px_rgba(255,255,255,0.15)]" />
              <span>{item.featuredIn.label}</span>
              <svg
                aria-hidden
                className="h-3 w-3 transition-transform group-hover/featured:-translate-y-0.5 group-hover/featured:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7" />
                <path d="M7 7h10v10" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </li>
  )
}
