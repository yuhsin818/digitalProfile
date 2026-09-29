'use client';

import { TranslatedText, useLanguage } from "@/component/LanguageProvider";

import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useRef, useEffect } from 'react';
import { motion } from "framer-motion";

import cover from "@/app/image/5xruby_web.png";
import IA_present from "@/app/image/5xruby/5xruby_IA_present.png";
import IA from "@/app/image/5xruby/5xruby_IA.png";
import hero_present from "@/app/image/5xruby/5xruby_hero_present.png";
import vision_present from "@/app/image/5xruby/5xruby_vision_present.png";
import testimonial_present from "@/app/image/5xruby/5xruby_testimonial_present.png";
import blog_present from "@/app/image/5xruby/5xruby_blog_present.png";
import hero from "@/app/image/5xruby/5xruby_banner.png";
import banner_present from "@/app/image/5xruby/5xruby_banner_present.png";
import banner from "@/app/image/5xruby/5xruby_banner.png";
import customer from "@/app/image/5xruby/5xruby_customer.png";
import footer_present from "@/app/image/5xruby/5xruby_footer_present.png";
import footer from "@/app/image/5xruby/5xruby_footer.png";
import service_present from "@/app/image/5xruby/5xruby_service_present.png";
import service from "@/app/image/5xruby/5xruby_service.png";
import dev_present from "@/app/image/5xruby/5xruby_dev_present.png";
import dev from "@/app/image/5xruby/5xruby_dev.png";

export default function Web4() {
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

      {/* 餈??? */}
      <div className="w-full flex justify-end">
        <button
          onClick={() => router.push(`/project?category=uiux`)}
          className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
          <TranslatedText messageKey="actions.back" />
        </button>
      </div>


      <div className="flex flex-col w-full gap-6 justify-center items-center p-4 sm:p-[60px] sm:pl-[100px] pt-[30px]">

        {/* ?銝餅?憿?隞晶 */}
        <div className="w-full flex flex-col lg:flex-row gap-8 items-center mb-12">
          <motion.div className="lg:w-1/2 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image src={cover} alt={t("content.project_uiux_uiux4.5xrubyWebsiteRedesignAndAnimationOverhaul")} className="w-full h-auto rounded-[6vh]" />
          </motion.div>
          <div className="lg:w-1/2 w-full flex flex-col gap-4">
            <h1 className="text-4xl font-extrabold text-[#00437B] mb-6 whitespace-pre-line"><TranslatedText messageKey="content.projects.5xrubyWebsiteRedesign" /></h1>
            <p className="text-[#00437B] whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux4.thisProjectComprehensivelyRedesignedTheCompanyWebsite" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux4.thePreviousSiteHadUnclearInformationHierarchy" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux4.toEfficientlyDeliverTheVisualRedesignAnd" /></p>
            <p className="text-[#00437B] font-bold mt-2"><TranslatedText messageKey="content.project_uiux_uiux4.typeFullStackWebDevelopmentUiUx" /></p>
          </div>
        </div>

        {/* 撠?? */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.projectBackground" /></p>
            <div className="text-[#00437B] p-3 whitespace-pre-line "><TranslatedText messageKey="content.project_uiux_uiux4.theRedesignFocusedOnTheHomepageInterface" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux4.theScopeIncludedInformationArchitectureNavigationFooter" /></div>
          </div>
        </div>

        {/* 鈭??弦 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux1.initialResearch" /></p>
            <div className="text-[#00437B] p-3 space-y-2">
              <ul className="space-y-2">

                <div className="mt-1 w-full flex flex-row">
                  <div>1.</div>
                  <div className="pl-4"><TranslatedText messageKey="content.project_uiux_uiux4.1TeamAndStakeholderInterviewsWithThe" /></div>
                </div>

                <div className="mt-1 w-full flex flex-row">
                  <div>2.</div>
                  <div className="pl-4"><TranslatedText messageKey="content.project_uiux_uiux4.2CompetitorAndInteractionAnalysisExploredComparable" /></div>
                </div>

              </ul>
            </div>
          </div>
        </div>

        {/* ?雯蝡?暺?*/}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.originalWebsitePainPoints" /></p>
            <div className="text-[#00437B] p-3 whitespace-pre-line"><TranslatedText messageKey="content.project_uiux_uiux4.initialResearchIdentifiedIssuesAcrossUserExperience" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux4.inTermsOf" /><strong><TranslatedText messageKey="content.project_uiux_uiux4.visualCommunicationAndHierarchy" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.theHomepageFeltFlatAndLackedInteraction" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux4.inTermsOf" /><strong><TranslatedText messageKey="content.project_uiux_uiux4.informationArchitectureAndLayout" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.flatNavigationScatteredLinksAcrossTheInterface" />{`\n`}<TranslatedText messageKey="content.project_uiux_uiux4.inTermsOf" /><strong><TranslatedText messageKey="content.project_uiux_uiux4.contentAndConversionStrategy" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.theSiteDidNotClearlyEmphasizeService" /></div>
          </div>
        </div>

        {/* 閫?捱?寞? & 隞撅內 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full gap-8">
            <p className="text-[#008BBF] text-2xl font-bold whitespace-pre-line mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.solutionsAndInterfaceShowcase" /></p>

            {/* Section 1: ?函??嗆? */}
            <div className="flex flex-col gap-6">
              <h2 className="text-[#00437B] text-xl font-extrabold pb-2"><TranslatedText messageKey="content.project_uiux_uiux4.siteWideStructure" /></h2>
              {[
                {
                  id: "01",
                  title: t("content.project_uiux_uiux4.reorganizingInformationArchitectureAndPages"),
                  mediaType: "image",
                  mediaPresent: IA_present,
                  media: IA,
                  pain: t("content.project_uiux_uiux4.theOldInformationArchitectureLackedClearHierarchy"),
                  solution: t("content.project_uiux_uiux4.iRegroupedLinksIntoServicesContentHub"),
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    <Image src={item.mediaPresent} alt={t("content.project_uiux_uiux4.painPointValue0", { value0: (item.id) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold"><TranslatedText messageKey="content.project_uiux_uiux4.previousIssue" /></span><br />{item.pain}</p>
                    </div>
                  </div>
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    <Image src={item.media} alt={t("content.project_uiux_uiux4.solutionValue0", { value0: (item.id) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p><span className="font-bold"><TranslatedText messageKey="content.project_uiux_uiux4.solution" /></span><br />{item.solution}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Section 2: 擐? */}
            <div className="flex flex-col gap-6 mt-4">
              <h2 className="text-[#00437B] text-xl font-extrabold pb-2"><TranslatedText messageKey="content.project_uiux_uiux4.homePage" /></h2>
              {[
                {
                  id: "02",
                  title: t("content.project_uiux_uiux4.aNewHeroSectionWithMultilingualVisuals"),
                  mediaType: "video", // ?寧 video
                  mediaPresent: hero_present,
                  media: "/5xruby/5xruby_hero.mp4", // ?寧 public 鋆⊿?蔣?楝敺?
                  pain: t("content.project_uiux_uiux4.thePreviousHeroUsedACarouselOf"),
                  solution: t("content.project_uiux_uiux4.1ReplaceTheCarouselWithASlogan"),
                },
                {
                  id: "03",
                  title: t("content.project_uiux_uiux4.caseStudyCards"),
                  mediaType: "video",
                  mediaPresent: testimonial_present,
                  media: "/5xruby/5xruby_testimonial.mp4",
                  pain: t("content.project_uiux_uiux4.staticCaseCardsWerePlacedAtThe"),
                  solution: t("content.project_uiux_uiux4.iMovedCasesBelowTheHeroEnlarged"),
                },
                {
                  id: "04",
                  title: t("content.project_uiux_uiux4.companyValues"),
                  mediaType: "video",
                  mediaPresent: vision_present,
                  media: "/5xruby/5xruby_vision.mp4",
                  pain: t("content.project_uiux_uiux4.thePreviousValuesAndIntroductionSectionsWere"),
                  solution: t("content.project_uiux_uiux4.animatedVisualsEchoTheHeroWithConcise"),
                },
                {
                  id: "05",
                  title: t("content.project_uiux_uiux4.visualServiceCardsAndDirectNavigation"),
                  mediaType: "video",
                  mediaPresent: service_present,
                  media: "/5xruby/5xruby_service.mp4",
                  pain: t("content.project_uiux_uiux4.theServiceSectionReliedOnStaticText"),
                  solution: t("content.project_uiux_uiux4.iRedesignedServicesAsCardsWithContextual"),
                },
                {
                  id: "06",
                  title: t("content.project_uiux_uiux4.industriesServed"),
                  mediaType: "image",
                  mediaPresent: service_present,
                  media: customer,
                  pain: t("content.project_uiux_uiux4.theSiteDidNotClearlyShowThe"),
                  solution: t("content.project_uiux_uiux4.iAddedAnIndustriesServedSectionWith"),
                },
                {
                  id: "07",
                  title: t("content.project_uiux_uiux4.conversionFocusedCta"),
                  mediaType: "video",
                  mediaPresent: footer_present,
                  media:  "/5xruby/5xruby_CTA.mp4",
                  pain: t("content.project_uiux_uiux4.althoughASharedCtaExistedTheHomepage"),
                  solution: t("content.project_uiux_uiux4.iIncreasedTheCtaSectionSHeight"),
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>

                  {/* ??暺?蝷箏? */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaType === "video" && item.mediaPresent?.endsWith?.('.mp4') ? (
                      <video
                        src={item.mediaPresent}
                        autoPlay loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.mediaPresent} alt={t("content.project_uiux_uiux4.painPointValue0", { value0: (item.id) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1"><TranslatedText messageKey="content.project_uiux_uiux4.previousIssue" /></p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.pain}
                      </div>
                    </div>
                  </div>

                  {/* 閫?捱?寞?撅內? */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "video" ? (
                      <video
                        src={item.media}
                        autoPlay loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.media} alt={t("content.project_uiux_uiux4.solutionValue0", { value0: (item.id) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1"><TranslatedText messageKey="content.project_uiux_uiux4.solution" /></p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.solution}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

           {/* Section 3: ?嗡?? */}
            <div className="flex flex-col gap-6 mt-4">
              <h2 className="text-[#00437B] text-xl font-extrabold pb-2"><TranslatedText messageKey="content.project_uiux_uiux4.otherPagesAndSystemImprovements" /></h2>
              {[
                {
                  id: "08",
                  title: t("content.project_uiux_uiux4.blogFeaturedArticlesAndAdminControls"),
                  mediaPresentType: "image", // ??嚗???
                  mediaPresent: blog_present,
                  mediaType: "video",        // 閫?捱?寞?嚗蔣??
                  media: "/5xruby/5xruby_blog.mp4",
                  videoIndex: 0,             // 鋆? videoIndex: 0
                  pain: t("content.project_uiux_uiux4.articlesCouldOnlyBeSortedChronologicallyCausing"),
                  solution: t("content.project_uiux_uiux4.iAddedAFeaturedTabSoVisitors"),
                },
                {
                  id: "09",
                  title: t("content.project_uiux_uiux4.bannerComponentRedesign"),
                  mediaPresentType: "image",
                  mediaPresent: banner_present,
                  mediaType: "image",
                  media: banner,
                  pain: t("content.project_uiux_uiux4.theOldBannersLookedDatedAndComponent"),
                  solution: t("content.project_uiux_uiux4.iRebuiltBannersAsModularComponentsWith"),
                },
                {
                  id: "10",
                  title: t("content.project_uiux_uiux4.newSoftwareDevelopmentPage"),
                  mediaPresentType: "image", // ??嚗蔣??
                  mediaPresent: hero_present,
                  mediaType: "video",        // 閫?捱?寞?嚗蔣??
                  media: "/5xruby/5xruby_dev.mp4",
                  videoIndex: 1,             // ?寧 videoIndex: 1 (?踹???09 銵?)
                  pain: t("content.project_uiux_uiux4.althoughSoftwareDevelopmentWasTheCoreBusiness"),
                  solution: t("content.project_uiux_uiux4.iAddedASoftwareDevelopmentPageUnder"),
                },
                {
                  id: "11",
                  title: t("content.project_uiux_uiux4.interactiveFooterMap"),
                  mediaType: "image",
                  mediaPresent: footer_present,
                  media: footer,
                  pain: t("content.project_uiux_uiux4.theFooterRepeatedNavigationInformationEvenThough"),
                  solution: t("content.project_uiux_uiux4.iReplacedRepeatedNavigationLinksWithAn"),
                },
              ].map((item) => (
                <div key={item.id} className="w-full bg-[rgba(255,255,255,0.5)] rounded-3xl p-6 sm:p-8 flex flex-col gap-1">
                  <p className="font-bold text-[#00437B] text-xl mb-3">{item.id}. {item.title}</p>

                  {/* ??暺?蝷箏? */}
                  <div className="flex flex-col lg:flex-row items-center gap-4">
                    {item.mediaPresentType === "video" ? (
                      <video
                        ref={(el) => {
                          if (el && typeof item.videoIndex === "number") {
                            videoRefs.current[item.videoIndex * 2] = el;
                          }
                        }}
                        src={item.mediaPresent}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.mediaPresent} alt={t("content.project_uiux_uiux4.painPointValue0", { value0: (item.id) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1"><TranslatedText messageKey="content.project_uiux_uiux4.previousIssue" /></p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.pain}
                      </div>
                    </div>
                  </div>

                  {/* 閫?捱?寞?撅內? */}
                  <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
                    {item.mediaType === "video" ? (
                      <video
                        ref={(el) => {
                          if (el && typeof item.videoIndex === "number") {
                            videoRefs.current[item.videoIndex * 2 + 1] = el;
                          }
                        }}
                        src={item.media}
                        loop muted playsInline
                        className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0"
                      />
                    ) : (
                      <Image src={item.media} alt={t("content.project_uiux_uiux4.solutionValue0", { value0: (item.id) })} className="rounded-[3vh] w-full lg:w-[70%] flex-shrink-0 h-auto" />
                    )}
                    <div className="text-[#00437B] lg:w-[30%] w-full">
                      <p className="font-bold mb-1"><TranslatedText messageKey="content.project_uiux_uiux4.solution" /></p>
                      <div className="whitespace-pre-line -[text-indent:1.5em]">
                        {item.solution}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>

       {/* ?銵祕雿敦蝭 */}
        <div className="w-full flex flex-row gap-4 p-2">
          <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] h-[30px] flex-shrink-0 rounded-full"></div>
          <div className="flex flex-col w-full">
            <p className="text-[#008BBF] text-xl font-bold whitespace-pre-line mb-4"><TranslatedText messageKey="content.project_uiux_uiux4.technicalImplementation" /></p>

            <div className="flex flex-col gap-6 text-[#00437B]">

              {/* 撠汗???函?蝯辣 */}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.navigationAndSharedComponents" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]"><TranslatedText messageKey="content.project_uiux_uiux4.desktopNavigationUsesDropdownMenusWith" /><code>opacity</code> + <code>translateY</code><TranslatedText messageKey="content.project_uiux_uiux4.revealAnimationsTheResponsiveBreakpointIs" /><code>xl</code><TranslatedText messageKey="content.project_uiux_uiux4.1280pxMobileUsesAPlainJavascriptAccordion" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><TranslatedText messageKey="content.project_uiux_uiux4.theFooterIntegratesLeafletJsWithA" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><TranslatedText messageKey="content.project_uiux_uiux4.sharedStylesInclude" /><code>section-heading</code><TranslatedText messageKey="content.shared.listSeparator" /><code>section-subtitle</code><TranslatedText messageKey="content.project_uiux_uiux4.asWellAs" /><code>quote-wipe-line</code><TranslatedText messageKey="content.project_uiux_uiux4.forWordByWordRevealEffects" /></li>
                </ul>
              </div>

              {/* 擐???????*/}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.homePageAndAnimation" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.isometricGrid" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.aCustomCanvas2dAnimationUsesThe" /><code>destination-in</code><TranslatedText messageKey="content.project_uiux_uiux4.compositingModeInPlaceOfCss" /><code>mask-image</code><TranslatedText messageKey="content.project_uiux_uiux4.toPreventMemoryLeaksAndPerformanceBottlenecks" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.gsapScrolltrigger" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.scrollDrivenStackingCardsHeroAndVision" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.lenisSmoothScrolling" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.siteWideSmoothScrollingKeepsGsapTriggered" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.accordionCards" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.plainJavascriptReads" /><code>scrollHeight</code><TranslatedText messageKey="content.project_uiux_uiux4.toSet" /><code>max-height</code><TranslatedText messageKey="content.project_uiux_uiux4.inPixelsAvoidingCssSInabilityTo" /><code>0 → none</code><TranslatedText messageKey="content.project_uiux_uiux4.text" /></li>
                </ul>
              </div>

              {/* ?撱箇蔭?????*/}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.pagesAndServices" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.dedicatedPages" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.created" /><code>/product_development</code><TranslatedText messageKey="content.project_uiux_uiux4.forSoftwareDevelopmentConsultingAnd" /><code>/join-us</code><TranslatedText messageKey="content.project_uiux_uiux4.forCareers" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.gitlabServicePageRedesign" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.increasedTextSizeAndCardCornerRadius" /><code>rounded-2xl</code><TranslatedText messageKey="content.project_uiux_uiux4.separatedProcessStepComponentsAndRefinedMobile" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.articles" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.addedAFeaturedTabAndSeparateCard" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.consultation" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.extractedTheInquiryFormIntoAReusable" /></li>
                </ul>
              </div>

              {/* 敺蝞∠?蝟餌絞?芸? */}
              <div>
                <p className="font-semibold mb-2"><TranslatedText messageKey="content.project_uiux_uiux4.adminSystemImprovements" /></p>
                <ul className="pl-5 space-y-1">
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.carouselManagement" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.supportsMultilingualTitlesDescriptionsTagsAndButton" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.articleManagement" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.addedA" /><code>featured</code><TranslatedText messageKey="content.project_uiux_uiux4.databaseFieldForFeaturedArticleSelectionAnd" /></li>
                  <li className="pl-[1em] [text-indent:-1em]"><strong><TranslatedText messageKey="content.project_uiux_uiux4.formsAndValidation" /></strong><TranslatedText messageKey="content.project_uiux_uiux4.addedASharedFormHeaderComponentFor" /></li>
                </ul>
              </div>

            </div>
          </div>
        </div>

        {/* ?賊???? */}
        <div className="w-full mt-8 flex">
          <p className="text-[#00437B] flex items-center font-bold pr-5 text-xl pb-0.5"><TranslatedText messageKey="content.project_uiux_uiux1.relatedLinks" /></p>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => window.open("https://5xruby.com/", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.currentSite" />
            </button>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1LZtGhBab3bHYvwgL9VWZmBTrWvS0JajV/view?usp=drive_link", "_blank")}
              className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1 transform transition duration-300 hover:scale-105 cursor-pointer"
            >
              <TranslatedText messageKey="actions.newVersion" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}