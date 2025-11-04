'use client';

import Image from "next/image";
import DetailPage from "@/component/detailPage";
import web2 from "@/app/image/web2.png";


export default function Web2() {
  return (
    <>
      <DetailPage 
      img={web2}
      imageWidth={700}
      // imageHeight={400}
      categoryKey={"web"}
      name={"熊熊夾娃娃機"} 
      category={"網頁3D互動抽獎遊戲"} 
      tool={"next.js + blender（建模為課堂提供）"} 
      description={"這是一個載入blender建模的網頁互動遊戲，可以控制娃娃機爪子抓取機台內娃娃，有機率獲得的獎品類型共有三種，亦有機率失敗沒抓到。"} 
      instruction={"使用 WASD 或 方向鍵 移動 按下 空白鍵 抓取娃娃"}/>
    </>
  );
}
