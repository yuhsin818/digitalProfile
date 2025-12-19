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

export const projects = [
    {
      id: "game1",
      category: "game",
      name: "政大流浪狗躲避戰",
      cover: Game1,

      intro_short:'此遊戲以「政大流浪狗問題」為主題，結合山坡校園與遺失雨傘等校園日常，打造跑酷動作遊戲。玩家需閃避迎面而來的流浪狗，撿拾雨傘作為防禦道具，目標是安全抵達宿舍。',
  
      intro: `此遊戲是以「政大流浪狗問題」為發想，並融合其他政大生熟悉的要素，例如：山坡地的校園、時常被偷或遺忘的雨傘等，設計的動作類遊戲。希望透過這個趣味遊戲引起政大生的共鳴，並提升大家對於流浪狗的防範意識。
              遊戲玩法是控制政大生閃避迎面不斷襲來的流浪狗，直到平安抵達位於山上的宿舍。
              除了左右閃避外，亦可以撿拾路上隨機出現的雨傘作為抵禦道具，在開啟雨傘的時間內不會受到狗群的攻擊傷害。
              遊戲最後出現的事件「狗后召喚大量狗群」則是帶出政大流浪狗問題的根源「狗后」，由於這位校外人士疑似常常私自帶流浪狗進入政大校園餵養，導致學生遭咬傷事件頻傳，故加入這個遊戲階段作為最後關卡。`,
  
      type: "網頁跑酷類動作遊戲（以 p5.js 製作）",
  
      flow: [
        {
          img: game_dog1,
          text: "遊戲背景、目標與遊玩方式介紹",
        },
        {
          img: game_dog2,
          text: "遊戲開始，玩家有十點生命值。流浪狗不斷襲來，碰撞一次扣一點生命，玩家可左右閃避。",
        },
        {
          img: game_dog3,
          text: "路上出現雨傘道具可撿取，按空白鍵可啟動，提供 5 秒防護。",
        },
        {
          img: game_dog4,
          text: "秒數越少，狗越多。最後十秒進入「狗后召喚大量狗群」的高難度階段。",
        },
        {
          img: game_dog5,
          text: "90 秒結束時若生命值大於 0，玩家即成功抵達宿舍；反之則失敗。",
        },
      ],
  
      tech: [
        "碰撞偵測依是否啟動雨傘改變 X 軸寬度，開傘時玩家可碰撞的範圍更大，擊退更多襲來的狗。若在沒開傘的狀況下跟狗產生碰撞，則切換為碰撞圖片和碰撞音效，且減少血量。",
        "雨傘道具以固定速度從上方落下，玩家碰撞後將記錄在物件中。keyPressed( ) 監聽空白鍵以啟動雨傘並播放開傘音效。敵人被雨傘擊中後則切換為撞擊圖片與產生圖片偏移，模擬被擊飛效果。",
        "每 20 秒就會提升一次狗出現的機率，並在倒數 50 秒後加入移動速度更快的狗。最後十秒大幅提升狗的出現率 if (random(1) < 0.08)，並顯示警告訊息，以改變文字 alpha 值的方式呈現閃爍效果。",
        "mousePressed( ) 滑鼠點擊事件所對應的功能，在第一頁為換頁、第二頁開始計時、遊戲結束頁為重啟遊戲 reset( )。",
      ],
  
      links: {
        game: "https://dog-game-ivory.vercel.app/",
      }
    },

    {
      id: "game3",
      category: "game",
      name: "指定不退",
      cover: Game3,

      intro_short: '本遊戲以「網頁廣告的暗黑模式」為主題，模擬使用者在大量彈窗與廣告干擾中閱讀資訊的情境。玩家需分辨內文、廣告與訂閱陷阱，避免誤觸產生不必要的年費支出，藉此提醒使用者提高對暗黑模式的警覺。',
  
      intro: `玩家需要在花俏的彈跳、固定式等廣告中努力完成閱讀介紹「網頁廣告的暗黑模式」的文章，同時避免點擊到廣告以免不當訂閱，藉以模擬現今人們使用網路時時常被干擾的情境。
              玩家需要在複雜的畫面中分辨內文、廣告與訂閱，避免點擊到廣告或訂閱。最後試算出玩家成功關閉廣告的次數、不小心點到廣告的次數與無意中忘記取消訂閱所會花費的總年費。遊戲旨在提醒玩家小心暗黑模式的網站，以免因為誤觸廣告無意中付費訂閱，掉入詐騙陷阱。
              \n（此為小組作品，我負責的部分為利用 p5.js 製作彈窗廣告）`,
  
      type: "網頁遊戲（以 Bootstrap + p5.js 製作）",
  
      flow: [
        {
          img: game_web1,
          text: "閱讀遊戲說明頁。",
        },
        {
          img: game_web2,
          text: "小心關閉每個網頁上的廣告，廣告類型有左右邊的固定廣告和彈出廣告;彈出廣告會有假的X按鈕，誤導使用者誤擊。",
        },
        {
          img: game_web3,
          text: "不小心點到廣告就要被迫看完。",
        },
        {
          img: game_web4,
          text: "閱讀完成，滑到底部後，點擊「完成閱讀」結束遊戲。",
        },
        {
          img: game_web5,
          text: "跳出計分頁面：依據通關時長、成功「關閉廣告」次數按到「廣告」次數、「訂閱」總年費計分。",
        }
      ],
  
  
      links: {
        demo: "https://drive.google.com/file/d/1--2je17qNhmTaZ0ZoGbafbGseouj_eqN/view?usp=drive_link"
      }
    },

    {
      id: "game2",
      category: "game",
      name: "豪宅保衛戰",
      cover: Game2,

      intro_short:'此遊戲是以 unity 製作的 3D射擊遊戲，素材選用豪宅的場景，角色與怪物則是分別匯入可愛風格的 asset 塑造統一的風格和療癒的遊玩體驗。',
  
      intro: `此遊戲是以 unity 製作的 3D射擊遊戲，素材選用豪宅的場景，角色與怪物則是分別匯入可愛風格的 asset 塑造統一的風格和療癒的遊玩體驗。`,
  
      type: "3D射擊遊戲（以 unity 製作）",
  
      flow: [
        {
          img: game_3D1,
          text: "打倒怪物可獲得分數，越下層的怪物分數越高，且移動速度更快。遊戲目標是 60 秒內達到指定分數。被怪物撞到一次會扣一點生命值，若生命值歸零則遊戲失敗。",
        },
        {
          img: game_3D2,
          text: "怪物偵測到玩家後會主動往玩家方向前進",
        },
        {
          img: game_3D3,
          text: "按上下左右（或 W, S, A, D ）鍵移動，按空白鍵可跳躍，按 Z 鍵攻擊。",
        },
        {
          img: game_3D4,
          text: "達到指定分數後跳出成功的字樣。",
        }
      ],
  
      tech: [
        "角色：\n1. 按下 'Q' 鍵會觸發 reset( ) 函式將角色位置重置並允許操作。\n2. 按下 'Z' 鍵會觸發 \"attack\" 動畫並在 0.3 秒後切換（發射魔法球）。\n3. 按下空白鍵 (\"space\") 會觸發跳躍動畫。\n4. 按下方向鍵或 WASD 鍵可控制角色移動方向，改變角色旋轉角度並切換為移動動畫。",
        "魔法球：\n1. 魔法球在角色按 Z 鍵攻擊時生成，並具有預設的生命週期 LifeTime (2.0f)，無論是否擊中目標，時間到後都會自動銷毀。\n2. 透過 OnTriggerEnter 偵測碰撞；碰撞時會切換為爆炸特效。\n3. 向被擊中的物體發送 \"Hit\" 訊息，並傳遞 damageValue (15)。\n4. 發動效果後魔法球自毀。",    
        "怪物：\n1. 透過 PlayerSensor 偵測周圍的碰撞物體，並將偵測到的第一個物體設為 FollowTarget（玩家）。\n2. 若有 FollowTarget 且血量大於 0，怪物會轉向玩家並切換為跑步動畫。\n3. 透過 AttackSensor 判斷是否進入攻擊範圍；若在範圍內會啟動 \"Attack\" 動畫並停止移動。\n4. 收到 \"Hit\" 訊息後觸發被擊中動畫；當 CurrentHP 小於或等於 0 時，uiManager 會增加 10 分。",      
        "UI 管理器：\n1. Start( ) 中取得 TextMeshProUGUI 組件。\n2. 初始化顯示文本為 ScorePrefix（例如 \"Score: 250/\"）+ 當前分數 (0)。\n3. 分數增加時更新 UI 文本。\n4. 若達到或超過 240 分，UI 切換為 \"Success\" 字樣。",
      ]
      ,
  
      links: {
        report: "https://drive.google.com/file/d/19aVtIYanaegnpCGkVPZ6xk0-EX5dzg0H/view?usp=drive_link",
      }
    },

    {
      id: "p5js5",
      category: "p5js",
      name: "GOTCHA",
      cover: P5js5,

      intro_short:'《GOTCHA》以街頭扭蛋機為靈感，透過生成式藝術的隨機機制，打造不斷變化的可愛扭蛋宇宙。觀者點擊畫面即可觸發「轉扭蛋」，即時生成具表情、造型與稀有度差異的扭蛋，並與隨機生成的扭蛋機連動，形成如遊戲般的互動體驗。',
  
      intro: `《GOTCHA》以現代街頭常見的扭蛋機作為靈感來源，從扭蛋店成排陳列的機台延伸出一種「扭蛋自成的世界」之想像。為了呈現這個可愛而獨立的宇宙，我以生成式藝術的隨機性作為核心機制，呼應人們轉動扭蛋機時的驚喜感。作品畫面由隨機生成的扭蛋機、背景與扭蛋組成，透過互動按壓即可轉一次扭蛋，生成新的扭蛋並改變畫面狀態，讓作品具備遊戲般的參與性。
              \n扭蛋本身具有大量參數化的組成：包含顏色、毛髮長度與粗細、排列方式，以及利用 noise 製造出的方向變化，使質感呈現更自然的生長感；臉部則具備約十種表情，並與對應的扭蛋機造型相同。扭蛋的大小、位置與類型亦由隨機決定，從機台內、出口到外部散落的扭蛋皆有不同狀態，甚至包含僅以外框呈現的透明扭蛋殼與少量才會出現的漸層稀有款。
              \n扭蛋機則同樣以隨機邏輯構成，包括顏色、造型、數量與位置。其最具辨識度的部分是機台上方的臉與耳朵造型，並與扭蛋的特徵相互對應，使整個世界具有一致的語彙。背景則由多組簡單圖形所組成，維持溫柔可愛的視覺風格；當畫面僅生成一台機台時，背景會自動延伸佔比，營造空間感。
              \n在互動設計上，我讓作品能真正「扭」出扭蛋：當觀者點擊畫面，畫面中央扭蛋機內的扭蛋會轉動，並在出口生成一顆新的扭蛋，而原本在出口的扭蛋則會被隨機拋到外部場景中，形成持續累積且永不重複的扭蛋景觀。最終，《GOTCHA》以生成式藝術的機制打造出一個可愛、隨機且持續生成的扭蛋宇宙，使每一次觀看與操作都像再次轉動扭蛋般充滿期待。`,
  
      type: "生成式藝術作品（以 p5.js 製作）",
  
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

      intro_short:'本作品運用 flow fields 技巧，透過交錯彎曲的線條模擬海底藻類的自然流動。畫面分為三層結構：細線流動、互補色粗線條與疊加圓點顆粒，增加層次與深度。線條由多個圓形組成，並依 noise 曲率改變方向，使整體呈現有機且流動的視覺效果。',
  
      intro: `此為利用 flow fields 的技巧所創作的作品，主要想透過交錯、彎曲的線條模擬海底的藻類生態。\n\n畫布主要有三層結構，第一層是根據 noise field 生成的較細的線條；第二層為更粗、與第一層線條為互補色的流線；第三層是疊加在第一層線條上的圓點，增加顆粒感與深度。畫面呈現的彎曲線條主要是利用多個圓形拼成，並設定起點到終點圖形漸變的顏色，每一步依照noise的曲率改變方向，形成自然的流動感。`,
  
      type: "生成式藝術作品（以 p5.js 製作）",
  
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

      intro_short:'本作品運用 Stack and Hills 技術，透過 Perlin noise 計算生成大量彎曲線條，搭配昏暗髒污的色彩與手部素材，營造如地獄河流般的詭異景象。畫面由格點逐行掃描生成，每株線條如草般由矩形堆疊而成，隨噪聲彎曲流動，呈現水流與風向牽引的動態質感。',
  
      intro: `此作品運用 Stack and Hills 的技術，透過大量依據座標與 Perlin noise 計算的線條、昏暗且略顯骯髒的顏色組合，以及參雜其中的手部素材，模擬出如地獄的河流會有的光景。
              \n畫面以密集的格點逐行掃描，每一個位置都會因噪聲而產生高度偏移，形成類似河流起伏的基礎。在此基礎上，程式為每個有效位置生成一株「草」，其長度、粗細與初始角度皆由噪聲與亂數共同決定；每一株草再由許多小矩形逐步堆疊而成，每一步都依據 noise 輕微改變角度與方向，使線條呈現如水流或風向牽動的彎曲感。線條的顏色則使用兩種基底色做漸層插值，根部較深、末端較亮，再加入噪聲動態調整亮度，讓整體具有細膩的顆粒感。`,
  
      type: "生成式藝術作品（以 p5.js 製作）",
  
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

      intro_short:"本作品以 Recursion and Blocks 為核心，透過矩形不斷遞迴切分，建構出如電路板與系統介面的科技視覺。區塊依大小填入像素掃描線或粗細不一的邊框，搭配主色調與透明度變化，呈現介於數位介面、電路與虛擬空間之間的生成式結構。",
  
      intro: `此作品以 Recursion and Blocks 技巧為核心，透過大量自動分割的矩形區塊與充滿像素感的線條，構築出一個具有「科技介面」風格的視覺系統。
              \n整體畫面先由隨機選定的主色調建立背景，接著畫布被函式 ARect 與 BRect 不斷依據隨機比例水平或垂直切分，形成如電路板層級般的模組化結構。當某區塊被判定為足夠大時會繼續遞迴拆解；若太小則轉而以不同線材質填滿：ARect 使用由噪聲控制的點狀線列，營造掃描訊號或像素干擾的質感；BRect 則以粗細不一的矩形邊框，塑造宛如系統 UI 的邊界或感測區塊。顏色則以主色調為中心，加入隨機偏移與透明度變化，使整體風格更偏向數位介面、 hologram 或次世代控制面板。這些元素透過遞迴生成交錯、排列，最終形成一個由機械規則與隨機性共同生成的科技感視覺網格，像是介於程式語言、電子電路與虛擬空間之間的混合性圖形結構。`,
  
      type: "生成式藝術作品（以 p5.js 製作）",
  
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

      intro_short:'本作品以 noise 運算與色彩控制生成由花朵與根系構成的行星景觀。花朵位置由 Perlin noise 決定姿態，根系以圓點逐層聚集成球體，搭配色相漸層與非同步繪製，呈現如生命生長般的生成過程。',
  
      intro: `這個作品主要是以 noise 運算與色彩控制，構築一個由花朵與根系共同形成的類似於行星的景觀。
              \n整體畫面分為上下兩層：上方的花朵位置透過 Perlin noise 決定高度與傾斜角度，使花朵呈現自然散落的姿態；下方的根莖則以大量小圓點依據 noise 分布，逐層向下拉伸，逐漸聚集成球體般的質量，彷彿由根系構成的星球。作品在色彩上以隨機主色調為核心，再由高度控制 Hue 的漸層變化，使根部與花瓣產生相對的色調。渲染過程透過逐步 await 的非同步繪製，使花朵以近乎生長的方式逐一出現，強化從噪聲中生成的生命感。`,
  
      type: "生成式藝術作品（以 p5.js 製作）",
  
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
      id: "web1",
      category: "web",
      name: "你的靈魂樂器",
      cover: Web1,

      isFeatured: true,  

      intro_short:'此網頁是一個趣味心理測驗，透過測試使用者個性對應哪種樂器，呈現每個樂器在交響樂團中的角色定位。測驗共 10 題，提供 16 種可能結果，讓使用者在趣味互動中了解古典樂器的特性與其在樂團中的功能。',
  
      intro: `此網頁是一個測驗受試者的個性是類似於哪種樂器的趣味心理測驗。由於每個樂器在樂團中都各自扮演不同的角色，故我以此為發想，連結到每個人的個性可能對應到的樂器，製作此趣味測驗，同時也讓不熟悉古典樂的使用者能夠以這個測驗為契機了解個別樂器在交響樂中的定位。
              測驗總共有10題、16種可能的結果。`,
  
      type: "網頁趣味心理測驗（以 next.js 製作）",
  
      flow2: [
        {
          img: web1_01,
          text: "首頁介紹趣味心理測驗主題和背景，點選開始測驗後進入答題階段。",
        },
        {
          img: web1_02,
          text: "從四個選項中選擇最符合敘述的選項",
        },
        {
          img: web1_03,
          text: "點選查看結果（此頁顯示結果的16種樂器）。",
        },
        {
          img: web1_04,
          text: "顯示測驗結果，可以點選下載結果儲存結果的圖片，或是點選在玩一次重新測驗。",
        }
      ],


      ux:[
        "透過簡潔清晰的開場說明，降低使用門檻並提升完成率。",
        "設計流程包含：題目 → 選項 → 結果頁，並加入回饋動畫或交互效果，使使用者感受到即時回應。",
        "使用響應式設計與視覺階層，確保在手機與點電腦上皆有良好的體驗。"
      ],

      ui:[
        "設計簡約，且採用五種主要色調，對應四種類型的樂器（銅管、木管、弦樂、打擊樂）和封面、結果頁。",
        "在除了加入音樂相關素材作為裝飾外，不同問題頁面下方被按壓的的鋼琴鍵也會隨著題號往右側移動。",
        "隨著鼠標的移動軌跡產生音符（♫, ♩, ♪, ♬），塑造更強的互動感與凸顯音樂主題。",
        "背景音樂根據在每個作答階段有所不同，襯托每個階段的氛圍，例如：等待結果畫面是弦樂撥弦的音樂，帶出期待、雀躍的心情；而結果頁為較活潑的交響樂。"
      ],

      tech: [
        "使用 Next.js + React 建構 SPA 架構，並部署於 Vercel。",
        "利用 zustand 管理不同作答階段的頁面切換條件、測驗計分。",
        "套用 react.bits 以及自定義的動畫效果加強互動性。",
        "使用 Tailwind CSS 實作響應式版面與互動效果，確保跨裝置體驗一致。",
        "利用 component 定義不同頁面中會重複使用到的UI樣式、頁面基本架構。",
      ],
  
      links: {
        play: "https://psychological-test-three.vercel.app/",
      }
    },

    {
      id: "web2",
      category: "web",
      name: "熊熊夾娃娃機",
      cover: Web2,
  
      intro_short:'這是一個載入blender建模的網頁互動遊戲，可以控制娃娃機爪子抓取機台內娃娃，有機率獲得的獎品類型共有三種，亦有機率失敗沒抓到。',

      intro: `這是一個載入blender建模的網頁互動遊戲，可以控制娃娃機爪子抓取機台內娃娃，有機率獲得的獎品類型共有三種，亦有機率失敗沒抓到。`,
  
      type: "網頁3D互動抽獎遊戲（以 next.js 製作）",
  
      flow: [
        {
          img: web2_01,
          text: "操作方式介紹。",
        },
        {
          img: web2_02,
          text: "開始遊玩，按WASD上下左右移動，空白鍵抓取。",
        },
        {
          img: web2_03,
          text: "出現遊玩結果，共有三種獎品，以及未中獎。",
        }
      ],

      ui:[
        "使用明亮、帶童趣的配色風格，呼應「遊戲機台」的氛圍。",
        "使用一致的 icon 與色彩階層，提升整體設計的一致性與識別度。",
        "SweetAlert2 建立有趣可愛的遊戲彈窗（遊戲開始提示 + 抽獎結果圖片顯示）。"
      ],

      tech: [
        "利用Next.js + React 進行 SPA 互動式頁面設計。",
        "使用 React Three Fiber（R3F）打造 3D 遊戲場景，並加上 @react-three/drei 輔助元件（Environment、Camera、useGLTF、ContactShadows）。",
        "useKeyboardControls() 建立 WASD + 方向鍵 + Space 操作，透過 useFrame 每幀偵測按鍵並更新夾取器位置。",
        "利用 useGLTF 載入夾娃娃機 glb 模型，並透過 traverse() 動態控制模型內不同子物件的動作（爪子、機械軌道、娃娃顯示）。",
        "用Math.random() 實作機率抽獎系統，useState 管理夾子位置、下降狀態、是否抓取成功，useEffect 做遊戲開始時提示彈窗。"
      ],
  
      links: {
        play: "https://claw-machine-six.vercel.app/",
      }
    },

    {
      id: "web3",
      category: "web",
      name: "月來悅貼心",
      cover: Web3,

      intro_short:'本專案關注「月經貧窮」與「月經汙名」議題，旨在建構一個全面的「月經友善」網站，提供聊天機器人與月經地圖的服務。聊天機器人兼具「提供正確月經知識」和「情緒撫慰的功能」，月經地圖可以查看附近提供免費衛生棉的地點和剩餘數量。',
  
      intro: `本報告的動機主要源於對「月經貧窮」和「月經汙名」這兩大社會議題的關注。月經貧窮是指女性在生理期缺乏安全衛生的用品、設施或經期衛生教育，這使得低收入女性面臨巨大經濟壓力，例如臺灣約有 9% 的人曾因此陷入購買生理用品與日常必需品之間的兩難。缺乏替換用品可能導致尿道感染、皮膚刺激等健康風險，而社會對月經的負面看法則產生了月經汙名，將經期視為羞恥或禁忌，促使人們隱藏生理用品。解決這些相互影響的問題被視為推動社會公平與人權進步的關鍵里程碑。雖然非營利組織小紅帽已在 Google 開源地圖上建置「月經友善空間」提供免費用品等服務，但現有地圖的資訊有限，僅標示地點與服務項目。因此，本專案的動機在於建構一個更全面、實用性更高的「月經友善」網站，不僅旨在提供正確知識、消除月經汙名，更關鍵的是要優化現有的地圖。透過新增各地點衛生棉的數量與規格等詳細資訊，本專案希望提升使用者體驗及地圖的精準度，讓需要的人能夠更自在、清楚地使用友善空間，以最終實現月經平權與友善社會。
              \n（此為小組作品，我負責的部分為利用 python 連結 ChatGPT API，利用 FAISS 比對使用者輸入的文字以及月經資料，以生成最相關、合適的回覆訓練機器人；串接python與網頁API）`,
  
      type: "網頁AI機器人（以 next.js + python 製作）",
  
      flow2: [
        {
          img: web3_01,
          text: "「聊一聊」功能，可以與AI機器人聊天或詢問月經相關問題（機器人經過正確的月經知識相關資料訓練）。",
        },
        {
          img: web3_02,
          text: "點選我要拍拍，可以進入到情緒安撫模式，機器人語氣會較為溫和。",
        },
        {
          img: web3_03,
          text: "點選我要提問，可以切換到諮詢模式，機器人語氣會較為專業。",
        },
        {
          img: web3_04,
          text: "「看地圖」功能可以看附近哪裡有提供免費衛生棉使用以及餘量。",
        }
      ],

      tech: [
        `1. 資料讀取與前處理：\n從雲端載入自製的月經知識 txt 資料，並以 LangChain 的 Document 格式讀入，再使用 RecursiveCharacterTextSplitter 將全文切成每段 500 字，方便之後做檢索。`,
        `2. 建立向量資料庫與語意比對：\n使用 OpenAI Embeddings 將每段文字轉成向量，並以 FAISS 建立向量資料庫。所有用戶提問都會先做語意比對，找到最相關的文本再生成回答。`,
        `3. 設定聊天機器人角色與提示詞：\n設定 AI 為「女性生理期智能助手」，並加入兩種模式：溫馨好友模式與專業顧問模式。同時定義行為規範，例如角色分離、拒答無關問題、記憶上下文等，並以檢索資料作為知識來源。`,
        `4. API 串接與版本相容調整：\n使用 OpenAI API 作為主要模型。`,
        `5. 建立即時網路串接：\n在 Colab 中建立 Flask 後端並用 Ngrok 產生公開 URL 供前端呼叫。使用 flask-cors 讓網頁可跨域存取，形成完整的網頁與 Colab 互動流程。`
      ],
  
      links: {
        demo: "https://drive.google.com/file/d/1WoGc9-Y19tIZx-kMvdK7xollyqFb7YbF/view?usp=drive_link",
        report: "https://drive.google.com/file/d/1B7WI0a_P-CPjefhIY1x-dKVljCpGmtFF/view?usp=sharing",
      }
    },

    {
      id: "final",
      category: "final",
      name: "Frame",
      cover: Final,

      isFeatured: true,  

      intro_short:'《Frame》是一個結合p5.js、網頁互動設計與原創動畫故事打造的投影互動裝置，將抽象的自我尋找歷程具象化，讓觀眾以參與者的角色介入，實踐自我覺察與解放的過程，引導觀眾從外在框架中解放自我，不再僅僅是外界評價的產物，而是主動定義屬於自己的價值與身份。',
  
      intro: `在一片深邃的森林，裡面藏著一面「真實之鏡」。這面鏡子在夜晚會投射出人們的影子，並環繞著無數句話，如低語般浮現在影子周圍。
              這些句子代表了外人對照鏡者的評價。這些話語有時像祝福，有時像壓力，讓人們越來越依賴外界的眼光，逐漸忽略了自己的內心。
              村莊裡有個傳說：若有人能在自己的影子裡找到一句特別的字句：「我是…的人」，便能真正看清自我，而不再被他人所左右。
              \n作品結合網頁互動設計、原創動畫故事、p5.js ，並載入 ml5.js 的 bodypix模型，打造一套依據參與者回應內容動態生成視覺化結果的互動裝置，將抽象的自我尋找歷程具象化，讓觀眾以參與者的角色介入，實踐自我覺察與解放的過程，引導觀眾從外在框架中解放自我，不再僅僅是外界評價的產物，而是主動定義屬於自己的價值與身份。
              \n（此為小組作品，我負責的部分為 p5.js 人體偵測、技術整合、流程優化等）`,
  
      background: `本作品「Frame」旨在鼓勵人們掙脫外界評價的束縛，重新自我定義。
                  \n在現代社會中，個人常受制於家人、社會價值觀或主流文化的壓力，這些外在聲音形塑了我們的自我認知，使人逐漸遠離內在真實感受。作品名稱「Frame」象徵著外界的框架與限制，也隱喻了一面扭曲真實自我的鏡子。
                  \n作品的核心體驗是引導參與者「從大量外界評價中找尋屬於自己的語句」，將從他人聲音中剝離並回歸內心的探索過程具象化。透過這個設計，我們希望傳達：框架無法限制真實的自我，反而應成為反思與突破的契機。希望能夠啟發觀眾釋放自我，以自我定義的價值，構築一個更獨立且真誠的內在世界。
                 `,

      type: "投影互動裝置（以 p5.js + next.js + AE 製作）",
  
      flow: [
        {
          img: final01,
          text: "在體驗區外用電腦先透過網頁觀看前導動畫與回答問題（填答的內容會影響作品呈現的文字）。",
        },
        {
          img: final02,
          text: "進入體驗區，對準畫面中央站立，偵測到人後會自動開始播放前導動畫第二部分。",
        },
        {
          img: final03,
          text: "觀看前導動畫第二部分，與遊戲規則講解。",
        },
        {
          img: final04,
          text: "開始遊戲體驗，參展者要移動身體，在90秒內找到自己剛剛在網頁輸入的文字，並停留5秒以判定為找到。",
        },
        {
          img: final_example,
          text: "螢幕上的字會是一句一句「你...」開頭的文字（會根據參展者在網頁上的作答生成不同句子），參展者要找到自己輸入的「我是...的人」句子。",
        },
        {
          img: final05,
          text: "找到字後會進入成功的結局動畫；時間內沒找到則會進入失敗的結局動畫。",
        },
        {
          img: final06,
          text: "出現體驗結束的字樣即可離開。",
        }
      ],

      final_tech:[
        {
          title: "p5.js",
          text: "p5.js的部分分為四個執行階段，分別為：\n(1) 偵測觀眾站在螢幕前開始體驗流程\n(2) 播放動畫（包含規則敘述）\n(3) 利用剪影偵測進行找字遊戲\n(4) 根據成功與否播放結尾動畫\n主要的技術是使用 ml5.js 的 BodyPix 模型進行人體剪影偵測。對於剪影位置的判定則是依據該點座標的遮罩透明度：當該點座標的遮罩alpha值為 0 時，可以得知剪影偵測範圍有涵蓋到該座標。此技術應用在上述四個執行階段中的階段一和階段三，其中階段一將剪影的畫面隱藏起來，僅應用此技術來判斷螢幕前是否有觀眾，以即時進入體驗流程。\n階段三的找字遊戲，背景的文字是根據網頁回傳的選擇題選項決定，程式會先loadData()後，依據收到的選項選定對應的字串陣列，再將各提對應的陣列打散，隨機組合出背景所呈現的文字。參展者所要找尋的字則會在程式接收到網頁端輸入的答案後，以隨機位置加入陣列。"
        },
        {
          title: "後端串接",
          text: "網頁的部分使用 npm run build 將 react 所建立的網頁打包成靜態檔案，並利用 node.js + express 在本地端建立伺服器。由於展場所使用的兩台電腦是連結相同的網路，故可以在執行 server 後，透過輸入 ip 位置和指定的 port 在另一台電腦開啟網頁。網頁端會在使用者點擊完選項或送出文字後 post 對應的答案到 server，server 會將接收到的數據轉換成 json 格式，以提供 p5.js 取用。\nserver 在收到新數據或整個體驗流程執行完後自動更新 p5.js 頁面，套用下一個使用者在網頁端所輸入的數據。只有階段一（等待觀眾站在中央再自動開始遊戲的階段）收到新數據才會即時更新頁面，故網頁端的體驗流程可以和體驗區的流程同時進行，不會因為體驗中途收到新數據就自動刷新，以同時消化兩組觀眾，加快等待時間。"
        }
      ],

      final_upgrade: [
        {
          title: "展前測試後的改善",
          text1:
            "原先兩段前導動畫是被放在網頁上的，但因此導致觀眾在體驗區外所耗費的時間會大量超過在體驗區內的時間，無法有較為沉浸式的體驗。故我將第二段動畫移到體驗區內投影播放，一方面可以改善參展者體驗舒適度；另一方面使得體驗區外和體驗區內可以同時有兩組參展者進行，能夠更有效率的消化人群，。",
          text2:
            "原本找尋字的 90 秒只有背景樂在播放，使得體驗時間久了容易感到枯燥或抽離感，故我設定每 20 秒撥放一段魔鏡挑釁的台詞，增加互動的趣味性與觀眾的參與感。",
          text3:
            "受試者也有反應無法明確知道體驗已經結束，感覺結尾較唐突，故我提議將結尾動畫也加入魔鏡的動畫配音，使故事給人的感覺更加完整，並且在結尾直接顯示「體驗結束」的字樣，給予參展者明確的指示，確保流程能順暢進行。"
        },
        {
          title: "自動化",
          text1:
            "參展者在體驗區外所做的網頁內容會被 post 到 server，並呈現在作品上，而作品上所呈現的資料是採用 server 最新收到的那筆資料。當上一位參與者體驗完，10 秒後作品會重新載入，並套用下一位參與者剛剛上傳的內容，無須手動更新。",
          text2:
            "參與者在完成網頁後進入體驗區，只要依照螢幕指示站在體驗區中央，則會在偵測到人後自動開始播放第二段動畫。",
          text3:
            "由於我們在體驗區後方有搭建工作人員的空間，以監督、確保鏡頭及程式正常運作，但展場後方封閉空間難以掌握體驗區外狀況，故我設定按下空白鍵後程式會跳到休息畫面，如果有新的資料進來（亦即有人準備進來體驗），休息畫面會自動被切換回偵測體驗開始的畫面，以確保工作人員能夠第一時間得知觀眾已經進入展場。"
        }
      ],
      
  
      links: {
        demo: "https://drive.google.com/file/d/1GObyiuoxr0okDCFDiLm6809tyeOL7nXa/view?usp=sharing",
        report: "https://drive.google.com/file/d/1XE_Gh3x0XcGX6WLEZzG3soFFmxRiy5SV/view?usp=sharing",
      }
    },

    {
      id: "photo",
      category: "others",
      name: "攝影作品",
      cover: Photo,

      intro_short:'我放在推特上的娃娃收藏分享',
  
      intro: `我放在推特上的娃娃收藏分享`,
      
    },

    {
      id: "design",
      category: "others",
      name: "美宣作品",
      cover: Design,

      intro_short:'我擔任 政大心理之夜/政大交響/政大心理營/師大附中管樂 美宣的作品',
  
      intro: `我擔任 政大心理之夜/政大交響/政大心理營/師大附中管樂 美宣的作品`,
      
    },

    {
      id: "AE",
      category: "others",
      name: "影像作品",
      cover: AE,

      intro_short:'我在 AE 課程中所做的影像作業',
  
      intro: `我在 AE 課程中所做的影像作業`,
      
    },

    {
      id: "uiux3",
      category: "uiux",
      name: "國家考試整合平台",
      cover: UIUX3,

      intro_short:'本專案針對國家考試資訊分散、流程繁複、介面不佳等痛點，提供一站式服務平台，整合考生報名、備考、應試到錄取分發的完整資訊。事前研究的部分透過問卷、訪談，了解考生在使用現有網站上的經驗和痛點，打造流程清晰、介面易讀的設計，大幅提升考生資訊獲取效率與使用體驗。',
  
      intro: `本專案旨在解決現行國家考試資訊分散、流程繁複、介面不佳的痛點。每年約三十萬人參與國考，但考生常抱怨找不到資料、不清楚流程，且現有網站字體小、操作吃力。
              我們的目標是提供一個一站式服務平台，透過服務流程改造，將國考的完整生命週期（從報考、備考、應試到錄取分發）資訊系統性地整合。
              網站將明確簡化流程，並加入實用功能，例如志願選填系統的地圖整合，以及提供清晰、易讀的介面設計，以大幅提升所有考生的使用者體驗，讓資訊獲取更有效率。`,
  
      type: "網頁趣味心理測驗（以next.js製作）",

      isFeatured: true,   // ⭐
  
    },

    
    {
      id: "uiux2",
      category: "uiux",
      name: "MORE",
      cover: UIUX2,

      intro_short:'本專案為一款以影評為核心的一站式影評＋場次查詢 App UI 設計，針對台灣缺乏整合平台及國外資訊架構複雜的問題，重新規劃符合本地使用習慣的介面。首頁以影評為導覽核心，整合電影資訊、場次查詢與訂票功能，並提供探索與個人收藏，提升資訊理解與操作流暢度。',
  
      intro: `本專案為一款以影評為核心的一站式影評＋場次查詢 App UI 設計。針對台灣缺乏整合性影評平台、國外資訊結構複雜與影評與訂票流程分離等問題，重新規劃符合台灣使用習慣的介面架構。首頁以影評作為主要導覽入口，整合電影資訊、場次查詢與訂票連結，並提供探索與個人收藏功能，提升整體使用流暢度與資訊理解效率。本作品以 UI 視覺與操作流程設計為主，未進行實際使用者測試，未來可作為後續 UX 驗證與優化基礎。`,
  
      type: "網頁趣味心理測驗（以next.js製作）",

      isFeatured: true,  
  
    },

    {
      id: "uiux1",
      category: "uiux",
      name: "現在玩台北",
      cover: UIUX1,

      intro_short:'本專案為「現在玩台北」App 的 Redesign。事前研究的部分透過問卷、訪談，了解目標使用者對於旅遊 App 的使用經驗與期許，重新規劃、設計一個以「台北觀光景點資訊」為主要功能的 App，並在完成設計後進行測試與改善。',
  
      intro: `本專案為「現在玩台北」App 的 Redesign。事前研究的部分透過問卷、訪談，了解目標使用者對於旅遊 App 的使用經驗與期許，重新規劃、設計一個以「台北觀光景點資訊」為主要功能的 App，並在完成設計後進行測試與改善。`,
  
      type: "網頁趣味心理測驗（以next.js製作）",
  
    },


   

  ];
  