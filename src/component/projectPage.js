'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectPage({ image, content, href}) {

  return (
    <Link href={href}>
      <motion.div
        className="relative w-full h-auto lg:h-[400px] bg-[rgba(255,255,255,0.45)] rounded-2xl flex flex-col lg:flex-row shadow-[#00437B] hover:shadow-lg transition-shadow duration-300"
        initial={{ opacity: 0, y: 30 }}      // 初始狀態（透明 + 向下偏移）
        animate={{ opacity: 1, y: 0 }}       // 最終狀態（淡入並回到原位）
        transition={{ duration: 0.6, ease: "easeOut" }} // 動畫時間與緩動
      >
        {/* 圖片部分 */}
        <div
          className="bg-gray-200 rounded-2xl w-full lg:w-1/2 h-[50vh] lg:h-[400px]"
          style={{
            backgroundImage: `url(${image.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>

        {/* 文字 + 連結部分 */}
        <div className="overflow-hidden w-full h-full flex p-6 lg:justify-center lg:items-center lg:w-1/2 text-[#00437B]">
          {/* <div className="w-full h-full flex p-6 lg:justify-center lg:items-center lg:w-1/2 text-[#00437B]"> */}
            <p>{content}</p>
          {/* </div> */}
          
        </div>
      </motion.div>
    </Link>
  );
}
