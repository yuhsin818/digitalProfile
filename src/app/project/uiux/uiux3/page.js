'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/app/data/projectData";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/uiux3_cover.png";
import uiux_pic1 from "@/app/image/uiux3_pic1.png";
import uiux_pic2 from "@/app/image/uiux3_pic2.png";
import uiux_IA from "@/app/image/uiux3_IA.png";
import uiux_flow1_1 from  "@/app/image/uiux3_flow1_1.png";
import uiux_flow1_2 from  "@/app/image/uiux3_flow1_2.png";
import uiux_flow1_3 from  "@/app/image/uiux3_flow1_3.png";
import uiux_flow1_4 from  "@/app/image/uiux3_flow1_4.png";
import uiux_flow1_5 from  "@/app/image/uiux3_flow1_5.png";
import uiux_flow1_6 from  "@/app/image/uiux3_flow1_6.png";
import uiux_flow1_7 from  "@/app/image/uiux3_flow1_7.png";

import uiux_flow2_1 from  "@/app/image/uiux3_flow2_1.png";
import uiux_flow2_2 from  "@/app/image/uiux3_flow2_2.png";
import uiux_flow2_3 from  "@/app/image/uiux3_flow2_3.png";

import uiux_flow3_1 from  "@/app/image/uiux3_flow3_1.png";
import uiux_flow3_2 from  "@/app/image/uiux3_flow3_2.png";
import uiux_flow3_3 from  "@/app/image/uiux3_flow3_3.png";

import uiux_flow4_1 from  "@/app/image/uiux3_flow4_1.png";
import uiux_flow4_2 from  "@/app/image/uiux3_flow4_2.png";
import uiux_flow4_3 from  "@/app/image/uiux3_flow4_3.png";
import uiux_flow4_4 from  "@/app/image/uiux3_flow4_4.png";
import uiux_flow4_5 from  "@/app/image/uiux3_flow4_5.png";

import uiux_flow5_1 from  "@/app/image/uiux3_flow5_1.png";
import uiux_flow5_2 from  "@/app/image/uiux3_flow5_2.png";
import uiux_flow5_3 from  "@/app/image/uiux3_flow5_3.png";
import uiux_flow5_4 from  "@/app/image/uiux3_flow5_4.png";
import uiux_flow5_5 from  "@/app/image/uiux3_flow5_5.png";
import uiux_flow5_6 from  "@/app/image/uiux3_flow5_6.png";

import uiux_flow6_1 from  "@/app/image/uiux3_flow6_1.png";
import uiux_flow6_2 from  "@/app/image/uiux3_flow6_2.png";
import uiux_flow6_3 from  "@/app/image/uiux3_flow6_3.png";
import uiux_flow6_4 from  "@/app/image/uiux3_flow6_4.png";
import uiux_flow6_5 from  "@/app/image/uiux3_flow6_5.png";


export default function AE() {
  const router = useRouter();

  const flows = [
    {
      title: "報名",
      data: [
        { src: uiux_flow1_1, caption: "1. 從主頁點選「登入」以呈現側邊導覽列個人化項目。" },
        { src: uiux_flow1_2, caption: "2. 輸入身分證字號和密碼登入。" },
        { src: uiux_flow1_3, caption: "3. 剛登入便會呈現以報考的科目報考狀態頁，可點選側邊導覽列「考試報名＞現在報名」，進入近期考科報名頁。" },
        { src: uiux_flow1_4, caption: "4. 可查看近日可報名的考科資訊、應考須知、應考資格，以及進入報名程序。" },
        { src: uiux_flow1_5, caption: "5. 確認基本資料（會預設為註冊帳號時所填寫的資料）。" },
        { src: uiux_flow1_6, caption: "6. 上傳必要文件，完成後點選確認。" },
        { src: uiux_flow1_7, caption: "7. 報名完成後會再跳回以報名考科的報名狀態頁。" },
      ]
    },
    {
      title: "查看歷屆試題",
      data: [
        { src: uiux_flow2_1, caption: "1. 點選側邊導覽列「備考資訊＞歷屆試題」。" },
        { src: uiux_flow2_2, caption: "2. 呈現已報名科目的歷屆試題（由於側邊導覽列主要負責個人化的資訊呈現，所以未報名考科的歷屆試題可另外在上方導覽列查看），點選查看目標科目的歷屆試題。" },
        { src: uiux_flow2_3, caption: "3. 可選擇要查看的考試，或勾選欲下載的考科一次下載。" }
      ]
    },
    {
      title: "查看應考通知書",
      data: [
        { src: uiux_flow3_1, caption: "1. 點選側邊導覽列「應考資訊＞應考通知書」。" },
        { src: uiux_flow3_2, caption: "2. 呈現已報名考科列表，可點選查看應考通知書。" },
        { src: uiux_flow3_3, caption: "3. 應考通知書電子檔，可選擇放大或下載。" }
      ]
    },
    {
      title: "查詢成績",
      data: [
        { src: uiux_flow4_1, caption: "1. 點選側邊導覽列「考試結果＞成績查詢」" },
        { src: uiux_flow4_2, caption: "2. 呈現已報名考科列表，可點選查看「個人成績」、「榜單公告」，若有及格則可以下載「及格通知」，不及格則不會出現該按紐。" },
        { src: uiux_flow4_3, caption: "3. 查看個人成績，可以選擇「放大」或「下載」。" },
        { src: uiux_flow4_4, caption: "4. 查看及格通知書，可以選擇「放大」或「下載」。" },
        { src: uiux_flow4_5, caption: "5. 查看榜單公告，可以選擇「放大」或「下載」。" }
      ]
    },
    {
      title: "志願選填",
      data: [
        { src: uiux_flow5_1, caption: "1. 點選側邊導覽列「錄取分發＞職務查詢（志願選填）」" },
        { src: uiux_flow5_2, caption: "2. 可選擇並搜尋職務的篩選條件，將職務加入志願清單。" },
        { src: uiux_flow5_3, caption: "3. 成功加入職務後，原本呈現加號的按鈕會轉為打勾狀態，點選「查看志願清單」可看到已加入志願清單的職務列表。" },
        { src: uiux_flow5_4, caption: "4. 已加入志願清單的職務可以拖拉調整志願序，或刪除志願。" },
        { src: uiux_flow5_5, caption: "5. 若點選刪除志願，會跳出確認刪除的對話框。" },
        { src: uiux_flow5_6, caption: "6. 成功刪除志願，可以按「查詢職務」跳回所有職務列表，加入其他職務。" }
      ]
    },
    {
      title: "錄取資格保留申請",
      data: [
        { src: uiux_flow6_1, caption: "1. 點選側邊導覽列「錄取分發＞錄取資格保留申請」" },
        { src: uiux_flow6_2, caption: "2. 呈現已錄取考科，可申請保留錄取資格。" },
        { src: uiux_flow6_3, caption: "3. 確認基本資料（會預設為註冊帳號時所填寫的資料）。" },
        { src: uiux_flow6_4, caption: "4. 填寫申辦事由和上傳證明文件，完成後點選「確認」。" },
        { src: uiux_flow6_5, caption: "5. 完成申請，等待審核。" }

      ]
    },
    
  ];

  
  const [indexes, setIndexes] = useState(
    flows.map(() => 0)
  );
  
  const [touchStarts, setTouchStarts] = useState(
    flows.map(() => 0)
  );

  
  const next = (flowIndex) => {
    setIndexes(prev =>
      prev.map((v, i) =>
        i === flowIndex ? (v + 1) % flows[i].data.length : v
      )
    );
  };
  
  const prev = (flowIndex) => {
    setIndexes(prev =>
      prev.map((v, i) =>
        i === flowIndex
          ? (v - 1 + flows[i].data.length) % flows[i].data.length
          : v
      )
    );
  };

  
  const touchStart = (e, flowIndex) => {
    const x = e.touches[0].clientX;
    setTouchStarts(prev =>
      prev.map((v, i) => (i === flowIndex ? x : v))
    );
  };
  
  const touchEnd = (e, flowIndex) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStarts[flowIndex] - touchEndX;
  
    if (diff > 50) next(flowIndex);
    if (diff < -50) prev(flowIndex);
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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6">國家考試整合平台</h1>
            <p className="text-[#00437B] whitespace-pre-line">本專案旨在解決現行國家考試資訊分散、流程繁複、介面不佳的痛點。每年約三十萬人參與國考，但考生常抱怨找不到資料、不清楚流程，且現有網站字體小、操作吃力。{`\n`}
              我們的目標是提供一個一站式服務平台，透過服務流程改造，將國考的完整生命週期（從報考、備考、應試到錄取分發）資訊系統性地整合。{`\n`}
              網站將明確簡化流程，並加入實用功能，例如志願選填系統的地圖整合，以及提供清晰、易讀的介面設計，以大幅提升所有考生的使用者體驗，讓資訊獲取更有效率。</p>
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
              在參與國家考試時，考生會有以下流程需要完成：
            </p>
            <Image src={uiux_pic1} alt={''} className="p-3 w-full lg:w-[100vh] h-auto rounded-[5vh]" />
            <div className="text-[#00437B] whitespace-pre-line">
              但現行國家考試相關的資訊取得管道、作業系統、網站架構等，有諸多問題，使得考生除了專心應考之外，還須面對繁瑣的流程，並自行花費心力去找尋考試每一階段資訊窗口以及需要作業的網站，甚至因而錯過部分資訊，或需要仰賴補習班整理或學長姊分享。其主要面臨的痛點如下:
              
              <div className="p-3 pl-5 space-y-3 mb-4">
                <li>資訊分散： 由於考試不同階段的作業可能是由不同公家單位所負責，導致即使是國考相關的作業，也須從不同網站的窗口去完成或查找資訊，例如：考試院網站可察看歷屆試題和查看考試日程等，考試報名需要在另外的國家考試報名網站完成；而考完試的志願選填要在行政院人事行政總處網站完成，但資格保留又必須另外在公務人員保訓會網站作業。</li>
                <li>資訊結構複雜：現行的網站資訊龐雜，搜尋不易，對只想使用國考功能的考生而言，需在茫茫文字中尋找目標資訊，體驗不佳；且由於考選部業務不只國考，故網站上列示所有資訊的情況下，難有進一步優化個人體驗。</li>
                <li>資訊不對等： 補習班通常只會花心思整理熱門考科資訊，造成冷門考科考生取得資訊的難易度更高。</li>
                <li>介面體驗不佳： 現行網站字太多、太小，操作吃力，容易錯過重要資訊，且介面不夠美觀。</li>
              </div>

              故我們希望可以：
              <div className="p-3 pl-5 space-y-3">
                <li>遵循政府為民服務原則，提供服務流程改造。</li>
                <li>提供一站式平台，整合國考所有資源，明確及簡化國考流程。</li>
                <li>全面提高考生的使用者經驗與服務體驗。</li>
              </div>

            </div>

            <Image src={uiux_pic2} alt={''} className="p-3 w-full h-auto rounded-[5vh]" />
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
              本平台主要服務參與國家考試的考生（每年約30萬人參與國考），包含正在備考、已完成考試並需進行志願選填、名額保留及後續流程規劃的使用者。
            </div>
          </div>
        </div>

        {/* 文字範圍3 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4">事前研究</p>
            <p className="text-[#00437B] whitespace-pre-line mb-2">
            除了對於現行網站和國考流程的背景研究外，專案團隊主要使用了問卷和訪談，以了解使用者在操作各種相關網站上的痛點，以及對於各項資訊取得的想法和經驗。{`\n`}
            問卷的發放對象是曾參與國家考試者，而發放管道是 Dcard 公職版和政大交流版；訪談的對象共有三位，皆是曾參與過國家考試者，訪談內容與流程包括個人背景與經驗的分享、利用寫有各種國考相關網站的資訊和功能之卡片進行再認（作為probe，幫助回憶），以及實際進行考試各階段的模擬操作，進而了解受訪者對於現行網站的操作和資訊的搜尋上是否有困難。
            </p>
            <div className="text-[#00437B] whitespace-pre-line">
            從問卷和訪談中，可以歸納出以下問題：
              <div className="p-3 pl-5 space-y-3">
                <li>現行網站介面字太多、太小，以致於操作吃力、易錯過重要資訊。</li>
                <li>取得考試資訊的管道多且散（國考報名系統、考選部、電子信箱、簡訊、保訓會、人事行政總處）導致使用者常常需要花大量時間尋找或尋求幫助。</li>
                <li>負責國考業務涉入之行政機關多，但考生不見得都清楚知道每個階段是對應到哪個負責的政府單位，以致於考生常無法立即找到資訊和各階段作業的網站</li>
                <li>不同政府單位的不同網站窗口可能導致考生需要重覆輸入資料，無個人化的服務 。</li>
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
              我們重新設計的一站式國考網站，將原本分散於各部門網站的資訊和作業流程都整合進本網站，且將general的資訊和個人化的資訊做區隔（general資訊在上方導覽列，個人化資訊在登入後會呈現在側邊導覽列）。
              資訊架構示意圖如下： 
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

            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">使用流程（僅列舉主要流程）</p>

            {flows.map((flow, flowIndex) => (
              <div
                key={flowIndex}
                className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5"
                onTouchStart={(e) => touchStart(e, flowIndex)}
                onTouchEnd={(e) => touchEnd(e, flowIndex)}
              >
                <p className="text-[#00437B] text-xl font-bold p-5">
                  {flow.title}
                </p>

                <div className="w-full flex justify-between items-center relative overflow-hidden">

                  {/* 左箭頭 */}
                  {indexes[flowIndex] > 0 ? (
                    <button
                      onClick={() => prev(flowIndex)}
                      className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] cursor-pointer"
                    >
                      <FaArrowLeft size={24} />
                    </button>
                  ) : (
                    <div className="w-[24px] h-[24px]" />
                  )}

                  {/* 圖片與文字 */}
                  <div className="flex flex-col xl:flex-row gap-2 items-center">
                    <Image
                      src={flow.data[indexes[flowIndex]].src}
                      alt=""
                      className="h-auto rounded-xl w-[80vh]"
                    />
                    <p className="w-full sm:w-[40vh] p-3 text-[#00437B] text-center">
                      {flow.data[indexes[flowIndex]].caption}
                    </p>
                  </div>

                  {/* 右箭頭 */}
                  {indexes[flowIndex] < flow.data.length - 1 ? (
                    <button
                      onClick={() => next(flowIndex)}
                      className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] cursor-pointer"
                    >
                      <FaArrowRight size={24} />
                    </button>
                  ) : (
                    <div className="w-[24px] h-[24px]" />
                  )}

                </div>
              </div>
            ))}



          </div>
        </div>
          
        <div className="w-full mt-8 flex">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5">相關連結：</p> 

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web_digitalProfile?page-id=1%3A3&node-id=67-5570&viewport=-980%2C-236%2C0.02&t=ZGcITpd8Kg3d6xrp-1&scaling=min-zoom&content-scaling=fixed", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              FIGMA
            </button>
          </div>
        </div>


        

      </div>
 

    </div>
  );
}
