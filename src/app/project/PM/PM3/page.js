'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/PM3.jpg";



export default function PM() {
  const router = useRouter();


  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">

      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=PM`)} // ✅ 返回指定分類
          className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
          Back to Projects
        </button>
      </div>


      <div className="flex flex-col w-full gap-6 justify-center items-center p-4 sm:p-[60px] sm:pl-[100px] pt-[30px]">

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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">建模軟體 plugin</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              在公司無相關專案經驗的情況下，為建模軟體設計 plugin。我從頭瞭解該軟體開發環境限制、類似 plugin 作法及管理方式，思考及跟工程師討論符合我們公司開發經驗的做法以及技術架構，並規劃具體可執行的方案和交付階段。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：UI design</p>
          </div>
        </div>





        {/* 核心任務 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">核心任務</p>
            <div className="text-[#00437B] p-3 pl-5 space-y-3">
              <ul>
                <li>1. 整理客戶需求</li>
                <li>2. 了解開發環境、類似 plugin 作法</li>
                <li>3. 與工程師討論規劃可行的系統架構</li>
                <li>4. 撰寫 PRD，並與客戶同步技術規劃</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 具體執行項目範例 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">具體執行項目範例</p>
            <div className="text-[#00437B]">
              plugin 本身為 ruby 檔，但因為客戶要求需同時符合帳號管理以及素材自動更新的條件，故在原有 plugin 環境外還需再規劃後端環境等，故我先提出可行的方案供工程師審核，並與客戶來回確認需求細項，修改技術細節。
            </div>
          </div>
        </div>

        {/* AI 協作 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">AI 協作</p>
            <div className="text-[#00437B] p-3 pl-5 space-y-3">
              <ul>
                <li>1. 整理客戶需求，並分析公司專長，讓 AI 建議執行方向</li>
                <li>2. 執行時程評估參考</li>
              </ul>
            </div>
          </div>
        </div>


        <div className="w-full mt-8 flex">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5">相關連結：</p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              FIGMA
            </button>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1VqpiCXR5OnZcc8JrxULW4jHKLybofG4o/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              Demo影片
            </button>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/11xeP2-bsMOWkhCrbHaETEMr7vn6MCAiU/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              海報
            </button>
          </div>
        </div>



      </div>


    </div>
  );
}
