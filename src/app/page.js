import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import HeartImg from "@/../public/heart.png";
import File1 from "@/app/image/HSNU.png"
import File2 from "@/app/image/NCCU.png"
import File3 from "@/app/image/certificate.png"
import File4 from "@/app/image/JLPT.png"

export default function About() {
  return (
    <div className="w-full min-w-[320px] h-full flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      <div className="w-full flex flex-col text-[#00437B] pt-8 px-20 rounded-bl-[4vw]">
        <h1 className="text-2xl font-bold mb-1">
          關於我
        </h1>
        <h3 className="mb-4">
          我的學習歷程與各種證明
        </h3>
      </div>

    
      <div className="w-full h-[150vh] sm:h-full">
        <div className="w-full flex flex-col gap-5 p-[30px] rounded-tr-[4vw] lg:items-center">

          <div className="flex w-full lg:justify-center flex-col lg:flex-row mt-6">
            <div className="w-full lg:w-[50vh] pl-8 text-[#00437B] font-bold">
              <div className="flex flex-col relative">
                  {/* 垂直主線：整條線一次畫出 */}
                  <div className="absolute left-[-17px] top-[38px] bottom-[38px] lg:bottom-[38px] w-[4px] bg-[linear-gradient(to_bottom,_#A9D2E4,_#32A2CA)] z-0"></div>

                  {/* 第一個項目 */}
                  <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#A9D2E4] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">20xx 畢業於師大附中</div>
                  </div>

                  {/* 第二個項目 */}
                  <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#92C8DF] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">20xx 就讀於政治大學心理學系</div>
                  </div>

                  {/* 第三個項目 */}
                  <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#79BED9] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">20xx 輔系日本語文學系</div>
                  </div>

                  {/* 第四個項目 */}
                  <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#60B5D4] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">20xx 雙主修數位內容學位學程</div>
                  </div>

                  {/* 第五個項目 */}
                  <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#46ABCF] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">20xx 通過日檢Nx</div>
                  </div>

                  {/* 第六個項目 */}
                  <div className="flex items-center rounded-2xl py-5 pl-3 pr-4 relative">
                    <div className="w-[30px] h-[30px] rounded-full bg-[#32A2CA] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">20xx 在xx公司擔任實習生</div>
                  </div>
                </div>
            </div>


            <div className="w-full lg:w-[40vh] lg:h-[50vh] flex flex-col bg-[rgba(255,255,255,0.45)]  text-[#00437B] p-4 rounded-2xl">
              <h2 className="font-bold">相關證明文件</h2>
              <div className="h-[50vh] sm:h-[30vh] lg:h-[40vh] grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-2 gap-3 mt-4">
              <div
                className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
                style={
                  {
                  backgroundImage: `url(${File1.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  }
                }
              >
                <div className="w-full h-[30px] backdrop-blur-lg absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
                  畢業證書
                </div>
              </div>

                <div className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
                  style={
                    { backgroundImage: `url(${File2.src})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center' 
                    }
                  }
                >
                  <div className="w-full h-[30px] backdrop-blur-lg 
                  absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
                    成績單
                  </div>
                </div>

                <div className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
                  style={
                    { backgroundImage: `url(${File3.src})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center' }
                  }
                >
                  <div className="w-full h-[30px] backdrop-blur-lg 
                  absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
                    獎狀
                  </div>
                </div>

                <div className="bg-gray-200 rounded-2xl relative overflow-hidden transform transition duration-300 hover:scale-105"
                  style={
                    { backgroundImage: `url(${File4.src})`, 
                    backgroundSize: 'cover',
                    backgroundPosition: 'center' }
                  }
                
                >
                  <div className="w-full h-[30px] backdrop-blur-lg 
                  absolute bottom-0 left-0 text-black text-[15px] flex justify-center items-center rounded-b-2xl">
                    檢定證書
                  </div>
                </div>

              </div>
            </div>

          </div>

          
          <div className="w-full lg:w-[70vh] xl:w-[90vh] flex flex-col bg-[rgba(255,255,255,0.45)]  text-[#00437B] p-4 rounded-2xl mt-3">
              <h2 className="font-bold">能力</h2>
              <div className="pl-10 mt-5">
                {/* 第一個項目 */}
                <div className="flex items-center rounded-2xl py-3 pr-4 relative">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#A9D2E4] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">User Research</div>
                  </div>

                  {/* 第二個項目 */}
                  <div className="flex items-center rounded-2xl py-3 pr-4 relative">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#92C8DF] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">Visual Design</div>
                  </div>

                  {/* 第三個項目 */}
                  <div className="flex items-center rounded-2xl py-3 pr-4 relative">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#79BED9] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">Javascript</div>
                  </div>

                  {/* 第四個項目 */}
                  <div className="flex items-center rounded-2xl py-3 pr-4 relative">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#60B5D4] z-10 absolute left-[-30px]"></div>
                    <div className="ml-5">Digital Art</div>
                  </div>
              </div>
          </div>
        
        </div>
      </div>
      


    </div>
  );
}
