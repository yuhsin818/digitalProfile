'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Game1 from "@/app/image/DogGame.png";
import game_dog1 from "@/app/image/dog01.png";
import game_dog2 from "@/app/image/dog02.png";
import game_dog3 from "@/app/image/dog03.png";
import game_dog4 from "@/app/image/dog04.png";
import game_dog5 from "@/app/image/dog05.png";
import { motion } from "framer-motion";


export default function DetailPage({ project }) {
  const router = useRouter();

  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=${project.category}`)} // ✅ 返回指定分類
          className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
              Back to Projects
        </button>
      </div>

      <div className="flex flex-col w-full gap-6 justify-center items-center p-4 sm:p-[60px] sm:pl-[100px] pb-6 pt-[30px]">
        {/* 頁面主標題與介紹 */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
          <motion.div className="lg:w-1/2 w-full"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
          >
            <Image src={project.cover} alt={project.name} className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6">{project.name}</h1>
            <p className="text-[#00437B] whitespace-pre-line">{project.intro}</p>
            <p className="text-[#00437B] font-bold mt-2">類型： {project.type}</p>
          </div>
        </div>

        {project.background && (
          <div className="w-full p-5">
            <h2 className="text-2xl font-bold text-[#00437B] mb-4">作品理念</h2>
            <div className="text-[#00437B] whitespace-pre-line">{project.background}</div>
          </div>
          )}

        {/* 流程 */}
        {project.flow && (
          <div className="w-full mt-12 bg-[rgba(255,255,255,0.5)] rounded-4xl flex flex-col gap-6 p-10">
            <h2 className="text-2xl font-bold text-[#00437B]">流程</h2>
            {project.flow.map((f, i) => (
              <div key={i} className="flex flex-col lg:flex-row items-center gap-4 justify-center">
                <Image src={f.img} alt={`流程圖${i+1}`} width={500} height={300} className="rounded-[4vh]"/>
                <p className="text-[#00437B] pl-6 w-full lg:w-[400px]">{f.text}</p>
              </div>
            ))}
          </div>
        )}

        {/* 作品範例 */}
        {project.example && (
          <div className="w-full mt-12 bg-[rgba(255,255,255,0.5)] rounded-4xl flex flex-col gap-6 p-10">
            <h2 className="text-2xl font-bold text-[#00437B] mb-4">隨機生成作品範例</h2>

            {/* 圖片 grid 排版 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {project.example.map((f, i) => (
                <div key={i} className="flex justify-center">
                  <Image
                    src={f.img}
                    alt={`流程圖${i + 1}`}
                    className="w-[50vh] h-auto rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 流程直立式 */}
        {project.flow2 && (
          <div className="w-full mt-12 bg-[rgba(255,255,255,0.5)] rounded-4xl flex flex-col gap-6 p-10">
          <h2 className="text-2xl font-bold text-[#00437B]">流程</h2>
          {project.flow2.map((f, i) => (
            <div key={i} className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <Image src={f.img} alt={`流程圖${i+1}`} className="w-[350px] h-auto rounded-[4vh]"/>
              <p className="text-[#00437B] p-6 w-full lg:w-[400px]">{f.text}</p>
            </div>
          ))}
          </div>
        )}

        {/* final_技術 */}
        {project.final_tech && (
          <div className="text-[#00437B] w-full flex flex-col gap-6 rounded-2xl mt-5 p-10">
            <div className="font-bold text-2xl ml-2">技術</div>

            <div className="flex flex-col gap-4">
              {project.final_tech.map((t, i) => (
                <div key={i} className="w-full flex flex-col gap-4 p-2">

                  <div className="w-full flex flex-row items-center gap-4 p-1">
                    {/* 左側圓形 */}
                    <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full"></div>
                    {/* 右側文字 */}
                    <p className="text-[#00437B] text-xl font-bold whitespace-pre-line">{t.title}</p>
                  </div>

                  {/* 小標題
                  <p className="text-[#00437B] text-xl font-bold whitespace-pre-line">{t.title}</p> */}
                  
                  {/* 下方文字 */}
                  <p className="text-[#00437B] whitespace-pre-line pl-10">{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* final_流程優化 */}
        {project.final_upgrade && (
          <div className="text-[#00437B] w-full flex flex-col gap-6 rounded-2xl mt-2 p-10">
            <div className="font-bold text-2xl ml-2">流程優化</div>

            <div className="flex flex-col gap-4">
              {project.final_upgrade.map((t, i) => (
                <div key={i} className="w-full flex flex-col gap-4 p-2">

                  <div className="w-full flex flex-row items-center gap-4 p-1">
                    {/* 左側圓形 */}
                    <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full"></div>
                    {/* 右側文字 */}
                    <p className="text-[#00437B] text-xl font-bold whitespace-pre-line">{t.title}</p>
                  </div>

                  {/* 小標題
                  <p className="text-[#00437B] text-xl font-bold whitespace-pre-line">{t.title}</p> */}
                  
                  {/* 下方文字 */}
                  <p className="text-[#00437B] whitespace-pre-line pl-10">{t.text}</p>
                </div>
              ))}
            </div>
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
          <div className="text-[#00437B] w-full flex flex-col gap-6 rounded-2xl mt-5 p-10 pt-0">
          <div className="font-bold text-2xl ml-2">使用者經驗</div>

          <div className="flex flex-col gap-4">
            {project.ux.map((t, i) => (
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

        {/* UI */}
        {project.ui && (
          <div className="text-[#00437B] w-full flex flex-col gap-6 rounded-2xl mt-5 p-10 pt-0">
          <div className="font-bold text-2xl ml-2">介面設計</div>

          <div className="flex flex-col gap-4">
            {project.ui.map((t, i) => (
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
            {project.links.game && (
              <button
                onClick={() => window.open(project.links.game, "_blank")}
                className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                開始遊戲
              </button>
            )}
            {project.links.report && (
              <button
                onClick={() => window.open(project.links.report, "_blank")}
                className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                書面報告
              </button>
            )}
            {project.links.play && (
              <button
                onClick={() => window.open(project.links.play, "_blank")}
                className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
              >
                前往作品
              </button>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
