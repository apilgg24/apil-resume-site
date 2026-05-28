import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HeroSection from "./sections/HeroSection"
import ExperienceSection from "./sections/ExperienceSection"
import EducationSection from "./sections/EducationSection"
import ProjectsSection from "./sections/ProjectsSection"
import SkillsSection from "./sections/SkillsSection"
import CertificationsSection from "./sections/CertificationsSection"
import ContactSection from "./sections/ContactSection"

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-lg focus:bg-marine-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
