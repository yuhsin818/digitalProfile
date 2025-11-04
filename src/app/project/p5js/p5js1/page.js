'use client';

import Image from "next/image";
import DetailPage from "@/component/detailPage";
import Painting1 from "@/app/image/p5js_1.png"
import Painting2 from "@/app/image/p5js_2.png"
import Painting3 from "@/app/image/p5js_3.png"
import Painting4 from "@/app/image/p5js_4.png"
import Painting5 from "@/app/image/p5js_5.png"


export default function P5js1() {
  return (
    <>
      <DetailPage 
      img={Painting1}
      imageWidth={400}
      categoryKey={"p5"}
      name={"Flow Fields"} 
      category={"3D射擊遊戲"} 
      tool={"unity"} 
      description={"此遊戲是以 unity 製作的 3D射擊遊戲，素材選用豪宅的場景，角色與怪物則是分別匯入可愛風格的 asset 塑造統一的風格和療愈的遊玩體驗。"} 
      instruction={"遊戲目標是將宅邸內的怪物全部解決。被怪物撞到一次會扣一點生命值，若生命值歸零則遊戲失敗。按上下左右（或 W, S, A, D ）鍵移動，按空白鍵可跳躍，按 Z 鍵攻擊"}/>
    </>
  );
}
