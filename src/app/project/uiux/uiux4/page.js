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
            <Image src={cover} alt="5xruby 官網優化" className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">5xruby 官網優化</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              本專案旨在「不變動既有 UI 設計系統」的限制下，全面優化公司官網的內容與使用者體驗。面對原有網站資訊架構紊亂、品牌核心技術（Ruby on Rails）未受強調，以及首頁視覺與文案無法精準傳遞服務價值等核心痛點，我擔任主導角色，透過用戶與利害關係人訪談（老闆、PM、客戶）及競品分析，重新梳理網站的資訊架構、版面層級、文案策略，並補齊核心產品頁面與動態互動效果。
              {`\n`}為了在有限的時程內實現敏捷開發，我採取了「設計與技術雙軌並行」的策略：在快速規劃完高保真線框圖（Wireframe）後，直接導入生成式 AI 工具（Claude Code）進行程式碼協作，高效率完成前台介面變更與動態特效部署。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：網頁</p>
          </div>
        </div>

        {/* 專案背景 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">專案背景</p>
            <div className="text-[#00437B]">
              在不改變原有 UI 設計系統的狀況下進行官網內容的優化，更改的項目包含網站資訊架構、首頁的 banner、資訊呈現優先級、文字內容、版面、新增產品頁，以及新增動態。網站撰寫上，因為時間有限，故在規劃完 wireframe 後，直接使用 Claude Code 協作，進行網站介面變更。
            </div>
          </div>
        </div>


        {/* 方法 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">事前研究</p>
            <div className="text-[#00437B] p-3 pl-5 space-y-2">
              <ul className="space-y-2">
                <li>1. 訪談（老闆、PM、客戶）</li>
                <li>2. 競品分析</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 痛點 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2">原網站痛點</p>
            <div className="text-[#00437B] p-3 pl-5 whitespace-pre-line">
              經由前期的研究與分析，原官網在使用者體驗（UX）與資訊架構上面臨多項須解決的缺陷。{`\n`}
              在<strong>視覺傳達與層級</strong>上，
              首頁 Banner 區塊過窄且未使用產品圖片，導致無法直觀傳遞核心服務，其內文雖欲呈現成功案例，卻因敘述不夠明確而失去背書效果，
              加上整體字樣層級紊亂，未能將重要資訊放大顯示，且缺乏能提升精緻度的動態反饋。{`\n`}
              為此，改版策略將透過「文字內容更新」優化文案的精準度，並透過「關鍵 UI 變更與動態效果加入」，
              重新形塑視覺層級，以利聚焦核心資訊的呈現。{`\n`}
              在<strong>資訊架構與版面配置</strong>上，網站結構存在資料層級不流暢、相同類型頁面缺乏整合的問題，且首頁底部存在成功案例資訊重複的狀況，
              而服務項目區塊則因視覺過於分割，導致用戶難以判斷資訊關聯性。{`\n`}
              針對此現象，改版大方向將進行「資訊結構調整與清晰分類」，
              收斂冗餘資訊並重組導覽列，同時「新增核心產品服務之必要頁面」以補齊內容缺口。{`\n`}
              最後在<strong>內容策略</strong>上，
              將全面強調公司以 Ruby on Rails 開發的代表性品牌特色，從根本上扭轉既有網站的體驗斷層，
              打造兼具技術深度與流暢體驗的全新數位門面。
            </div>
          </div>
        </div>

        {/* 解決方案 & 介面 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4">解決方案 ＆ 介面展示</p>

            <div className="w-full flex flex-col gap-8">
              {[
                {
                  title: "導覽列",
                  mediaType: "image",
                  mediaPresent: IA_present,
                  media: IA,
                  pain: "網站結構資料層級問題，相同類型的頁面需整合",
                  solution: "重新規劃導覽列項目",
                },
                {
                  title: "首頁 - Banner",
                  mediaType: "image",
                  mediaPresent: banner_present,
                  media: banner,
                  pain: "首頁 banner 區塊過窄、圖片非使用產品圖片故看不出來提供的服務，且內文是想寫成功案例，但因為敘述不夠明確看不出來",
                  solution: "首頁 banner 區塊大字寫我們的優勢，小字舉出成功案例，改為圖片背景，強調提供的服務",
                },
                {
                  title: "首頁 - 關於我們",
                  mediaType: "image",
                  mediaPresent: hero_present,
                  media: hero,
                  pain: "首頁字樣層級，沒有把重要資訊才應該放大顯示",
                  solution: "首頁第一個「關於我們」的標題區塊改為圖片，強調品牌形象及提供的服務價值，並更新副標題字樣，強調目前公司主要技術方針",
                },
                {
                  title: "首頁 - 服務項目",
                  mediaType: "image",
                  mediaPresent: service_present,
                  media: service,
                  pain: "首頁服務項目區塊過於分割，難以判斷同一區塊資訊內容",
                  solution: "將服務區塊換為同一個區域背景，減少認知負擔，且將服務項目改為 button 可以跳轉到對應服務的頁面",
                },
                {
                  title: "產品服務頁",
                  mediaType: "image",
                  mediaPresent: dev_present,
                  media: dev,
                  pain: "提供的主要服務卻無相關頁面介紹",
                  solution: "新增產品服務頁，撰寫應用的技術以及開發流程等",
                },
                {
                  title: "動態效果",
                  mediaType: "video",
                  mediaPresent: "/5xruby/5xruby_animation_present.mov",
                  media: "/5xruby/5xruby_animation.mov",
                  videoIndex: 0,
                  pain: "缺乏動態",
                  solution: "增加固定元件動態、按鈕 hover 動態、載入動態等",
                },
              ].map((item, i) => (
                <div key={i} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  {/* 編號 + 標題 */}
                  <p className="font-bold text-[#00437B] text-xl mb-3">{i + 1}. {item.title}</p>
                  {/* 痛點行：媒左文右 7:3 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaType === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[item.videoIndex * 2] = el)}
                        src={item.mediaPresent}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.mediaPresent} alt={`痛點${i + 1}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold">痛點：</span><br />{item.pain}</p>
                    </div>
                  </div>
                  {/* 解決方案行：媒左文右 7:3 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "video" ? (
                      <video
                        ref={(el) => (videoRefs.current[item.videoIndex * 2 + 1] = el)}
                        src={item.media}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.media} alt={`解決方案${i + 1}`} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
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

        {/* 技術 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4">技術</p>

            <div className="flex flex-col gap-6 text-[#00437B]">

              {/* 全站 */}
              <div>
                <p className="font-semibold mb-2">全站（導覽列 / 頁尾）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・導覽列新增「首頁」連結</li>
                  <li className="pl-[1em] [text-indent:-1em]">・「服務項目、內容中心、關於我們」下拉選單加入 chevron 箭頭 SVG，hover / 點擊時旋轉 180 度</li>
                  <li className="pl-[1em] [text-indent:-1em]">・桌面版下拉選單改用 CSS <code>visibility</code> + <code>opacity</code> + <code>transform</code> transition 實作展開／收合動畫，取代原本 <code>hidden group-hover:block</code> 方式</li>
                  <li className="pl-[1em] [text-indent:-1em]">・手機版下拉選單改用 inline <code>onclick</code> 切換 <code>hidden</code> class 與箭頭旋轉</li>
                  <li className="pl-[1em] [text-indent:-1em]">・頁尾新增「服務項目」連結</li>
                  <li className="pl-[1em] [text-indent:-1em]">・頁尾所有導覽連結加上 <code>hover:text-theme-5xruby transition-colors</code> 效果</li>
                </ul>
              </div>

              {/* 首頁 */}
              <div>
                <p className="font-semibold mb-2">首頁（Home）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・服務項目區塊移除灰色底色，改為與下方紅寶石區塊共用同一張背景圖，文字改為白色</li>
                  <li className="pl-[1em] [text-indent:-1em]">・紅寶石圖示加上 hover 放大（<code>transform: scale(1.1)</code>）效果，並用絕對定位 <code>&lt;a&gt;</code> 覆蓋整個區塊使其可點擊，分別連到軟體開發頁、GitLab 服務頁、SOSI 網站</li>
                  <li className="pl-[1em] [text-indent:-1em]">・修復 hover 放大與原有淡入動畫的 <code>transition</code> 衝突，合併為 <code>transition: transform 0.3s ease, opacity 1s</code></li>
                  <li className="pl-[1em] [text-indent:-1em]">・移除「以最對的方式實現你的 idea」引言區塊</li>
                  <li className="pl-[1em] [text-indent:-1em]">・移除服務項目文字說明段落</li>
                  <li className="pl-[1em] [text-indent:-1em]">・移除「服務流程」區塊</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<code>good_at</code> 區塊白色背景改為 50% 透明（<code>bg-white/50</code>）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・哲學（philosophy）區塊背景圖加上 <code>background-attachment: fixed</code> 視差效果</li>
                </ul>
              </div>

              {/* 軟體開發頁 */}
              <div>
                <p className="font-semibold mb-2">軟體開發頁（/product-development）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・服務流程區塊背景圖加上 <code>background-attachment: fixed</code> 視差效果</li>
                  <li className="pl-[1em] [text-indent:-1em]">・服務介紹小卡 hover 效果：移除紅色底線動畫，改為卡片出現陰影（<code>box-shadow</code>），transition 0.5s</li>
                  <li className="pl-[1em] [text-indent:-1em]">・修復陰影 transition 與 <code>introducing-transitions.css</code> 的 <code>transition: opacity</code> 互相覆蓋的問題，以較高 specificity 的選擇器（<code>.service-intro-card[data-introducing-transition]</code>）同時保留兩者</li>
                  <li className="pl-[1em] [text-indent:-1em]">・更新第一張服務介紹卡片的中英文標題與說明文字</li>
                </ul>
              </div>

              {/* GitLab 服務頁 */}
              <div>
                <p className="font-semibold mb-2">GitLab 服務頁（/gitlab-service）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・Banner 背景圖改為與軟體開發頁相同的 <code>service_bg.jpg</code></li>
                  <li className="pl-[1em] [text-indent:-1em]">・移除 Banner <code>::before</code> 的 SVG 三角形格子疊加效果</li>
                  <li className="pl-[1em] [text-indent:-1em]">・服務說明副標題套用 <code>_back_black_quote</code> partial</li>
                  <li className="pl-[1em] [text-indent:-1em]">・服務流程區塊改用 <code>_process_steps</code> partial，並在 view 層轉換 locale 資料欄位（<code>content</code> → <code>description</code>）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・移除頁面底部自訂 CTA 區塊，改用頁尾共用的 <code>move_your_business</code> banner</li>
                  <li className="pl-[1em] [text-indent:-1em]">・GitLab 服務頁 icon SVG 顏色從 GitLab 橘色（<code>#FC6D26</code>）改為 theme-5xruby 紅色（<code>#d32c25</code>）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・更新 <code>gitlab_service.zh.yml</code> / <code>gitlab_service.en.yml</code> 的 <code>services.subtitle</code> 格式為 <code>sm/md/lg</code> 陣列，以符合 <code>_back_black_quote</code> partial 需求</li>
                </ul>
              </div>

              {/* 我們的願景頁 */}
              <div>
                <p className="font-semibold mb-2">我們的願景頁（/our-vision）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・下方圖片背景區塊加上 <code>background-attachment: fixed</code> 視差效果</li>
                </ul>
              </div>

              {/* 加入我們頁 */}
              <div>
                <p className="font-semibold mb-2">加入我們頁（/join-us）</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・「立即應徵」按鈕改為連結至 104.com.tw 職缺頁面</li>
                </ul>
              </div>

              {/* 其他技術調整 */}
              <div>
                <p className="font-semibold mb-2">其他技術調整</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・修正 RuboCop 違規：<code>BTN_PRIMARY_CLASS_NAMES</code> 常數過長改為陣列 join、<code>services_controller</code> 改用 i18n lazy lookup（<code>t(&apos;.title&apos;)</code>）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<code>.gitignore</code> 新增 <code>.yarn/</code> 與 <code>.yarnrc.yml</code>，並以 <code>git rm --cached</code> 移除已追蹤的本機設定檔</li>
                  <li className="pl-[1em] [text-indent:-1em]">・更新技術 logo 圖片（ansible、aws、js、vue、python、ionic、Azure）</li>
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
              onClick={() => window.open("http://fivexcom-review-homepage-u-3w8x99.w3.5xruby.dev/", "_blank")}
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
