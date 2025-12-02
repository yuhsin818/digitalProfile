'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";

import Design1 from "@/app/image/design1.jpg"
import Design2 from "@/app/image/design2.png"
import Design3 from "@/app/image/design3.png"
import Design4 from "@/app/image/design4.png"

export default function Design() {
  const router = useRouter();
  const project = projects.find(p => p.id === "design");

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

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4 h-[200vh]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}>
            
            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Design1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1805450765755977945" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold whitespace-pre-line">
                    109 學年度心理之夜「拭塵」的粉絲專頁頭貼。{`\n`}
                    
                    此頭貼是配合活動的劇情內容所設計,{`\n`}
                    並用電繪結合手繪的方式呈現。
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group"
              style={
                {
                backgroundImage: `url(${Design2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1815960981706817712" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold">
                    109 學年度下學期政大交響的迎新傳單。
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group lg:col-span-2"
              style={
                {
                backgroundImage: `url(${Design3.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1809851226567426549" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold whitespace-pre-line">
                  此圖為第十九屆心理營「如夢初心」的活動紀念品,右圖為實體吊飾。{`\n`}
                  此紀念品是以該活動的包裝「夢境」,{`\n`}
                  結合總籌組要求的色調以及夢幻的感覺為發想所設計出的捕夢網。
                  </p>
                </div>
              </a>
            </div>

            <div className="relative bg-gray-200  rounded-2xl group lg:col-span-2"
              style={
                {
                backgroundImage: `url(${Design4.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
              {/* Hover 出現的白色毛玻璃圖層 */}
              <a href="https://x.com/Hanayo888/status/1814898339932217368" target="_blank">
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold whitespace-pre-line">
                  此為我設計的高中管樂團成發「舞起狂瀾」的活動衣服。{`\n`}
                  為結合活動主題與社團屆數,{`\n`}
                  我設計舞者拉著彩帶跳舞,{`\n`}
                  並踐踏水窪的場景。{`\n`}
                  其中緞帶是用校歌開頭的五線譜代表,且彎曲成「5」的形狀;{`\n`}
                  右邊舞者的身姿則為「7」的形狀,{`\n`}
                  以和社團的屆數「57 屆」作呼應。
                  </p>
                </div>
              </a>
            </div>

           
          </motion.div>
      </div>
 

    </div>
  );
}
