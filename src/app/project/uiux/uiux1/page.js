'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/uiux1_cover.png";
import uiux_IA from "@/app/image/uiux1_IA.png";
import uiux_flow1_1 from  "@/app/image/uiux1_flow1-01.png";
import uiux_flow1_2 from  "@/app/image/uiux1_flow1-02.png";
import uiux_flow1_3 from  "@/app/image/uiux1_flow1-03.png";
import uiux_flow1_4 from  "@/app/image/uiux1_flow1-04.png";
import uiux_flow1_5 from  "@/app/image/uiux1_flow1-05.png";
import uiux_flow1_6 from  "@/app/image/uiux1_flow1-06.png";

import uiux_flow2_1 from  "@/app/image/uiux1_flow2-01.png";
import uiux_flow2_2 from  "@/app/image/uiux1_flow2-02.png";
import uiux_flow2_3 from  "@/app/image/uiux1_flow2-03.png";
import uiux_flow2_4 from  "@/app/image/uiux1_flow2-04.png";
import uiux_flow2_5 from  "@/app/image/uiux1_flow2-05.png";

import uiux_flow3_1 from  "@/app/image/uiux1_flow3-01.png";
import uiux_flow3_2 from  "@/app/image/uiux1_flow3-02.png";
import uiux_flow3_3 from  "@/app/image/uiux1_flow3-03.png";
import uiux_flow3_4 from  "@/app/image/uiux1_flow3-04.png";
import uiux_flow3_5 from  "@/app/image/uiux1_flow3-05.png";
import uiux_flow3_6 from  "@/app/image/uiux1_flow3-06.png";
import uiux_flow3_7 from  "@/app/image/uiux1_flow3-07.png";


export default function AE() {
  const router = useRouter();

  const flow1 = [
    { src: uiux_flow1_1, caption: "1. 附有附近景點的主頁（開始導航按鈕）" },
    { src: uiux_flow1_2, caption: "2. 交通方式（大眾運輸Tab）" },
    { src: uiux_flow1_3, caption: "3. 顯示不同路線與價格（路線按鈕）" },
    { src: uiux_flow1_4, caption: "4. 路線詳細（訂票按鈕）" },
    { src: uiux_flow1_5, caption: "5. 付費資訊（確認）" },
    { src: uiux_flow1_6, caption: "6. 付費成功" }
  ];
  
  const flow2 = [
    { src: uiux_flow2_1, caption: "1. 附有附近景點的主頁（搜尋Tab）" },
    { src: uiux_flow2_2, caption: "2. 輸入景點名稱（搜索框）" },
    { src: uiux_flow2_3, caption: "3. 搜尋結果（景點按鈕）" },
    { src: uiux_flow2_4, caption: "4. 景點資訊（滑動檢視）" },
    { src: uiux_flow2_5, caption: "5. 景點資訊（滑動檢視）" },
  ];
  
  const flow3 = [
    { src: uiux_flow3_1, caption: "1. 附有附近景點的主頁（行程規劃Tab）" },
    { src: uiux_flow3_2, caption: "2. 推薦行程（指定的行程按鈕）" },
    { src: uiux_flow3_3, caption: "3.行程資訊（要刪除的一項景點）" },
    { src: uiux_flow3_4, caption: "4. 確認畫面（確認）" },
    { src: uiux_flow3_5, caption: "5. 刪除成功" },
    { src: uiux_flow3_6, caption: "6. 推薦行程（選擇指定的一項景點上的「直接加入」）" },
    { src: uiux_flow3_7, caption: "7. 加入成功" }
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);

  const [touchStart1, setTouchStart1] = useState(0);
  const [touchStart2, setTouchStart2] = useState(0);
  const [touchStart3, setTouchStart3] = useState(0);
  

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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6">現在玩台北</h1>
            <p className="text-[#00437B] whitespace-pre-line">本專案為「現在玩台北」App 的 Redesign。事前研究的部分透過問卷、訪談，了解目標使用者對於旅遊 App 的使用經驗與期許，重新規劃、設計一個以「台北觀光景點資訊」為主要功能的 App，並在完成設計後進行測試與改善。</p>
            <p className="text-[#00437B] font-bold mt-2">類型： UX research + UI design</p>
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
              本專案以「現在玩台北」App 為重新設計對象，聚焦於改善使用者在旅遊行程規劃過程中，常見的資訊不足、規劃不便與介面操作不直覺等問題。
              市面上多數使用者習慣透過 Google Map 規劃行程，但其資訊更新仰賴店家自行維護，容易出現資料不完整的狀況，且路線規劃多以最短距離為優先，未必符合實際遊玩時的便利性。
              另一方面，原版「現在玩台北」App 則缺乏即時優惠資訊與更細緻的行程安排機制，導致使用誘因不足。 {`\n`}
              因此，本次 Redesign 以「整合資訊、優化流程與強化易用性」為核心目標，重新梳理旅遊相關使用情境，並加入更符合使用者需求的搜尋排序方式、即時店家資訊與住宿衛生等實用內容，期望讓使用者能更有效率且順暢地完成台北旅遊的行前規劃與實際導覽體驗。
            </p>
          </div>
        </div>

        {/* 文字範圍2 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line  mb-2">使用者族群</p>
            <div className="text-[#00437B] whitespace-pre-line">
            目標使用者為：
            <div className="p-3 pl-5">
              <li>習慣使用手機查詢旅遊資訊的使用者</li>
              <li>具有前往台北旅遊需求的族群</li>
              <li>需要旅遊建議、行程規劃與即時資訊的使用者</li>
            </div>
            主要使用情境包含台北觀光旅遊、前往知名餐廳或特色景點，使用者期待能透過一個整合式平台快速獲得即時、完整且實用的旅遊建議，協助他們更有效率地完成行前規劃與旅程安排。
            </div>
          </div>
        </div>

        {/* 文字範圍3 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">事前研究</p>
            <p className="text-[#00437B] whitespace-pre-line">
              本專案於設計初期透過訪談、問卷調查與競品分析三種方式進行使用者研究，以深入了解使用者的旅遊行為與實際痛點。{`\n`}
              研究結果顯示，多數使用者目前主要依賴 Google Map 作為行程規劃工具，僅少部分會額外使用 App 訂票或購買行程，但普遍認為現有工具存在店家資訊不足、資訊重複、更新仰賴店家而不即時、路線規劃雖最短但不便利、儲存地點不易管理等問題。{`\n`}
              使用者同時也期待旅遊 App 能具備即時更新的商家資訊、符合個人需求的搜尋排序、篩選功能、路線與行事曆整合，以及住宿地點的衛生資訊查詢等進階功能。{`\n`}
              在競品分析方面，Google Map 雖有評論與評分優勢，但在資訊完整度與規劃便利性上仍有不足；
              原版「現在玩台北」App 雖具有景點分類與收藏功能，但整體景點數量不足、缺乏優惠與語音導覽整合，也未能建立使用者黏著度。{`\n`}
              此外，研究亦發現部分使用者對於額外下載旅遊 App 的意願偏低，顯示產品需具備更明確的使用誘因，因此本專案也將優惠券、行程套票與排行榜推薦機制視為提升下載與使用動機的重要設計方向。
            </p>
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
              本專案的資訊架構設計基礎，除了基於功能需求進行分類外，還參考了使用者卡片分類的結果，確保分類邏輯貼近目標使用者的心智模型。
              系統主要分為五大模組，這些模組在 App 底部以 Tab 形式呈現，提供使用者快速切換主要功能，主要功能包含：
              <div className="p-3 pl-5">
                <li>行程安排：推薦/自訂行程、行程時間管理、預訂服務。</li>
                <li>交通：大眾運輸、自駕、票券預訂、租車服務。</li>
                <li>景點：景點探索、篩選、資訊查詢、評價與回饋。</li>
                <li>遊記：旅遊日誌、上傳圖片文字紀錄、社群互動。</li>
                <li>個人：個人檔案、儲存/收藏資訊、系統設定。</li>
              </div>  
            </div>
            <Image src={uiux_IA} alt={''} className="p-6 w-full h-auto rounded-[10vh]" />
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
              <div className="p-3 pl-5">
                <li>色彩策略： 以藍綠色和白色作為主要主題色 </li>
                <li>視覺風格： 採用較圓潤的文字和圓角，以及流線型的設計。</li>
                <li>品牌傳達： 語音回饋訊息搭配台北市政府吉祥物熊讚（Bravo）及其家人，傳達品牌態度。</li>
              </div>  
            </div>
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
                訂票
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
                  <p className="w-[40vh] text-[#00437B] text-center">{flow1[index1].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index1 < 5 && (
                  <button
                  onClick={() => next(setIndex1, flow1.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index1 == 5 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
        
            </div>




            {/* 查景點流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5">
                查景點
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
                {index2 < 4 && (
                  <button
                  onClick={() => next(setIndex2, flow2.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index2 == 4 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>



            {/* 排行程流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5">
                排行程
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
                {index3 < 6 && (
                  <button
                  onClick={() => next(setIndex3, flow3.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index3 == 6 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>


          </div>
        </div>


        {/* 文字範圍6 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">使用者測試與改善</p>
            <div className="text-[#00437B] whitespace-pre-line">
              <div className="p-3 pl-5 space-y-3">
                <li>
                  首次進入 App 時，導航按鈕不夠明顯，使用者需先點擊「GO」才能開始導航，容易產生操作混淆。
                </li>

                <li>
                  訂票成功後的票券提示彈窗不夠顯眼，使用者容易錯過查看已預訂票券的入口。
                </li>

                <li>
                  付款流程最後一步需填寫大量表單資料，操作繁瑣，影響整體預訂效率與體驗。
                </li>

                <li>
                  點擊搜尋框後未即時提供常見分類（如餐廳、百貨公司），提升了搜尋成本。
                </li>

                <li>
                  行程規劃中缺乏可拖曳調整順序的機制，使用者無法直覺地重新安排路線。
                </li>

                <li>
                  行程中的「刪除 X」圖示易被誤認為最小化，導致誤觸刪除的風險。
                </li>

                <li>
                  景點資訊頁缺乏地圖定位、評論區不易被發現，且確認頁文字資訊過多，影響行程管理的清楚度。
                </li>
              </div>  
            </div>
          </div>
        </div>
          
        <div className="w-full mt-8 flex gap-4">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5">相關連結：</p> 
            <button
              onClick={() => window.open("https://drive.google.com/file/d/16auc4eNCAR0qdeyCtKBCtEdoE30gUEQb/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              Demo影片
            </button>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1tuXbVnNxsTDvcLd71ZKVh1SUrJm0dGna/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              海報
            </button>
        </div>


        

      </div>
 

    </div>
  );
}
