'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import cover from "@/app/image/SOSI_web.png";
import sosiDesignPresent from "@/app/image/SOSI/SOSI_design_present.png";
import sosiDesign from "@/app/image/SOSI/SOSI_design.png";



export default function Web5() {
  const router = useRouter();
  const videoRefs = useRef([]);
  const currentlyPlaying = useRef(null);

  useEffect(() => {
    const observers = [];

    videoRefs.current.forEach((video) => {
      if (!video) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            if (currentlyPlaying.current && currentlyPlaying.current !== video) {
              currentlyPlaying.current.pause();
            }
            video.play();
            currentlyPlaying.current = video;
          } else {
            video.pause();
            if (currentlyPlaying.current === video) {
              currentlyPlaying.current = null;
            }
          }
        },
        { threshold: 0.7 }
      );

      observer.observe(video);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">

      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=uiux`)}
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
            <Image src={cover} alt="SOSI 官網 UI 優化" className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">SOSI 官網-優化</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              本專案為 SOSI 官網的 UI 優化案。SOSI 是五倍紅寶石旗下的遠端連線產品，原有官網存在 UI 無設計規範、產品特色未被強調、缺乏動態互動等核心痛點。
              {`\n`}我負責痛點分析、規劃改版策略後，實際進行前端實作，從品牌形象色彩定義到動態開發，完成一次覆蓋全站的 UI 升級。項目包含全站設計系統建立、動態背景、全新 Hero 區塊、操作影片展示、數字遞增動畫、合作夥伴跑馬燈、獨立聯絡頁，以及完整的多語系支援等。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：網頁前後端 + UI/UX</p>
          </div>
        </div>

        {/* 痛點 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">原網站痛點</p>
            <div className="text-[#00437B] p-3 pl-5 space-y-2 whitespace-pre-line mb-2">
              經由前期的產品盤點，SOSI 原官網在使用者體驗（UX）與品牌傳達上面臨三項核心缺陷：
              
              <div className="mt-1 w-full flex flex-row">
                <div>1.</div>
                <div className="pl-4">
                  首先是品牌視覺一致性缺乏，
                  由於 UI 缺乏系統化的設計規範，導致整體介面風格破碎，難以建立遠端連線產品所需的專業與安全感；
                </div>
              </div>

              <div className="mt-1 w-full flex flex-row">
                <div>2.</div>
                <div className="pl-4">
                  其次是產品核心價值傳遞斷層，原官網未能有效強調與提煉產品的核心特色，且產品說明僅為純文字敘述、缺乏示意圖與操作影片，
                  導致潛在客戶難以在短時間內理解其技術優勢並建立心智模型；
                </div>
              </div>

              <div className="mt-1 w-full flex flex-row">
                <div>3.</div>
                <div className="pl-4">
                  最後則是整體瀏覽體驗過於生硬，
                  網站缺乏動態互動反饋，缺少引導用戶探索的視覺拉力，因而大幅降低了產品的吸引力與整體的轉換契機。
                </div>
              </div>
            </div>
          </div>
        </div>

       {/* 改變的項目 & 介面 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4">改變的項目 ＆ 介面展示</p>

            <div className="w-full flex flex-col gap-8">
              {[
                {
                  title: "UI 設計規範",
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_demo_present.mov",
                  media: "/SOSI/SOSI_design.mp4",
                  painTitle: "缺乏系統化規範與視覺層次",
                  painDetails: [
                    "原網站缺乏系統化的 UI 設計規範，整體視覺風格不一致，難以建立專業的品牌形象",
                    "介面設計版面較多破版的區塊和留白"
                  ],
                  solution: "改變整體 UI、定義顏色（品牌形象）",
                  details: [
                    "更新 CSS 和各 component 樣式，並新增動態",
                    "新增動態網格背景",
                    "整體介面重新整理排版",
                  ],
                },
                {
                  title: "產品特色與說明",
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_demo_present.mov",
                  media: "/SOSI/SOSI_demo.mov",
                  painTitle: "視覺導引不足與缺乏轉換入口",
                  painDetails: [
                    "原首頁以靜態 Swiper banner 為 Hero 區塊主視覺，缺乏操作示範影片，使用者難以快速理解產品功能",
                    "輪播文字資訊容易被使用者忽略",
                    "VDI、PAM 等核心功能模組未獨立呈現",
                    "五大模組卡片設計薄弱，視覺層次不足",
                    "網站無專屬聯絡頁，導致潛在客戶轉化率較低"
                  ],
                  solution: "加入操作影片及關鍵功能強調",
                  details: [
                    "新增全版 Hero 區塊，右側加入仿瀏覽器視窗的影片展示區與滾動淡入動畫，取代原 Swiper banner",
                    "新增 VDI、PAM 功能模組區塊，並新增實際介面操作影片展示",
                    "重新設計五大核心模組卡片，以圖像化的方式強調文字重點",
                    "新增獨立 /contact 頁面，並在全站共用 footer 加入 CTA",
                  ],
                },
                {
                  title: "動態與互動",
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_animation_present.mov",
                  media: "/SOSI/SOSI_animation.mov",
                  painTitle: "互動體驗生硬且缺乏視覺誘因",
                  painDetails: [
                    "整體網站缺乏視覺動態與互動反饋：導覽列缺乏動態",
                    "數據統計區的數字直接顯示，無動態遞增效果",
                    "合作夥伴 logo 靜態排列，缺乏流動感",
                    "手機版選單展開無過渡動畫，整體體驗生硬，缺少引導用戶持續探索的視覺誘因"
                  ],
                  solution: "動態背景、載入動畫及按鈕動態",
                  details: [
                    "導覽列新增向下捲動自動收合、向上重新展開行為，且「產品功能」下拉選單加入 hover 展開動畫與 chevron 箭頭旋轉",
                    "數據統計區數字加入滾動觸發遞增動畫（count-up on scroll）",
                    "合作夥伴 logo 加入無限向左捲動跑馬燈動畫",
                    "手機版選單新增 slide 展開動畫",
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  {/* 編號 + 標題 */}
                  <p className="font-bold text-[#00437B] text-xl mb-3">{i + 1}. {item.title}</p>
                  
                  {/* 痛點行：媒左文右 7:3 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaType === "image" ? (
                      <Image src={item.mediaPresent} alt={`痛點${i + 1}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[i * 2] = el)} // ✅ 修正：改為 i * 2
                        src={item.mediaPresent}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full flex flex-col gap-2">
                      <p><span className="font-bold">痛點：</span>{item.painTitle}</p>
                      <ul className="mt-1 space-y-1 text-sm">
                        {item.painDetails.map((pd, k) => (
                          <li key={k} className="pl-[1em] [text-indent:-1em]">・{pd}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 解決方案行：媒左文右 7:3 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "image" ? (
                      <Image src={item.media} alt={`解決方案${i + 1}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[i * 2 + 1] = el)} // ✅ 修正：改為 i * 2 + 1
                        src={item.media}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full flex flex-col gap-2">
                      <p><span className="font-bold">解決方案：</span>{item.solution}</p>
                      <ul className="mt-1 space-y-1 text-sm">
                        {item.details.map((d, j) => (
                          <li key={j} className="pl-[1em] [text-indent:-1em]">・{d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 技術 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4">技術</p>

            <div className="flex flex-col gap-6 text-[#00437B]">

              {/* 動畫與互動 */}
              <div>
                <p className="font-semibold mb-2">動畫與互動（Animations & Interactions）</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">捲動淡入與位移動態（Fade-in Animation）</span>：使用 <code>IntersectionObserver</code> 偵測元素進入視埠，動態觸發 CSS 位移與淡入過渡效果</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">數字平滑遞增特效（Count-up Animation）</span>：透過 <code>requestAnimationFrame</code> 搭配 ease-out cubic 緩動函數，實現數字從 0 動態平滑遞增至目標值</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">影片自動播放與互斥機制（Smart Video Player）</span>：使用 <code>IntersectionObserver</code> 自動控制影片離屏暫停/進屏播放；並透過模組級狀態實作多影片播放互斥（同一時間僅播一支）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">動態網格背景（Dynamic Shape Grid）</span>：建置動態網格動畫模組，套用於 Hero 與 CTA 區塊提升視覺豐富度</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">無縫跑馬燈動畫（Infinite Marquee）</span>：使用 CSS <code>@keyframes</code> 結合雙倍內容節點，實現高流暢度的無限循環動態</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">手機選單折疊過渡（Smooth Accordion Transition）</span>：利用 CSS <code>max-height</code> 屬性過渡，解決動態高度展開/收合時的動畫卡頓問題</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">電腦版下拉選單特效（Dropdown Hover Effect）</span>：以 <code>visibility: hidden</code> 替代 <code>display: none</code> 保留佈局空間，結合 <code>opacity</code> 與 <code>scale</code> 打造流暢的懸浮過渡</li>
                </ul>
              </div>

              {/* 導覽列 */}
              <div>
                <p className="font-semibold mb-2">導覽列（Navigation Header）</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">智慧捲動隱藏/顯示（Scroll-aware Header）</span>：監聽捲動方向與位移，自動觸發 <code>translateY</code> 平滑隱藏與顯示，提升閱讀體驗（僅於桌面端啟用）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">響應式抽屜選單（Mobile Drawer & Submenu）</span>：控制手機版選單開關、Icon 狀態切換與多層級子選單手風琴式展開（結合 Chevron 旋轉動畫）</li>
                </ul>
              </div>

              {/* 樣式系統 */}
              <div>
                <p className="font-semibold mb-2">樣式系統（Design & Style System）</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Tailwind CSS v4 Design Tokens</span>：在 <code>@theme</code> 區塊定義全站色彩變數（如 <code>--color-primary-dark-blue</code>），嚴格落實設計規範並移除硬編碼色碼</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">全站共用樣式封裝</span>：抽象化共用類別（如 <code>section-heading</code>、<code>tag-gradient</code>、<code>btn-primary</code>、<code>marquee-track</code> 等），提升程式碼復用率與維護性</li>
                </ul>
              </div>

              {/* 其他技術實作 */}
              <div>
                <p className="font-semibold mb-2">其他技術實作（Core Infrastructure）</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">高效能 viewport 偵測（Intersection Observer API）</span>：全面替代傳統 <code>scroll</code> 事件監聽器，消除視窗捲動時的效能瓶頸與重繪（Reflow/Repaint），無需手動計算位置</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">多國語言國際化（i18n Architecture）</span>：建置結構化語系架構(i18n)，支援繁體中文（zh-TW）、英文（en）與日文（ja）語言切換</li>
                </ul>
              </div>

            </div>
          </div>
        </div>


        {/* 相關連結 */}
        <div className="w-full mt-8 flex">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5">相關連結：</p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://drive.google.com/drive/folders/1ZffKMY-wDAleWFtjSolXduefrbgd0JhU?usp=sharing", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              前往舊官網
            </button>
            <button
              onClick={() => window.open("https://www.sosi.com.tw", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              前往新官網（現有官網）
            </button>
          </div>
        </div>


      </div>


    </div>
  );
}
