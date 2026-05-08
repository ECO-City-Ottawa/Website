import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import ProjectsHero from "@/components/projects/ProjectsHero";
import PublicActionLabs from "@/components/projects/PublicActionLabs";
import ProjectLibrary from "@/components/projects/ProjectLibrary";
import DemonstrationEvents from "@/components/projects/DemonstrationEvents";
import ApplyCta from "@/components/projects/ApplyCta";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        <ProjectsHero />
        <PublicActionLabs />
        <ProjectLibrary />
        <DemonstrationEvents />
        <ApplyCta />
      </main>
      <Footer />
    </>
  );
}
