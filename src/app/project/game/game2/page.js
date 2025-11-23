'use client';

import DetailPage from "@/component/project/detailPage";
import { projects } from "@/app/data/projectData";

export default function Page() {
  // const { category, id } = params;

  // 例如 category=game, id=dogGame
  const project = projects.find(p => p.id === "3D-game");

  if (!project) {
    return <div className="p-10 text-red-600">找不到作品資料</div>;
  }

  return <DetailPage project={project} />;
}


// 'use client';

// import Image from "next/image";
// import DetailPage from "@/component/detailPage";
// import game2 from "@/app/image/3Dgame.png";


// export default function Game2() {
//   return (
//     <>
//       <DetailPage 
//       img={game2}
//       imageWidth={700}
//       // imageHeight={400}
//       categoryKey={"game"}
//       name={"豪宅保衛戰"} 
//       category={"3D射擊遊戲"} 
//       tool={"unity"} 
//       description={"此遊戲是以 unity 製作的 3D射擊遊戲，素材選用豪宅的場景，角色與怪物則是分別匯入可愛風格的 asset 塑造統一的風格和療愈的遊玩體驗。"} 
//       instruction={"遊戲目標是將宅邸內的怪物全部解決。被怪物撞到一次會扣一點生命值，若生命值歸零則遊戲失敗。按上下左右（或 W, S, A, D ）鍵移動，按空白鍵可跳躍，按 Z 鍵攻擊"}/>
//     </>
//   );
// }
