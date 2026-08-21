'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import cover from "@/app/image/5xruby_web.png";
import IA_present from "@/app/image/5xruby/5xruby_IA_present.png";
import IA from "@/app/image/5xruby/5xruby_IA.png";
import hero_present from "@/app/image/5xruby/5xruby_hero_present.png";
import vision_present from "@/app/image/5xruby/5xruby_vision_present.png";
import testimonial_present from "@/app/image/5xruby/5xruby_testimonial_present.png";
import blog_present from "@/app/image/5xruby/5xruby_blog_present.png";
import hero from "@/app/image/5xruby/5xruby_banner.png";
import banner_present from "@/app/image/5xruby/5xruby_banner_present.png";
import banner from "@/app/image/5xruby/5xruby_banner.png";
import customer from "@/app/image/5xruby/5xruby_customer.png";
import footer_present from "@/app/image/5xruby/5xruby_footer_present.png";
import footer from "@/app/image/5xruby/5xruby_footer.png";
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
              本專案旨在將公司官網進行全方位的改版與體驗重構。
              {`\n`}面對原有網站資訊層級不清晰、缺少互動體驗與動態效果，以及無法完整傳遞核心技術（Ruby on Rails）與服務價值等痛點，
              我負責從設計到實作的角色，將網站從首頁視覺、導覽列結構、全站動態特效到後台管理系統進行全面翻新。
              {`\n`}為了高效率完成前台視覺重構與複雜的動態互動效果，我在了解改版需求後，採取了「設計與技術雙軌並行」策略，在初步規劃完 UI 方向後，運用現代化前端動態技術（GSAP、Lenis、Canvas 2D API）與 Claude Code 進行程式碼協作，
              並定期與老闆及資深設計師進行 review，成功打造兼具技術深度與流暢體驗的新版官網。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：網頁前後端 + UI/UX</p>
          </div>
        </div>

        {/* 專案背景 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">專案背景</p>
            <div className="text-[#00437B] whitespace-pre-line ">
              本次改版目的為網站首頁的「介面重新設計」、「新增動態互動」，與加強網頁 conversation rate，以在改版完成後優化 SEO，增加國內外合作諮詢客戶。
              {`\n`}內容涵蓋資訊架構調整、導覽列調整、頁尾資訊重新規劃，以及首頁的 Hero 區塊動畫、動態案例卡片堆疊、CTA 區塊優化等，並包含新頁面建置（軟體開發服務頁、徵才頁）、全站 Banner 組件重構，以及後台管理系統相關功能欄位調整等。
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
                <li>2. 競品與互動體驗分析：在參考多個軟體、設計等類似性質公司的官網視覺呈現後，除了資訊架構及資訊內容層級的重構之外，UI 的部分我決定以「動態」為改版重點之一，導入 3D 積木與等軸測網格（Isometric Grid）動態，在提升科技感同時保留品牌特色。</li>
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
              經由前期的研究與分析，原官網在使用者體驗（UX）、視覺表現與資訊架構上面臨以下幾個大方向的問題：{`\n`}
              在<strong>視覺傳達與層級</strong>上，首頁視覺較為平淡且缺少互動感，無法快速吸引訪客注意；字體與區塊層級不夠明確，缺乏提升品牌品質與現代感的動態反饋。{`\n`}
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
              <h2 className="text-[#00437B] text-xl font-extrabold pb-2">全站架構</h2>
              {[
                {
                  id: "01",
                  title: "資訊架構重組與頁面整合",
                  mediaType: "image",
                  mediaPresent: IA_present,
                  media: IA,
                  pain: "舊資訊架構（IA）缺乏明確層級，且導覽列連結平鋪、分散；作為以「軟體開發」為核心業務的公司，網站設有諮詢與產品介紹頁，卻缺少主力「軟體開發服務」的獨立專頁，不符合訪客的使用者心智模型。",
                  solution: "重新梳理全站 IA，將過度分散的連結收納整合為「服務項目、內容中心、關於我們」三大群組，整合相似性質頁面；並於「服務項目」tab 底下新增「軟體開發」頁。",
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
              <h2 className="text-[#00437B] text-xl font-extrabold pb-2">首頁（Home Page）</h2>
              {[
                {
                  id: "02",
                  title: "全新 Hero 區塊與多語言動態視覺",
                  mediaType: "video", // 改為 video
                  mediaPresent: hero_present,
                  media: "/5xruby/5xruby_hero.mp4", // 改為 public 裡面的影片路徑
                  pain: "舊版首頁 Hero 區塊原為 Carousel，內容為標語 + 成功案例敘述，具以下問題：\n 1.使用者普遍缺乏耐心主動點擊或閱讀輪播內容（Banner Blindness）。\n 2. 文字內容資訊較多，副標題呈現方式看不出為案例敘述。\n 3.視覺過於平淡，無法第一時間傳遞專業技術品牌形象。",
                  solution: "1.取消 Carousal，改為標語+具品牌印象之動態，並在大標題之下透過多語言的副標題強調國際合作能力。\n 2.將成功案例移到hero區塊正下方，UI上將品牌icon放大，透過知名品牌加強客戶信任度，並將小卡的文字部分只保留重點資訊及案例關鍵字。\n 3.偵測滑鼠滾動，利用積木動態堆疊為紅寶石之動態，強調品牌形象與執行技術力。",
                },
                {
                  id: "03",
                  title: "案例卡片區塊",
                  mediaType: "video",
                  mediaPresent: testimonial_present,
                  media: "/5xruby/5xruby_testimonial.mp4",
                  pain: "首頁成功案例原以靜態卡片展示，置於頁面最下方，圖文重疊導致資訊模糊，且未強調服務的客戶品牌。",
                  solution: "將案例移至 Hero 正下方，UI 上將品牌 Icon 放大增強信任度，並簡化文字保留重點與關鍵字標籤。動態採用 GSAP + ScrollTrigger 打造平滑卡片滾動堆疊視差體驗，並搭配後台動態資料抓取，以隨時更新案例內容。",
                },
                {
                  id: "04",
                  title: "企業價值區塊",
                  mediaType: "video",
                  mediaPresent: vision_present,
                  media: "/5xruby/5xruby_vision.mp4",
                  pain: "舊版理念、介紹區塊文字密度過高，排版密集導致視覺焦點分散，訪客閱讀意願低。",
                  solution: "結合與 Hero 區塊呼應之動態圖像，旁邊呈現文字重點，電腦版 Hover 時平滑展開卡片內容；手機版則取消 Hover 效果直接呈現展開後文字，兼顧視覺排版整潔與閱讀體驗。",
                },
                {
                  id: "05",
                  title: "服務項目視覺化與跳轉",
                  mediaType: "video",
                  mediaPresent: service_present,
                  media: "/5xruby/5xruby_service.mp4",
                  pain: "舊版服務項目區塊僅以靜態文字搭配重複的圖形素材呈現，缺乏明確導引，且服務項目無對應服務頁面介紹之入口。",
                  solution: "全面改版為高品質情境圖背景的服務小卡，提升視覺層級；卡片具備互動點擊反饋，點擊後可直接跳轉至對應的服務詳細資訊頁面，顯著縮短導覽路徑。",
                },
                {
                  id: "06",
                  title: "服務產業類型",
                  mediaType: "image",
                  mediaPresent: service_present,
                  media: customer,
                  pain: "原網站未清晰列出曾服務過的產業領域，訪客難以快速評估團隊是否具備該領域的開發經驗與領域知識。",
                  solution: "新增「服務過的產業類型」專屬區塊，搭配相關圖示，以視覺化方式快速建立客戶信任感與專業領域背書。",
                },
                {
                  id: "07",
                  title: "轉化率導向的 CTA",
                  mediaType: "video",
                  mediaPresent: footer_present,
                  media:  "/5xruby/5xruby_CTA.mp4",
                  pain: "雖已有全站共用的 CTA 區塊，但首頁底部的轉換入口不夠突出，無法充分激發訪客瀏覽後進行諮詢聯繫的行為。",
                  solution: "擴增首頁底部 CTA 區塊高度與視覺比重以增加停留時間，並加入真實團隊照片提升品牌親和力與信任感，以 Conversion Rate 為核心導向設計。",
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>
                  
                  {/* 舊痛點展示區 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaType === "video" && item.mediaPresent?.endsWith?.('.mp4') ? (
                      <video
                        src={item.mediaPresent}
                        autoPlay loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.mediaPresent} alt={`痛點 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1">舊痛點：</p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.pain}
                      </div>
                    </div>
                  </div>

                  {/* 解決方案展示區 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "video" ? (
                      <video
                        src={item.media}
                        autoPlay loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.media} alt={`解決方案 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1">解決方案：</p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           {/* Section 3: 其他頁面 */}
            <div className="flex flex-col gap-6 mt-4">
              <h2 className="text-[#00437B] text-xl font-extrabold pb-2">其他頁面與系統優化</h2>
              {[
                {
                  id: "08",
                  title: "部落格頁 - 精選文章分頁與後台控制",
                  mediaPresentType: "image", // 痛點：圖片
                  mediaPresent: blog_present,
                  mediaType: "video",        // 解決方案：影片
                  media: "/5xruby/5xruby_blog.mp4",
                  videoIndex: 0,             // 補上 videoIndex: 0
                  pain: "舊部落格文章僅能依時間單一排序，高價值或熱門文章容易被新文章淹沒，後台亦缺乏靈活推播機制。",
                  solution: "於部落格頁面新增「精選（Featured）」Tab，訪客進入頁面時能第一時間瀏覽重點文章；後台資料庫新增 featured 標記欄位，讓管理者可自由勾選精選文章並呈現在首頁與部落格主頁。",
                },
                {
                  id: "09",
                  title: "Banner 元件重新設計",
                  mediaPresentType: "image",
                  mediaPresent: banner_present,
                  mediaType: "image",
                  media: banner,
                  pain: "舊 Banner 視覺樣式過時，且各子頁面組件規範不一。",
                  solution: "Banner 全面模組化重構，支援白底 Canvas 網格動畫、動態副標題與多端自適應，配合首頁 Hero 區塊之全新風格，大幅提升設計系統擴充性。",
                },
                {
                  id: "10",
                  title: "新增軟體開發頁",
                  mediaPresentType: "image", // 痛點：影片
                  mediaPresent: hero_present,
                  mediaType: "video",        // 解決方案：影片
                  media: "/5xruby/5xruby_dev.mp4",
                  videoIndex: 1,             // 改為 videoIndex: 1 (避免與 09 衝突)
                  pain: "作為以「軟體開發」為核心業務的公司，卻缺少主力「軟體開發服務」的獨立介紹頁。",
                  solution: "於「服務項目」tab 底下新增「軟體開發」頁，該頁面主要介紹軟體開發涵蓋服務細項、使用技術參考，以及直接在下方加入表單，最大化 conversation rate。",
                },
                {
                  id: "11",
                  title: "互動式頁尾地圖",
                  mediaType: "image",
                  mediaPresent: footer_present,
                  media: footer,
                  pain: "在導覽列絕對定位固定於螢幕上方的前提下，舊頁尾依然重複呈現導覽列資訊。",
                  solution: "刪除重複的導覽列資訊，將頁尾空間改為加入公司位置的「互動地圖」，利用 Leaflet.js 地圖套件，呈現公司位置，可移動、縮放，及連結到 Google Maps。透過強調公司實體位置，增加客戶信賴度。",
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>
                  
                  {/* 舊痛點展示區 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaPresentType === "video" ? (
                      <video
                        ref={(el) => {
                          if (el && typeof item.videoIndex === "number") {
                            videoRefs.current[item.videoIndex * 2] = el;
                          }
                        }}
                        src={item.mediaPresent}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.mediaPresent} alt={`痛點 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1">舊痛點：</p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.pain}
                      </div>
                    </div>
                  </div>

                  {/* 解決方案展示區 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "video" ? (
                      <video
                        ref={(el) => {
                          if (el && typeof item.videoIndex === "number") {
                            videoRefs.current[item.videoIndex * 2 + 1] = el;
                          }
                        }}
                        src={item.media}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.media} alt={`解決方案 ${item.id}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1">解決方案：</p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.solution}
                      </div>
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
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>GitLab 服務頁面重構</strong>：字體與卡片圓角加大（<code>rounded-2xl</code>），拆分流程步驟子組件（Process Steps Component），優化行動端字級與排版</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>文章頁面（Articles）</strong>：新增「精選文章」Tab，獨立切分精選與一般文章的卡片視圖組件（Featured Article Component）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>諮詢表單（Consultation）</strong>：將諮詢表單模組化抽出為獨立組件（Form Component），並修正電子郵件確認通知邏輯</li>
                </ul>
              </div>

              {/* 後台管理系統優化 */}
              <div>
                <p className="font-semibold mb-2">後台管理系統優化（Admin System）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>Carousels 管理</strong>：支援多語系標題、描述、Tag、按鈕連結，並新增 Logo 高度設定與排序欄位</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>Articles 管理</strong>：資料庫新增 <code>featured</code> 欄位，支援精選文章標記與狀態推播</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<strong>表單與驗證優化</strong>：建立通用表單標頭組件（Form Header Component）統一顯示錯誤訊息，加入圖片上傳狀態驗證機制（Upload Guard），並補齊三語系（ZH/EN/JA）多國語言支援</li>
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
              onClick={() => window.open("https://drive.google.com/file/d/1LZtGhBab3bHYvwgL9VWZmBTrWvS0JajV/view?usp=drive_link", "_blank")}
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