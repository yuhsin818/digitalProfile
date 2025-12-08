"use client"

import Image from "next/image";
import AvatarImage from "@/../public/hachiware.jpg";
import HeartImg from "@/app/image/icon_heart.svg";
import HeartImg2 from "@/app/image/icon_heart2.svg";
import { useState } from "react";
import BlurText from "../../component/BlurText";

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const [heart, setHeart] = useState(0);
  
  const addHeart = function(){
    setHeart(heart+1);
  }

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const copyText = async (text, setStatus) => {
    await navigator.clipboard.writeText(text);
    setStatus("已複製！");
    setTimeout(() => setStatus(""), 1500);
  };
  const [emailCopied, setEmailCopied] = useState("");
  const [phoneCopied, setPhoneCopied] = useState("");
  

  return (
    <div className="w-full h-full flex justify-center items-center gap-2 p-8 overflow-hidden min-w-[320px] overflow-y-auto">
      <div className="flex rounded-2xl justify-center items-center bg-[rgba(255,255,255,0.5)] shadow shadow-[#00437B] hover:shadow-xl transition-shadow duration-300 w-[80vh] lg:h-[50vh]">

        {/* <div className="bg-gray-200  rounded-2xl  flex-[3]"
            style={
              {
              backgroundImage: `url(${AvatarImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
              }
            }  
          >
        </div> */}

       
        <div className="relative text-[#00437B] flex justify-center items-center p-4 flex-col">
          <BlurText text="Feel free to contact me" delay={150} animateBy="words" direction="top" className="w-full flex justify-center text-center text-[20px] mb-2"/>
          <BlurText text="if you’re interested in working together." delay={150} animateBy="words" direction="top" className="w-full flex justify-center text-center text-[20px] mb-8"/>
           {/* Email */}
          <div className="flex items-center gap-3 flex-col sm:flex-row">
            <BlurText
              text="My Email:  maggie96206@gmail.com"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[20px] font-bold"
            />

            <button
              onClick={async () => {
                await navigator.clipboard.writeText("maggie96206@gmail.com");
                setEmailCopied(true);
                setTimeout(() => setEmailCopied(false), 1500);
              }}
              className="px-4 py-1 text-sm rounded-full border border-[#00437B] transition
                        hover:bg-[#00437B] hover:text-white cursor-pointer mb-4 sm:mb-0"
            >
              {emailCopied ? "✅Copied" : "Copy"}
            </button>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3  flex-col sm:flex-row">
            <BlurText
              text="My Phone:  0912367162"
              delay={150}
              animateBy="words"
              direction="top"
              className="text-[20px] font-bold"
            />

            <button
              onClick={async () => {
                await navigator.clipboard.writeText("0912367162");
                setPhoneCopied(true);
                setTimeout(() => setPhoneCopied(false), 1500);
              }}
              className="px-4 py-1 text-sm rounded-full border border-[#00437B] transition
                        hover:bg-[#00437B] hover:text-white cursor-pointer"
            >
              {phoneCopied ? "✅Copied" : "Copy"}
            </button>
          </div>
          <BlurText text="Thank You!" delay={150} animateBy="words" direction="top" className="text-[20px] mt-8"/>

          {/* <h3 className="mb-6">我是政大心理系學生，熱愛觀察人心，也愛動手做！同時修習日文，希望未來能在創意與人性之間找到新火花！</h3> */}
          {/* <div className="absolute bottom-1 right-3 m-1 cursor-pointer flex flex-row justify-center items-center" onClick={addHeart}>
            <Image src={isHovered ? HeartImg2 : HeartImg}
              alt="heart"
              className="w-[25px] transform transition duration-300 hover:scale-110"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div className="text-[20px] ml-2">{ heart }</div>
          </div> */}
        </div>

      </div>


    </div>
  );
}
