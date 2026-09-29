'use client';

import { TranslatedText } from "@/component/LanguageProvider";
import LanguageSwitcher from "@/component/LanguageSwitcher";

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

      <div className="w-full h-auto px-4 pt-8 pb-2 sm:pl-[100px] sm:pr-[60px] sm:pb-[60px] flex flex-col justify-center items-center">

        <div className="w-full flex items-center justify-between gap-2 mb-5">
          <h1 className="text-xl sm:text-2xl font-bold text-[#00437B]"><TranslatedText messageKey="content.profile.myProfile" /></h1>
          <LanguageSwitcher />
        </div>

        {/* 上方照片+自我介紹 */}
        <motion.div className="w-full h-auto flex flex-col lg:flex-row p-4 pt-8 justify-center items-center mb-5 bg-[rgba(255,255,255,0.3)] rounded-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image src={PersonImage} alt={''} className="w-[30vh] h-[40vh] rounded-[6vh]" />
          <div className="text-[#00437B] lg:w-1/2 p-5 pl-8">
            <h1 className="text-3xl font-extrabold mb-6"><TranslatedText messageKey="content.site.yuHsinPan" /></h1>
            <p className="whitespace-pre-line"><TranslatedText messageKey="content.profile.iGraduatedFromNationalChengchiUniversityWith" />{`\n`}<TranslatedText messageKey="content.profile.iAmAttentiveDedicatedAndCollaborativeThrough" />{`\n`}<TranslatedText messageKey="content.profile.myPsychologyTrainingHelpsMeApproachDesign" /></p>
          </div>
        </motion.div>

        <motion.div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* 學歷 */}
          <div className="w-full  h-auto bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B]">

            <p className="font-bold text-2xl mb-5"><TranslatedText messageKey="content.profile.education" /></p>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.theAffiliatedSeniorHighSchoolOfNational" /></p>
                <p className="pl-1 text-[#AAD2E4] font-light text-base">2016 - 2019</p>
              </div>
            </div>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.nationalChengchiUniversityPsychologyDoubleMajorIn" /></p>
                <p className="pl-1 text-[#AAD2E4] font-light text-base">2020 - 2025</p>

                <div className="p-2 flex flex-col gap-2">
                  <p className="font-bold"><TranslatedText messageKey="content.profile.relevantCoursework" /></p>
                  <p>
                    <span className="font-semibold"><TranslatedText messageKey="content.profile.psychology" /></span><TranslatedText messageKey="content.profile.psychologicalAndEducationalStatisticsExperimentalMethodsPsychological" /></p>
                  <p>
                    <span className="font-semibold"><TranslatedText messageKey="content.profile.digitalContent" /></span><TranslatedText messageKey="content.profile.humanComputerInteractionDesignAdvancedUxDesign" /></p>
                  <p>
                    <span className="font-semibold"><TranslatedText messageKey="content.profile.japanese" /></span><TranslatedText messageKey="content.profile.japaneseConversationLanguagePracticeWritingAndAdvanced" /></p>
                </div>

              </div>
            </div>

          </div>


          {/* 經歷 */}
          <div className="w-full bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B]">

            <p className="font-bold text-2xl mb-5"><TranslatedText messageKey="content.profile.campusExperience" /></p>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.graphicDesignerHsnuWindBandNccuSymphony" /></p>

                <div className="p-2 flex flex-col gap-2">
                  <p><TranslatedText messageKey="content.profile.promotionalMaterialsPostersAndMerchandiseDesign" /></p>
                </div>

              </div>
            </div>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.principalFlutistChingshinSchoolWindBandAnd" /></p>

                <div className="p-2 flex flex-col gap-2 ml-6">
                  <li><TranslatedText messageKey="content.profile.plannedSectionalRehearsalsToImproveEnsemblePerformance" /></li>
                  <li><TranslatedText messageKey="content.profile.taughtAndCoordinatedMusiciansWithDifferentLevels" /></li>
                  <li><TranslatedText messageKey="content.profile.developedLeadershipCommunicationAndTeachingSkills" /></li>
                </div>

              </div>
            </div>

            <div className="w-full flex flex-row gap-4 p-2">
              {/* 左側圓形 */}
              <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
              {/* 右側文字 */}
              <div className="flex flex-col">
                <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.16thNccuDigitalContentGraduationExhibitionTechnical" /></p>

                <div className="p-2 flex flex-col gap-2 ml-6">
                  <li><TranslatedText messageKey="content.profile.implementedBodySilhouetteDetectionInteractionLogicAnd" /></li>
                  <li><TranslatedText messageKey="content.profile.builtAnExpressServerConnectingParticipantInput" /></li>
                  <li><TranslatedText messageKey="content.profile.implementedAutomaticUpdatesAndExperienceFlowManagement" /></li>
                </div>

              </div>
            </div>

          </div>

        </motion.div>

        {/* 工作經歷 */}
        <div className="w-full h-auto bg-[rgba(255,255,255,0.3)] rounded-4xl flex p-6 flex-col text-[#00437B] mt-5">

          <div className="grid grid-cols-1 2xl:grid-cols-3">
            <div className="col-span-2">
              <p className="font-bold text-2xl mb-5"><TranslatedText messageKey="content.profile.workExperience" /></p>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.feiJieMaterialsCoLtdSales" /></p>

                  <div className="p-2 flex flex-col gap-2  whitespace-pre-line">
                    <p><TranslatedText messageKey="content.profile.1SemiconductorProcessesAndMaterialsKnowledge" />{'\n'}<TranslatedText messageKey="content.profile.2CustomerInquiriesAndRequirementsHandling" />{'\n'}<TranslatedText messageKey="content.profile.3MaterialsPurchasingAndOrderManagement" /></p>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.5xrubyProjectManagementIntern" /></p>

                  <div className="p-2 flex flex-col gap-2 whitespace-pre-line">
                    <p><TranslatedText messageKey="content.profile.1CustomerInterviewsRequirementsAnalysisAndProject" />{'\n'}<TranslatedText messageKey="content.profile.2SpecificationsInformationArchitectureAndInterfacePlanning" />{'\n'}<TranslatedText messageKey="content.profile.3SchedulingDevelopmentTicketsAndProgressTracking" />{'\n'}<TranslatedText messageKey="content.profile.4FunctionalTestingIssueAnalysisAndBug" />{'\n'}<TranslatedText messageKey="content.profile.5CompanyWebsiteRedesignInformationArchitectureUi" /></p>
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
              <p className="font-bold text-2xl mb-5"><TranslatedText messageKey="content.profile.awardsAndCertifications" /></p>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.academicExcellenceAwardForSixSemestersTop" /></p>

                  <div className="p-2 flex flex-col gap-2">
                    <p><TranslatedText messageKey="content.profile.departmentRank1stInFall20211st" /></p>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.jlptN1" /></p>

                  <div className="p-2 flex flex-col gap-2">
                    <p><TranslatedText messageKey="content.profile.passedIn2025WithAScoreOf" /></p>
                  </div>

                </div>
              </div>

              <div className="w-full flex flex-row gap-4 p-2">
                {/* 左側圓形 */}
                <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
                {/* 右側文字 */}
                <div className="flex flex-col">
                  <p className="pl-1 text-[#008BBF] text-xl font-bold whitespace-pre-line"><TranslatedText messageKey="content.profile.topBenchmarkInEnglishOnTheAdvanced" /></p>

                  <div className="p-2 flex flex-col gap-2">
                    <p><TranslatedText messageKey="content.profile.qualifiedForUniversityEnglishCourseExemption" /></p>
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

            <p className="font-bold text-2xl mb-5"><TranslatedText messageKey="content.profile.skills" /></p>

            <div className="w-full p-2">
              <p className="font-bold">UI/UX</p>
              <div className="ml-8 gap-2">
                <li><TranslatedText messageKey="content.profile.userResearchInDepthInterviewsQuestionnairesCompetitive" /></li>
                <li><TranslatedText messageKey="content.profile.personasInformationArchitectureFlowcharts" /></li>
                <li><TranslatedText messageKey="content.profile.wireframesPrototypingUsabilityTesting" /></li>
              </div>
            </div>

            <div className="w-full p-2">
              <p className="font-bold">Front-end</p>
              <div className="ml-8 gap-2">
                <li>HTML / CSS</li>
                <li><TranslatedText messageKey="content.profile.javascriptNextJsP5Js" /></li>
                <li><TranslatedText messageKey="content.profile.frontendBackendApiIntegrationFetchExpress" /></li>
              </div>
            </div>

          </div>

          <div className="flex flex-col">

            <p className="font-bold text-2xl mb-5"><TranslatedText messageKey="content.profile.tools" /></p>

            <div className="p-2 mb-5">
              <p className="text-[#008BBF] font-bold mb-2"><TranslatedText messageKey="content.profile.software" /></p>
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
              <p className="text-[#008BBF] font-bold mb-2"><TranslatedText messageKey="content.profile.programmingLanguages" /></p>
              <div className="flex flex-wrap gap-2 p-3">
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Javascipt</button>
                <button className="px-10 py-1 border-[#008BBF] border-2 rounded-4xl text-[#008BBF]">Ruby on Rails</button>
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
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5"><TranslatedText messageKey="content.profile.relatedDocuments" /></p>

          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1AYvoho_JH2YwVppHce7JWkCjRTF8kQsC/view?usp=sharing", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.resume" />
            </button>
          </div>
        </div>

      </div>

    </div>
  )
}
