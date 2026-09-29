'use client';

import { TranslatedText, useLanguage } from "@/component/LanguageProvider";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import uiux_cover from "@/app/image/uiux3_cover.png";
import uiux_pic1 from "@/app/image/uiux3_pic1.png";
import uiux_pic2 from "@/app/image/uiux3_pic2.png";
import uiux_IA from "@/app/image/uiux3_IA.png";
import uiux_flow1_1 from  "@/app/image/uiux3_flow1_1.png";
import uiux_flow1_2 from  "@/app/image/uiux3_flow1_2.png";
import uiux_flow1_3 from  "@/app/image/uiux3_flow1_3.png";
import uiux_flow1_4 from  "@/app/image/uiux3_flow1_4.png";
import uiux_flow1_5 from  "@/app/image/uiux3_flow1_5.png";
import uiux_flow1_6 from  "@/app/image/uiux3_flow1_6.png";
import uiux_flow1_7 from  "@/app/image/uiux3_flow1_7.png";

import uiux_flow2_1 from  "@/app/image/uiux3_flow2_1.png";
import uiux_flow2_2 from  "@/app/image/uiux3_flow2_2.png";
import uiux_flow2_3 from  "@/app/image/uiux3_flow2_3.png";

import uiux_flow3_1 from  "@/app/image/uiux3_flow3_1.png";
import uiux_flow3_2 from  "@/app/image/uiux3_flow3_2.png";
import uiux_flow3_3 from  "@/app/image/uiux3_flow3_3.png";

import uiux_flow4_1 from  "@/app/image/uiux3_flow4_1.png";
import uiux_flow4_2 from  "@/app/image/uiux3_flow4_2.png";
import uiux_flow4_3 from  "@/app/image/uiux3_flow4_3.png";
import uiux_flow4_4 from  "@/app/image/uiux3_flow4_4.png";
import uiux_flow4_5 from  "@/app/image/uiux3_flow4_5.png";

import uiux_flow5_1 from  "@/app/image/uiux3_flow5_1.png";
import uiux_flow5_2 from  "@/app/image/uiux3_flow5_2.png";
import uiux_flow5_3 from  "@/app/image/uiux3_flow5_3.png";
import uiux_flow5_4 from  "@/app/image/uiux3_flow5_4.png";
import uiux_flow5_5 from  "@/app/image/uiux3_flow5_5.png";
import uiux_flow5_6 from  "@/app/image/uiux3_flow5_6.png";

import uiux_flow6_1 from  "@/app/image/uiux3_flow6_1.png";
import uiux_flow6_2 from  "@/app/image/uiux3_flow6_2.png";
import uiux_flow6_3 from  "@/app/image/uiux3_flow6_3.png";
import uiux_flow6_4 from  "@/app/image/uiux3_flow6_4.png";
import uiux_flow6_5 from  "@/app/image/uiux3_flow6_5.png";


export default function AE() {
  const { t } = useLanguage();


  const router = useRouter();

  const flows = [
    {
      title: t("content.project_uiux_uiux3.registration"),
      data: [
        { src: uiux_flow1_1, caption: t("content.project_uiux_uiux3.1SelectLogInOnTheHomepage") },
        { src: uiux_flow1_2, caption: t("content.project_uiux_uiux3.2EnterYourNationalIdNumberAnd") },
        { src: uiux_flow1_3, caption: t("content.project_uiux_uiux3.3AfterLoginViewTheStatusOf") },
        { src: uiux_flow1_4, caption: t("content.project_uiux_uiux3.4ReviewAvailableExaminationsInstructionsAndEligibility") },
        { src: uiux_flow1_5, caption: t("content.project_uiux_uiux3.5ConfirmPersonalInformationPrefilledFromThe") },
        { src: uiux_flow1_6, caption: t("content.project_uiux_uiux3.6UploadRequiredDocumentsAndConfirm") },
        { src: uiux_flow1_7, caption: t("content.project_uiux_uiux3.7AfterRegistrationReturnToTheExamination") },
      ]
    },
    {
      title: t("content.project_uiux_uiux3.browsePastExaminationPapers"),
      data: [
        { src: uiux_flow2_1, caption: t("content.project_uiux_uiux3.1SelectPreparationPastPapersInThe") },
        { src: uiux_flow2_2, caption: t("content.project_uiux_uiux3.2ViewPastPapersForRegisteredExaminations") },
        { src: uiux_flow2_3, caption: t("content.project_uiux_uiux3.3OpenAPaperOrSelectMultiple") }
      ]
    },
    {
      title: t("content.project_uiux_uiux3.viewAdmissionNotices"),
      data: [
        { src: uiux_flow3_1, caption: t("content.project_uiux_uiux3.1SelectExaminationInformationAdmissionNoticeIn") },
        { src: uiux_flow3_2, caption: t("content.project_uiux_uiux3.2SelectAnExaminationFromTheRegistered") },
        { src: uiux_flow3_3, caption: t("content.project_uiux_uiux3.3EnlargeOrDownloadTheElectronicAdmission") }
      ]
    },
    {
      title: t("content.project_uiux_uiux3.checkResults"),
      data: [
        { src: uiux_flow4_1, caption: t("content.project_uiux_uiux3.1SelectExaminationResultsScoreLookupIn") },
        { src: uiux_flow4_2, caption: t("content.project_uiux_uiux3.2SelectAnExaminationToViewPersonal") },
        { src: uiux_flow4_3, caption: t("content.project_uiux_uiux3.3ViewEnlargeOrDownloadPersonalScores") },
        { src: uiux_flow4_4, caption: t("content.project_uiux_uiux3.4ViewEnlargeOrDownloadTheQualification") },
        { src: uiux_flow4_5, caption: t("content.project_uiux_uiux3.5ViewEnlargeOrDownloadPublishedResults") }
      ]
    },
    {
      title: t("content.project_uiux_uiux3.rankPlacementPreferences"),
      data: [
        { src: uiux_flow5_1, caption: t("content.project_uiux_uiux3.1SelectPlacementPositionSearchPreferencesIn") },
        { src: uiux_flow5_2, caption: t("content.project_uiux_uiux3.2SearchAndFilterPositionsThenAdd") },
        { src: uiux_flow5_3, caption: t("content.project_uiux_uiux3.3AfterAddingAPositionItsPlus") },
        { src: uiux_flow5_4, caption: t("content.project_uiux_uiux3.4DragPositionsToChangeTheirRanking") },
        { src: uiux_flow5_5, caption: t("content.project_uiux_uiux3.5RemovingAPreferenceOpensAConfirmation") },
        { src: uiux_flow5_6, caption: t("content.project_uiux_uiux3.6AfterRemovalSelectSearchPositionsTo") }
      ]
    },
    {
      title: t("content.project_uiux_uiux3.applyToDeferPlacementEligibility"),
      data: [
        { src: uiux_flow6_1, caption: t("content.project_uiux_uiux3.1SelectPlacementEligibilityDeferralInThe") },
        { src: uiux_flow6_2, caption: t("content.project_uiux_uiux3.2ViewExaminationsYouHavePassedAnd") },
        { src: uiux_flow6_3, caption: t("content.project_uiux_uiux3.3ConfirmPersonalInformationPrefilledFromThe") },
        { src: uiux_flow6_4, caption: t("content.project_uiux_uiux3.4EnterTheReasonUploadSupportingDocuments") },
        { src: uiux_flow6_5, caption: t("content.project_uiux_uiux3.5SubmitTheApplicationAndWaitFor") }

      ]
    },
    
  ];

  
  const [indexes, setIndexes] = useState(
    flows.map(() => 0)
  );
  
  const [touchStarts, setTouchStarts] = useState(
    flows.map(() => 0)
  );

  
  const next = (flowIndex) => {
    setIndexes(prev =>
      prev.map((v, i) =>
        i === flowIndex ? (v + 1) % flows[i].data.length : v
      )
    );
  };
  
  const prev = (flowIndex) => {
    setIndexes(prev =>
      prev.map((v, i) =>
        i === flowIndex
          ? (v - 1 + flows[i].data.length) % flows[i].data.length
          : v
      )
    );
  };

  
  const touchStart = (e, flowIndex) => {
    const x = e.touches[0].clientX;
    setTouchStarts(prev =>
      prev.map((v, i) => (i === flowIndex ? x : v))
    );
  };
  
  const touchEnd = (e, flowIndex) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStarts[flowIndex] - touchEndX;
  
    if (diff > 50) next(flowIndex);
    if (diff < -50) prev(flowIndex);
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
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6"><TranslatedText messageKey="content.projects.nationalExaminationServicePlatform" /></h1>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux3.thisProjectProposesAnIntegratedOneStop" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux3.around300000PeopleTakeNationalExaminations" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux3.surveysAndInterviewsExploredCandidatesExperiencesAnd" /></p>
            <p className="text-[#00437B] font-bold mt-2"><TranslatedText messageKey="content.project_uiux_uiux1.typeUxResearchUiDesign" /></p>
          </div>
        </div>

        {/* 文字範圍1 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.backgroundAndMotivation" /></p>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux3.candidatesCompleteTheFollowingStagesWhenTaking" /></p>
            <Image src={uiux_pic1} alt={''} className="p-3 w-full lg:w-[100vh] h-auto rounded-[5vh]" />
            <div className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux3.existingInformationChannelsSystemsAndSiteStructures" /><div className="p-3 pl-5 space-y-3 mb-4">
                <li><TranslatedText messageKey="content.project_uiux_uiux3.fragmentedInformationDifferentAgenciesManageDifferentStages" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.complexInformationArchitectureExtensiveContentMakesRelevant" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.unequalAccessToInformationTutoringCentersTend" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.poorInterfaceExperienceDenseSmallTextMakes" /></li>
              </div><TranslatedText messageKey="content.project_uiux_uiux3.ourGoalsAreTo" /><div className="p-3 pl-5 space-y-3">
                <li><TranslatedText messageKey="content.project_uiux_uiux3.redesignServiceWorkflowsAroundPublicServicePrinciples" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.integrateExaminationResourcesIntoAOneStop" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.improveTheOverallUserAndServiceExperience" /></li>
              </div>

            </div>

            <Image src={uiux_pic2} alt={''} className="p-3 w-full h-auto rounded-[5vh]" />
          </div>
        </div>

        {/* 文字範圍2 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line  mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.targetUsers" /></p>
            <div className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux3.thePlatformServesNationalExaminationCandidatesAround" /></div>
          </div>
        </div>

        {/* 文字範圍3 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4"><TranslatedText messageKey="content.project_uiux_uiux1.initialResearch" /></p>
            <div className="text-[#00437B] whitespace-pre-line mb-2">
              <strong><TranslatedText messageKey="content.project_uiux_uiux1.1ResearchMethods" />{`\n`}</strong><TranslatedText messageKey="content.project_uiux_uiux3.alongsideBackgroundResearchOnExistingWebsitesAnd" />{`\n`}
              <div className="p-3 pl-5 space-y-3">
                <li><TranslatedText messageKey="content.project_uiux_uiux3.interviewsThreePreviousCandidatesParticipatedCoveringImmigration" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.onlineSurveyDistributedThroughDcardSPublic" /></li>
              </div>
              
            </div>

            <div className="text-[#00437B] whitespace-pre-line mt-4">
              <strong><TranslatedText messageKey="content.project_uiux_uiux3.2FindingsAndPainPointAnalysis" />{`\n`}</strong><TranslatedText messageKey="content.project_uiux_uiux3.theQualitativeAndQuantitativeResearchIdentifiedFour" /><div className="p-3 pl-5 space-y-3">
                <li><TranslatedText messageKey="content.project_uiux_uiux3.visualOverloadAndConfusingNavigationDenseSmall" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.fragmentedChannelsInformationFromMultipleAgenciesIs" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.unclearProcessingStatusImportantProceduresSuchAs" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.timeLimitedInformationAccessAccessToOfficial" /></li>
              </div>
            </div>

            <div className="text-[#00437B] whitespace-pre-line mt-4">
              <strong><TranslatedText messageKey="content.project_uiux_uiux3.3CoreImprovements" />{`\n`}</strong><TranslatedText messageKey="content.project_uiux_uiux1.theseInsightsInformedTheFollowingDesignStrategies" /><div className="p-3 pl-5 space-y-3">
                <li><TranslatedText messageKey="content.project_uiux_uiux3.visualSystemAdjustTypeSizesSpacingAnd" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.personalizedOneStopServicesReorganizeInformationAround" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.liveStatusTrackingAddAProgressIndicator" /></li>
                <li><TranslatedText messageKey="content.project_uiux_uiux3.historicalInformationAccessProvideAPermanentArchive" /></li>
              </div>
            </div>
          </div>
        </div>

        {/* 文字範圍4 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          {/* 右側文字 */}
          <div className="flex flex-col">
            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.informationArchitecture" /></p>
            <div className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux3.theRedesignedPlatformBringsInformationAndTasks" /></div>
            <Image src={uiux_IA} alt={''} className="p-6 w-full h-auto rounded-[10vh]" />
          </div>
        </div>



        

        {/* 流程 */}
        <div className="w-full flex flex-row gap-4 p-2">
          {/* 左側圓形 */}
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          
          {/* 右側文字 */}
          <div className="flex flex-col w-full gap-3">

            <p className=" text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux3.userFlowsSelectedCoreTasks" /></p>

            {flows.map((flow, flowIndex) => (
              <div
                key={flowIndex}
                className="w-full h-auto bg-[rgba(255,255,255,0.5)] rounded-2xl pb-5 mt-5"
                onTouchStart={(e) => touchStart(e, flowIndex)}
                onTouchEnd={(e) => touchEnd(e, flowIndex)}
              >
                <p className="text-[#00437B] text-xl font-bold p-5">
                  {flow.title}
                </p>

                <div className="w-full flex justify-between items-center relative overflow-hidden">

                  {/* 左箭頭 */}
                  {indexes[flowIndex] > 0 ? (
                    <button
                      onClick={() => prev(flowIndex)}
                      className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] cursor-pointer"
                    >
                      <FaArrowLeft size={24} />
                    </button>
                  ) : (
                    <div className="w-[24px] h-[24px]" />
                  )}

                  {/* 圖片與文字 */}
                  <div className="flex flex-col xl:flex-row gap-2 items-center">
                    <Image
                      src={flow.data[indexes[flowIndex]].src}
                      alt=""
                      className="h-auto rounded-xl w-[80vh]"
                    />
                    <p className="w-full sm:w-[40vh] p-3 text-[#00437B] text-center">
                      {flow.data[indexes[flowIndex]].caption}
                    </p>
                  </div>

                  {/* 右箭頭 */}
                  {indexes[flowIndex] < flow.data.length - 1 ? (
                    <button
                      onClick={() => next(flowIndex)}
                      className="text-[#00437B] bg-white/70 p-2 rounded-full hover:bg-[#AAD2E4] cursor-pointer"
                    >
                      <FaArrowRight size={24} />
                    </button>
                  ) : (
                    <div className="w-[24px] h-[24px]" />
                  )}

                </div>
              </div>
            ))}



          </div>
        </div>
          
        <div className="w-full mt-8 flex">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5"><TranslatedText messageKey="content.project_uiux_uiux1.relatedLinks" /></p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web_digitalProfile?page-id=1%3A3&node-id=67-5570&viewport=-980%2C-236%2C0.02&t=ZGcITpd8Kg3d6xrp-1&scaling=min-zoom&content-scaling=fixed", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              FIGMA
            </button>
          </div>
        </div>


        

      </div>
 

    </div>
  );
}
