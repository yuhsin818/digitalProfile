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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">SOSI 官網 UI 優化</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              本專案為 SOSI 官網的 UI 全站更新案。SOSI 是 5xruby 旗下的遠端連線產品，原有官網存在 UI 無設計規範、產品特色未被強調、缺乏動態互動等核心痛點。
              {`\n`}我主導識別痛點、規劃改版策略，並實際參與前端實作，從品牌形象色彩定義到 Stimulus controller 動畫開發，完成一次覆蓋全站的 UI 升級——包含全新 Hero 區塊、操作影片展示、數字遞增動畫、合作夥伴跑馬燈、獨立聯絡頁，以及完整的多語系支援。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：網頁</p>
          </div>
        </div>

        {/* 痛點 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">原網站痛點</p>
            <div className="text-[#00437B] p-3 pl-5 space-y-2">
              經由前期的產品盤點，SOSI 原官網在使用者體驗（UX）與品牌傳達上面臨四項核心缺陷：首先是品牌視覺一致性缺乏（Visual Inconsistency），
              由於 UI 缺乏系統化的設計規範（Design System），導致整體介面風格破碎，難以建立遠端連線產品所需的專業與安全感；
              其次是產品核心價值傳遞斷層（Value Proposition Gap），原官網未能有效強調與提煉產品的核心特色，且產品說明流於表面、不夠直觀，
              導致潛在客戶難以在短時間內理解其技術優勢並建立心智模型（Mental Model）；最後則是整體瀏覽體驗過於生硬（Lack of Engagement），
              網站缺乏動態反饋與微互動（Micro-interactions），缺少引導用戶探索的視覺拉力，因而大幅降低了產品的吸引力與整體的轉換契機。
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
                  mediaType: "image",
                  mediaPresent: sosiDesignPresent,
                  media: sosiDesign,
                  pain: "原網站缺乏系統化的 UI 設計規範，整體視覺風格不一致，難以建立專業的品牌形象。導覽列無捲動行為反饋，「產品功能」下拉選單缺乏展開動畫；手機版選單以 checkbox trick 實作，存在漏色問題；網站亦無多語系支援，無法觸及國際用戶。",
                  solution: "改變整體 UI、定義顏色（品牌形象）",
                  details: [
                    "導覽列新增向下捲動自動收合、向上重新展開行為",
                    "「產品功能」下拉選單加入 hover 展開動畫與 chevron 箭頭旋轉",
                    "手機版選單改為 Stimulus controller 控制，修復 checkbox trick 漏色問題",
                    "所有新增內容補齊 i18n 翻譯（zh-TW、en、ja）",
                  ],
                },
                {
                  title: "產品特色與說明",
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_demo_present.mov",
                  media: "/SOSI/SOSI_demo.mov",
                  pain: "原首頁以靜態 Swiper banner 為主視覺，缺乏操作示範影片，使用者難以直觀理解產品功能。VDI、PAM 等核心功能模組未獨立呈現；五大模組卡片設計薄弱，視覺層次不足；網站亦無專屬聯絡頁，文章列表與客戶頁排版雜亂，整體難以有效傳遞產品核心價值。",
                  solution: "加入操作影片及關鍵功能強調",
                  details: [
                    "新增全版 Hero 區塊，右側加入仿瀏覽器視窗的影片展示區與滾動淡入動畫，取代原 Swiper banner",
                    "新增 VDI、PAM 功能模組區塊，影片以 IntersectionObserver 自動播放、多影片互斥",
                    "重新設計五大核心模組卡片",
                    "新增獨立 /contact 頁面；文章列表頁重新整理排版；客戶頁內容與排版調整",
                  ],
                },
                {
                  title: "動態與互動",
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_animation_present.mov",
                  media: "/SOSI/SOSI_animation.mov",
                  pain: "整體網站缺乏視覺動態與互動反饋：CTA 區塊背景靜態，吸引力不足；數據統計區的數字直接顯示，無動態遞增效果；合作夥伴 logo 靜態排列，缺乏流動感；手機版選單展開無過渡動畫，整體體驗生硬，缺少引導用戶持續探索的視覺誘因。",
                  solution: "動態背景、載入動畫及按鈕動態",
                  details: [
                    "CTA 背景改為動態網格動畫（shape-grid），新增至首頁、產品頁、文章內頁",
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
                        ref={(el) => (videoRefs.current[(i - 1) * 2] = el)}
                        src={item.mediaPresent}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">痛點：</span><br />{item.pain}</p>
                    </div>
                  </div>
                  {/* 解決方案行：媒左文右 7:3 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "image" ? (
                      <Image src={item.media} alt={`解決方案${i + 1}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[(i - 1) * 2 + 1] = el)}
                        src={item.media}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full flex flex-col gap-2">
                      <p><span className="font-bold">解決方案：</span><br />{item.solution}</p>
                      <ul className="mt-1 space-y-1 text-sm">
                        {item.details.map((d, j) => <li key={j} className="pl-[1em] [text-indent:-1em]">・{d}</li>)}
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
                <p className="font-semibold mb-2">動畫與互動</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Stimulus Controller — <code>fade-in</code></span>：使用 IntersectionObserver 偵測元素進入畫面，觸發後加上 CSS class 執行淡入 + 上移過渡動畫</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Stimulus Controller — <code>count-up</code></span>：使用 IntersectionObserver 觸發，透過 <code>requestAnimationFrame</code> 搭配 ease-out cubic 緩動函數，將數字從 0 動態遞增至目標值</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Stimulus Controller — <code>video-intersect</code></span>：使用 IntersectionObserver 偵測影片是否進入畫面，自動播放或暫停；使用 module-level registry 實現多影片互斥播放</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Stimulus Controller — <code>shape-grid</code></span>：動態網格背景動畫，套用於 Hero 區塊與 CTA 區塊</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">CSS marquee 動畫</span>：使用 <code>@keyframes</code> + <code>translateX(-50%)</code> 搭配兩份相同內容達成無縫無限捲動效果</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">CSS <code>max-height</code> 過渡動畫</span>：手機版選單展開／收合，利用 <code>max-height: 0</code> → <code>max-height: 480px</code> 的過渡實現 slide 動畫</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">CSS <code>opacity + visibility + scale</code> 過渡動畫</span>：電腦版 dropdown hover 動畫，以 <code>invisible</code>（保留空間但不可見）取代 <code>hidden</code>，使 CSS transition 得以正常運作</li>
                </ul>
              </div>

              {/* 導覽列 */}
              <div>
                <p className="font-semibold mb-2">導覽列</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Stimulus Controller — <code>navbar-scroll</code></span>：監聽 <code>scroll</code> 事件，比較前後捲動位置決定加入或移除 <code>-translate-y-full</code> class，配合 <code>transition-transform</code> 實現平滑收合，僅在桌面裝置（<code>window.innerWidth &gt;= 768</code>）啟用</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Stimulus Controller — <code>navbar-mobile</code></span>：控制手機版選單開關（toggle <code>is-open</code> class）、icon 切換，以及「產品功能」子選單手風琴展開（toggle <code>hidden</code> class + chevron 旋轉）</li>
                </ul>
              </div>

              {/* 樣式系統 */}
              <div>
                <p className="font-semibold mb-2">樣式系統</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Tailwind CSS v4 design token</span>：在 <code>@theme</code> 區塊定義自訂色彩變數（<code>--color-secondary-dark-blue</code>、<code>--color-primary-dark-blue</code> 等），頁面統一使用 utility class 取代硬編碼色碼</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">共用 CSS class</span>：新增 <code>fade-in-scroll</code>、<code>section-heading</code>、<code>tag-gradient</code>、<code>btn-primary</code>、<code>btn-secondary</code>、<code>link-arrow-hover</code>、<code>bg-module-gradient</code>、<code>mobile-menu-panel</code>、<code>marquee-track</code> 等共用樣式</li>
                </ul>
              </div>

              {/* 其他 */}
              <div>
                <p className="font-semibold mb-2">其他</p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">IntersectionObserver API</span>：用於 fade-in、count-up、video-intersect 三個 controller，取代 scroll event listener，效能更佳且不需手動計算元素位置</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Rails i18n（Mobility）</span>：所有新增文字內容皆透過 <code>t()</code> helper 管理，支援 zh-TW、en、ja 三種語系</li>
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
              onClick={() => window.open("https://www.sosi.com.tw", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              前往現有官網
            </button>
            <button
              onClick={() => window.open("http://441-review-ui-update-bjop01.sosi.5xruby.dev/", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              前往新版本官網
            </button>
          </div>
        </div>


      </div>


    </div>
  );
}
