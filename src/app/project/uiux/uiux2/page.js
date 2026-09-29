'use client';

import { TranslatedText, useLanguage } from "@/component/LanguageProvider";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/uiux2_cover.png";
import uiux_IA from "@/app/image/uiux2_IA.png";
import uiux_flow1_1 from  "@/app/image/uiux2_flow1-01.png";
import uiux_flow1_2 from  "@/app/image/uiux2_flow1-02.png";
import uiux_flow1_3 from  "@/app/image/uiux2_flow1-03.png";
import uiux_flow1_4 from  "@/app/image/uiux2_flow1-04.png";
import uiux_flow1_5 from  "@/app/image/uiux2_flow1-05.png";

import uiux_flow2_1 from  "@/app/image/uiux2_flow2-01.png";
import uiux_flow2_2 from  "@/app/image/uiux2_flow2-02.png";
import uiux_flow2_3 from  "@/app/image/uiux2_flow2-03.png";

import uiux_flow3_1 from  "@/app/image/uiux2_flow3-01.png";
import uiux_flow3_2 from  "@/app/image/uiux2_flow3-02.png";
import uiux_flow3_3 from  "@/app/image/uiux2_flow3-03.png";

import uiux_flow4_1 from  "@/app/image/uiux2_flow4-01.png";
import uiux_flow4_2 from  "@/app/image/uiux2_flow4-02.png";
import uiux_flow4_3 from  "@/app/image/uiux2_flow4-03.png";
import uiux_flow4_4 from  "@/app/image/uiux2_flow4-04.png";


export default function AE() {
  const { t } = useLanguage();


  const router = useRouter();

  const flow1 = [
    { src: uiux_flow1_1, caption: t("content.project_uiux_uiux2.1TheHomepageListsRecentFilmsBeside") },
    { src: uiux_flow1_2, caption: t("content.project_uiux_uiux2.2SelectingAFilmImageOpensIts") },
    { src: uiux_flow1_3, caption: t("content.project_uiux_uiux2.3RatingsAndAllReviewsAppearBelow") },
    { src: uiux_flow1_4, caption: t("content.project_uiux_uiux2.4SelectAReviewToOpenIts") },
    { src: uiux_flow1_5, caption: t("content.project_uiux_uiux2.5ReturnToTheMoviePageTo") },
  ];
  
  const flow2 = [
    { src: uiux_flow2_1, caption: t("content.project_uiux_uiux2.1OpenShowtimesFromAMovieS") },
    { src: uiux_flow2_2, caption: t("content.project_uiux_uiux2.2EnterAMovieTitleToSee") },
    { src: uiux_flow2_3, caption: t("content.project_uiux_uiux2.3FilterByMovieLocationDateTime") },
  ];
  
  const flow3 = [
    { src: uiux_flow3_1, caption: t("content.project_uiux_uiux2.1TheExplorePagePresentsMovieNews") },
    { src: uiux_flow3_2, caption: t("content.project_uiux_uiux2.2SelectAnArticleToReadThe") },
    { src: uiux_flow3_3, caption: t("content.project_uiux_uiux2.3ReturnToExploreToCreateYour") },
  ];

  const flow4 = [
    { src: uiux_flow4_1, caption: t("content.project_uiux_uiux2.1TheProfilePageContainsSavedFilms") },
    { src: uiux_flow4_2, caption: t("content.project_uiux_uiux2.2ViewSavedFilms") },
    { src: uiux_flow4_3, caption: t("content.project_uiux_uiux2.3ViewSavedReviews") },
    { src: uiux_flow4_4, caption: t("content.project_uiux_uiux2.4EditPersonalInformation") }
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [index3, setIndex3] = useState(0);
  const [index4, setIndex4] = useState(0);

  const [touchStart1, setTouchStart1] = useState(0);
  const [touchStart2, setTouchStart2] = useState(0);
  const [touchStart3, setTouchStart3] = useState(0);
  const [touchStart4, setTouchStart4] = useState(0);
  

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
              <TranslatedText messageKey="actions.back" />
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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">MORE{`\n`} - your movie review App</h1>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.projects.aUiDesignForAOneStop2" /></p>
            <p className="text-[#00437B] font-bold mt-2"><TranslatedText messageKey="content.project_PM_PM3.typeUiDesign" /></p>
          </div>
        </div>

        {/* 文字範圍1 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.backgroundAndMotivation" /></p>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux2.thisOneStopMovieAppPrioritizesReviews" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux2.theGoalIsAnIntegratedReviewAnd" /></p>
          </div>
        </div>

         {/* 文字範圍5 */}
         <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.interfaceDesignHighlights" /></p>
            <div className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux2.deepBlueAndBrightYellowEvokeCinema" /></div>
          </div>
        </div>


        {/* 文字範圍4 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.informationArchitecture" /></p>
            <div className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux2.theSystemIsOrganizedIntoFiveMain" /><div className="p-3 pl-5">
                <li><TranslatedText messageKey="content.project_uiux_uiux2.homeCurrentReleasesAndPopularReviewSummaries" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux2.movieDetailsSynopsisCastCategoriesAwardsTrailers" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux2.showtimesAndBookingCinemaSchedulesTimesAnd" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux2.exploreMovieNewsAndGeneralDiscussionsFor" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux2.profileSavedFilmsAndReviewsReviewHistory" /></li>
              </div>  
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

            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.userFlows" /></p>

            {/* 訂票流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5">

              <p className="text-[#00437B] text-xl font-bold p-5"><TranslatedText messageKey="content.project_uiux_uiux2.browseMovieReviewsAndInformation" /></p>


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
                    className="h-auto sm:h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-full sm:w-[40vh] text-[#00437B] text-center whitespace-pre-line">{flow1[index1].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index1 < 4 && (
                  <button
                  onClick={() => next(setIndex1, flow1.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index1 == 4 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
        
            </div>




            {/* 查景點流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5"><TranslatedText messageKey="content.project_uiux_uiux2.findShowtimes" /></p>


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
                    className="h-auto sm:h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-full sm:w-[40vh] text-[#00437B] text-center">{flow2[index2].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index2 < 2 && (
                  <button
                  onClick={() => next(setIndex2, flow2.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index2 == 2 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>



            {/* 排行程流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5"><TranslatedText messageKey="content.project_uiux_uiux2.readMovieNews" /></p>


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
                    className="h-auto sm:h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-full sm:w-[40vh] text-[#00437B] text-center">{flow3[index3].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index3 < 2 && (
                  <button
                  onClick={() => next(setIndex3, flow3.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index3 == 2 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>


            {/* 排行程流程 */}
            <div className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5">

              <p className="text-[#00437B] text-xl font-bold p-5"><TranslatedText messageKey="content.project_uiux_uiux2.viewYourProfile" /></p>


              <div
                className="w-full flex justify-between items-center relative overflow-hidden"
                onTouchStart={(e) => touchStart(e, setTouchStart4)}
                onTouchEnd={(e) => touchEnd(e, touchStart4, setIndex4, flow4.length)}
              >
                
                {/* 左箭頭 */}
                {index4 > 0 && (
                  <button
                  onClick={() => prev(setIndex4, flow4.length)}
                  className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowLeft size={24} />
                </button>
                )}

                {/* 空白左箭頭 */}
                {index4 == 0 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                {/* 圖片與文字 */}
                <div className="flex flex-col lg:flex-row gap-2 items-center transition-all duration-300">
                  <Image
                    src={flow4[index4].src}
                    alt=""
                    className="h-auto sm:h-[80vh] rounded-xl w-[40vh]"
                  />
                  <p className="w-full sm:w-[40vh] text-[#00437B] text-center">{flow4[index4].caption}</p>
                </div>

                {/* 右箭頭 */}
                {index4 < 3 && (
                  <button
                  onClick={() => next(setIndex4, flow4.length)}
                  className="flex text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] transition cursor-pointer"
                >
                  <FaArrowRight size={24} />
                </button>
                )}

                {/* 空白右箭頭 */}
                {index4 == 3 && (
                  <div className="w-[24px] h-[24px] p-2"></div>
                )}

                
              </div>
            </div>


          </div>
        </div>
          
        <div className="w-full mt-8 flex">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5"><TranslatedText messageKey="content.project_uiux_uiux1.relatedLinks" /></p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              FIGMA
            </button>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1VqpiCXR5OnZcc8JrxULW4jHKLybofG4o/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.demo" />
            </button>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/11xeP2-bsMOWkhCrbHaETEMr7vn6MCAiU/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.poster" />
            </button>
          </div>
        </div>

        

      </div>
 

    </div>
  );
}
