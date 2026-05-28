import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { siteData } from "../data/siteData"
import { useReveal } from "../hooks/useReveal"
import type { ProjectItem } from "../types/site"

export default function ProjectsSection() {
  const { projects } = siteData
  const headerRef = useReveal<HTMLDivElement>()

  return (
    <section id="projects" className="bg-marine-bg-projects py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div ref={headerRef} className="reveal">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-marine-accent">
            Selected Work
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-marine-primary sm:text-4xl">
            Projects
          </h2>
          <p className="mt-3 max-w-2xl text-marine-muted">
            Things I've built — full-stack, frontend, and product experiments.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10">
          {projects.map((project, idx) => (
            <ProjectCard key={project.name} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project, index }: { project: ProjectItem; index: number }) {
  const ref = useReveal<HTMLDivElement>()
  const hasLiveLink = project.link && project.link !== "#"
  const hasActions = hasLiveLink || project.github
  const reverse = index % 2 === 1

  return (
    <div
      ref={ref}
      className="reveal group overflow-hidden rounded-2xl border border-marine-border bg-marine-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}>
        {/* Content */}
        <div className="flex flex-col justify-between gap-6 p-8 md:w-1/2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {project.featured && (
                <span className="inline-flex items-center gap-1 rounded-full bg-marine-primary/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wider text-marine-primary">
                  <svg aria-hidden width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l2.39 7.36H22l-6.19 4.5L18.18 22 12 17.5 5.82 22l2.37-8.14L2 9.36h7.61z" />
                  </svg>
                  Featured
                </span>
              )}
              {project.category && (
                <span className="rounded-full border border-marine-border bg-marine-bg-alt/60 px-2.5 py-1 text-xs font-medium text-marine-muted">
                  {project.category}
                </span>
              )}
            </div>

            <h3 className="mt-3 text-2xl font-bold text-marine-primary">
              {project.name}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-marine-muted">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-marine-border bg-marine-bg-alt/60 px-3 py-1 text-xs font-medium text-marine-accent"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {hasActions && (
          <div className="flex flex-wrap gap-3">
            {hasLiveLink && (
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-marine-primary px-5 py-2 text-sm font-medium text-white shadow-sm transition-all hover:bg-marine-primary-dark hover:shadow-md"
              >
                View Project
                <svg
                  aria-hidden
                  width="14"
                  height="14"
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
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} on GitHub`}
                className="inline-flex items-center gap-2 rounded-lg border-[1.5px] border-marine-primary px-5 py-2 text-sm font-medium text-marine-primary transition-colors hover:bg-marine-primary/10"
              >
                <svg aria-hidden width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.17c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.27-1.69-1.27-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.16 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.19-1.49 3.16-1.18 3.16-1.18.63 1.59.23 2.76.11 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.18c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12c0-6.35-5.15-11.5-11.5-11.5z" />
                </svg>
                Code
              </a>
            )}
          </div>
          )}
        </div>

        {/* Preview */}
        <div className="relative min-h-56 overflow-hidden md:min-h-0 md:w-1/2">
          {project.screenshots && project.screenshots.length > 0 ? (
            <ScreenshotCarousel
              images={project.screenshots}
              name={project.name}
            />
          ) : project.screenshot ? (
            <img
              src={project.screenshot}
              alt={`${project.name} preview`}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <ProjectPreviewPlaceholder name={project.name} theme={project.theme} />
          )}
        </div>
      </div>
    </div>
  )
}

function ScreenshotCarousel({
  images,
  name,
}: {
  images: string[]
  name: string
}) {
  const [idx, setIdx] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const total = images.length
  const go = (delta: number) => setIdx((i) => (i + delta + total) % total)

  return (
    <div className="relative flex h-full min-h-56 w-full items-center justify-center bg-marine-bg-alt/40 p-4 md:p-6">
      <button
        type="button"
        onClick={() => setLightboxOpen(true)}
        aria-label={`Open ${name} screenshot ${idx + 1} in full size`}
        className="group/zoom relative block w-full overflow-hidden rounded-xl border border-marine-border bg-marine-surface shadow-md transition-shadow hover:shadow-lg"
      >
        <img
          src={images[idx]}
          alt={`${name} screenshot ${idx + 1} of ${total}`}
          className="block h-auto max-h-[420px] w-full object-contain transition-transform duration-300 group-hover/zoom:scale-[1.01]"
        />
        <span className="pointer-events-none absolute right-2 top-2 inline-flex items-center gap-1 rounded-full bg-marine-primary/85 px-2 py-0.5 text-[10px] font-medium text-white opacity-0 shadow-sm backdrop-blur transition-opacity group-hover/zoom:opacity-100">
          <svg
            aria-hidden
            width="10"
            height="10"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
            <path d="M11 8v6" />
            <path d="M8 11h6" />
          </svg>
          Click to enlarge
        </span>
      </button>

      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-marine-border bg-marine-surface/90 text-marine-primary shadow-sm backdrop-blur transition-all hover:bg-marine-surface hover:shadow-md"
      >
        <svg
          aria-hidden
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next screenshot"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full border border-marine-border bg-marine-surface/90 text-marine-primary shadow-sm backdrop-blur transition-all hover:bg-marine-surface hover:shadow-md"
      >
        <svg
          aria-hidden
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-marine-border bg-marine-surface/90 px-2.5 py-0.5 text-[10px] font-medium text-marine-muted shadow-sm backdrop-blur">
        {idx + 1} / {total}
      </span>

      {lightboxOpen && (
        <Lightbox
          images={images}
          name={name}
          index={idx}
          onIndexChange={setIdx}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </div>
  )
}

function Lightbox({
  images,
  name,
  index,
  onIndexChange,
  onClose,
}: {
  images: string[]
  name: string
  index: number
  onIndexChange: (i: number) => void
  onClose: () => void
}) {
  const total = images.length
  const go = (delta: number) =>
    onIndexChange((index + delta + total) % total)

  useEffect(() => {
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prevOverflow
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      else if (e.key === "ArrowLeft") go(-1)
      else if (e.key === "ArrowRight") go(1)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [index, total, onClose, onIndexChange])

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${name} screenshot viewer`}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-white/20"
      >
        <svg
          aria-hidden
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Previous screenshot"
        onClick={(e) => {
          e.stopPropagation()
          go(-1)
        }}
        className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-white/20 sm:left-6"
      >
        <svg
          aria-hidden
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next screenshot"
        onClick={(e) => {
          e.stopPropagation()
          go(1)
        }}
        className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white ring-1 ring-white/30 backdrop-blur transition-colors hover:bg-white/20 sm:right-6"
      >
        <svg
          aria-hidden
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      <img
        src={images[index]}
        alt={`${name} screenshot ${index + 1} of ${total}`}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[90vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
      />

      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/30 backdrop-blur">
        {index + 1} / {total}
      </span>
    </div>,
    document.body,
  )
}

function ProjectPreviewPlaceholder({
  name,
  theme = "default",
}: {
  name: string
  theme?: "default" | "plants"
}) {
  const initials = name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("")

  const background =
    theme === "plants"
      ? "linear-gradient(135deg, #C8E6C9 0%, #4CAF50 55%, #1B5E20 100%)"
      : "linear-gradient(135deg, #A8C8DF 0%, #3A7CA5 60%, #1F4E79 100%)"

  return (
    <div
      className="flex h-full min-h-56 w-full items-center justify-center"
      style={{ background }}
    >
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative flex flex-col items-center gap-3 text-center">
        <div className="grid h-20 w-20 place-items-center rounded-2xl bg-white/15 text-3xl font-bold text-white shadow-lg backdrop-blur-sm ring-1 ring-white/25">
          {theme === "plants" ? (
            <svg
              aria-hidden
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M12 22c0-4 1.5-7 4-9 2.5-2 5-2 5-2s0 3-2 5.5-5 3.5-7 5.5zM12 22c0-4-1.5-7-4-9-2.5-2-5-2-5-2s0 3 2 5.5 5 3.5 7 5.5zM12 22V10c0-3 1.5-6 4-8 0 0-1 4-1 8s-3 12-3 12z" />
            </svg>
          ) : (
            initials || "?"
          )}
        </div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
          Preview coming soon
        </p>
      </div>
    </div>
  )
}
