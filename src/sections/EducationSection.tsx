import { siteData } from "../data/siteData"
import { useReveal } from "../hooks/useReveal"

export default function EducationSection() {
  const { education } = siteData
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="education" className="bg-marine-bg-alt py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div ref={headerRef} className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-marine-accent">
            Academic
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-marine-primary sm:text-4xl">
            Education
          </h2>
          <p className="mt-3 max-w-2xl text-marine-muted">
            Foundations in mathematics, international relations, and applied research.
          </p>
        </div>

        <ol className="relative mt-12">
          <div
            aria-hidden
            className="pointer-events-none absolute left-2.75 top-3 bottom-3 w-0.5 rounded-full bg-marine-border"
          />
          {education.map((item, idx) => (
            <TimelineItem
              key={`${item.school}-${item.degree}`}
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
  item: (typeof siteData.education)[number]
  index: number
}) {
  const ref = useReveal<HTMLLIElement>()

  return (
    <li
      ref={ref}
      className={`reveal relative pl-12 ${index === 0 ? "" : "mt-10"}`}
      style={{ transitionDelay: `${Math.min(index * 80, 240)}ms` }}
    >
      <span
        aria-hidden
        className="absolute left-0 top-3 grid h-6 w-6 place-items-center rounded-full bg-linear-to-br from-marine-accent to-marine-primary shadow-md ring-4 ring-marine-bg-alt"
      >
        <span className="h-2 w-2 rounded-full bg-white/85" />
      </span>

      <div className="rounded-2xl border border-marine-border bg-marine-surface p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-marine-text sm:text-xl">
              {item.degree}
            </h3>
            <p className="mt-0.5 font-medium text-marine-accent">{item.school}</p>
            {item.location && (
              <p className="mt-0.5 text-sm text-marine-muted">{item.location}</p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <span className="rounded-full border border-marine-border bg-marine-bg-alt/60 px-3 py-1 text-xs font-medium text-marine-muted">
              {item.period}
            </span>
          </div>
        </div>
      </div>
    </li>
  )
}
