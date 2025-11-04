import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import Figma1 from "@/app/image/Figma_work1.png"
import Figma2 from "@/app/image/Figma_work2.png"

export default function Uiux() {
  return (
    <div className="w-full min-w-[320px] h-full bg-[#D8E9F0] flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      <div className="w-full bg-[#00437B] flex flex-col text-white pt-8 px-20 rounded-bl-4xl">
        <h1 className="text-2xl font-bold mb-1">
          介面設計作品
        </h1>
        <h3 className="mb-4">
          我利用Figma創作的介面設計作品
        </h3>
      </div>


      <div className="w-full h-full bg-[#00437B]">
        <div className="w-full h-full flex flex-col gap-8 relative p-10 lg:px-20 bg-[#D8E9F0] rounded-tr-4xl">

          <div className="relative w-full lg:h-[500px] bg-[rgba(255,255,255,0.45)] rounded-2xl flex flex-col lg:flex-row shadow-[#00437B] hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-200  rounded-2xl w-full h-[50vh] lg:h-[500px] lg:w-[150vh]"
              style={
                {
                backgroundImage: `url(${Figma1.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
            </div>

            {/* <div className="overflow-hidden w-full h-[10vh] sm:h-[20vh] lg:h-[70vh] lg:w-[80vh] flex flex-col"> */}
            <div className="overflow-hidden w-full lg:h-[70vh] lg:w-[80vh] flex flex-col">

              {/* <div className="w-full h-[50vh] lg:h-[70vh] lg:w-[80vh] p-2"> */}
              <div className="w-full h-full flex lg:justify-center lg:items-center p-6 mb-11 text-[#00437B]">
                <p>
                  此影評 App 結合訂票、查詢評價與撰寫評論功能，針對目前市面上觀影流程分散的問題提出整合式解方。透過簡潔的介面與直覺的操作邏輯，使用者可在單一平台完成觀影前的選片、訂票，中途的即時評價查詢，以及觀影後的分享討論，提升整體使用效率與參與感。
                </p>
              </div>

              <a href="https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-2&t=vAzDLXBiyQaEZYcv-1" target="_blank">
                <div className="absolute bottom-1 right-1 m-0.5 w-[150px] flex justify-center items-center bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] rounded-2xl text-white px-[10px] py-[5px] transform transition duration-300 hover:scale-105">
                  View on Figma
                </div>
              </a>

            </div>
          </div>

          <div className="relative w-full lg:h-[500px] bg-[rgba(255,255,255,0.45)] rounded-2xl flex flex-col lg:flex-row shadow-[#00437B] hover:shadow-lg transition-shadow duration-300">
            <div className="bg-gray-200  rounded-2xl w-full h-[50vh] lg:h-[500px] lg:w-[150vh]"
              style={
                {
                backgroundImage: `url(${Figma2.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
                }
              }  
            >
            </div>

            {/* <div className="overflow-hidden w-full h-[10vh] sm:h-[20vh] lg:h-[70vh] lg:w-[80vh] flex flex-col"> */}
            <div className="overflow-hidden w-full lg:h-[70vh] lg:w-[80vh] flex flex-col">

              {/* <div className="w-full h-[50vh] lg:h-[70vh] lg:w-[80vh] p-2"> */}
              <div className="w-full h-full flex lg:justify-center lg:items-center p-6 mb-11 text-[#00437B]">
                <p>
                為解決目前國考資訊與功能分散於不同機關網站的痛點，規劃一個集中式平台，整合公告發布、報名系統、歷屆考題與成績查詢等關鍵功能。以清晰的分類與一致的操作流程為核心，降低使用者在資訊搜尋與流程操作上的負擔，提升準備效率與整體使用體驗。
                </p>
              </div>

              <a href="https://www.figma.com/proto/OqMj3992swXrXHfhx3Nbz5/web%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88_design?node-id=1-3&t=vAzDLXBiyQaEZYcv-1" target="_blank">
                <div className="absolute bottom-1 right-1 m-0.5 w-[150px] flex justify-center items-center bg-[linear-gradient(to_bottom_right,_#008BBF,_#AAD2E4)] rounded-2xl text-white px-[10px] py-[5px] transform transition duration-300 hover:scale-105">
                  View on Figma
                </div>
              </a>

            </div>
          </div>

        </div>
      </div>

      
    </div>
  );
}
