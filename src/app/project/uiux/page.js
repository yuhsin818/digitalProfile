import { TranslatedText } from "@/component/LanguageProvider";

import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import Figma1 from "@/app/image/Figma_work1.png"
import Figma2 from "@/app/image/Figma_work2.png"

export default function Uiux() {
  return (
    <div className="w-full min-w-[320px] h-full bg-[#D8E9F0] flex rounded-2xl flex-col justify-start items-center overflow-y-auto">
      
      <div className="w-full bg-[#00437B] flex flex-col text-white pt-8 px-20 rounded-bl-4xl">
        <h1 className="text-2xl font-bold mb-1"><TranslatedText messageKey="content.project_uiux.interfaceDesign" /></h1>
        <h3 className="mb-4"><TranslatedText messageKey="content.project_uiux.interfaceDesignsICreatedWithFigma" /></h3>
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
                <p><TranslatedText messageKey="content.project_uiux.thisMovieReviewAppIntegratesTicketBooking" /></p>
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
                <p><TranslatedText messageKey="content.project_uiux.aCentralizedPlatformThatBringsTogetherAnnouncements" /></p>
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
