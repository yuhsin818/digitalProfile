import Image from "next/image";

import Game1 from "@/app/image/DogGame.png";
import game_dog1 from "@/app/image/dog01.png";
import game_dog2 from "@/app/image/dog02.png";
import game_dog3 from "@/app/image/dog03.png";
import game_dog4 from "@/app/image/dog04.png";
import game_dog5 from "@/app/image/dog05.png";

import Game2 from "@/app/image/3Dgame.png";
import game_3D1 from "@/app/image/3Dgame01.png";
import game_3D2 from "@/app/image/3Dgame02.png";
import game_3D3 from "@/app/image/3Dgame03.png";
import game_3D4 from "@/app/image/3Dgame04.png";

import Game3 from "@/app/image/game3.png";
import game_web1 from "@/app/image/game3_01.png";
import game_web2 from "@/app/image/game3_02.png";
import game_web3 from "@/app/image/game3_03.png";
import game_web4 from "@/app/image/game3_04.png";
import game_web5 from "@/app/image/game3_05.png";

import P5js1 from "@/app/image/p5js_1.png"
import p5js1_01 from "@/app/image/p5js1_01.png";
import p5js1_02 from "@/app/image/p5js1_02.png";
import p5js1_03 from "@/app/image/p5js1_03.png";
import p5js1_04 from "@/app/image/p5js1_04.png";

import P5js2 from "@/app/image/p5js_2.png"
import p5js2_01 from "@/app/image/p5js2_01.png";
import p5js2_02 from "@/app/image/p5js2_02.png";

import P5js3 from "@/app/image/p5js_3.png"
import p5js3_01 from "@/app/image/p5js3_01.png";
import p5js3_02 from "@/app/image/p5js3_02.png";
import p5js3_03 from "@/app/image/p5js3_03.png";
import p5js3_04 from "@/app/image/p5js3_04.png";

import P5js4 from "@/app/image/p5js_4.png"
import p5js4_01 from "@/app/image/p5js4_01.png";
import p5js4_02 from "@/app/image/p5js4_02.png";
import p5js4_03 from "@/app/image/p5js4_03.png";
import p5js4_04 from "@/app/image/p5js4_04.png";

import P5js5 from "@/app/image/p5js_5.png"
import p5js5_01 from "@/app/image/p5js5_01.png";
import p5js5_02 from "@/app/image/p5js5_02.png";
import p5js5_03 from "@/app/image/p5js5_03.png";
import p5js5_04 from "@/app/image/p5js5_04.png";
import p5js5_05 from "@/app/image/p5js5_05.png";
import p5js5_06 from "@/app/image/p5js5_06.png";

import Web1 from "@/app/image/web1.png"
import web1_01 from "@/app/image/web1_01.png";
import web1_02 from "@/app/image/web1_02.png";
import web1_03 from "@/app/image/web1_03.png";
import web1_04 from "@/app/image/web1_04.png";

import Web2 from "@/app/image/web2.png"
import web2_01 from "@/app/image/web2_01.png";
import web2_02 from "@/app/image/web2_02.png";
import web2_03 from "@/app/image/web2_03.png";

import Web3 from "@/app/image/web3.png"
import web3_01 from "@/app/image/web3_01.png";
import web3_02 from "@/app/image/web3_02.png";
import web3_03 from "@/app/image/web3_03.png";
import web3_04 from "@/app/image/web3_04.png";

import Final from "@/app/image/final.png"
import final01 from "@/app/image/final01.png";
import final02 from "@/app/image/final02.png";
import final03 from "@/app/image/final03.png";
import final04 from "@/app/image/final04.png";
import final05 from "@/app/image/final05.png";
import final06 from "@/app/image/final06.png";
import final_example from "@/app/image/final_example.png";

import Photo from "@/app/image/photo1.jpg";
import Design from "@/app/image/Design.png";
import AE from "@/app/image/AE2.png";

import UIUX1 from "@/app/image/uiux1_cover.png";
import UIUX2 from "@/app/image/uiux2_cover.png";
import UIUX3 from "@/app/image/uiux3_cover.png";

import PM1 from "@/app/image/PM1.jpg";
import PM2 from "@/app/image/PM2.jpg";
import PM3 from "@/app/image/PM3.jpg";

import Web4 from "@/app/image/5xruby_web.png";
import Web5 from "@/app/image/SOSI_web.png";
import Web6 from "@/app/image/to-do.png";


export function getProjects(t) {
  return [
  {
    id: "game1",
    category: "game",
    name: t("content.projects.nccuStrayDogEscape"),
    cover: Game1,

    intro_short: t("content.projects.anActionRunnerInspiredByStrayDogs"),

    intro: t("content.projects.thisActionGameDrawsOnTheIssue"),

    type: t("content.projects.browserBasedActionRunnerBuiltWithP5"),

    flow: [
      {
        img: game_dog1,
        text: t("content.projects.introductionToTheSettingObjectiveAndControls"),
      },
      {
        img: game_dog2,
        text: t("content.projects.playersStartWith10HealthPointsDogs"),
      },
      {
        img: game_dog3,
        text: t("content.projects.collectAnUmbrellaOnTheRoadAnd"),
      },
      {
        img: game_dog4,
        text: t("content.projects.moreDogsAppearAsTimeRunsOut"),
      },
      {
        img: game_dog5,
        text: t("content.projects.surviveThe90SecondCountdownWithHealth"),
      },
    ],

    tech: [
      t("content.projects.collisionDetectionAdjustsThePlayerSHorizontal"),
      t("content.projects.umbrellasFallFromAboveAtAFixed"),
      t("content.projects.theProbabilityOfDogsSpawningIncreasesEvery"),
      t("content.projects.mousepressedAdvancesTheIntroductionStartsTheTimer"),
    ],

    links: {
      game: "https://dog-game-ivory.vercel.app/",
    }
  },

  {
    id: "game3",
    category: "game",
    name: t("content.projects.noRefunds"),
    cover: Game3,

    intro_short: t("content.projects.aGameAboutDarkPatternsInWeb"),

    intro: t("content.projects.playersReadAnArticleAboutDarkPatterns"),

    type: t("content.projects.browserGameBuiltWithBootstrapAndP5"),

    flow: [
      {
        img: game_web1,
        text: t("content.projects.readTheGameInstructions"),
      },
      {
        img: game_web2,
        text: t("content.projects.carefullyCloseFixedAdsOnEitherSide"),
      },
      {
        img: game_web3,
        text: t("content.projects.accidentallyClickingAnAdForcesThePlayer"),
      },
      {
        img: game_web4,
        text: t("content.projects.afterReadingScrollToTheBottomAnd"),
      },
      {
        img: game_web5,
        text: t("content.projects.theResultsScreenCalculatesAScoreUsing"),
      }
    ],


    links: {
      demo: "https://drive.google.com/file/d/1--2je17qNhmTaZ0ZoGbafbGseouj_eqN/view?usp=drive_link"
    }
  },

  {
    id: "game2",
    category: "game",
    name: t("content.projects.mansionDefense"),
    cover: Game2,

    intro_short: t("content.projects.a3dShooterMadeWithUnityA"),

    intro: t("content.projects.a3dShooterMadeWithUnityA2"),

    type: t("content.projects.3dShooterBuiltWithUnity"),

    flow: [
      {
        img: game_3D1,
        text: t("content.projects.defeatMonstersToEarnPointsMonstersOn"),
      },
      {
        img: game_3D2,
        text: t("content.projects.monstersDetectThePlayerAndMoveToward"),
      },
      {
        img: game_3D3,
        text: t("content.projects.moveWithTheArrowKeysOrWasd"),
      },
      {
        img: game_3D4,
        text: t("content.projects.aSuccessMessageAppearsWhenTheTarget"),
      }
    ],

    tech: [
      t("content.projects.character1PressingQCallsResetRestoring"),
      t("content.projects.magicOrb1PressingZCreatesAn"),
      t("content.projects.monsters1PlayersensorDetectsNearbyCollidersAnd"),
      t("content.projects.uiManager1StartObtainsTheTextmeshprougui"),
    ]
    ,

    links: {
      report: "https://drive.google.com/file/d/19aVtIYanaegnpCGkVPZ6xk0-EX5dzg0H/view?usp=drive_link",
    }
  },

  {
    id: "final",
    category: "p5js",
    name: "Frame",
    cover: Final,

    isFeatured: true,

    intro_short: t("content.projects.frameIsAnInteractiveProjectionInstallationCombining"),

    intro: t("content.projects.deepInAForestStandsAMirror"),

    background: t("content.projects.frameEncouragesPeopleToBreakFreeFrom"),

    type: t("content.projects.interactiveProjectionInstallationBuiltWithP5Js"),

    flow: [
      {
        img: final01,
        text: t("content.projects.beforeEnteringWatchTheIntroductoryAnimationAnd"),
      },
      {
        img: final02,
        text: t("content.projects.enterTheExperienceAreaAndStandIn"),
      },
      {
        img: final03,
        text: t("content.projects.watchTheSecondIntroductoryAnimationAndThe"),
      },
      {
        img: final04,
        text: t("content.projects.moveYourBodyToFindTheText"),
      },
      {
        img: final_example,
        text: t("content.projects.theScreenDisplaysSentencesBeginningWithYou"),
      },
      {
        img: final05,
        text: t("content.projects.findingTheSentenceTriggersTheSuccessEnding"),
      },
      {
        img: final06,
        text: t("content.projects.leaveWhenTheEndOfExperienceMessage"),
      }
    ],

    final_tech: [
      {
        title: "p5.js",
        text: t("content.projects.theP5JsExperienceHasFourStages")
      },
      {
        title: t("content.projects.backendIntegration"),
        text: t("content.projects.theReactWebsiteIsBuiltIntoStatic")
      }
    ],

    final_upgrade: [
      {
        title: t("content.projects.improvementsAfterPreExhibitionTesting"),
        text1:
          t("content.projects.bothIntroductoryAnimationsOriginallyPlayedOnThe"),
        text2:
          t("content.projects.initiallyOnlyBackgroundMusicPlayedDuringThe"),
        text3:
          t("content.projects.testParticipantsFoundTheEndingAbruptAnd")
      },
      {
        title: t("content.projects.automation"),
        text1:
          t("content.projects.responsesEnteredOutsideTheExperienceAreaAre"),
        text2:
          t("content.projects.afterCompletingTheWebsiteParticipantsEnterAnd"),
        text3:
          t("content.projects.staffMonitoredTheCameraAndProgramFrom")
      }
    ],


    links: {
      demo: "https://drive.google.com/file/d/1GObyiuoxr0okDCFDiLm6809tyeOL7nXa/view?usp=sharing",
      report: "https://drive.google.com/file/d/1XE_Gh3x0XcGX6WLEZzG3soFFmxRiy5SV/view?usp=sharing",
    }
  },

  {
    id: "p5js5",
    category: "p5js",
    name: "GOTCHA",
    cover: P5js5,

    intro_short: t("content.projects.inspiredByCapsuleToyMachinesGotchaUses"),

    intro: t("content.projects.gotchaTakesInspirationFromRowsOfCapsule"),

    type: t("content.projects.generativeArtworkCreatedWithP5Js"),

    example: [
      {
        img: p5js5_01,
      },
      {
        img: p5js5_02,
      },
      {
        img: p5js5_03,
      },
      {
        img: p5js5_04,
      },
      {
        img: p5js5_05,
      },
      {
        img: p5js5_06,
      }
    ],

    links: {
      play: "https://www.fxhash.xyz/generative/slug/gotcha",
    }
  },

  {
    id: "p5js1",
    category: "p5js",
    name: "Under The Sea",
    cover: P5js1,

    intro_short: t("content.projects.flowFieldsSimulateUnderwaterAlgaeThroughInterweaving"),

    intro: t("content.projects.thisWorkUsesFlowFieldsToEvoke"),

    type: t("content.projects.generativeArtworkCreatedWithP5Js"),

    example: [
      {
        img: p5js1_01,
      },
      {
        img: p5js1_02,
      },
      {
        img: p5js1_03,
      },
      {
        img: p5js1_04,
      }
    ],

    links: {
      play: "https://openprocessing.org/sketch/2130748"
    }
  },

  {
    id: "p5js2",
    category: "p5js",
    name: "Hellish River",
    cover: P5js2,

    intro_short: t("content.projects.usingStackAndHillsTechniquesThisWork"),

    intro: t("content.projects.thisWorkUsesStackAndHillsTechniques"),

    type: t("content.projects.generativeArtworkCreatedWithP5Js"),

    example: [
      {
        img: p5js2_01,
      },
      {
        img: p5js2_02,
      }
    ],

    links: {
      play: "https://openprocessing.org/sketch/2125279",
    }
  },

  {
    id: "p5js3",
    category: "p5js",
    name: "Abstract Slicing Journey",
    cover: P5js3,

    intro_short: t("content.projects.builtAroundRecursionAndBlocksThisWork"),

    intro: t("content.projects.usingRecursionAndBlocksThisWorkCreates"),

    type: t("content.projects.generativeArtworkCreatedWithP5Js"),

    example: [
      {
        img: p5js3_01,
      },
      {
        img: p5js3_02,
      },
      {
        img: p5js3_03,
      },
      {
        img: p5js3_04,
      }
    ],

    links: {
      play: "https://openprocessing.org/sketch/2101986",
    }
  },

  {
    id: "p5js4",
    category: "p5js",
    name: "Flower Planet",
    cover: P5js4,

    intro_short: t("content.projects.noiseAndColorControlGenerateAPlanet"),

    intro: t("content.projects.thisWorkUsesNoiseAndColorControl"),

    type: t("content.projects.generativeArtworkCreatedWithP5Js"),

    example: [
      {
        img: p5js4_01,
      },
      {
        img: p5js4_02,
      },
      {
        img: p5js4_03,
      },
      {
        img: p5js4_04,
      }
    ],

    links: {
      play: "https://openprocessing.org/sketch/2064930",
    }
  },


   {
    id: "uiux4",
    category: "uiux",
    name: t("content.projects.5xrubyWebsiteRedesign"),
    cover: Web4,
    isFeatured: true,
    intro_short: t("content.projects.iLedAComprehensiveCompanyWebsiteRedesign"),
  },

  {
    id: "uiux5",
    category: "uiux",
    name: t("content.projects.sosiWebsiteRedesign"),
    cover: Web5,
    isFeatured: true,
    intro_short: t("content.projects.aSiteWideUiRedesignForSosi"),
  },

  {
    id: "uiux3",
    category: "uiux",
    name: t("content.projects.nationalExaminationServicePlatform"),
    cover: UIUX3,

    intro_short: t("content.projects.aOneStopPlatformAddressingFragmentedNational"),

    intro: t("content.projects.thisProjectAddressesFragmentedNationalExaminationInformation"),

  },


  {
    id: "web1",
    category: "web",
    name: t("content.projects.yourMusicalInstrumentPersona"),
    cover: Web1,

    isFeatured: true,

    intro_short: t("content.projects.aPlayfulPersonalityQuizThatMatchesUsers"),

    intro: t("content.projects.thisPlayfulPersonalityQuizMatchesUsersWith"),

    type: t("content.projects.frontendWebsiteBuiltWithNextJs"),

    flow2: [
      {
        img: web1_01,
        text: t("content.projects.theHomepageIntroducesTheQuizAndIts"),
      },
      {
        img: web1_02,
        text: t("content.projects.chooseTheOptionThatBestDescribesYou"),
      },
      {
        img: web1_03,
        text: t("content.projects.selectViewResultsThisScreenDisplaysThe"),
      },
      {
        img: web1_04,
        text: t("content.projects.viewYourResultDownloadItAsAn"),
      }
    ],


    ux: [
      t("content.projects.aConciseClearIntroductionLowersTheEntry"),
      t("content.projects.theFlowMovesFromQuestionsToChoices"),
      t("content.projects.responsiveLayoutsAndVisualHierarchySupportBoth")
    ],

    ui: [
      t("content.projects.aSimpleDesignUsesFiveMainColors"),
      t("content.projects.alongsideMusicalDecorationsThePressedPianoKey"),
      t("content.projects.musicalNotesFollowTheCursorToReinforce"),
      t("content.projects.backgroundMusicChangesWithEachStagePizzicato")
    ],

    tech: [
      t("content.projects.builtAsASinglePageApplicationWith"),
      t("content.projects.zustandManagesQuizScoresAndTheConditions"),
      t("content.projects.reactBitsAndCustomAnimationsEnhanceInteraction"),
      t("content.projects.tailwindCssProvidesResponsiveLayoutsAndInteraction"),
      t("content.projects.reusableComponentsDefineSharedUiStylesAnd"),
    ],

    links: {
      play: "https://psychological-test-three.vercel.app/",
    }
  },

  {
    id: "web4",
    category: "web",
    name: t("content.projects.taskManagementSystem"),
    cover: Web6,

    intro_short: t("content.projects.aMultiUserTaskManagementApplicationBuilt"),
  },

  {
    id: "web2",
    category: "web",
    name: t("content.projects.bearClawMachine"),
    cover: Web2,

    intro_short: t("content.projects.anInteractiveBrowserGameUsingAModel"),

    intro: t("content.projects.anInteractiveBrowserGameUsingAModel"),

    type: t("content.projects.frontendWebsiteBuiltWithNextJs"),

    flow: [
      {
        img: web2_01,
        text: t("content.projects.introductionToTheControls"),
      },
      {
        img: web2_02,
        text: t("content.projects.moveWithWasdAndPressSpaceTo"),
      },
      {
        img: web2_03,
        text: t("content.projects.theResultShowsOneOfThreePrizes"),
      }
    ],

    ui: [
      t("content.projects.brightPlayfulColorsEvokeAnArcadeMachine"),
      t("content.projects.consistentIconsAndColorHierarchyStrengthenVisual"),
      t("content.projects.sweetalert2ProvidesPlayfulDialogsForTheStart")
    ],

    tech: [
      t("content.projects.nextJsAndReactPowerTheInteractive"),
      t("content.projects.reactThreeFiberBuildsThe3dScene"),
      t("content.projects.usekeyboardcontrolsSupportsWasdArrowKeysAndSpace"),
      t("content.projects.usegltfLoadsTheMachineSGlbModel"),
      t("content.projects.mathRandomDeterminesPrizesUsestateTracksThe")
    ],

    links: {
      play: "https://claw-machine-six.vercel.app/",
    }
  },

  {
    id: "web3",
    category: "web",
    name: t("content.projects.periodCare"),
    cover: Web3,

    intro_short: t("content.projects.aPeriodFriendlyWebsiteAddressingPeriodPoverty"),

    intro: t("content.projects.thisProjectGrewFromConcernAboutPeriod"),

    type: t("content.projects.fullStackWebsiteBuiltWithNextJs"),

    flow2: [
      {
        img: web3_01,
        text: t("content.projects.theChatFeatureLetsUsersTalkWith"),
      },
      {
        img: web3_02,
        text: t("content.projects.selectTheComfortOptionToEnterEmotional"),
      },
      {
        img: web3_03,
        text: t("content.projects.selectTheQuestionOptionToEnterConsultation"),
      },
      {
        img: web3_04,
        text: t("content.projects.theMapShowsNearbyLocationsProvidingFree"),
      }
    ],

    tech: [
      t("content.projects.1DataLoadingAndPreprocessingLoadA"),
      t("content.projects.2VectorDatabaseAndSemanticMatchingOpenai"),
      t("content.projects.3AssistantPersonaAndPromptsDefineA"),
      t("content.projects.4ApiIntegrationAndCompatibilityUseThe"),
      t("content.projects.5LiveWebIntegrationRunAFlask")
    ],

    links: {
      demo: "https://drive.google.com/file/d/1WoGc9-Y19tIZx-kMvdK7xollyqFb7YbF/view?usp=drive_link",
      report: "https://drive.google.com/file/d/1B7WI0a_P-CPjefhIY1x-dKVljCpGmtFF/view?usp=sharing",
    }
  },


  {
    id: "photo",
    category: "others",
    name: t("content.projects.photography"),
    cover: Photo,

    intro_short: t("content.projects.photosOfMyPlushCollectionSharedOn"),

    intro: t("content.projects.photosOfMyPlushCollectionSharedOn"),

  },

  {
    id: "design",
    category: "others",
    name: t("content.projects.graphicDesign"),
    cover: Design,

    intro_short: t("content.projects.promotionalArtworkForNccuPsychologyNightNccu"),

    intro: t("content.projects.promotionalArtworkForNccuPsychologyNightNccu"),

  },

  {
    id: "AE",
    category: "others",
    name: t("content.projects.motionDesign"),
    cover: AE,

    intro_short: t("content.projects.videoAssignmentsFromMyAfterEffectsCourse"),

    intro: t("content.projects.videoAssignmentsFromMyAfterEffectsCourse"),

  },

  {
    id: "uiux2",
    category: "uiux",
    name: "MORE",
    cover: UIUX2,

    intro_short: t("content.projects.aUiDesignForAOneStop"),

    intro: t("content.projects.aUiDesignForAOneStop2"),

    type: t("content.projects.personalityQuizWebsiteBuiltWithNextJs"),

  },

  {
    id: "uiux1",
    category: "uiux",
    name: t("content.projects.exploreTaipeiNow"),
    cover: UIUX1,

    intro_short: t("content.projects.aRedesignOfTheExploreTaipeiNow"),

    intro: t("content.projects.aRedesignOfTheExploreTaipeiNow"),

    type: t("content.projects.personalityQuizWebsiteBuiltWithNextJs"),

  },

  {
    id: "PM1",
    category: "PM",
    name: t("content.projects.vivotekWebsiteEnhancement"),
    cover: PM1,

    intro_short: t("content.projects.anEnhancementProjectForVivotekSProduct"),

    links: {
      game: "https://dog-game-ivory.vercel.app/",
    }
  },

  {
    id: "PM2",
    category: "PM",
    name: t("content.projects.naerTaiwaneseAndHakkaDictionaryWebsiteEnhancement"),
    cover: PM2,

    intro_short: t("content.projects.anEnhancementProjectForNaerSTaiwanese"),

    intro: t("content.projects.thisActionGameDrawsOnTheIssue"),

    type: t("content.projects.browserBasedActionRunnerBuiltWithP5"),



    tech: [
      t("content.projects.collisionDetectionAdjustsThePlayerSHorizontal"),
      t("content.projects.umbrellasFallFromAboveAtAFixed"),
      t("content.projects.theProbabilityOfDogsSpawningIncreasesEvery"),
      t("content.projects.mousepressedAdvancesTheIntroductionStartsTheTimer"),
    ],

    links: {
      game: "https://dog-game-ivory.vercel.app/",
    }
  },

  {
    id: "PM3",
    category: "PM",
    name: "SketchUp Plugin",
    cover: PM3,

    intro_short: t("content.projects.iPlannedAModelingSoftwarePluginDespite"),

    intro: t("content.projects.thisActionGameDrawsOnTheIssue"),

    type: t("content.projects.browserBasedActionRunnerBuiltWithP5"),



    tech: [
      t("content.projects.collisionDetectionAdjustsThePlayerSHorizontal"),
      t("content.projects.umbrellasFallFromAboveAtAFixed"),
      t("content.projects.theProbabilityOfDogsSpawningIncreasesEvery"),
      t("content.projects.mousepressedAdvancesTheIntroductionStartsTheTimer"),
    ],

    links: {
      game: "https://dog-game-ivory.vercel.app/",
    }
  },



];
}
