'use client'

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProjectPage from "@/component/projectPage";
import { projects } from "@/app/data/projectData";

export default function Project() {

  const searchParams = useSearchParams();
  const router = useRouter();
  const initialCategory = searchParams.get("category") || "uiux";
  const [category, setCategory] = useState(initialCategory);

  const projects_now = projects.filter(p => p.category === category);

  return (
    <div className="w-full min-w-[320px] h-full flex flex-col items-center overflow-y-auto">

      {/* 標題、分類 */}
      <div className="w-full flex flex-col text-[#00437B] pt-8 px-20">
        <h1 className="text-2xl font-bold mb-5">My Projects</h1>

        <div className="w-full flex justify-around border-b border-[#9BB7C6] pb-2">
          {[
            { key: "uiux", label: "UI/UX" },
            { key: "web", label: "網頁" },
            { key: "final", label: "畢業製作" },
            { key: "p5js", label: "生成式藝術" },
            { key: "game", label: "遊戲" },
            // { key: "psy", label: "心理" },
            { key: "others", label: "其他" },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => {
                setCategory(key);
                router.push(`/project?category=${key}`);
              }}
              className={`
                  relative text-lg font-medium transition-all duration-300 cursor-pointer
                  ${category === key ? 'text-[#00437B] font-bold' : 'text-[#6B8795]'}
                  after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
                  after:w-0 after:h-[2px] after:bg-[#00437B] after:transition-all after:duration-300
                  hover:after:w-full hover:text-[#00437B]
                  ${category === key ? 'after:w-full' : ''}
              `}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-8 relative p-[60px] sm:pl-[100px] pt-[30px]">
        {projects_now.map((p, index) => (
          <ProjectPage 
            key={p.id} 
            image={p.cover} 
            title={p.name}
            content={p.intro_short} 
            href={`/project/${p.category}/${p.id}`} 
          />
        ))}
      </div>

    </div>
  );
}


// 'use client'
// import { useState, useEffect } from "react";
// import ProjectPage from "@/component/projectPage";
// import Figma1 from "@/app/image/Figma_work1.png";
// import Figma2 from "@/app/image/Figma_work2.png";
// import Game1 from "@/app/image/DogGame.png";
// import Game2 from "@/app/image/3Dgame.png";
// import Game3 from "@/app/image/game3.png";
// import Painting1 from "@/app/image/p5js_1.png"
// import Painting2 from "@/app/image/p5js_2.png"
// import Painting3 from "@/app/image/p5js_3.png"
// import Painting4 from "@/app/image/p5js_4.png"
// import Painting5 from "@/app/image/p5js_5.png"
// import Web1 from "@/app/image/web1.png"
// import Web2 from "@/app/image/web2.png"
// import Web3 from "@/app/image/web3.png"
// import { motion, AnimatePresence } from "framer-motion";
// import { useSearchParams, useRouter } from "next/navigation";

// import { projects } from "@/app/data/projectData";

// export default function Project() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const initialCategory = searchParams.get("category") || "uiux"; // ✅ 讀取網址參數
//   const [category, setCategory] = useState(initialCategory);

//   const uiuxProjects = [
//     { image: Figma1, content: "此影評 App 結合訂票、查詢評價與撰寫評論功能，針對目前市面上觀影流程分散的問題提出整合式解方。透過簡潔的介面與直覺的操作邏輯，使用者可在單一平台完成觀影前的選片、訂票，中途的即時評價查詢，以及觀影後的分享討論，提升整體使用效率與參與感。", href: "uiux/uiux1" },
//     { image: Figma2, content: "為解決目前國考資訊與功能分散於不同機關網站的痛點，規劃一個集中式平台，整合公告發布、報名系統、歷屆考題與成績查詢等關鍵功能。以清晰的分類與一致的操作流程為核心，降低使用者在資訊搜尋與流程操作上的負擔，提升準備效率與整體使用體驗。", href: "uiux/uiux2" }
//   ];

//   const webProjects = [
//     { image: Web1, content: "此網頁是一個測驗受試者的個性是類似於哪種樂器的趣味心理測驗。" , href: "web/web1"},
//     { image: Web2, content: "這是一個載入blender建模的網頁互動遊戲，可以控制娃娃機爪子抓取機台內娃娃，有機率獲得的獎品類型共有三種，亦有機率失敗沒抓到。" , href: "web/web2"},
//     { image: Web3, content: "本專案的動機在於建構一個更全面、實用性更高的「月經友善」網站，不僅旨在提供正確知識、消除月經汙名，更關鍵的是要優化現有的地圖。透過新增各地點衛生棉的數量與規格等詳細資訊，本專案希望提升使用者體驗及地圖的精準度，讓需要的人能夠更自在、清楚地使用友善空間，以最終實現月經平權與友善社會。" , href: "web/web3"}
//   ];

//   const finalProject = [
//     { image: Figma1, content: "畢業製作" , href: "final"}
//     // { image: Figma1, content: projects.intro , href: "final"}
//   ];
  
//   const p5Projects = [
//     { image: Painting1, content: "Flow Fields", href: "p5js/p5js1" },
//     { image: Painting2, content: "Abstract Slicing Journey" , href: "p5js/p5js2"},
//     { image: Painting3, content: "Flower Planet" , href: "p5js/p5js3"},
//     { image: Painting4, content: "Hellish River" , href: "p5js/p5js4"},
//     { image: Painting5, content: "GOTCHA" , href: "p5js/p5js5"}
//   ];

//   const gameProjects = [
//     { image: Game1, content: "遊戲中前方會有流浪狗不斷襲來，被撞到會扣血，玩家可以按玩左右鍵閃避 此外 路上會有掉落的雨傘道具可以撿，撿到後按空白鍵即可啟動，能夠抵禦狗群攻擊5秒鐘 隨著秒數越少，遇到的狗會越多最後十秒會有狗后召喚大量狗群襲來，增加遊玩難度 90秒結束遊戲後如果還有剩下生命值就是獲勝 反之如果左上角生命值歸零則是遊戲失敗" , href: "game/game1"},
//     { image: Game2, content: "此遊戲是以 unity 製作的 3D射擊遊戲，素材選用豪宅的場景，角色與怪物則是分別匯入可愛風格的 asset 塑造統一的風格和療愈的遊玩體驗。遊戲目標是將宅邸內的怪物全部解決。被怪物撞到一次會扣一點生命值，若生命值歸零則遊戲失敗。按上下左右（或 W, S, A, D ）鍵移動，按空白鍵可跳躍，按 Z 鍵攻擊。" , href: "game/game2"},
//     { image: Game3, content: "主要的遊戲方式希望藉由介紹暗黑模式的內容傳遞資訊之外，另一方面，使用者在閱讀的同時會被大量的廣告干擾。使用者需要在花俏的彈跳、固定式等廣告中努力閱讀全文，同時避免點擊到廣告以免不當訂閱，藉以模擬現今人們使用網路時時常被干擾的情境。玩家需要在複雜的畫面中分辨內文、廣告與訂閱，避免點擊到廣告或訂閱。最後試算出玩家成功關閉廣告的次數、不小心點到廣告的次數與無意中忘記取消訂閱所會花費的總年費，提醒玩家日後小心暗黑模式的網站並且清楚資訊後才點擊內容物。",  href: "game/game3"}
//   ];

//   const psyProjects = [
//     { image: Figma1, content: "心理作品一..." , href: "uiux"}
//   ];

//   const otherProjects = [
//     { image: Figma1, content: "其他作品一..." , href: "uiux"}
//   ];

//   const projects_now = 
//     category === "uiux" ? uiuxProjects :
//     category === "web" ? webProjects :
//     category === "final" ? finalProject :
//     category === "p5" ? p5Projects :
//     category === "game" ? gameProjects :
//     category === "psy" ? psyProjects :
//     otherProjects;

//   // const projects_now = projects.filter(p => p.category === category);


//   return (
//     <div className="w-full min-w-[320px] h-full flex flex-col items-center overflow-y-auto">
//       {/* 頁面標題 + 分類按鈕 */}
//       <div className="w-full flex flex-col text-[#00437B] pt-8 px-20">
//         <h1 className="text-2xl font-bold mb-5">My Projects</h1>

//         <div className="w-full flex justify-around border-b border-[#9BB7C6] pb-2">
//           {[
//             { key: "uiux", label: "UI/UX" },
//             { key: "web", label: "網頁" },
//             { key: "final", label: "畢業製作" },
//             { key: "p5", label: "生成式藝術" },
//             { key: "game", label: "遊戲" },
//             { key: "psy", label: "心理" },
//             { key: "others", label: "其他" },
//           ].map(({ key, label }) => (
//             <button
//               key={key}
//               onClick={() => {
//                 setCategory(key);
//                 router.push(`/project?category=${key}`);
//               }}
//               className={`
//                 relative text-lg font-medium transition-all duration-300 cursor-pointer
//                 ${category === key ? 'text-[#00437B] font-bold' : 'text-[#6B8795]'}
//                 after:content-[''] after:absolute after:left-0 after:-bottom-[2px]
//                 after:w-0 after:h-[2px] after:bg-[#00437B] after:transition-all after:duration-300
//                 hover:after:w-full hover:text-[#00437B]
//                 ${category === key ? 'after:w-full' : ''}
//               `}
//             >
//               {label}
//             </button>
//           ))}
//         </div>
//       </div>


//       {/* 根據選擇顯示對應作品 */}
      
        
//       <div className="w-full flex flex-col gap-8 relative py-10 px-20 lg:px-30 transition-all">
//         {projects_now.map((p, index) => (
//             <ProjectPage key={index} image={p.image} content={p.content} href={"/project/" + p.href}/>
//         ))}

//           {/* {projects.map((p, index) => (
//             <ProjectPage key={index} image={p.cover} content={p.intro} href={"/project/" + p.href}/>
//         ))} */}

//       </div>
        
    

//     </div>
//   );
// }
