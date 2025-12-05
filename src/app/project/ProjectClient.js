'use client'

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProjectPage from "@/component/projectPage";
import { projects } from "@/app/data/projectData";

export default function Project() {

  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "uiux";
  const [category, setCategory] = useState(initialCategory);

  const projects_now = projects.filter(p => p.category === category);

  return (
    <div className="w-full min-w-[320px] h-full flex flex-col items-center overflow-y-auto">

      {/* 標題、分類 */}
      <div className="w-full flex flex-col text-[#00437B] pt-8 px-20">
        <h1 className="text-2xl font-bold mb-5">My Projects</h1>

        <div className="w-full flex justify-around border-b border-[#9BB7C6] pb-2">
          {[
            { key: "uiux", label: "UI/UX" },
            { key: "web", label: "網頁" },
            { key: "final", label: "畢業製作" },
            { key: "p5js", label: "生成式藝術" },
            { key: "game", label: "遊戲" },
            // { key: "psy", label: "心理" },
            { key: "others", label: "其他" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => {
                setCategory(key);
                router.push(`/project?category=${key}`);
              }}
              className={`
                  relative text-lg font-medium transition-all duration-300 cursor-pointer
                  ${category === key ? 'text-[#00437B] font-bold' : 'text-[#6B8795]'}
                  after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
                  after:w-0 after:h-[2px] after:bg-[#00437B] after:transition-all after:duration-300
                  hover:after:w-full hover:text-[#00437B]
                  ${category === key ? 'after:w-full' : ''}
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 relative p-[60px] sm:pl-[100px] pt-[30px]">
        {projects_now.map((p, index) => (
          <ProjectPage 
            key={p.id} 
            image={p.cover} 
            title={p.name}
            content={p.intro_short} 
            href={`/project/${p.category}/${p.id}`} 
          />
        ))}
      </div>

    </div>
  );
}
