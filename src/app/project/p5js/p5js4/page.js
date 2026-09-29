'use client';

import { TranslatedText } from "@/component/LanguageProvider";

import DetailPage from "@/component/project/detailPage";
import { useProjects } from "@/hooks/useProjects";

export default function Page() {
  const projects = useProjects();

  // const { category, id } = params;

  // 例如 category=game, id=dogGame
  const project = projects.find(p => p.id === "p5js4");

  if (!project) {
    return <div className="p-10 text-red-600"><TranslatedText messageKey="content.project_final_final.projectNotFound" /></div>;
  }

  return <DetailPage project={project} />;
}