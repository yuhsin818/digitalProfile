'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projects } from "@/app/data/projectData";

import Design1 from "@/app/image/design1.jpg"
import Design2 from "@/app/image/design2.png"
import Design3 from "@/app/image/design3.png"
import Design4 from "@/app/image/design4.png"

export default function Design() {
  const router = useRouter();
  const project = projects.find(p => p.id === "design");

  // 新增狀態管理選中的圖片
  const [selectedImg, setSelectedImg] = useState(null);

  const images = [
    { src: Design1.src, desc: `109 學年度心理之夜「拭塵」的粉絲專頁頭貼。\n此頭貼是配合活動的劇情內容所設計,\n並用電繪結合手繪的方式呈現。` },
    { src: Design2.src, desc: `109 學年度下學期政大交響的迎新傳單。` },
    { src: Design3.src, desc: `此圖為第十九屆心理營「如夢初心」的活動紀念品,右圖為實體吊飾。\n此紀念品是以該活動的包裝「夢境」,\n結合總籌組要求的色調以及夢幻的感覺為發想所設計出的捕夢網。` },
    { src: Design4.src, desc: `此為我設計的高中管樂團成發「舞起狂瀾」的活動衣服。\n為結合活動主題與社團屆數,\n我設計舞者拉著彩帶跳舞,\n並踐踏水窪的場景。\n其中緞帶是用校歌開頭的五線譜代表,且彎曲成「5」的形狀;\n右邊舞者的身姿則為「7」的形狀,\n以和社團的屆數「57 屆」作呼應。` },
  ];

  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=others`)}
          className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
            Back to Projects
        </button>
      </div>

      <div className="flex flex-col w-full gap-6 justify-center items-center p-[60px] pl-[100px] pt-[30px]">
          
          <div className="w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B]">{project.name}</h1>
            <p className="text-[#00437B] whitespace-pre-line">{project.intro}</p>
          </div>

          <motion.div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative h-[50vh] bg-gray-200 rounded-2xl group ${idx === 2 || idx === 3 ? 'lg:col-span-2' : ''}`}
                style={{
                  backgroundImage: `url(${img.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  paddingTop: '56.25%', // 16:9 高度比例，可保留正方或長方形
                  cursor: 'pointer'
                }}
                onClick={() => setSelectedImg(img.src)}
              >
                {/* Hover文字 */}
                <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-gray-800 text-center text-lg font-semibold whitespace-pre-line">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
      </div>

      {/* 全螢幕圖片 */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              src={selectedImg} 
              alt="selected"
              className="max-w-[90%] max-h-[90%] object-contain rounded-xl shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
