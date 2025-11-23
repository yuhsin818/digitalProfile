'use client';

import DetailPage from "@/component/project/detailPage";
import { projects } from "@/app/data/projectData";

export default function Page() {
  // const { category, id } = params;

  // 例如 category=game, id=dogGame
  const project = projects.find(p => p.id === "web-game");

  if (!project) {
    return <div className="p-10 text-red-600">找不到作品資料</div>;
  }

  return <DetailPage project={project} />;
}

// 'use client';

// import Image from "next/image";
// import DetailPage from "@/component/detailPage";
// import game3 from "@/app/image/game3.png";


// export default function Game3() {
//   return (
//     <>
//       <DetailPage 
//       img={game3}
//       imageWidth={700}
//       categoryKey={"game"}
//       name={"指定不退"} 
//       category={"網頁遊戲"} 
//       tool={"Bootstrap + p5"} 
//       description={"主要的遊戲方式希望藉由介紹暗黑模式的內容傳遞資訊之外，另一方面，使用者在閱讀的同時會被大量的廣告干擾。使用者需要在花俏的彈跳、固定式等廣告中努力閱讀全文，同時避免點擊到廣告以免不當訂閱，藉以模擬現今人們使用網路時時常被干擾的情境。玩家需要在複雜的畫面中分辨內文、廣告與訂閱，避免點擊到廣告或訂閱。最後試算出玩家成功關閉廣告的次數、不小心點到廣告的次數與無意中忘記取消訂閱所會花費的總年費，提醒玩家日後小心暗黑模式的網站並且清楚資訊後才點擊內容物。(此為小組作品，我負責的部分為利用 p5.js 製作彈窗廣告）"} 
//       instruction={"操作：滑鼠點擊、滾輪通關條件：在繁雜的頁面中努力閱讀內容，點擊「完成閱讀」結束遊戲計分：通關時長、成功「關閉廣告」次數按到「廣告」次數、「訂閱」總年費"}/>
//     </>
//   );
// }
