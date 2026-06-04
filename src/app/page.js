'use client';

import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import HeartImg from "@/../public/heart.png";
import File1 from "@/app/image/pic1.jpg"
import File2 from "@/app/image/pic2.jpg"
import File3 from "@/app/image/pic3.jpg"
import File3_2 from "@/app/image/pic3-2.jpg"
import File4 from "@/app/image/pic4.jpg"
import PersonImage from "@/app/image/person.jpg";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Profile() {
  const [preview, setPreview] = useState(null);

  const [step, setStep] = useState(0);
  // step = 0 → 第一階段
  // step = 1 → 第二階段（file3 切換後）

  const handleImageClick = (img) => {
    setPreview(img);
    setStep(0); // 每次打開重置
  };

  const handlePreviewClick = () => {
    // 情況：如果當前是 file3 → 要切換成 file3-2
    if (preview === File3 && step === 0) {
      setPreview(File3_2);
      setStep(1);
      return;
    }

    // 其他情況（包含 file3 第二次點擊）→ 關閉
    setPreview(null);
  };

  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col overflow-y-auto">

      <div className="w-full h-auto p-2 sm:p-[60px] sm:pl-[100px] flex flex-col justify-center items-center pt-8">

        <div className="w-full flex justify-start">
          <h1 className="text-2xl font-bold mb-5 text-[#00437B]">My Profile</h1>
        </div>

        {/* 上方照片+自我介紹 */}
        <motion.div className="w-full h-auto flex flex-col lg:flex-row p-4 pt-8 sm:p-10 justify-center items-center mb-5 bg-[rgba(255,255,255,0.3)] rounded-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={PersonImage} alt={''} className="w-[30vh] h-[40vh] rounded-[6vh]" />
          <div className="text-[#00437B] lg:w-1/2 p-5 pl-8">
            <h1 className="text-3xl font-extrabold mb-6">潘玉心</h1>
            <p className="whitespace-pre-line">我畢業於政大心理學系，雙主修數位內容並輔系日文，具備心理學、設計思維與數位技術整合的跨領域背景。{`\n`}個性細心、做事認真且樂於溝通，曾參與多項互動與數位創作專案，累積從企劃發想到實際製作的完整經驗。{`\n`}心理學訓練使我能從使用者行為與情緒出發，結合使用者經驗設計、網頁開發與互動裝置技術，規劃清楚且符合使用者需求的互動體驗。期望持續深化技術與設計能力，創造兼具美感與實用性的作品！</p>
          </div>
        </motion.div>

        <motion.div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 學歷 */}
          <div className="w-full  h-auto bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B]">

            <p className="font-bold text-2xl mb-5">學歷</p>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">師範大學附屬高級中學</p>
                <p className="pl-1 text-[#AAD2E4] font-light text-base">2016 - 2019</p>
              </div>
            </div>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">國立政治大學心理學系｜雙主修數位內容｜輔系日文系</p>
                <p className="pl-1 text-[#AAD2E4] font-light text-base">2020 - 2025</p>

                <div className="p-2 flex flex-col gap-2">
                  <p className="font-bold">相關課程</p>
                  <p>
                    <span className="font-semibold">心理系：</span>
                    心理及教育統計學、心理實驗法、心理測驗、知覺心理學、性格心理學、社會心理學、人類學習與認知
                  </p>
                  <p>
                    <span className="font-semibold">數位內容：</span>
                    人機互動設計、進階使用者經驗設計、人機介面、JavaScript 應用程式設計、WEB 程式設計、資料庫應用、互動裝置設計、設計思維、多媒體網路、專案實作
                  </p>
                  <p>
                    <span className="font-semibold">日文系：</span>
                    日語會話、日語演習、日語寫作、高級日語
                  </p>
                </div>

              </div>
            </div>

          </div>


          {/* 經歷 */}
          <div className="w-full bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B]">

            <p className="font-bold text-2xl mb-5">在校經歷</p>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">美宣 - 師大附中管樂｜政大交響｜政大心理之夜｜政大心理營</p>

                <div className="p-2 flex flex-col gap-2">
                  <p>文宣品製作、海報設計、周邊設計</p>
                </div>

              </div>
            </div>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">樂團長笛首席 - 靜心國中小管樂團 & 管弦樂團｜師大附中管樂社｜政大交響樂社</p>

                <div className="p-2 flex flex-col gap-2 ml-6">
                  <li>規劃聲部練習流程，提升團隊整體表現</li>
                  <li>透過教學與溝通協調不同程度的團員</li>
                  <li>累積團隊領導、溝通與教學經驗</li>
                </div>

              </div>
            </div>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">16th 政大數位內容畢業製作 - 技術</p>

                <div className="p-2 flex flex-col gap-2 ml-6">
                  <li>使用 p5.js + ml5.js BodyPix 完成人體剪影偵測、互動邏輯、動畫控制</li>
                  <li>建立 express server，串接使用者輸入資料與互動視覺呈現</li>
                  <li>實作自動化更新機制、體驗流程管理邏輯</li>
                </div>

              </div>
            </div>

          </div>

        </motion.div>

        {/* 工作經歷 */}
        <div className="w-full h-auto bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B] mt-5">

          <div className="grid grid-cols-1 2xl:grid-cols-3">
            <div className="col-span-2">
              <p className="font-bold text-2xl mb-5">工作經歷</p>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">飛捷材料有限公司 - 業務</p>

                  <div className="p-2 flex flex-col gap-2">
                    <p>半導體相關製程知識、客戶問題排解、材料訂購</p>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">五倍紅寶石軟體開發股份有限公司 - PM實習</p>

                  <div className="p-2 flex flex-col gap-2 whitespace-pre-line">
                    <p>
                      1. 溝通、整理客戶需求{`\n`}
                      2. 根據客戶需求與工程師協調實作方式{`\n`}
                      3. 專案排程，指派實作{`\n`}
                      4. 功能測試與回報{`\n`}
                      相關專案內容見作品集
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

        </div>



        {/* 獎項與證書 */}
        <div className="w-full h-auto bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B] mt-5">

          <div className="grid grid-cols-1 2xl:grid-cols-3">
            <div className="col-span-2">
              <p className="font-bold text-2xl mb-5">獎項與證書</p>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">6 個學期書卷獎（系排5%）</p>

                  <div className="p-2 flex flex-col gap-2">
                    <p>110-1 系排第一名、110-2 系排第一名、111-1 系排第三名、111-2 系排第一名、112-1 系排第一名、112-2 系排第二名、畢業排名第一名</p>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">日檢 N1</p>

                  <div className="p-2 flex flex-col gap-2">
                    <p>114年通過，總分177（滿分180）</p>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">指考英文頂標</p>

                  <div className="p-2 flex flex-col gap-2">
                    <p>大學英文免修資格</p>
                  </div>

                </div>
              </div>
            </div>

            {/* 小圖區域 */}
            <div className="flex flex-wrap gap-2">
              {[File1, File2, File3, File4].map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt=""
                  className="w-[20vh] h-[30vh] rounded-[3vh] cursor-pointer transform transition duration-300 hover:scale-105"
                  onClick={() => handleImageClick(img)}
                />
              ))}
            </div>

            {/* 預覽區域 */}
            {preview && (
              <div
                className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center rounded-2xl"
                onClick={handlePreviewClick}
              >
                <Image
                  src={preview}
                  alt=""
                  className="w-auto max-h-[90vh] rounded-xl"
                />
              </div>
            )}




          </div>

        </div>




        {/* 技能 */}
        <div className="w-full h-auto bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B] mt-5">

          <div className="flex flex-col mb-8">

            <p className="font-bold text-2xl mb-5">網頁相關技能</p>

            <div className="w-full p-2">
              <p className="font-bold">UI/UX</p>
              <div className="ml-8 gap-2">
                <li>使用者研究（User Research）、深度訪談（Interview）、問卷調查（Questionnaire）、競品分析（Competitive Analysis）</li>
                <li>人物誌（Persona）、資訊架構（Information Architecture）、流程圖（Flow Chart）</li>
                <li>線框圖（Wireframe）、原型設計（Prototyping）、可用性測試（Usability Testing）</li>
              </div>
            </div>

            <div className="w-full p-2">
              <p className="font-bold">Front-end</p>
              <div className="ml-8 gap-2">
                <li>HTML / CSS</li>
                <li>Javascript（Next.js / p5.js）</li>
                <li>前後端 API 串接（Fetch / Express）</li>
              </div>
            </div>

          </div>

          <div className="flex flex-col">

            <p className="font-bold text-2xl mb-5">工具</p>

            <div className="p-2 mb-5">
              <p className="text-[#008BBF] font-bold mb-2">軟體</p>
              <div className="flex flex-wrap gap-2 p-3">
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Figma</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">PS</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">AE</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Procreate</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">SPSS</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Unity</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Max/Msp</button>
              </div>
            </div>

            <div className="p-2">
              <p className="text-[#008BBF] font-bold mb-2">程式語言</p>
              <div className="flex flex-wrap gap-2 p-3">
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Javascipt</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">C#</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Python</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Matlab</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">MySQL</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">R</button>
              </div>
            </div>

          </div>

        </div>

        <div className="w-full mt-8 flex mb-4">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5">相關文件：</p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1AYvoho_JH2YwVppHce7JWkCjRTF8kQsC/view?usp=sharing", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              書面履歷
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}
