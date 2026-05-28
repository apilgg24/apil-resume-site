import { siteData } from "../data/siteData"
import { useReveal } from "../hooks/useReveal"
import { AwardIcon, CodeIcon, ServerIcon, WrenchIcon } from "../components/Icons"
import type { Certification } from "../types/site"
import type { JSX } from "react"

type SkillGroup = {
  title: string
  items: string[]
  icon: JSX.Element
  blurb: string
}

export default function SkillsSection() {
  const { skills, certifications } = siteData
  const certHeaderRef = useReveal<HTMLDivElement>()
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

        {certifications && certifications.length > 0 && (
          <>
            <div ref={certHeaderRef} className="reveal mt-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-marine-accent">
                Credentials
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-marine-primary sm:text-4xl">
                Certifications
              </h2>
              <p className="mt-3 max-w-2xl text-marine-muted">
                Verified credentials and ongoing learning.
              </p>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {certifications.map((cert, idx) => (
                <CertificationCard key={cert.title} cert={cert} index={idx} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

function CertificationCard({ cert, index }: { cert: Certification; index: number }) {
  const ref = useReveal<HTMLDivElement>()

  const content = (
    <>
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-marine-accent/15 to-marine-primary/10 text-marine-primary ring-1 ring-marine-border">
          <AwardIcon />
        </span>
        <div>
          <h3 className="text-base font-semibold text-marine-text">{cert.title}</h3>
          <p className="text-xs text-marine-muted">
            Issued {cert.issued}
            {cert.validUntil ? ` · Valid until ${cert.validUntil}` : ""}
          </p>
        </div>
      </div>

      {cert.link && (
        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-marine-accent">
          View credential
          <svg
            aria-hidden
            width="12"
            height="12"
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
        </div>
      )}
    </>
  )

  const className =
    "reveal group block rounded-2xl border border-marine-border bg-marine-surface p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-marine-accent hover:shadow-md"
  const style = { transitionDelay: `${index * 80}ms` }

  if (cert.link) {
    return (
      <a
        ref={ref as unknown as React.Ref<HTMLAnchorElement>}
        href={cert.link}
        target="_blank"
        rel="noreferrer"
        className={className}
        style={style}
      >
        {content}
      </a>
    )
  }

  return (
    <div ref={ref} className={className} style={style}>
      {content}
    </div>
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
