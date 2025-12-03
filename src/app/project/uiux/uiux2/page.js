'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/uiux2_cover.png";
import uiux_IA from "@/app/image/uiux2_IA.png";
import uiux_flow1_1 from  "@/app/image/uiux2_flow1-01.png";
import uiux_flow1_2 from  "@/app/image/uiux2_flow1-02.png";
import uiux_flow1_3 from  "@/app/image/uiux2_flow1-03.png";
import uiux_flow1_4 from  "@/app/image/uiux2_flow1-04.png";
import uiux_flow1_5 from  "@/app/image/uiux2_flow1-05.png";

import uiux_flow2_1 from  "@/app/image/uiux2_flow2-01.png";
import uiux_flow2_2 from  "@/app/image/uiux2_flow2-02.png";
import uiux_flow2_3 from  "@/app/image/uiux2_flow2-03.png";

import uiux_flow3_1 from  "@/app/image/uiux2_flow3-01.png";
import uiux_flow3_2 from  "@/app/image/uiux2_flow3-02.png";
import uiux_flow3_3 from  "@/app/image/uiux2_flow3-03.png";

import uiux_flow4_1 from  "@/app/image/uiux2_flow4-01.png";
import uiux_flow4_2 from  "@/app/image/uiux2_flow4-02.png";
import uiux_flow4_3 from  "@/app/image/uiux2_flow4-03.png";
import uiux_flow4_4 from  "@/app/image/uiux2_flow4-04.png";


export default function AE() {
  const router = useRouter();

  const flow1 = [
    { src: uiux_flow1_1, caption: "1. 主頁為近期所有電影的資訊，電影縮圖旁邊的欄位是該電影的「最佳評論」。可以用電影評價、討論度、票房等條件排序陳列順序，也可以直接搜尋指定電影的評論，或根據電影類型、上映時間篩選。\n\n點擊電影圖片可以看電影資訊，點擊右側評論可以看完整評論和留言。" },
    { src: uiux_flow1_2, caption: "2. 點擊首頁電影圖片後跳到該電影的介紹頁，呈現預告片、電影介紹、演員名單、分類、得獎紀錄等資訊，可按場次訂票或收藏該電影。" },
    { src: uiux_flow1_3, caption: "3. 電影介紹頁下方是該電影的評分和所有評論。" },
    { src: uiux_flow1_4, caption: "4. 點擊任意評論可以打開該評論的完整頁，以及查看留言。" },
    { src: uiux_flow1_5, caption: "5. 回到電影介紹頁後，可以新增該電影的評分與評論。" },
  ];
  
  const flow2 = [
    { src: uiux_flow2_1, caption: "1. 可從電影資訊頁跳到該電影的場次查詢頁，或直接點選場次查詢的tab。" },
    { src: uiux_flow2_2, caption: "2. 輸入電影名稱後出現附近電影院場次資訊。" },
    { src: uiux_flow2_3, caption: "3. 輸入電影名稱、地點、日期時間、人數，出現場次篩選結果。" },
  ];
  
  const flow3 = [
    { src: uiux_flow3_1, caption: "1. 從探索頁可以看到各種電影相關的最新資訊和關於各種電影的綜合討論。" },
    { src: uiux_flow3_2, caption: "2. 點入文章後呈現完整頁面。" },
    { src: uiux_flow3_3, caption: "3. 回到探索頁可以自行新增文章。" },
  ];

  const flow4 = [
    { src: uiux_flow4_1, caption: "1. 從個人頁可以查看收藏的電影、評論、曾留下的影評紀錄，以及個人設定功能。" },
    { src: uiux_flow4_2, caption: "2. 查看收藏的電影。" },
    { src: uiux_flow4_3, caption: "3. 查看收藏的評論。" },
    { src: uiux_flow4_4, caption: "4. 設定個人資料。" }
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  const [touchStart1, setTouchStart1] = useState(0);
  const [touchStart2, setTouchStart2] = useState(0);
  const [touchStart3, setTouchStart3] = useState(0);
  const [touchStart4, setTouchStart4] = useState(0);
  

  const next = (setIndex, length) => {
    setIndex((prev) => (prev + 1) % length);
  };
  
  const prev = (setIndex, length) => {
    setIndex((prev) => (prev - 1 + length) % length);
  };
  
  const touchStart = (e, setTouchStartX) => {
    setTouchStartX(e.touches[0].clientX);
  };
  
  const touchEnd = (e, touchStartX, setIndex, length) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
  
    if (diff > 50) next(setIndex, length);
    else if (diff < -50) prev(setIndex, length);
  };
  
  

  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=uiux`)} // ✅ 返回指定分類
          className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
              Back to Projects
        </button>
      </div>


      <div className="flex flex-col w-full gap-6 justify-center items-center p-[60px] pl-[100px] pt-[30px]">
          
          {/* 頁面主標題與介紹 */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center mb-12">
          <motion.div className="lg:w-1/2 w-full"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
          >
            <Image src={uiux_cover} alt={''} className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">MORE{`\n`} - your movie review App</h1>
            <p className="text-[#00437B] whitespace-pre-line">本專案為一款以影評為核心的一站式影評＋訂票 App UI 設計。針對台灣缺乏整合性影評平台、國外資訊結構複雜與影評與訂票流程分離等問題，重新規劃符合台灣使用習慣的介面架構。首頁以影評作為主要導覽入口，整合電影資訊、場次查詢與訂票連結，並提供探索與個人收藏功能，提升整體使用流暢度與資訊理解效率。本作品以 UI 視覺與操作流程設計為主，未進行實際使用者測試，未來可作為後續 UX 驗證與優化基礎。</p>
            <p className="text-[#00437B] font-bold mt-2">類型：UI design</p>
          </div>
        </div>

        {/* 文字範圍1 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">專案背景與動機</p>
            <p className="text-[#00437B] whitespace-pre-line">
            本專案為一款以「影評為主導，訂票為輔助」的一站式電影 App UI 設計。 {`\n`}
            動機來自於我們在查詢電影時，經常需要同時切換影評網站、社群平台與訂票系統，不僅資訊分散，也缺乏統一的操作邏輯，影響整體使用流暢度，
            因此希望透過本專案，重新整合影評與訂票體驗。{`\n`}
            針對目前的市場進行觀察，目前台灣多以社群媒體分享、部落格影評或零散影評文章為主，缺乏一個具整合性與公信力的影評平台；
            而國外影評網站資訊層級複雜，可能不符合台灣使用習慣；
            且我們認為現有平台中，影評平台與場次查詢、訂票功能未整合，導致使用者需多次跳轉，增加使用負擔。
            </p>
          </div>
        </div>

         {/* 文字範圍5 */}
         <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">介面設計重點</p>
            <div className="text-[#00437B] whitespace-pre-line">
              本 App 的設計目標為：
              <div className="p-3 pl-5">
                <li>打造符合台灣使用習慣的一站式影評＋訂票平台 </li>
                <li>簡化影評瀏覽與電影資訊查詢流程</li>
                <li>將影評作為使用者選片的主要依據</li>
                <li>建立清楚、直覺且具有一致性的介面結構</li>
              </div>  
            </div>
          </div>
        </div>


        {/* 文字範圍4 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">資訊架構</p>
            <div className="text-[#00437B] whitespace-pre-line">
              系統主要分為五大模組，這些模組在 App 底部以 Tab 形式呈現，主要功能包含：
              <div className="p-3 pl-5">
                <li>首頁：顯示正在上映、熱門影評摘要、點擊影評後進入電影詳細資訊。</li>
                <li>電影詳情頁：包含電影介紹、演員名單、分類、得獎紀錄、預告片播放，以及使用者評分、評論查看與留言功能。</li>
                <li>場次與訂票：顯示各大戲院上映場次、時間與空位數即時查詢，點擊訂票後導向至戲院官方網站完成購票。</li>
                <li>探索頁：提供最新電影新聞與綜合討論內容，供使用者瀏覽與交流。</li>
                <li>個人頁：包含收藏的電影、收藏的評論、曾留下的影評紀錄，以及個人設定功能。</li>
              </div>  
            </div>
            <Image src={uiux_IA} alt={''} className="p-6 w-full h-auto rounded-[10vh]" />
          </div>
        </div>


       



        

        {/* 流程 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          
          {/* 右側文字 */}
          <div className="flex flex-col w-full gap-3">

            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">使用流程</p>

            {/* 訂票流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5">

              <p className="text-[#00437B] text-xl font-bold p-5">
                查看電影評論＆資訊
              </p>


              <div
                className="w-full flex justify-between items-center relative overflow-hidden"
                onTouchStart={(e) => touchStart(e, setTouchStart1)}
                onTouchEnd={(e) => touchEnd(e, touchStart1, setIndex1, flow1.length)}
              >
                
                {/* 左箭頭 */}
                {index1 > 0 && (
                  <button
                  onClick={() => prev(setIndex1, flow1.length)}
                  className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowLeft size={24} />
                </button>
                )}

                {/* 空白左箭頭 */}
                {index1 == 0 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                {/* 圖片與文字 */}
                <div className="flex flex-col lg:flex-row gap-2 items-center transition-all duration-300">
                  <Image
                    src={flow1[index1].src}
                    alt=""
                    className="h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-[40vh] text-[#00437B] text-center whitespace-pre-line">{flow1[index1].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index1 < 4 && (
                  <button
                  onClick={() => next(setIndex1, flow1.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index1 == 4 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
        
            </div>




            {/* 查景點流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5">
                查場次
              </p>


              <div
                className="w-full flex justify-between items-center relative overflow-hidden"
                onTouchStart={(e) => touchStart(e, setTouchStart2)}
                onTouchEnd={(e) => touchEnd(e, touchStart2, setIndex2, flow2.length)}
              >
                
                {/* 左箭頭 */}
                {index2 > 0 && (
                  <button
                  onClick={() => prev(setIndex2, flow2.length)}
                  className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowLeft size={24} />
                </button>
                )}

                {/* 空白左箭頭 */}
                {index2 == 0 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                {/* 圖片與文字 */}
                <div className="flex flex-col lg:flex-row gap-2 items-center transition-all duration-300">
                  <Image
                    src={flow2[index2].src}
                    alt=""
                    className="h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-[40vh] text-[#00437B] text-center">{flow2[index2].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index2 < 2 && (
                  <button
                  onClick={() => next(setIndex2, flow2.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index2 == 2 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>



            {/* 排行程流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5">
                查看電影相關消息
              </p>


              <div
                className="w-full flex justify-between items-center relative overflow-hidden"
                onTouchStart={(e) => touchStart(e, setTouchStart3)}
                onTouchEnd={(e) => touchEnd(e, touchStart3, setIndex3, flow3.length)}
              >
                
                {/* 左箭頭 */}
                {index3 > 0 && (
                  <button
                  onClick={() => prev(setIndex3, flow3.length)}
                  className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowLeft size={24} />
                </button>
                )}

                {/* 空白左箭頭 */}
                {index3 == 0 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                {/* 圖片與文字 */}
                <div className="flex flex-col lg:flex-row gap-2 items-center transition-all duration-300">
                  <Image
                    src={flow3[index3].src}
                    alt=""
                    className="h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-[40vh] text-[#00437B] text-center">{flow3[index3].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index3 < 2 && (
                  <button
                  onClick={() => next(setIndex3, flow3.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index3 == 2 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>


            {/* 排行程流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5">
                查看個人頁面
              </p>


              <div
                className="w-full flex justify-between items-center relative overflow-hidden"
                onTouchStart={(e) => touchStart(e, setTouchStart4)}
                onTouchEnd={(e) => touchEnd(e, touchStart4, setIndex4, flow4.length)}
              >
                
                {/* 左箭頭 */}
                {index4 > 0 && (
                  <button
                  onClick={() => prev(setIndex4, flow4.length)}
                  className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowLeft size={24} />
                </button>
                )}

                {/* 空白左箭頭 */}
                {index4 == 0 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                {/* 圖片與文字 */}
                <div className="flex flex-col lg:flex-row gap-2 items-center transition-all duration-300">
                  <Image
                    src={flow4[index4].src}
                    alt=""
                    className="h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-[40vh] text-[#00437B] text-center">{flow4[index4].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index4 < 3 && (
                  <button
                  onClick={() => next(setIndex4, flow4.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index4 == 3 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>


          </div>
        </div>
          


        

      </div>
 

    </div>
  );
}
