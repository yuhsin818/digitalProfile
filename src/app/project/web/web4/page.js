'use client';

import { TranslatedText, useLanguage } from "@/component/LanguageProvider";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import cover from "@/app/image/to-do.png";



export default function Web6() {
  const { t } = useLanguage();

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
            <Image src={cover} alt={t("content.projects.taskManagementSystem")} className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line"><TranslatedText messageKey="content.projects.taskManagementSystem" /></h1>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_web_web4.aTaskManagementWebApplicationBuiltWith" /></p>
            <p className="text-[#00437B] font-bold mt-2"><TranslatedText messageKey="content.project_web_web4.typeFullStackWebDevelopmentRubyOn" /></p>
          </div>
        </div>

        {/* 核心功能 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4"><TranslatedText messageKey="content.project_web_web4.coreFeatures" /></p>

            <div className="w-full flex flex-col gap-8">
              {[
                {
                  title: t("content.project_web_web4.taskManagement"),
                  video: "/task/task_CRUD.mov",
                  details: [
                    t("content.project_web_web4.createViewEditAndDeleteTasksCrud"),
                    t("content.project_web_web4.eachTaskIncludesATitleDescriptionStart"),
                    t("content.project_web_web4.aFlashWarningAppearsWhenADeadline"),
                  ],
                },
                {
                  title: t("content.project_web_web4.filteringAndSorting"),
                  video: "/task/task_sort.mov",
                  details: [
                    t("content.project_web_web4.searchTaskTitlesByPartialKeywordMatch"),
                    t("content.project_web_web4.filterByStatusAndTags"),
                    t("content.project_web_web4.sortByDeadlineOrPriority"),
                    t("content.project_web_web4.paginatedTaskLists"),
                  ],
                },
                {
                  title: t("content.project_web_web4.tagSystem"),
                  video: "/task/task_tag.mov",
                  details: [
                    t("content.project_web_web4.usersCanCreateCustomTags"),
                    t("content.project_web_web4.whenCreatingATaskUsersCanChoose"),
                    t("content.project_web_web4.tagNamesMustBeUniqueWithinEach"),
                  ],
                },
                {
                  title: t("content.project_web_web4.userAccounts"),
                  video: "/task/task_login.mov",
                  details: [
                    t("content.project_web_web4.selfServiceRegistrationWithEmailAndPassword"),
                    t("content.project_web_web4.passwordsAreSecurelyHashedWithBcrypt"),
                    t("content.project_web_web4.signInAndSignOutFunctionality"),
                    t("content.project_web_web4.usersCanAccessAndManageOnlyTheir"),
                  ],
                },
                {
                  title: t("content.project_web_web4.adminDashboard"),
                  video: "/task/task_admin.mov",
                  details: [
                    t("content.project_web_web4.administratorsCanViewAndManageAllUsers"),
                    t("content.project_web_web4.atLeastOneAdministratorMustRemainThe"),
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
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4"><TranslatedText messageKey="content.project_uiux_uiux5.technology" /></p>

            <div className="flex flex-col gap-5 text-[#00437B]">

              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_web_web4.backend" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Ruby on Rails 8</span><TranslatedText messageKey="content.project_web_web4.mainBackendFrameworkUsingMvcArchitecture" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">PostgreSQL</span><TranslatedText messageKey="content.project_web_web4.relationalDatabaseStoringApplicationData" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">bcrypt</span><TranslatedText messageKey="content.project_web_web4.passwordHashingWith" /><code>has_secure_password</code><TranslatedText messageKey="content.project_web_web4.handlingUserAuthentication" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Solid Queue / Solid Cache / Solid Cable</span><TranslatedText messageKey="content.project_web_web4.databaseBackedBackgroundJobsCachingAndWebsockets" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Pagy</span><TranslatedText messageKey="content.project_web_web4.lightweightPaginationLibrary" /></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_web_web4.frontend" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_web_web4.hotwireTurboStimulus" /></span><TranslatedText messageKey="content.project_web_web4.pageNavigationAndInteractionsWithoutFullReloads" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Tailwind CSS</span><TranslatedText messageKey="content.project_web_web4.utilityFirstCssFrameworkForSiteWide" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Importmap</span><TranslatedText messageKey="content.project_web_web4.nativeEsModuleManagementWithoutABundler" /></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_web_web4.deploymentAndInfrastructure" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Kamal</span><TranslatedText messageKey="content.project_web_web4.containerDeploymentToolSupportingDockerDeploymentTo" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Puma</span><TranslatedText messageKey="content.project_web_web4.applicationServer" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Thruster</span><TranslatedText messageKey="content.project_web_web4.httpCachingAndCompressionLayerUsedWith" /></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_web_web4.testingAndCodeQuality" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">RSpec</span><TranslatedText messageKey="content.project_web_web4.unitAndIntegrationTestingFramework" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Factory Bot + Faker</span><TranslatedText messageKey="content.project_web_web4.testDataGeneration" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Shoulda Matchers</span><TranslatedText messageKey="content.project_web_web4.assertionHelpersForModelValidations" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Capybara + Selenium</span><TranslatedText messageKey="content.project_web_web4.endToEndSystemTesting" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Brakeman</span><TranslatedText messageKey="content.project_web_web4.staticSecurityAnalysis" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Bundler Audit</span><TranslatedText messageKey="content.project_web_web4.checksGemDependenciesForKnownVulnerabilities" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">RuboCop</span><TranslatedText messageKey="content.project_web_web4.codeStyleChecks" /></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* 相關連結 */}
        <div className="w-full mt-8 flex">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5"><TranslatedText messageKey="content.project_uiux_uiux1.relatedLinks" /></p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://task-management-system-rivq.onrender.com", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.play" />
            </button>
          </div>
        </div>


      </div>


    </div>
  );
}
