'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/PM2.jpg";

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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">國教院台客語辭典網站-擴充案</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              此專案為國教院台客語辭典網站的擴充案，涵蓋 UI/UX 介面優化、全新功能開發（如音檔維護、互動地圖）以及篩選與搜尋機制的重構。
              {`\n`}我作為 PM 主導本專案，負責需求訪談與梳理、Figma 介面與狀態流程規劃、規格書撰寫，並將需求結構化拆解開票予工程團隊執行，在技術可行性與使用者體驗之間取得最佳平衡。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：PM</p>
          </div>
        </div>

        {/* 核心任務 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">核心任務</p>

            <div className="text-[#00437B] p-3 pl-5 space-y-3">
              <ul>
                <strong>1. 需求訪談與初步執行規劃：</strong>
                <p className="mt-1 pl-4">衡量操作流暢性與技術成本，與工程師及客戶討論諸如評估表格篩選排序方式、檔案上傳等，新增功能的技術可行性規劃。</p>
              </ul>
              <ul>
                <strong>2. 介面規劃 Figma：</strong>
                <p className="mt-1 pl-4">規劃介面並確認符合無障礙設計規範。</p>
              </ul>
              <ul>
                <strong>3. 撰寫規格書與設計狀態流程</strong>
              </ul>
              <ul>
                <strong>4. 拆解需求，開票給工程師執行</strong>
              </ul>
            </div>
          </div>
        </div>

        {/* 具體執行項目範例 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">具體執行項目範例</p>

            <div className="text-[#00437B] mb-2">
              在表格欄位新增與篩選條件調整相關項目評估中，我主動與工程團隊評估底層技術可行性，並深入與客戶釐清後台實際維護痛點與真實需求，最終在技術成本與使用者體驗之間進行權衡，提出最具效益的執行策略。
            </div>

            <div className="text-[#00437B] p-3 pl-5 space-y-4">
              <ul>
                <strong>1. 詞表之音檔維護</strong>
                <p className="mt-1 pl-4">由於客戶欲加入音檔播放的功能，而該功能雖前台顯示單純（僅在該詞表旁新增播放按鈕），但在詞目數量多、音檔狀態分為顯示與否的前提下，需思考後台維護方式、音檔上傳方式以及如何與詞目名稱精準對應。</p>
              </ul>
              <ul>
                <strong>2. 互動地圖</strong>
                <p className="mt-1 pl-4">該功能將詞表中與國家、地區相關的台語及客語詞目，顯示在世界地圖的相對位置上，因此需要思考該地圖的顯示方式、資料對應邏輯與後台維護機制。</p>
              </ul>
              <ul>
                <strong>3. 客語腔調顯示方式</strong>
                <p className="mt-1 pl-4">透過訪談得知使用者在查詢客語詞目時，會先以腔調作為首要篩選條件，故我將腔調獨立為專屬欄位，並將其顯示位置移到表格最前方，同步於後台維護進行調整。</p>
              </ul>
            </div>
          </div>
        </div>

        {/* AI 協作 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">AI 協作</p>
            <div className="text-[#00437B] p-3 pl-5 space-y-3">
              <ul>
                <li>1. 整理、分類客戶提出的需求</li>
                <li>2. 生成各功能預計實作時間與工程師估時比對參考</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}