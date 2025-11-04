'use client';

import Image from "next/image";
import Game1 from "@/app/image/DogGame.png";
import { useRouter } from 'next/navigation'; // Next.js 13+ app router

export default function DetailPage({img, imageWidth, imageHeight, categoryKey, name, category, tool, description, instruction}) {
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
          onClick={() => router.push(`/project?category=${categoryKey}`)} // ✅ 返回指定分類
          className="absolute bottom-1 right-5 w-[200px] border-2 stroke-white text-white px-4 py-2 rounded-[4vw] font-bold flex justify-center items-center mb-3 hover:bg-[#80A1BD] transition-all duration-300 cursor-pointer">
              Back to Projects
        </button>
      </div>


      <div className="h-full w-full bg-[#00437B]">
        <div className="w-full h-full flex flex-col gap-5 relative p-[30px] bg-[#D8E9F0] rounded-tr-[4vw]">

          <div className="flex flex-col w-full gap-6 mt-3 justify-center items-center pb-6 px-4 lg:px-6">
            <Image src={img} alt="" style={{ width: `${imageWidth}px`, height: `${imageHeight}px`, marginBottom: "0.5rem" }}/>
            
            <div className="w-full flex justify-start flex-col gap-6">

              <div className="text-[#00437B] flex flex-row">
                <p className="flex justify-center items-center font-bold pr-1 text-xl pb-0.5">名稱：</p>
                <p className="flex justify-center items-center">{name}</p>
              </div>
           

              <div className="text-[#00437B] flex flex-row">
                <p className="flex justify-center items-center font-bold pr-1 text-xl pb-0.5">類型：</p>
                <p className="flex justify-center items-center">{category}</p>
              </div>
        

              <div className="text-[#00437B] flex flex-row">
                <p className="flex justify-center items-center font-bold pr-1 text-xl pb-0.5">技術：</p>
                <p className="flex justify-center items-center">{tool}</p>
              </div>
    
              <div className="text-[#00437B] flex flex-col">
                <p className="flex items-center font-bold pr-1 text-xl pb-0.5">背景介紹：</p>
                <p className="flex items-center ">{description}</p>
              </div>

              <div className="text-[#00437B] flex flex-col">
                <p className="flex items-center font-bold pr-1 text-xl pb-0.5">遊玩方式：</p>
                <p className="flex items-center">{instruction}</p>
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
