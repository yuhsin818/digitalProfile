'use client';

import DetailPage from "@/component/project/detailPage";
import { projects } from "@/app/data/projectData";

export default function Page() {
  // const { category, id } = params;

  // 例如 category=game, id=dogGame
  const project = projects.find(p => p.id === "web2");

  if (!project) {
    return <div className="p-10 text-red-600">找不到作品資料</div>;
  }

  return <DetailPage project={project} />;
}