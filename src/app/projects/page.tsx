import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
  title: "Projects | OBEC",
  description: "Explore OBEC's community-led sustainability projects by theme, tool, status, and location.",
};

export default function ProjectsPage() {
  return <ProjectsPageClient />;
}
