'use client';

import { TranslatedText, useLanguage } from "@/component/LanguageProvider";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import cover from "@/app/image/SOSI_web.png";
import sosiDesignPresent from "@/app/image/SOSI/SOSI_design_present.png";
import sosiDesign from "@/app/image/SOSI/SOSI_design.png";



export default function Web5() {
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
            <Image src={cover} alt={t("content.project_uiux_uiux5.sosiWebsiteUiRedesign")} className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line"><TranslatedText messageKey="content.projects.sosiWebsiteRedesign" /></h1>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux5.thisProjectRedesignedTheUiOfSosi" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux5.iAnalyzedPainPointsPlannedTheRedesign" /></p>
            <p className="text-[#00437B] font-bold mt-2"><TranslatedText messageKey="content.project_uiux_uiux4.typeFullStackWebDevelopmentUiUx" /></p>
          </div>
        </div>

        {/* 痛點 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.originalWebsitePainPoints" /></p>
            <div className="text-[#00437B] p-3 space-y-2 whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux5.theInitialProductReviewIdentifiedThreeMain" /><div className="mt-1 w-full flex flex-row">
                <div>1.</div>
                <div className="pl-4"><TranslatedText messageKey="content.project_uiux_uiux5.firstInconsistentBrandVisualsWithoutSystematicUi" /></div>
              </div>

              <div className="mt-1 w-full flex flex-row">
                <div>2.</div>
                <div className="pl-4"><TranslatedText messageKey="content.project_uiux_uiux5.secondUnclearCommunicationOfCoreValueKey" /></div>
              </div>

              <div className="mt-1 w-full flex flex-row">
                <div>3.</div>
                <div className="pl-4"><TranslatedText messageKey="content.project_uiux_uiux5.thirdARigidBrowsingExperienceLimitedMotion" /></div>
              </div>
            </div>
          </div>
        </div>

       {/* 改變的項目 & 介面 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4"><TranslatedText messageKey="content.project_uiux_uiux5.changesAndInterfaceShowcase" /></p>

            <div className="w-full flex flex-col gap-8">
              {[
                {
                  title: t("content.project_uiux_uiux5.uiDesignStandards"),
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_demo_present.mov",
                  media: "/SOSI/SOSI_design.mp4",
                  painTitle: t("content.project_uiux_uiux5.missingStandardsAndVisualHierarchy"),
                  painDetails: [
                    t("content.project_uiux_uiux5.withoutSystematicUiStandardsTheSiteS"),
                    t("content.project_uiux_uiux5.severalSectionsHadBrokenLayoutsOrPoorly")
                  ],
                  solution: t("content.project_uiux_uiux5.redefineTheUiAndBrandPalette"),
                  details: [
                    t("content.project_uiux_uiux5.updateCssAndComponentStylesAndIntroduce"),
                    t("content.project_uiux_uiux5.addAnAnimatedGridBackground"),
                    t("content.project_uiux_uiux5.reorganizeTheOverallInterfaceLayout"),
                  ],
                },
                {
                  title: t("content.project_uiux_uiux5.productFeaturesAndExplanations"),
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_demo_present.mov",
                  media: "/SOSI/SOSI_demo.mov",
                  painTitle: t("content.project_uiux_uiux5.limitedVisualGuidanceAndConversionEntryPoints"),
                  painDetails: [
                    t("content.project_uiux_uiux5.theHeroUsedAStaticSwiperBanner"),
                    t("content.project_uiux_uiux5.usersCouldEasilyOverlookTextInThe"),
                    t("content.project_uiux_uiux5.coreVdiAndPamModulesWereNot"),
                    t("content.project_uiux_uiux5.theFiveCoreModuleCardsLackedStrong"),
                    t("content.project_uiux_uiux5.theSiteLackedADedicatedContactPage")
                  ],
                  solution: t("content.project_uiux_uiux5.addDemoVideosAndEmphasizeKeyFeatures"),
                  details: [
                    t("content.project_uiux_uiux5.replaceTheSwiperBannerWithAFull"),
                    t("content.project_uiux_uiux5.addDedicatedVdiAndPamSectionsWith"),
                    t("content.project_uiux_uiux5.redesignTheFiveCoreModuleCardsTo"),
                    t("content.project_uiux_uiux5.addAStandaloneContactPageAndA"),
                  ],
                },
                {
                  title: t("content.project_uiux_uiux5.animationAndInteraction"),
                  mediaType: "video",
                  mediaPresent: "/SOSI/SOSI_animation_present.mov",
                  media: "/SOSI/SOSI_animation.mov",
                  painTitle: t("content.project_uiux_uiux5.rigidInteractionAndLimitedVisualEngagement"),
                  painDetails: [
                    t("content.project_uiux_uiux5.theWebsiteOfferedLittleVisualMotionOr"),
                    t("content.project_uiux_uiux5.statisticsAppearedImmediatelyWithoutCountUpAnimation"),
                    t("content.project_uiux_uiux5.partnerLogosWereArrangedStaticallyWithNo"),
                    t("content.project_uiux_uiux5.theMobileMenuOpenedWithoutATransition")
                  ],
                  solution: t("content.project_uiux_uiux5.animatedBackgroundsEntryEffectsAndButtons"),
                  details: [
                    t("content.project_uiux_uiux5.hideNavigationWhenScrollingDownAndReveal"),
                    t("content.project_uiux_uiux5.animateStatisticsWithCountUpEffectsTriggered"),
                    t("content.project_uiux_uiux5.displayPartnerLogosInAnInfiniteLeft"),
                    t("content.project_uiux_uiux5.addASlidingTransitionToTheMobile"),
                  ],
                },
              ].map((item, i) => (
                <div key={i} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  {/* 編號 + 標題 */}
                  <p className="font-bold text-[#00437B] text-xl mb-3">{i + 1}. {item.title}</p>
                  
                  {/* 痛點行：媒左文右 7:3 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaType === "image" ? (
                      <Image src={item.mediaPresent} alt={t("content.project_uiux_uiux5.painPointValue0", { value0: (i + 1) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[i * 2] = el)} // ✅ 修正：改為 i * 2
                        src={item.mediaPresent}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full flex flex-col gap-2">
                      <p><span className="font-bold"><TranslatedText messageKey="content.project_uiux_uiux5.painPoint" /></span>{item.painTitle}</p>
                      <ul className="mt-1 space-y-1 text-sm">
                        {item.painDetails.map((pd, k) => (
                          <li key={k} className="pl-[1em] [text-indent:-1em]">・{pd}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 解決方案行：媒左文右 7:3 */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "image" ? (
                      <Image src={item.media} alt={t("content.project_uiux_uiux5.solutionValue0", { value0: (i + 1) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    ) : (
                      <video
                        ref={(el) => (videoRefs.current[i * 2 + 1] = el)} // ✅ 修正：改為 i * 2 + 1
                        src={item.media}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full flex flex-col gap-2">
                      <p><span className="font-bold"><TranslatedText messageKey="content.project_uiux_uiux4.solution" /></span>{item.solution}</p>
                      <ul className="mt-1 space-y-1 text-sm">
                        {item.details.map((d, j) => (
                          <li key={j} className="pl-[1em] [text-indent:-1em]">・{d}</li>
                        ))}
                      </ul>
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
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4"><TranslatedText messageKey="content.project_uiux_uiux5.technology" /></p>

            <div className="flex flex-col gap-6 text-[#00437B]">

              {/* 動畫與互動 */}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux5.animationAndInteraction2" /></p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.fadeInAndMovementEffects" /></span><TranslatedText messageKey="content.project_uiux_uiux5.uses" /><code>IntersectionObserver</code><TranslatedText messageKey="content.project_uiux_uiux5.toDetectElementsEnteringTheViewportAnd" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.smoothCountUpAnimation" /></span><TranslatedText messageKey="content.project_uiux_uiux5.uses2" /><code>requestAnimationFrame</code><TranslatedText messageKey="content.project_uiux_uiux5.withEaseOutCubicEasingToAnimate" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.automaticAndExclusiveVideoPlayback" /></span><TranslatedText messageKey="content.project_uiux_uiux5.uses" /><code>IntersectionObserver</code><TranslatedText messageKey="content.project_uiux_uiux5.pausesOffScreenVideosAndPlaysVisible" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.dynamicShapeGrid" /></span><TranslatedText messageKey="content.project_uiux_uiux5.anAnimatedGridModuleAddsVisualDepth" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.seamlessInfiniteMarquee" /></span><TranslatedText messageKey="content.project_uiux_uiux5.css" /><code>@keyframes</code><TranslatedText messageKey="content.project_uiux_uiux5.andDuplicatedContentNodesCreateASmooth" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.smoothMobileAccordion" /></span><TranslatedText messageKey="content.project_uiux_uiux5.css2" /><code>max-height</code><TranslatedText messageKey="content.project_uiux_uiux5.transitionsPreventStutteringWhenExpandingOrCollapsing" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.desktopDropdownHoverEffects" /></span><TranslatedText messageKey="content.project_uiux_uiux5.uses3" /><code>visibility: hidden</code><TranslatedText messageKey="content.project_uiux_uiux5.insteadOf" /><code>display: none</code><TranslatedText messageKey="content.project_uiux_uiux5.toPreserveLayoutSpaceCombinedWith" /><code>opacity</code><TranslatedText messageKey="content.project_uiux_uiux5.and" /><code>scale</code><TranslatedText messageKey="content.project_uiux_uiux5.forSmoothHoverTransitions" /></li>
                </ul>
              </div>

              {/* 導覽列 */}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux5.navigationHeader" /></p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.scrollAwareHeader" /></span><TranslatedText messageKey="content.project_uiux_uiux5.tracksScrollDirectionAndDistanceToTrigger" /><code>translateY</code><TranslatedText messageKey="content.project_uiux_uiux5.transitionsThatHideOrRevealTheHeader" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.mobileDrawerAndSubmenus" /></span><TranslatedText messageKey="content.project_uiux_uiux5.managesMenuVisibilityIconStatesAndMulti" /></li>
                </ul>
              </div>

              {/* 樣式系統 */}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux5.designAndStyleSystem" /></p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium">Tailwind CSS v4 Design Tokens</span><TranslatedText messageKey="content.project_uiux_uiux5.definesSiteWideColorVariablesIn" /><code>@theme</code><TranslatedText messageKey="content.project_uiux_uiux5.suchAs" /><code>--color-primary-dark-blue</code><TranslatedText messageKey="content.project_uiux_uiux5.enforcingDesignStandardsAndRemovingHardCoded" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.reusableSiteWideStyles" /></span><TranslatedText messageKey="content.project_uiux_uiux5.extractsSharedClassesSuchAs" /><code>section-heading</code><TranslatedText messageKey="content.shared.listSeparator" /><code>tag-gradient</code><TranslatedText messageKey="content.shared.listSeparator" /><code>btn-primary</code><TranslatedText messageKey="content.shared.listSeparator" /><code>marquee-track</code><TranslatedText messageKey="content.project_uiux_uiux5.toImproveReuseAndMaintainability" /></li>
                </ul>
              </div>

              {/* 其他技術實作 */}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux5.coreInfrastructure" /></p>
                <ul className="pl-5 space-y-2">
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.efficientViewportDetection" /></span><TranslatedText messageKey="content.project_uiux_uiux5.replacesTraditional" /><code>scroll</code><TranslatedText messageKey="content.project_uiux_uiux5.eventListenersWithTheIntersectionObserverApi" /></li>
                  <li className="pl-[1em] [text-indent:-1em]">・<span className="font-medium"><TranslatedText messageKey="content.project_uiux_uiux5.internationalization" /></span><TranslatedText messageKey="content.project_uiux_uiux5.aStructuredI18nArchitectureSupportsTraditionalChinese" /></li>
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
              onClick={() => window.open("https://drive.google.com/drive/folders/1ZffKMY-wDAleWFtjSolXduefrbgd0JhU?usp=sharing", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.oldSite" />
            </button>
            <button
              onClick={() => window.open("https://www.sosi.com.tw", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.newSite" />
            </button>
          </div>
        </div>


      </div>


    </div>
  );
}
