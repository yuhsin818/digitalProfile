import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import Photo1 from "@/app/image/photo1.jpg"
import Photo2 from "@/app/image/photo2.jpg"
import Photo3 from "@/app/image/photo3.jpg"
import Photo4 from "@/app/image/photo4.jpg"
import Photo5 from "@/app/image/photo5.jpg"
import Photo6 from "@/app/image/photo6.jpg"
import Photo7 from "@/app/image/photo7.jpg"
import Photo8 from "@/app/image/photo8.jpg"
import Photo9 from "@/app/image/photo9.jpg"

export default function Photo() {
  return (
    <div className="w-full min-w-[320px] h-full bg-[#D8E9F0] flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      <div className="w-full bg-[#00437B] flex flex-col text-white pt-8 px-20 rounded-bl-4xl">
        <h1 className="text-2xl font-bold mb-1">
          攝影作品
        </h1>
        <h3 className="mb-4">
          我放在推特上的娃娃收藏分享
        </h3>
      </div>


      <div className="h-full w-full bg-[#00437B]">
        <div className="w-full h-full flex flex-col gap-5 relative p-[30px] bg-[#D8E9F0] rounded-tr-4xl">

          <div className="flex flex-col w-full gap-4 mt-3">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-4 h-[200vh] sm:h-[150vh] mb-[30px]">
              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo1.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1805450765755977945" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      ハチワレとギター
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo2.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1815960981706817712" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      泣いちゃった
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo3.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1809851226567426549" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      お出かけ
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo4.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1814898339932217368" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      報酬もらった
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo5.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1814564814968266810" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      失敗しちゃった
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo6.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1823212189395919257" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      うさぎ
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo7.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1823957591950811303" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      慰めろッ
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo8.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1829065190631190984" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      古本屋だらけ
                    </p>
                  </div>
                </a>
              </div>

              <div className="relative bg-gray-200  rounded-2xl group"
                style={
                  {
                  backgroundImage: `url(${Photo9.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                  }
                }  
              >
                {/* Hover 出現的白色毛玻璃圖層 */}
                <a href="https://x.com/Hanayo888/status/1822860495042347057" target="_blank">
                  <div className="absolute inset-0 bg-white/50 backdrop-blur-lg rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-gray-800 text-center text-lg font-semibold">
                      ムン顔ハチワレ
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
