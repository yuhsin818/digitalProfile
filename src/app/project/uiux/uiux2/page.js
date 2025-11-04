'use client';

import Image from "next/image";
import DetailPage from "@/component/detailPage";
import Figma1 from "@/app/image/Figma_work1.png";
import Figma2 from "@/app/image/Figma_work2.png";


export default function UIUX2() {
  return (
    <>
      <DetailPage 
      img={Figma2}
      imageWidth={700}
      // imageHeight={400}
      categoryKey={"uiux"}
      name={"你的靈魂樂器"} 
      category={"網頁趣味心理測驗"} 
      tool={"next.js"} 
      description={"此網頁是一個測驗受試者的個性是類似於哪種樂器的趣味心理測驗。由於每個樂器在樂團中都各自扮演不同的角色，故我以此為發想，連結到每個人的個性可能對應到的樂器，製作此趣味測驗，同時也讓不熟悉古典樂的使用者能夠以這個測驗為契機了解個別樂器在交響樂中的定位。測驗總共有10題、16種可能的結果。"} 
      // instruction={"遊戲目標是將宅邸內的怪物全部解決。被怪物撞到一次會扣一點生命值，若生命值歸零則遊戲失敗。按上下左右（或 W, S, A, D ）鍵移動，按空白鍵可跳躍，按 Z 鍵攻擊"}
      />
    </>
  );
}
