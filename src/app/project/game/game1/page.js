'use client';

import Image from "next/image";
import Game1 from "@/app/image/DogGame.png";
import { useRouter } from 'next/navigation'; // Next.js 13+ app router

export default function Game() {
  const router = useRouter();

  return (
    <div className="w-full min-w-[320px] h-full bg-[#D8E9F0] flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      <div className="relative w-full bg-[#00437B] flex flex-col text-white pt-8 px-20 pb-4 rounded-bl-[4vw]">
        <h1 className="text-2xl font-bold mb-1">
          遊戲作品一
        </h1>
        <h3 className="mb-4">
          我放在推特上的娃娃收藏分享
        </h3>
        <button
          onClick={() => router.push('/project?category=game')} // ✅ 返回指定分類
          className="absolute bottom-1 right-5 w-[200px] border-2 stroke-white text-white px-4 py-2 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#80A1BD] transition-all duration-300 cursor-pointer">
              Back to Projects
        </button>
      </div>


      <div className="h-full w-full bg-[#00437B]">
        <div className="w-full h-full flex flex-col gap-5 relative p-[30px] bg-[#D8E9F0] rounded-tr-[4vw]">

          <div className="flex flex-col w-full gap-6 mt-3 justify-center items-center pb-6 px-4 lg:px-6">
            <Image src={Game1} alt="" className="w-[700px] h-[400px] mb-2"/>
            
            <div className="w-full flex justify-start flex-col gap-6">

              <div className="text-[#00437B] flex flex-row">
                <p className="flex justify-center items-center font-bold pr-1 text-xl pb-0.5">名稱：</p>
                <p className="flex justify-center items-center">政大流浪狗躲避戰</p>
              </div>
           

              <div className="text-[#00437B] flex flex-row">
                <p className="flex justify-center items-center font-bold pr-1 text-xl pb-0.5">類型：</p>
                <p className="flex justify-center items-center">網頁跑酷纇動作遊戲</p>
              </div>
        

              <div className="text-[#00437B] flex flex-row">
                <p className="flex justify-center items-center font-bold pr-1 text-xl pb-0.5">技術：</p>
                <p className="flex justify-center items-center">p5.js</p>
              </div>
    
              <div className="text-[#00437B] flex flex-col">
                <p className="flex items-center font-bold pr-1 text-xl pb-0.5">背景介紹：</p>
                <p className="flex justify-center items-center">
                  此遊戲是以「政大流浪狗問題」為發想，並融合其他政大生熟悉的要素，例如：山坡地的校園、時常被偷或遺忘的雨傘等，設計的動作類遊戲。
                  遊戲玩法是控制政大生閃避迎面不斷襲來的流浪狗，直到平安抵達位於山上的宿舍。
                  除了左右閃避外，亦可以撿拾路上隨機出現的雨傘作為抵禦道具，在開啟雨傘的時間內不會受到狗群的攻擊傷害。
                  遊戲最後出現的事件「狗后召喚大量狗群」則是帶出政大流浪狗問題的根源「狗后」，由於這位校外人士疑似常常私自帶流浪狗進入政大校園餵養，導致學生遭咬傷事件頻傳，故加入這個遊戲階段作為最後關卡。
                </p>
              </div>

              <div className="text-[#00437B] flex flex-col">
                <p className="flex items-center font-bold pr-1 text-xl pb-0.5">遊玩方式：</p>
                <p className="flex justify-center items-center">
                  遊戲目標是在 90 秒的遊戲中生命值不歸零。共有十個生命值，顯示於畫面左上角。
                  前方會有流浪狗不斷襲來，被撞到一次會扣一點生命值，玩家可以按左右鍵閃避。
                  此外，路上會有掉落的雨傘道具可以撿，撿到後按空白鍵即可啟動，能夠抵禦狗群攻擊5秒鐘。
                  隨著秒數越少，遇到的狗會越多。最後十秒會有狗后召喚大量狗群襲來，增加遊玩難度。
                  90秒結束遊戲後如果還有剩下生命值就是獲勝（代表成功抵達宿舍），反之如果左上角生命值歸零則是遊戲失敗。
                </p>
              </div>

            </div>

            <div className="w-full flex justify-start pt-7">
              <div className="text-[#00437B] flex flex-row">
                  <p className="flex items-center font-bold pr-5 text-xl pb-0.5">相關連結：</p>
                  <div className="flex gap-5">

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 避免觸發外層的 Link
                      window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2&t=vAzDLXBiyQaEZYcv-1"); // 開新頁
                    }}
                    className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
                  >
                    demo影片
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 避免觸發外層的 Link
                      window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2&t=vAzDLXBiyQaEZYcv-1"); // 開新頁
                    }}
                    className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
                  >
                    Github
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 避免觸發外層的 Link
                      window.open("https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2&t=vAzDLXBiyQaEZYcv-1"); // 開新頁
                    }}
                    className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] text-white rounded-2xl px-5 py-1  transform transition duration-300 hover:scale-105 cursor-pointer"
                  >
                    開始遊戲
                  </button>

                  </div>
                </div>
            </div>


          </div>
        </div>
      </div>
 

    </div>
  );
}
