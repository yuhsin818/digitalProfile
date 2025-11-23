'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Game1 from "@/app/image/DogGame.png";
import game_dog1 from "@/app/image/dog01.png";
import game_dog2 from "@/app/image/dog02.png";
import game_dog3 from "@/app/image/dog03.png";
import game_dog4 from "@/app/image/dog04.png";
import game_dog5 from "@/app/image/dog05.png";


export default function DetailPage({ project }) {
  const router = useRouter();

  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=${'game'}`)} // ✅ 返回指定分類
          className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
              Back to Projects
        </button>
      </div>

      <div className="flex flex-col w-full gap-6 mt-3 justify-center items-center p-[60px] pl-[100px] pb-6">
        {/* 頁面主標題與介紹 */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
          <div className="lg:w-1/2 w-full">
            <Image src={project.cover} alt={project.name} className="w-full h-auto rounded-[6vh]" />
          </div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6">{project.name}</h1>
            <p className="text-[#00437B]">{project.intro}</p>
            <p className="text-[#00437B] font-bold mt-2">類型： {project.type}</p>
          </div>
        </div>

        {/* 流程 */}
        {project.flow && (
          <div className="w-full mt-12 bg-[rgba(255,255,255,0.5)] rounded-4xl flex flex-col gap-6 p-10">
            <h2 className="text-2xl font-bold text-[#00437B]">遊戲流程</h2>
            {project.flow.map((f, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-center gap-4">
                <Image src={f.img} alt={`流程圖${i+1}`} width={500} height={300} className="rounded-[4vh]"/>
                <p className="text-[#00437B] pl-6">{f.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* 技術 */}
        {project.tech && (
          <div className="text-[#00437B] w-full flex flex-col gap-6 rounded-2xl mt-5 p-10">
            <div className="font-bold text-2xl ml-2">技術</div>

            <div className="flex flex-col gap-4">
              {project.tech.map((t, i) => (
                <div key={i} className="w-full flex flex-row items-center gap-4 p-2">
                  {/* 左側圓形 */}
                  <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full mt-1"></div>
                  
                  {/* 右側文字 */}
                  <p className="pl-1 text-[#00437B] whitespace-pre-line">{t}</p>
                </div>
              ))}
            </div>
          </div>
        )}


        {/* UX */}
        {project.ux && (
          <div className="w-full mt-8 p-6 rounded-2xl flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#00437B]">使用者經驗 (UX)</h2>
            <ul className="list-disc list-inside text-[#00437B]">
              {project.ux.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          </div>
        )}

        {/* UI */}
        {project.ui && (
          <div className="w-full mt-8 p-6 rounded-2xl flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-[#00437B]">UI 視覺</h2>
            <ul className="list-disc list-inside text-[#00437B]">
              {project.ui.map((u, i) => (
                <li key={i}>{u}</li>
              ))}
            </ul>
          </div>
        )}

        {/* 相關連結 */}
        {project.links && (
          <div className="w-full mt-8 flex gap-4">
            <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5">相關連結：</p>
            {project.links.demo && (
              <button
                onClick={() => window.open(project.links.demo, "_blank")}
                className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                Demo影片
              </button>
            )}
            {project.links.github && (
              <button
                onClick={() => window.open(project.links.github, "_blank")}
                className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                Github
              </button>
            )}
            {project.links.play && (
              <button
                onClick={() => window.open(project.links.play, "_blank")}
                className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                開始遊戲
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
