"use client"

import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import HeartImg from "@/app/image/icon_heart.svg";
import HeartImg2 from "@/app/image/icon_heart2.svg";
import { useState } from "react";
import BlurText from "../component/BlurText";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [heart, setHeart] = useState(0);
  
  const addHeart = function(){
    setHeart(heart+1);
  }

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <div className="w-full h-full bg-[rgba(255,255,255,0.3)] flex justify-center items-center rounded-2xl gap-2 p-8 overflow-hidden min-w-[320px] overflow-y-auto">
      <div className="flex flex-row rounded-2xl shadow shadow-[#00437B] hover:shadow-xl transition-shadow duration-300 w-[60vh] lg:h-[40vh]">

        <div className="bg-gray-200  rounded-2xl  flex-[3]"
            style={
              {
              backgroundImage: `url(${AvatarImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
              }
            }  
          >
        </div>

       
        <div className="relative text-white flex justify-center items-center p-4 flex-[2]">
          <BlurText
            text="我是政大心理系學生，熱愛觀察人心，也愛動手做！同時修習日文，希望未來能在創意與人性之間找到新火花！"
            delay={150}
            animateBy="words"
            direction="top"
            // onAnimationComplete={handleAnimationComplete}
            className="text-[16px]"
          />

          {/* <h3 className="mb-6">我是政大心理系學生，熱愛觀察人心，也愛動手做！同時修習日文，希望未來能在創意與人性之間找到新火花！</h3> */}
          <div className="absolute bottom-1 right-3 m-1 cursor-pointer flex flex-row justify-center items-center" onClick={addHeart}>
            <Image src={isHovered ? HeartImg2 : HeartImg}
              alt="heart"
              className="w-[25px] transform transition duration-300 hover:scale-110"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div className="text-[20px] ml-2">{ heart }</div>
          </div>
        </div>

      </div>


    </div>
  );
}
