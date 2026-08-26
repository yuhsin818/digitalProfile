'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/PM1.jpg";



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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">VIVOTEK 官網-擴充案</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              此專案為 VIVOTEK 產品官網改版優化案，
              專案內容包含官網的改版、功能的擴充、BUG的排查，以及技術的交接等。
              {`\n`}我作爲 PM 參與了本專案，負責客戶的需求溝通到實際的功能開發、測試，並進行後續的追蹤，處理功能上線後出現的問題等。</p>
            <p className="text-[#00437B] font-bold mt-2">類型：PM</p>
          </div>
        </div>

        {/* 文字範圍1 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">核心任務</p>

            <div className="text-[#00437B]">
              在該擴充案中，我擔任產品與工程團隊之間的跨職能橋樑，將模糊的客戶需求轉化為結構化的開發任務，並建立了一套端到端的推進流程：
            </div>

            <div className="text-[#00437B] p-3 pl-5 space-y-3">

              <ul>
                <strong>1. 需求解構與可行性評估：</strong>
                <p className="mt-1 pl-4">
                  接收客戶需求後，深入研讀既有系統架構，進行商務邏輯與技術邊界的評估，確保功能在時程內可被實踐且
                  不產生額外技術債。
                </p>
              </ul>
              <ul>
                <strong>2. 任務結構化與精準分派：</strong>
                <p className="mt-1 pl-4">
                  將需求撰寫成規格書，並附上清晰的 User Flow 與驗收標準（Acceptance Criteria），
                  透過高精確度的任務範疇（Ticket Scoping）定義，減少 40% 的開發前溝通成本。
                </p>
              </ul>
              <ul>
                <strong>3. 易用性與功能性驗收測試：</strong>
                <p className="mt-1 pl-4">
                  在開發完成後擔任第一線質量把關者（QA），除常規功能驗收，更專注於邊界條件（Edge Cases）測試，
                  從 UX 視角驗證微互動流暢度與防呆機制是否符合心智模型。
                </p>

              </ul>
              <ul>
                <strong>4. 後續追蹤與閉環回報：</strong>
                <p className="mt-1 pl-4">
                  功能上線後主動向客戶端回報進度，並持續透過用戶反饋與指標監測追蹤使用狀況，將潛在卡點提煉成優化清單
                  （Backlog），為產品進行敏捷的持續迭代。
                </p>
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
            <div className="text-[#00437B] p-3 pl-5 space-y-4">
              <ul>
                <strong>1. 自訂顯示 CTA 區塊之頁面</strong>
                <li className="mt-1 pl-4"><span className="font-semibold">脈絡與痛點：</span><br />過去行銷團隊無法因應不同產品頁面的特性，彈性調整 Call-to-Action (CTA) 的位置與內容，導致導流效果受限、轉換率（CR）無法突破。</li>
                <li className="mt-1 pl-4"><span className="font-semibold">具體執行：</span><br />梳理後台的配置邏輯，根據原有後台架構與元件，再定義「可供行銷人員自由勾選、自訂文字與連結」的 CTA 調整區塊。</li>
              </ul>
              <ul>
                <strong>2. 新增 sitemap 提交至 google console 之功能</strong>
                <li className="mt-1 pl-4"><span className="font-semibold">脈絡與痛點：</span><br />原需要手動提交 sitemap 給 Google Console，流程麻煩、不夠自動化。</li>
                <li className="mt-1 pl-4"><span className="font-semibold">具體執行：</span><br />在後台新增按鈕，一鍵自動更新 Sitemap，並提交給 Google 抓取。將「手動到 Google Console 提交」的瑣碎流程，整合為「後台一鍵提交與自動排程更新」的功能。</li>
              </ul>
              <ul>
                <strong>3. 多語言與產品頁 SEO（Canonical & Hreflang）優化</strong>
                <li className="mt-1 pl-4">
                  <span className="font-semibold">脈絡與痛點：</span><br />
                  本網站為多產品之國際數位型錄，具多語言與產品子 Tab 結構。若未明確標示，搜尋引擎無法精準將對應語系推送給海外使用者，且結構相近的網址容易被誤判為重複內容（Duplicate Content），導致 SEO 權重分散。
                </li>
                <li className="mt-1 pl-4">
                  <span className="font-semibold">具體執行：</span><br />
                  於全站埋設 hreflang 屬性，引導搜尋引擎在搜尋結果中精準呈現對應語系；並針對產品頁與子 Tab 網址配置 canonical 規範網址，明確標示主頁面權重，防範重複內容疑慮並集中 SEO 關鍵字價值。
                </li>
              </ul>
              <ul>
                <strong>4. BUG 排查</strong>
                <p className="mt-1 pl-4">遇到 BUG 回報時，會先透過自行操作重現該問題後，鎖定該問題排查的範圍及使用情境，先利用 claude code 排查可能的問題後發派該任務給工程師確認，以讓工程師可以更快速地處理該問題。待工程師處理完後會再 review 並部署到測試環境。</p>
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
            <div className="text-[#00437B] mb-2">在這個專案中，我會利用 claude code 協助我執行以下工作：</div>
            <div className="text-[#00437B] p-3 pl-5 space-y-3">
              <ul>
                <li>1. 解答客戶問題、初步檢查程式碼 bug</li>
                <li>2. 作為指派工作前的技術評估，減少溝通時間成本以及專案技術上的認知落差</li>
                <li>3. 作為規格書撰寫的技術及架構規劃參考</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 專案反思 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">專案反思：在既有框架下 改進的價值</p>
            <div className="text-[#00437B]">
              雖然本專案屬於維運與功能擴充案，但它讓我深刻體會到，PM 的價值不只是「新產品從頭到尾的規劃」，還有如何在既有的成熟系統中，透過技術的理解以及長時間的驗證，進行精準的微調與優化。這段經驗不僅鍛鍊了我的技術思維，更讓我學會如何用最少、最精準的系統改動，為客戶與團隊創造最大的價值。
            </div>
          </div>
        </div>




      </div>


    </div>
  );
}
