'use client';

import { TranslatedText } from "@/component/LanguageProvider";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/PM3.jpg";



export default function PM() {


  const router = useRouter();


  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">

      {/* 返回按鈕 */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=PM`)} // ✅ 返回指定分類
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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line">SketchUp Plugin</h1>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.projects.iPlannedAModelingSoftwarePluginDespite" /></p>
            <p className="text-[#00437B] font-bold mt-2"><TranslatedText messageKey="content.project_PM_PM3.typeUiDesign" /></p>
          </div>
        </div>





        {/* 核心任務 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_PM_PM1.coreResponsibilities" /></p>
            <div className="text-[#00437B] p-3 pl-5 space-y-3">
              <ul>
                <li><TranslatedText messageKey="content.project_PM_PM3.1OrganizeCustomerRequirements" /></li>
                <li><TranslatedText messageKey="content.project_PM_PM3.2InvestigateTheDevelopmentEnvironmentAndComparable" /></li>
                <li><TranslatedText messageKey="content.project_PM_PM3.3PlanAFeasibleArchitectureWithEngineers" /></li>
                <li><TranslatedText messageKey="content.project_PM_PM3.4WriteThePrdAndAlignTechnical" /></li>
              </ul>
            </div>
          </div>
        </div>

        {/* 具體執行項目範例 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_PM_PM1.examplesOfImplementationWork" /></p>
            <div className="text-[#00437B]"><TranslatedText messageKey="content.project_PM_PM3.thePluginItselfIsWrittenInRuby" /></div>
          </div>
        </div>

        {/* AI 協作 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_PM_PM1.aiAssistedCollaboration" /></p>
            <div className="text-[#00437B] p-3 pl-5 space-y-3">
              <ul>
                <li><TranslatedText messageKey="content.project_PM_PM3.1OrganizeRequirementsAndEvaluateTheTeam" /></li>
                <li><TranslatedText messageKey="content.project_PM_PM3.2UseAiEstimatesAsAReference" /></li>
              </ul>
            </div>
          </div>
        </div>




      </div>


    </div>
  );
}
