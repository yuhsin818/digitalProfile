'use client';

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import cover from "@/app/image/to-do.png";



export default function Web6() {
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
        { threshold: 0.5 }
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
          onClick={() => router.push(`/project?category=web`)}
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
            <Image src={cover} alt="任務管理系統" className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">任務管理系統</h1>
            <p className="text-[#00437B] whitespace-pre-line">
              這是一套以 Ruby on Rails 8 開發的任務管理 Web 應用程式，提供多使用者環境下的任務追蹤與管理功能。使用者需透過帳號登入後，才能在個人專屬的工作空間中建立、管理與追蹤自己的任務。系統同時設有管理員後台，讓管理員可以統一管理所有使用者帳號。
            </p>
            <p className="text-[#00437B] font-bold mt-2">類型：網頁</p>
          </div>
        </div>

        {/* 核心功能 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4">核心功能</p>

            <div className="w-full flex flex-col gap-8">
              {[
                {
                  title: "任務管理",
                  video: "/task/task_CRUD.mov",
                  details: [
                    "建立、檢視、編輯、刪除任務（CRUD）",
                    "每筆任務可設定標題、內容描述、開始時間、結束時間、優先度（高／普通／低）與狀態（待處理／進行中／已完成）",
                    "結束時間即將到來時，顯示警示提示（flash warning）",
                  ],
                },
                {
                  title: "任務篩選與排序",
                  video: "/task/task_sort.mov",
                  details: [
                    "依標題關鍵字搜尋（模糊比對）",
                    "依狀態、標籤篩選",
                    "依結束時間或優先度排序",
                    "任務列表支援分頁",
                  ],
                },
                {
                  title: "標籤系統",
                  video: "/task/task_tag.mov",
                  details: [
                    "每位使用者可自訂標籤",
                    "建立任務時可新增既有標籤或同時建立新標籤",
                    "同一使用者下的標籤名稱不可重複",
                  ],
                },
                {
                  title: "使用者帳號",
                  video: "/task/task_login.mov",
                  details: [
                    "使用者可自行註冊帳號（email + 密碼）",
                    "密碼以 bcrypt 加密儲存",
                    "登入、登出功能",
                    "每位使用者只能看到並操作自己的任務與標籤",
                  ],
                },
                {
                  title: "管理員後台",
                  video: "/task/task_admin.mov",
                  details: [
                    "管理員可在 /admin 後台檢視與管理所有使用者",
                    "系統中至少須保留一位管理員，無法將最後一位管理員刪除",
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-4">
                  <p className="font-bold text-[#00437B] text-xl">{item.title}</p>
                  <div className="flex flex-col gap-4">
                    <video
                      ref={(el) => (videoRefs.current[i] = el)}
                      src={item.video}
                      loop
                      muted
                      playsInline
                      className="rounded-[3vh] w-full"
                    />
                    <ul className="text-[#00437B] w-full space-y-2">
                      {item.details.map((d, j) => <li key={j} className="pl-[1em] [text-indent:-1em]">・{d}</li>)}
                    </ul>
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

            <div className="flex flex-col gap-5 text-[#00437B]">

              <div>
                <p className="font-semibold mb-2">後端</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Ruby on Rails 8</span>：主要後端框架，採 MVC 架構</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">PostgreSQL</span>：關聯式資料庫，用於儲存所有應用程式資料</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">bcrypt</span>：密碼加密，透過 <code>has_secure_password</code> 管理使用者認證</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Solid Queue / Solid Cache / Solid Cable</span>：以資料庫為底層的背景工作、快取與 WebSocket 解決方案，無需額外的 Redis 服務</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Pagy</span>：輕量級分頁套件</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">前端</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Hotwire（Turbo + Stimulus）</span>：實現無刷新頁面切換與互動行為，Modal 彈窗由 Stimulus Controller 控制</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Tailwind CSS</span>：Utility-first CSS 框架，負責全站樣式</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Importmap</span>：原生 ES Module 管理，不需打包工具（webpack / vite）</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">部署與基礎設施</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Kamal</span>：容器化部署工具，支援 Docker 部署至任意伺服器</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Puma</span>：應用程式伺服器</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Thruster</span>：HTTP 快取與壓縮層（搭配 Puma）</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2">測試與程式碼品質</p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">RSpec</span>：單元測試與整合測試框架</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Factory Bot + Faker</span>：測試資料產生</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Shoulda Matchers</span>：Model 驗證的測試斷言輔助</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Capybara + Selenium</span>：系統測試（End-to-End）</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Brakeman</span>：靜態安全性掃描</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Bundler Audit</span>：Gem 相依套件的已知漏洞檢查</li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">RuboCop</span>：程式碼風格檢查</li>
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
              onClick={() => window.open("https://task-management-system-rivq.onrender.com", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              前往作品
            </button>
          </div>
        </div>


      </div>


    </div>
  );
}
