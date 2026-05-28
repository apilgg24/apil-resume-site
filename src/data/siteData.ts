import type { SiteData } from "../types/site"

export const siteData: SiteData = {
  profile: {
    name: "Apil Gurung",
    headline: "Developer & Product Thinker",
    summary:
      "Developer with an uncommon background in law, research, journalism, and teaching who builds products with critical thinking and clear communication baked in. Currently focused on Angular, React, and TypeScript with hands-on experience shipping real features in enterprise SaaS.",
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
        "Led frontend development for a two-way SMS messaging feature in an enterprise Angular ERP/CRM platform",
        "Built and maintained ~90% of the UI including Angular components, services, and state management using TypeScript (strict mode)",
        "Integrated REST APIs and managed async data flows using BehaviorSubject-based facades for predictable application state",
        "Built responsive interfaces with Tailwind CSS and enterprise component libraries (Syncfusion, PrimeNG)",
        "Collaborated with backend developers, QA engineers, designers, and PMs through development, testing, and release cycles",
        "Fixed production bugs and supported deployments across multiple environments",
      ],
      tech: ["Angular", "TypeScript", "RxJS", "REST APIs", "Tailwind CSS", "Syncfusion", "PrimeNG"],
    },
    {
      company: "Ghamchhaya Consultancy Pvt. Ltd.",
      role: "Co-Founder & Research Analyst",
      period: "Aug 2021 – Dec 2025",
      highlights: [
        "Co-founded and managed a consultancy focused on community development projects",
        "Conducted focus group discussions, surveys, and quantitative data analysis to evaluate project outcomes",
      ],
      tech: ["Research", "Data Analysis", "Project Management"],
      featuredIn: {
        label: "Featured in ENERGIA",
        url: "https://energia.org/tackling-climate-change-and-upskilling-women-through-innovation-in-clean-energy/",
      },
    },
  ],

  education: [
    {
      school: "Sichuan University",
      degree: "Master of Law, International Relations",
      period: "2018 – 2021",
    },
    {
      school: "North Carolina Wesleyan University",
      degree: "Bachelor of Science, Mathematics",
      period: "2011 – 2016",
    },
  ],

  projects: [
    {
      name: "Two-Way SMS Messaging Platform",
      description:
        "Built the frontend for a full two-way SMS messaging feature inside an enterprise Angular ERP/CRM platform used by restoration contractors. This included a real-time messaging inbox, SMS template management, scheduled texts, auto-reply configuration with office hours, and a customer info sidebar — all integrated into the existing job and CRM workflow.",
      tech: [
        "Angular",
        "TypeScript",
        "RxJS",
        "Tailwind CSS",
        "Syncfusion",
        "PrimeNG",
        "REST APIs",
      ],
      screenshots: [
        "/images/sani-1.png",
        "/images/sani-2.png",
        "/images/sani-3.png",
        "/images/sani-4.png",
        "/images/sani-5.png",
        "/images/sani-6.png",
        "/images/sani-7.png",
        "/images/sani-8.png",
        "/images/sani-9.png",
      ],
      category: "Frontend",
      featured: true,
    },
    {
      name: "Mala Plants",
      description:
        "An Angular + Supabase marketplace for local plant growers in Kathmandu to list and sell homegrown plants. Features include Google and phone OTP auth, product catalog, cart and checkout, seller dashboard with photo uploads, multi-vendor org tenancy, and RLS-enforced data security.",
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
        "A full-stack demo app simulating a field-service photo intake workflow. Users batch-upload photos that move through a processing pipeline (Uploaded → Processing → Done) with a live status queue, gallery view, and event log — built to showcase an end-to-end upload, process, and review UX.",
      tech: ["React", "Spring Boot"],
      link: "https://rapidphotoflow-frontend.onrender.com/",
      github: "https://github.com/apilgg24/rapidphotoflow",
      screenshot: "/images/rapidphotoflow-preview.png",
      category: "Full-Stack",
    },
  ],
}