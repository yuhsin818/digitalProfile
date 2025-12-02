'use client';

import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import HeartImg from "@/../public/heart.png";
import File1 from "@/app/image/HSNU.png"
import File2 from "@/app/image/NCCU.png"
import File3 from "@/app/image/certificate.png"
import File4 from "@/app/image/JLPT.png"
import PersonImage from "@/app/image/person.jpg";
import { useState } from "react";
import { motion } from "framer-motion";


export default function Profile(){
  const [preview, setPreview] = useState(null);

  return(
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col overflow-y-auto">

      <div className="w-full h-auto p-[60px] sm:pl-[100px] flex flex-col justify-center items-center pt-8">
      
      <div className="w-full flex justify-start">
        <h1 className="text-2xl font-bold mb-5 text-[#00437B]">My Profile</h1>
      </div>

        {/* 上方照片+自我介紹 */}
        <motion.div className="w-full h-auto flex flex-col lg:flex-row p-10 justify-center items-center mb-5 bg-[rgba(255,255,255,0.3)] rounded-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={PersonImage} alt={''} className="w-[30vh] h-[40vh] rounded-[6vh]" />
          <div className="text-[#00437B] lg:w-1/2 p-5 pl-8">
            <h1 className="text-3xl font-extrabold mb-6">潘玉心</h1>
            <p className="">我畢業於政大心理學系，雙主修數位內容、輔系日文，具備心理理解、設計思維與數位技術整合的跨領域背景。以使用者經驗設計為核心，結合網頁開發與數位互動裝置實作，擅長從使用者行為與情緒出發，規劃介面流程與互動體驗。曾參與多項互動與數位創作專案，負責技術整合、流程優化與系統實作，熟悉從企劃到實作的完整製作流程。期望能在 UI/UX 或前端相關職位中，持續深化技術能力，創造兼具美感與實用性的數位體驗。</p>
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
                <p className="text-[#AAD2E4] font-light text-base">2016 - 2019</p>
              </div>
            </div>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">國立政治大學心理學系 / 雙主修數位內容 / 輔系日文系</p>
                <p className="text-[#AAD2E4] font-light text-base">2020 - 2025</p>

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
            
            <p className="font-bold text-2xl mb-5">經歷</p>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">美宣-師大附中管樂/政大交響/政大心理之夜/政大心理營</p>

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
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">數位內容畢業製作-技術</p>

                <div className="p-2 flex flex-col gap-2">
                  <p className="whitespace-pre-line">使用 p5.js + ml5.js BodyPix 完成人體剪影偵測、互動邏輯、動畫控制
                    {`\n`}建立前後端串接流程（express server），串接使用者輸入資料與互動視覺呈現
                    {`\n`}與網頁端串接，實作自動化更新機制、體驗流程管理邏輯</p>
                </div>

              </div>
            </div>

          </div>

        </motion.div>



        {/* 獎項與證書 */}
        <div className="w-full h-auto bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B] mt-5">
            
            <div className="grid grid-cols-1 xl:grid-cols-3">
              <div className="col-span-2">
                <p className="font-bold text-2xl mb-5">獎項與證書</p>

                <div className="w-full flex flex-row gap-4 p-2">
                  {/* 左側圓形 */}
                  <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                  {/* 右側文字 */}
                  <div className="flex flex-col">
                    <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line">6 個學期書卷獎（系排5%）</p>

                    <div className="p-2 flex flex-col gap-2">
                      <p>110-1 系排第一名, 110-2 系排第一名, 111-1 系排第三名, 111-2 系排第一名, 112-1 系排第一名, 112-2 系排第二名</p>
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
              </div>

              <div className="flex flex-wrap gap-2">
                {[File1, File2, File3, File4].map((img, index) => (
                  <Image
                    key={index}
                    src={img}
                    alt=""
                    className="w-[20vh] h-[30vh] rounded-[3vh] cursor-pointer"
                    onClick={() => setPreview(img)}
                  />
                ))}
              </div>

              {preview && (
                <div
                  className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center rounded-2xl"
                  onClick={() => setPreview(null)}
                >
                  <Image
                    src={preview}
                    alt=""
                    className="max-w-[90vw] max-h-[90vh] rounded-xl"
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
                <li>使用者研究、人物誌（Persona）</li>
                <li>用戶旅程地圖、資訊架構、Wireframe</li>
                <li>原型設計（Figma）</li>
                <li>互動流程設計（Flowchart）</li>
              </div>
            </div>

            <div className="w-full p-2">
              <p className="font-bold">Front-end</p>
              <div className="ml-8 gap-2">
                <li>HTML / CSS / JavaScript</li>
                <li>React</li>
                <li>p5.js</li>
                <li>前後端 API 串接（Fetch / Express））</li>
              </div>
            </div>

          </div>

          <div className="flex flex-col">

            <p className="font-bold text-2xl mb-5">工具</p>

            <div className="p-2 mb-5">
              <p className="text-[#008BBF] font-bold mb-2">軟體</p>
              <div className="flex flex-wrap gap-2 p-3">
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Figma</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">PS</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">AE</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Procreate</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">SPSS</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Unity</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Max/Msp</button>
              </div>
            </div>

            <div className="p-2">
              <p className="text-[#008BBF] font-bold mb-2">程式語言</p>
              <div className="flex flex-wrap gap-2 p-3">
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Jvascipt</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">C#</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Python</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Matlab</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">MySQL</button>
                <button className="bg-[#D8E9F0] px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">R</button>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

// export default function About() {
//   return (
//     <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
//       <div className="w-full flex flex-col text-[#00437B] pt-8 px-20 rounded-bl-[4vw]">
//         <h1 className="text-2xl font-bold mb-1">
//           關於我
//         </h1>
//         <h3 className="mb-4">
//           我的學習歷程與各種證明
//         </h3>
//       </div>

    
//       <div className="w-full h-[150vh] sm:h-full">
//         <div className="w-full flex flex-col gap-5 p-[30px] rounded-tr-[4vw] lg:items-center">

//           <div className="flex w-full lg:justify-center flex-col lg:flex-row mt-6">
//             <div className="w-full lg:w-[50vh] pl-8 text-[#00437B] font-bold">
//               <div className="flex flex-col relative">
//                   {/* 垂直主線：整條線一次畫出 */}
//                   <div className="absolute left-[-17px] top-[38px] bottom-[38px] lg:bottom-[38px] w-[4px] bg-[linear-gradient(to_bottom,_#A9D2E4,_#32A2CA)] z-0"></div>

//                   {/* 第一個項目 */}
//                   <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
//                     <div className="w-[30px] h-[30px] rounded-full bg-[#A9D2E4] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">20xx 畢業於師大附中</div>
//                   </div>

//                   {/* 第二個項目 */}
//                   <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
//                     <div className="w-[30px] h-[30px] rounded-full bg-[#92C8DF] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">20xx 就讀於政治大學心理學系</div>
//                   </div>

//                   {/* 第三個項目 */}
//                   <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
//                     <div className="w-[30px] h-[30px] rounded-full bg-[#79BED9] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">20xx 輔系日本語文學系</div>
//                   </div>

//                   {/* 第四個項目 */}
//                   <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
//                     <div className="w-[30px] h-[30px] rounded-full bg-[#60B5D4] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">20xx 雙主修數位內容學位學程</div>
//                   </div>

//                   {/* 第五個項目 */}
//                   <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
//                     <div className="w-[30px] h-[30px] rounded-full bg-[#46ABCF] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">20xx 通過日檢Nx</div>
//                   </div>

//                   {/* 第六個項目 */}
//                   <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
//                     <div className="w-[30px] h-[30px] rounded-full bg-[#32A2CA] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">20xx 在xx公司擔任實習生</div>
//                   </div>
//                 </div>
//             </div>


//             <div className="w-full lg:w-[40vh] lg:h-[50vh] flex flex-col bg-[rgba(255,255,255,0.45)]  text-[#00437B] p-4 rounded-2xl">
//               <h2 className="font-bold">相關證明文件</h2>
//               <div className="h-[50vh] sm:h-[30vh] lg:h-[40vh] grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-2 gap-3 mt-4">
//               <div
//                 className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
//                 style={
//                   {
//                   backgroundImage: `url(${File1.src})`,
//                   backgroundSize: 'cover',
//                   backgroundPosition: 'center',
//                   }
//                 }
//               >
//                 <div className="w-full h-[30px] backdrop-blur-lg absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
//                   畢業證書
//                 </div>
//               </div>

//                 <div className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
//                   style={
//                     { backgroundImage: `url(${File2.src})`, 
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center' 
//                     }
//                   }
//                 >
//                   <div className="w-full h-[30px] backdrop-blur-lg 
//                   absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
//                     成績單
//                   </div>
//                 </div>

//                 <div className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
//                   style={
//                     { backgroundImage: `url(${File3.src})`, 
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center' }
//                   }
//                 >
//                   <div className="w-full h-[30px] backdrop-blur-lg 
//                   absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
//                     獎狀
//                   </div>
//                 </div>

//                 <div className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
//                   style={
//                     { backgroundImage: `url(${File4.src})`, 
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center' }
//                   }
                
//                 >
//                   <div className="w-full h-[30px] backdrop-blur-lg 
//                   absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
//                     檢定證書
//                   </div>
//                 </div>

//               </div>
//             </div>

//           </div>

          
//           <div className="w-full lg:w-[70vh] xl:w-[90vh] flex flex-col bg-[rgba(255,255,255,0.45)]  text-[#00437B] p-4 rounded-2xl mt-3">
//               <h2 className="font-bold">能力</h2>
//               <div className="pl-10 mt-5">
//                 {/* 第一個項目 */}
//                 <div className="flex items-center rounded-2xl py-3 pr-4 relative">
//                     <div className="w-[20px] h-[20px] rounded-full bg-[#A9D2E4] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">User Research</div>
//                   </div>

//                   {/* 第二個項目 */}
//                   <div className="flex items-center rounded-2xl py-3 pr-4 relative">
//                     <div className="w-[20px] h-[20px] rounded-full bg-[#92C8DF] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">Visual Design</div>
//                   </div>

//                   {/* 第三個項目 */}
//                   <div className="flex items-center rounded-2xl py-3 pr-4 relative">
//                     <div className="w-[20px] h-[20px] rounded-full bg-[#79BED9] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">Javascript</div>
//                   </div>

//                   {/* 第四個項目 */}
//                   <div className="flex items-center rounded-2xl py-3 pr-4 relative">
//                     <div className="w-[20px] h-[20px] rounded-full bg-[#60B5D4] z-10 absolute left-[-30px]"></div>
//                     <div className="ml-5">Digital Art</div>
//                   </div>
//               </div>
//           </div>
        
//         </div>
//       </div>
      


//     </div>
//   );
// }
