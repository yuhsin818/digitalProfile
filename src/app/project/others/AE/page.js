'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";

import AE1 from "@/app/image/AE1.png"
import AE2 from "@/app/image/AE2.png"
import AE3 from "@/app/image/AE3.png"


export default function AE() {
  const router = useRouter();
  const project = projects.find(p => p.id === "AE");

  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=others`)} // ✅ 返回指定分類
          className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
              Back to Projects
        </button>
      </div>


      <div className="flex flex-col w-full gap-6 justify-center items-center p-[60px] pl-[100px] pt-[30px]">
          
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B]">{project.name}</h1>
            <p className="text-[#00437B] whitespace-pre-line">{project.intro}</p>
          </div>

          <motion.div className="grid grid-cols-1 w-full gap-4 h-[200vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
            
            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${AE1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://drive.google.com/file/d/1ERo3_0vnh8UtSLoS9fGFG1nBLu__BRxF/view?usp=sharing" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold whitespace-pre-line">
                    以 12 個食物圖片素材，做出類似定格動畫的效果，{`\n`}
                    呈現食物在玩耍的情境，模擬速食店的廣告。
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${AE2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://drive.google.com/file/d/14omZLtuIucBmtnt4cpg9B0TpBgRzgfLv/view?usp=sharing" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    以大自然為主題選擇三組靜態圖片所做的動畫。
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${AE3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://drive.google.com/file/d/1M7lUwjpatMU-lkuCewp9d2QyvhjT5Ogc/view?usp=sharing" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    以演奏會影像為素材，具象化呈現音樂帶給人類似魔法般的想像。
                  </p>
                </div>
              </a>
            </div>



            

          </motion.div>
      </div>
 

    </div>
  );
}
