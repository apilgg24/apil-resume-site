import { siteData } from "../data/siteData"
import { useReveal } from "../hooks/useReveal"
import { CodeIcon, ServerIcon, WrenchIcon } from "../components/Icons"
import type { JSX } from "react"

type SkillGroup = {
  title: string
  items: string[]
  icon: JSX.Element
  blurb: string
}

export default function SkillsSection() {
  const { skills } = siteData
  const headerRef = useReveal<HTMLDivElement>()

  const groups: SkillGroup[] = [
    {
      title: "Frontend",
      items: skills.frontend,
      icon: <CodeIcon />,
      blurb: "Building accessible, responsive UIs.",
    },
    {
      title: "Backend",
      items: skills.backend,
      icon: <ServerIcon />,
      blurb: "Designing APIs and data flows.",
    },
    {
      title: "Tools",
      items: skills.tools,
      icon: <WrenchIcon />,
      blurb: "Day-to-day workflow and craft.",
    },
  ]

  return (
    <section id="skills" className="bg-marine-bg-alt py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div ref={headerRef} className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-marine-accent">
            Toolbox
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-marine-primary sm:text-4xl">
            Skills
          </h2>
          <p className="mt-3 max-w-2xl text-marine-muted">
            Languages, frameworks, and tools I reach for to ship reliable software.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {groups.map((group, idx) => (
            <SkillCard key={group.title} group={group} index={idx} />
          ))}
        </div>

      </div>
    </section>
  )
}

function SkillCard({ group, index }: { group: SkillGroup; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div
      ref={ref}
      className="reveal group rounded-2xl border border-marine-border bg-marine-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-marine-accent/15 to-marine-primary/10 text-marine-primary ring-1 ring-marine-border">
          {group.icon}
        </span>
        <div>
          <h3 className="text-lg font-semibold text-marine-text">{group.title}</h3>
          <p className="text-xs text-marine-muted">{group.blurb}</p>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-marine-border bg-marine-bg-alt/60 px-3 py-1 text-sm text-marine-accent transition-colors hover:border-marine-accent hover:bg-marine-accent/10"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
