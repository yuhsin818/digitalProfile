'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";

import Photo1 from "@/app/image/photo1.jpg"
import Photo2 from "@/app/image/photo2.jpg"
import Photo3 from "@/app/image/photo3.jpg"
import Photo4 from "@/app/image/photo4.jpg"
import Photo5 from "@/app/image/photo5.jpg"
import Photo6 from "@/app/image/photo6.jpg"
import Photo7 from "@/app/image/photo7.jpg"
import Photo8 from "@/app/image/photo8.jpg"
import Photo9 from "@/app/image/photo9.jpg"

export default function Photo() {
  const router = useRouter();
  const project = projects.find(p => p.id === "photo");

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


      <div className="flex flex-col w-full gap-6 justify-center items-center p-[60px] sm:pl-[100px] pt-[30px]">
          
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B]">{project.name}</h1>
            <p className="text-[#00437B] whitespace-pre-line">{project.intro}</p>
          </div>

          <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 h-[200vh] sm:h-[150vh] mb-[30px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
            
            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1805450765755977945" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    ハチワレとギター
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1815960981706817712" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    泣いちゃった
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1809851226567426549" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    お出かけ
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo4.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1814898339932217368" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    報酬もらった
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo5.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1814564814968266810" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    失敗しちゃった
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo6.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1823212189395919257" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    うさぎ
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo7.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1823957591950811303" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    慰めろッ
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo8.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1829065190631190984" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    古本屋だらけ
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Photo9.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1822860495042347057" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    ムン顔ハチワレ
                  </p>
                </div>
              </a>
            </div>

            

          </motion.div>
      </div>
 

    </div>
  );
}
