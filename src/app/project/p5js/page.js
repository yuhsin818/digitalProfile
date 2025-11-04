import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import Painting1 from "@/app/image/p5js_1.png"
import Painting2 from "@/app/image/p5js_2.png"
import Painting3 from "@/app/image/p5js_3.png"
import Painting4 from "@/app/image/p5js_4.png"
import Painting5 from "@/app/image/p5js_5.png"

export default function P5js() {
  return (
    <div className="w-full min-w-[320px] h-full bg-[#D8E9F0] flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      <div className="w-full bg-[#00437B] flex flex-col text-white pt-8 px-20 rounded-bl-4xl">
        <h1 className="text-2xl font-bold mb-1">
          生成式藝術作品
        </h1>
        <h3 className="mb-4">
          我利用p5.js創作的生成式藝術作品
        </h3>
      </div>


      <div className="h-full w-full bg-[#00437B]">
        <div className="w-full h-full flex flex-col gap-5 relative p-[30px] bg-[#D8E9F0] rounded-tr-4xl">

          <div className="flex flex-col w-full gap-4 mt-3">

              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 lg:h-[50vh] w-full gap-4 h-[70vh]">
                
                <div className={`relative overflow-hidden bg-gray-200 lg:col-span-1 sm:col-span-2 col-span-1 rounded-2xl group`}
                  style={
                    {
                    backgroundImage: `url(${Painting1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                    }
                  }  
                >
                  {/* Hover 出現的白色毛玻璃圖層 */}
                  <a href="https://openprocessing.org/sketch/2130748" target="_blank">
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <p className="text-gray-800 text-center text-lg font-semibold">
                        Flow Fields
                      </p>
                    </div>
                    {/* <div className="w-[40px] h-[40px] rounded-full bg-red-500 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      狗狗
                    </div> */}
                  </a>

                </div>
              

              <div className="relative bg-gray-200 rounded-2xl lg:col-span-2 sm:col-span-1 col-span-1 group"
                style={
                  {
                  backgroundImage: `url(${Painting2.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://openprocessing.org/sketch/2101986" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      Abstract Slicing Journey
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200 rounded-2xl lg:col-span-1 sm:col-span-3 col-span-1 overflow-hidden group"
                style={{
                  backgroundImage: `url(${Painting3.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://openprocessing.org/sketch/2064930" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      Flower Planet
                    </p>
                  </div>
                </a>

                {/* 原始內容 */}
                {/* <div className="p-4 relative z-10 text-white font-bold">
                  內容三
                </div> */}
              </div>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4 h-[50vh] mb-[30px]">
              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Painting4.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://openprocessing.org/sketch/2125279" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      Hellish River
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Painting5.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://www.fxhash.xyz/generative/slug/gotcha" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      GOTCHA
                    </p>
                  </div>
                </a>
              </div>

            </div>


          </div>
        </div>
      </div>
 

    </div>
  );
}
