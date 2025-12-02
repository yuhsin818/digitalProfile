'use client';

import DetailPage from "@/component/project/detailPage";
import { projects } from "@/app/data/projectData";

export default function Page() {
  // const { category, id } = params;

  // 例如 category=game, id=dogGame
  const project = projects.find(p => p.id === "game1");

  if (!project) {
    return <div className="p-10 text-red-600">找不到作品資料</div>;
  }

  return <DetailPage project={project} />;
}



// 'use client';

// import Image from "next/image";
// import Game1 from "@/app/image/DogGame.png";
// import game_dog1 from "@/app/image/dog01.png";
// import game_dog2 from "@/app/image/dog02.png";
// import game_dog3 from "@/app/image/dog03.png";
// import game_dog4 from "@/app/image/dog04.png";
// import game_dog5 from "@/app/image/dog05.png";
// import { useRouter } from 'next/navigation'; // Next.js 13+ app router

// export default function DetailPage({img, imageWidth, imageHeight, categoryKey, name, category, tool, description, instruction}) {
//   const router = useRouter();

//   return (
//     <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
//       {/* <div className="relative w-full flex flex-col text-[#00437B] pt-8 px-20 pb-4">
//         <h1 className="text-2xl font-bold mb-1">
//           遊戲作品一
//         </h1>
//         <h3 className="mb-4">
//           我放在推特上的娃娃收藏分享
//         </h3> */}
//         <div className="w-full flex justify-end">
//           <button
//             onClick={() => router.push(`/project?category=${'game'}`)} // ✅ 返回指定分類
//             className="w-[200px] border-2 stroke-[#00437B] text-[#00437B] px-4 py-2 my-6 mx-4 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#AAD2E4] transition-all duration-300 cursor-pointer">
//                 Back to Projects
//           </button>
//         </div>
//       {/* </div> */}


//       {/* <div className="h-full w-full"> */}
//         {/* <div className="w-full h-full flex flex-col gap-5 relative p-[30px]"> */}

//           <div className="flex flex-col w-full gap-6 mt-3 justify-center items-center p-[60px] pl-[100px] pb-6">

//             <div className="w-full flex flex-row">

//               <Image src={Game1} alt="" className="w-1/2 rounded-[8vh]"/>

//               <div className="w-full flex justify-start flex-col gap-6 px-8">
//                 <div className="text-[#00437B] font-extrabold text-4xl mb-6">政大流浪狗躲避戰</div>

//                 <div className="text-[#00437B] flex flex-row">
//                   <p className="flex justify-center items-center font-bold pr-1 text-xl pb-0.5">類型：</p>
//                   <p className="flex justify-center items-center">網頁跑酷纇動作遊戲（以p5.js製作）</p>
//                 </div>

//                 <div className="text-[#00437B] flex flex-col">
//                   <p className="flex items-center font-bold pr-1 text-xl pb-0.5">背景介紹：</p>
//                   <p  className="flex justify-center items-center">
//                     此遊戲是以「政大流浪狗問題」為發想，並融合其他政大生熟悉的要素，例如：山坡地的校園、時常被偷或遺忘的雨傘等，設計的動作類遊戲。
//                     遊戲玩法是控制政大生閃避迎面不斷襲來的流浪狗，直到平安抵達位於山上的宿舍。
//                     除了左右閃避外，亦可以撿拾路上隨機出現的雨傘作為抵禦道具，在開啟雨傘的時間內不會受到狗群的攻擊傷害。
//                     遊戲最後出現的事件「狗后召喚大量狗群」則是帶出政大流浪狗問題的根源「狗后」，由於這位校外人士疑似常常私自帶流浪狗進入政大校園餵養，導致學生遭咬傷事件頻傳，故加入這個遊戲階段作為最後關卡。
//                   </p>
//                 </div>

//               </div>
//             </div>
            
//             {/* flow */}
//             <div className="text-[#00437B] w-full flex justify-start flex-col gap-6 bg-[rgba(255,255,255,0.5)] rounded-4xl mt-[80px] p-10">
//               <p className="p-4 font-bold text-2xl">遊戲流程</p>
              
//               <div className="flex items-center">
//                 <Image src={game_dog1} alt="" className="w-[500px] h-[300px] rounded-[4vh]"/>
//                 <p className="pl-6">遊戲背景、目標，與遊玩方式介紹</p>
//               </div>

//               <div className="flex items-center">
//                 <Image src={game_dog2} alt="" className="w-[500px] h-[300px] rounded-[4vh]"/>
//                 <p className="pl-6">遊戲開始，共有十個生命值，顯示於畫面左上角。前方會有流浪狗不斷襲來，被撞到一次會扣一點生命值，玩家可以按左右鍵閃避</p>
//               </div>
              
//               <div className="flex items-center">
//                 <Image src={game_dog3} alt="" className="w-[500px] h-[300px] rounded-[4vh]"/>
//                 <p className="pl-6">路上會有掉落的雨傘道具可以撿，撿到後按空白鍵即可啟動，能夠抵禦狗群攻擊5秒鐘。</p>
//               </div>

//               <div className="flex items-center">
//                 <Image src={game_dog4} alt="" className="w-[500px] h-[300px] rounded-[4vh]"/>
//                 <p className="pl-6">隨著秒數越少，遇到的狗會越多。最後十秒會有狗后召喚大量狗群襲來，增加遊玩難度。</p>
//               </div>
              
//               <div className="flex items-center">
//                 <Image src={game_dog5} alt="" className="w-[500px] h-[300px] rounded-[4vh]"/>
//                 <p className="pl-6">90秒結束遊戲後如果還有剩下生命值就是獲勝（代表成功抵達宿舍），反之如果左上角生命值歸零則是遊戲失敗。</p>
//               </div>

//             </div>


//             <div className="text-[#00437B] w-full flex justify-start flex-col gap-6 rounded-4xl mt-5 p-10">
//               <div className="font-bold text-2xl ml-2">技術</div>

//               <div>
//                 <div className="w-full flex flex-row items-center p-4">
//                   <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full"></div>
//                   <p className="pl-5">碰撞偵測利用玩家與狗採用縮小後的 Hitbox，以減少誤判，並依玩家是否啟動雨傘改變 X 方向碰撞寬度（0.5 → 0.8）。</p>
//                 </div>

//                 <div className="w-full flex flex-row items-center p-4">
//                   <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full"></div>
//                   <p className="pl-5">敵人被雨傘擊中後標註 isHit 與 hitByUmbrella 狀態，進入「被擊飛狀態的圖片和動畫偏移」。</p>
//                 </div>

//                 <div className="w-full flex flex-row items-center p-4">
//                   <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full"></div>
//                   <p className="pl-5">雨傘道具自畫面上方隨機位置生成，以固定速度下落。玩家碰撞後 umbrellaCount++，將雨傘數量記錄於玩家物件中。</p>
//                 </div>

//                 <div className="w-full flex flex-row items-center p-4">
//                   <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full"></div>
//                   <p className="pl-5">keyPressed() 監聽空白鍵 → 觸發玩家啟動雨傘 activateUmbrella() 並播放音效。</p>
//                 </div>

//                 <div className="w-full flex flex-row items-center p-4">
//                   <div className="bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] w-[30px] aspect-square flex-shrink-0 rounded-full"></div>
//                     <div className="pl-5">
//                       <p>mousePressed() 根據遊戲狀態分三階段解析：</p>
//                       <p>Start Page 1 → 點擊指定 UI 區域進入下一頁。</p>
//                       <p>Start Page 2 → 點擊開始按鈕後觸發 startCountdown()。</p>
//                       <p>Game Over → 點擊 UI 區域執行 resetGame()。</p>
//                     </div>
//                 </div>

//               </div>
//             </div>


//             <div className="w-full flex justify-start pt-7">
//               <div className="text-[#00437B] flex flex-row">
//                   <p className="flex items-center font-bold pr-5 text-xl pb-0.5">相關連結：</p>
//                   <div className="flex gap-5">

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // 避免觸發外層的 Link
//                       window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2&t=vAzDLXBiyQaEZYcv-1"); // 開新頁
//                     }}
//                     className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
//                   >
//                     demo影片
//                   </button>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // 避免觸發外層的 Link
//                       window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2&t=vAzDLXBiyQaEZYcv-1"); // 開新頁
//                     }}
//                     className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
//                   >
//                     Github
//                   </button>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation(); // 避免觸發外層的 Link
//                       window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2&t=vAzDLXBiyQaEZYcv-1"); // 開新頁
//                     }}
//                     className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
//                   >
//                     開始遊戲
//                   </button>

//                   </div>
//                 </div>
//             </div>


//           </div>
//         {/* </div> */}
//       {/* </div> */}
 

//     </div>
//   );
// }
