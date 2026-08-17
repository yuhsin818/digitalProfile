'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import cover from "@/app/image/5xruby_web.png";
import IA_present from "@/app/image/5xruby/5xruby_IA_present.png";
import IA from "@/app/image/5xruby/5xruby_IA.png";
import banner_present from "@/app/image/5xruby/5xruby_banner_present.png";
import banner from "@/app/image/5xruby/5xruby_banner.png";
import hero_present from "@/app/image/5xruby/5xruby_hero_present.png";
import hero from "@/app/image/5xruby/5xruby_hero.png";
import service_present from "@/app/image/5xruby/5xruby_service_present.png";
import service from "@/app/image/5xruby/5xruby_service.png";
import dev_present from "@/app/image/5xruby/5xruby_dev_present.png";
import dev from "@/app/image/5xruby/5xruby_dev.png";

export default function Web4() {
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
            <Image src={cover} alt="5xruby 官網優化與動態重構" className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">5xruby 官網全面翻新與動態優化</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              本專案旨在將公司官網進行全方位的改版與體驗重構。面對原有網站資訊層級不清晰、缺少互動體驗與動態效果，以及無法完整傳遞核心技術（Ruby on Rails）與服務價值等痛點，我擔任主導角色，帶領網站從首頁視覺、導覽列結構、全站動態特效（包含 3D 等軸測網格與 GSAP 滾動動畫）到後台管理系統進行全面翻新。
              {`\n`}為了高效率完成前台視覺重構與複雜的動態互動效果，我採取了「設計與技術雙軌並行」策略，運用現代化前端動態技術（GSAP、Lenis、Canvas 2D API）與生成式 AI 工具（Claude Code）進行程式碼協作，成功打造兼具技術深度與流暢體驗的全新數位門面。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：網頁開發 / UI/UX 設計 / 互動動態設計</p>
          </div>
        </div>

        {/* 專案背景 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">專案背景</p>
            <div className="text-[#00437B]">
              本次改版不單是微調，而是將網站首頁進行「全面重設計」，並套用大量動態互動。內容涵蓋全站導覽列與頁尾架構重組、全新 Hero 3D 與滾動動畫、動態案例卡片堆疊、新服務與企業頁面建置（軟體開發顧問、加入我們）、全站 Banner 組件重構，以及後台管理系統（Carousels、Articles、Consultation 等）與表單驗證機制優化。
            </div>
          </div>
        </div>

        {/* 事前研究 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">事前研究</p>
            <div className="text-[#00437B] p-3 pl-5 space-y-2">
              <ul className="space-y-2">
                <li>1. 團隊與利害關係人訪談（老闆、PM、客戶）：釐清品牌定位、商業目標與服務價值傳達需求。</li>
                <li>2. 競品與互動體驗分析：研究技術型企業官網之視覺呈現，決定導入 3D 積木與等軸測網格（Isometric Grid）風格提升科技感與品質。</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 原網站痛點 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">原網站痛點</p>
            <div className="text-[#00437B] p-3 pl-5 whitespace-pre-line">
              經由前期的研究與分析，原官網在使用者體驗（UX）、視覺表現與資訊架構上面臨多項痛點：{`\n`}
              在<strong>視覺傳達與層級</strong>上，首頁視覺較為平淡且缺少互動感，無法快速吸引訪客注意；字體與區塊層級不夠明確，缺乏提升品牌品質與現代感的動態反饋（如滾動堆疊、視差捲動）。{`\n`}
              在<strong>資訊架構與版面配置</strong>上，原導覽列將連結平鋪，導致資訊過於分散；頁面間缺乏清晰的邏輯收納，且部分主力服務（如軟體開發顧問服務）缺少獨立專屬頁面說明。{`\n`}
              在<strong>內容與轉換策略</strong>上，未能有效聚焦核心服務優勢與成功案例，且缺乏流暢的諮詢引導（CTA），後台亦缺乏靈活設置動態案例與內容分頁的彈性。
            </div>
          </div>
        </div>

        {/* 解決方案 & 介面展示 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full gap-8">
            <p className="text-[#008BBF] text-2xl font-bold whitespace-pre-line mb-2">解決方案 ＆ 介面展示</p>

            {/* Section 1: 全站架構 */}
            <div className="flex flex-col gap-6">
              <h2 className="text-[#00437B] text-xl font-extrabold border-b-2 border-[#008BBF] pb-2">全站架構</h2>
              {[
                {
                  id: "01",
                  title: "資訊架構重組與頁面整合 (Information Architecture & Page Mapping)",
                  mediaType: "image",
                  mediaPresent: IA_present,
                  media: IA,
                  pain: "舊導覽列連結平鋪、層級混亂，手機版與桌機版切換體驗不佳；缺少獨立的主力服務頁面，既有頁面缺乏清晰的邏輯收納。",
                  solution: "【UX 價值】重新梳理全站 IA，將過度分散的連結收納整合為「服務、內容、關於我們」三大群組；新增專屬「軟體開發顧問」與「加入我們」頁面，並整合相似性質頁面；手機版改為純 JS 手風琴選單，大幅提升導導航效率與系統可擴充性。",
                },
                {
                  id: "02",
                  title: "互動式頁尾地圖 (Leaflet.js Map Integration)",
                  mediaType: "image",
                  mediaPresent: IA_present,
                  media: IA,
                  pain: "在導覽列絕對定位固定於頁首的前提下，舊頁尾依然重複呈現導覽列資訊，顯得冗餘。",
                  solution: "【UX 價值】整合 Leaflet.js 輕量化地圖套件，透過互動地圖呈現公司位置，提供「一鍵開啟 Google Maps」功能，將死板資訊轉化為質感與實用兼具的互動元件。",
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <Image src={item.mediaPresent} alt={`痛點 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">舊痛點：</span><br />{item.pain}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    <Image src={item.media} alt={`解決方案 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">解決方案：</span><br />{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 2: 首頁 */}
            <div className="flex flex-col gap-6 mt-4">
              <h2 className="text-[#00437B] text-xl font-extrabold border-b-2 border-[#008BBF] pb-2">首頁（Home Page）</h2>
              {[
                {
                  id: "03",
                  title: "全新 Hero 區塊與多語言動態視覺 (Brand Identity & Dynamic i18n)",
                  mediaType: "image",
                  mediaPresent: banner_present,
                  media: banner,
                  pain: "舊版首頁 Hero 區塊採輪播（Carousel），內容為標語 + 成功案例敘述，帶來多重體驗問題：\n1. 視覺過於平淡，無法第一時間傳遞專業技術品牌形象，且缺乏展現跨國/多語言服務能力的巧思。\n2. 根據 Nielsen Norman Group (NN/g) 研究指出，使用者普遍缺乏耐心主動點擊或閱讀輪播內容（Banner Blindness）。\n3. 對接案軟體公司而言，比起單方面案例敘述，直接呈現服務過的知名品牌更具信任感。",
                  solution: "【UX 與視覺價值】\n1. 採用 Canvas 2D API 手刻等軸測網格與 GSAP 3D 積木進場動畫；Hero 大標題依當前語系切換，小標題則同步呈現另外兩種語言（如中文為主時，下方為英/日文），直覺傳達「多語言開發服務」之優勢。\n2. 取消自動輪播，改為「強大標語」+「多語言副標題」+「品牌特色互動動畫」聚焦視覺。\n3. 將服務品牌與案例移至 Hero 正下方，以卡片化呈現重要標竿案例。",
                },
                {
                  id: "04",
                  title: "案例卡片區塊 (GSAP Scroll Stack & Dynamic Data)",
                  mediaType: "image",
                  mediaPresent: hero_present,
                  media: hero,
                  pain: "首頁成功案例原本以靜態卡片展示，圖文重疊導致資訊模糊且未強調服務品牌價值。原本放於頁面最下方，無法吸引訪客停留，缺乏視覺震撼度與強大的背書效果。",
                  solution: "【UX 與技術價值】將案例移至 Hero 正下方，UI 上將品牌 Icon 放大增強信任度，並簡化文字保留重點與關鍵字。動態採用 GSAP + ScrollTrigger 打造平滑卡片滾動堆疊（Scroll Stack）視差體驗，搭配後台動態資料傳遞與安全路徑降級機制（Fallback Path）。",
                },
                {
                  id: "05",
                  title: "企業價值區塊 (Values Accordion)",
                  mediaType: "image",
                  mediaPresent: service_present,
                  media: service,
                  pain: "舊版理念區塊文字密度過高，排版密集導致視覺焦點分散，訪客閱讀意願低。",
                  solution: "【UX 與技術價值】結合與 Hero 區塊呼應之動態圖像，桌機版 Hover 時平滑展開卡片；手機版則取消 Hover 效果直接呈現展開後文字，兼顧視覺排版整潔與閱讀體驗。",
                },
                {
                  id: "06",
                  title: "服務項目視覺化與跳轉 (Service Cards & Direct Routing)",
                  mediaType: "image",
                  mediaPresent: dev_present,
                  media: dev,
                  pain: "舊版服務項目區塊僅以靜態文字搭配重複的圖形素材呈現，缺乏明確導引，且先前缺乏對應的專屬詳細介紹頁面。",
                  solution: "【UX 價值】全面改版為高品質情境圖背景的服務小卡，提升視覺層級；卡片具備互動點擊反饋，點擊後可直接跳轉至對應的服務詳細資訊頁面，顯著縮短導覽路徑。",
                },
                {
                  id: "07",
                  title: "服務產業類型視覺化 (Serviced Industries & SVG Graphics)",
                  mediaType: "image",
                  mediaPresent: service_present,
                  media: service,
                  pain: "原網站未清晰列出曾服務過的產業領域，訪客難以快速評估團隊是否具備該領域的開發經驗與領域知識。",
                  solution: "【UX 與商業價值】新增「服務過的產業類型」專屬區塊，搭配相關 SVG 向量圖示，以視覺化方式快速建立客戶信任感與專業領域背書。",
                },
                {
                  id: "08",
                  title: "轉化率導向的 CTA 與諮詢流程重構 (Conversion UX & Form Safety)",
                  mediaType: "image",
                  mediaPresent: dev_present,
                  media: dev,
                  pain: "雖已有全站共用的 CTA 區塊，但首頁底部的轉換入口不夠突出，無法充分激發訪客瀏覽後進行諮詢聯繫的行為。",
                  solution: "【UX 與商業價值】擴增首頁底部 CTA 區塊高度與視覺比重以增加停留時間，並加入真實團隊照片提升品牌親和力與信任感，以 Conversion Rate（轉換率）為核心導向設計。",
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <Image src={item.mediaPresent} alt={`痛點 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">舊痛點：</span><br /><span className="whitespace-pre-line">{item.pain}</span></p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    <Image src={item.media} alt={`解決方案 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">解決方案：</span><br /><span className="whitespace-pre-line">{item.solution}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 3: 其他頁面 */}
            <div className="flex flex-col gap-6 mt-4">
              <h2 className="text-[#00437B] text-xl font-extrabold border-b-2 border-[#008BBF] pb-2">其他頁面與系統優化</h2>
              {[
                {
                  id: "09",
                  title: "部落格頁 - 精選文章分頁與後台控制 (Featured Articles Tab)",
                  mediaType: "image",
                  mediaPresent: IA_present,
                  media: IA,
                  pain: "舊部落格文章僅能依時間單一排序，高價值或熱門文章容易被新文章淹沒，後台亦缺乏靈活推播機制。",
                  solution: "【UX 與技術價值】於部落格頁面新增「精選（Featured）」Tab，訪客進入頁面時能第一時間瀏覽重點文章；後台資料庫新增 featured 標記欄位，讓管理者可自由勾選精選文章並呈現在首頁與部落格主頁。",
                },
                {
                  id: "10",
                  title: "服務頁面與 Banner 元件全面重構 (Scalable Design System)",
                  mediaType: "image",
                  mediaPresent: dev_present,
                  media: dev,
                  pain: "舊 Banner 視覺樣式過時，且各子頁面組件規範不一，開發與維護成本高。",
                  solution: "【UI 與架構價值】Banner 全面模組化重構，支援白底 Canvas 網格動畫、動態副標題與多端自適應，配合首頁 Hero 區塊之全新風格，大幅提升設計系統擴充性。",
                },
                {
                  id: "11",
                  title: "全站多重動態與流暢捲動體驗 (Lenis Smooth Scroll)",
                  mediaType: "video",
                  mediaPresent: "/5xruby/5xruby_animation_present.mov",
                  media: "/5xruby/5xruby_animation.mov",
                  videoIndex: 0,
                  pain: "傳統網頁滾動體感生硬，缺乏現代高質感網站所具備的流暢動態反饋。",
                  solution: "【技術與 UX 價值】導入 Lenis 實現全站平滑捲動，結合數字 Count-up 動態、視差捲動（Parallax）與 Quote Wipe 逐字揭露動畫，打造行雲流水般的閱讀體驗。",
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaType === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[item.videoIndex * 2] = el)}
                        src={item.mediaPresent}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.mediaPresent} alt={`痛點 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">舊痛點：</span><br />{item.pain}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[item.videoIndex * 2 + 1] = el)}
                        src={item.media}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.media} alt={`解決方案 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">解決方案：</span><br />{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* 技術實作細節 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4">技術實作細節</p>

            <div className="flex flex-col gap-6 text-[#00437B]">

              {/* 導覽列與全站組件 */}
              <div>
                <p className="font-semibold mb-2">導覽列與全站組件（Nav / Footer / Shared）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・導覽列桌機版改為下拉選單（<code>opacity</code> + <code>translateY</code> 展開動畫），響應式斷點調整為 <code>xl</code>（1280px）；手機版純 JS 無套件 toggle 手風琴</li>
                  <li className="pl-[1em] [text-indent:-1em]">・頁尾整合 Leaflet.js 地圖套件，套用自訂 SVG Pin 並支援點擊開啟 Google Maps</li>
                  <li className="pl-[1em] [text-indent:-1em]">・撰寫全站共用樣式：<code>section-heading</code>、<code>section-subtitle</code>，以及 <code>quote-wipe-line</code> 逐字揭露特效</li>
                </ul>
              </div>

              {/* 首頁與動態互動 */}
              <div>
                <p className="font-semibold mb-2">首頁與動態互動（Home & Animations）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>等軸測網格（Isometric Grid）</strong>：使用 Canvas 2D API 與 <code>destination-in</code> 合成模式手刻動畫，取代 CSS <code>mask-image</code>，有效防止記憶體洩漏與效能瓶頸</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>GSAP + ScrollTrigger 滾動特效</strong>：實現 Carousel 卡片滾動堆疊、Hero/Vision 3D 積木動畫、服務區塊視差捲動與底部 CTA 滾動放大效果</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>Lenis 平滑捲動</strong>：整合全站 smooth scroll，讓 GSAP 滾動觸發更加順暢</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>手風琴卡片（Accordion）</strong>：採用純 JS 動態讀取 <code>scrollHeight</code> 設定 <code>max-height</code> 像素值，解決 CSS <code>0 → none</code> 無法 transition 的限制</li>
                </ul>
              </div>

              {/* 頁面建置與服務優化 */}
              <div>
                <p className="font-semibold mb-2">頁面建置與服務優化（Pages & Services）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>新增專屬頁面</strong>：建置 <code>/product_development</code>（軟體開發顧問）與 <code>/join-us</code>（加入我們）頁面</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>GitLab 服務頁面重構</strong>：字體與卡片圓角加大（<code>rounded-2xl</code>），重構 <code>_process_steps</code> 步驟 partial，優化行動端字級</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>文章頁面（Articles）</strong>：新增「精選文章」Tab，分離精選與一般文章的版型組件（<code>_article_featured.html.erb</code>）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>諮詢表單（Consultation）</strong>：組件化抽出 <code>_form</code> partial，並修正電子郵件確認通知邏輯</li>
                </ul>
              </div>

              {/* 後台管理系統優化 */}
              <div>
                <p className="font-semibold mb-2">後台管理系統優化（Admin System）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>Carousels 管理</strong>：支援多語系標題、描述、Tag、按鈕連結，並新增 Logo 高度設定與排序欄位</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>Articles 管理</strong>：資料庫新增 <code>featured</code> 欄位，支援精選文章標記</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>表單與驗證優化</strong>：建立 shared <code>_form_header</code> 統一顯示錯誤訊息，加入 ActiveStorage Guard（<code>persisted?</code>），並補齊三語翻譯（ZH/EN/JA）</li>
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
              onClick={() => window.open("https://5xruby.com/", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              前往現有官網
            </button>
            <button
              onClick={() => window.open("https://fivexcom-review-ui-version-4dn3gu.w3.5xruby.dev", "_blank")}
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