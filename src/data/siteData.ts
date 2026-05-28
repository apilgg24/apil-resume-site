import type { SiteData } from "../types/site"

export const siteData: SiteData = {
  profile: {
    name: "Apil Gurung",
    headline: "Software Developer",
    summary:
      "Software developer specializing in Angular, React, TypeScript, and enterprise web applications. Experienced building scalable UI features and integrating APIs.",
  },

  links: {
    github: "https://github.com/apilgg24",
    linkedin: "https://www.linkedin.com/in/apilgg/",
    upwork: "https://www.upwork.com/freelancers/~0185b53ce7f3d7e8a7",
    email: "apil.gurung@gmail.com",
    // resume: "/Apil_Gurung_Resume.pdf", // TODO(apil): drop a PDF in /public and uncomment
  },

  skills: {
    frontend: ["Angular", "React", "TypeScript", "RxJS", "Tailwind", "HTML/CSS", "Vite"],
    backend: ["Java", "Spring Boot", "Supabase", "SQL"],
    tools: ["Git", "Figma", "REST APIs", "Docker", "Vercel", "Render", "AWS"],
  },

  certifications: [
    {
      title: "AWS Certified Solutions Architect – Associate",
      issued: "October 2024",
      validUntil: "October 2027",
      link: "https://www.credly.com/badges/e31d3d49-6f36-4789-a06b-6738bcc5735f/linked_in_profile",
    },
  ],

  experience: [
    {
      company: "Xcelerate Restoration Software",
      role: "Angular Frontend Developer",
      period: "Feb 2025 – Apr 2026",
      highlights: [
        "Develop enterprise UI features using Angular",
        "Implement REST API integrations",
        "Collaborate with product and backend teams",
      ],
      tech: ["Angular", "TypeScript", "RxJS", "REST APIs"],
    },
  ],

  projects: [
    {
      name: "Mala Plants",
      description:
        "A full-stack plant e-commerce platform with authentication, product listings, and image storage. Deployed on Vercel.",
      tech: ["Angular 21", "TypeScript 5.9", "Supabase", "Tailwind CSS 4.2"],
      link: "https://mala-plants.vercel.app",
      screenshot: "/images/mala-plants-preview.png",
      category: "Full-Stack",
      featured: true,
      theme: "plants",
    },
    {
      name: "RapidPhotoFlow",
      description:
        "A full-stack workflow concept for AI-assisted image prompt and processing flows.",
      tech: ["React", "Spring Boot"],
      link: "https://rapidphotoflow-frontend.onrender.com/",
      github: "https://github.com/apilgg24/rapidphotoflow",
      screenshot: "/images/rapidphotoflow-preview.png",
      category: "Full-Stack",
    },
  ],
}