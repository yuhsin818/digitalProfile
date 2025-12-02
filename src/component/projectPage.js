'use client'

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function ProjectPage({ image, content, href, title }) {
  
  const maxLength = 180;
  let displayedText = "";   // ✅ 先在外面宣告

  if (content) {
    displayedText =
      content.length > maxLength
        ? content.slice(0, maxLength) + "..."
        : content;
  }
  
  return (
    <Link href={href}>
      <motion.div
        className="relative w-full h-auto lg:h-[400px] bg-[rgba(255,255,255,0.45)] rounded-2xl flex flex-col lg:flex-row shadow-[#00437B] hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* 圖片改成 Next.js <Image /> */}
        <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={image}
            alt="project cover"
            fill        // 讓 Image 自動填滿父層
            className="object-cover rounded-2xl"
            priority    // 更快載入（可選）
          />
        </div>

        {/* 右邊文字內容 */}
        <div className="overflow-hidden w-full h-full flex flex-col p-6 lg:justify-center lg:items-center lg:w-1/2 text-[#00437B]">
          <div className="w-full flex justify-start font-bold text-xl mb-3">{title}</div>
          <p className="w-full flex justify-start">{displayedText}</p>
        </div>

      </motion.div>
    </Link>
  );
}



// 'use client';

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function ProjectPage({ image, content, href}) {

//   return (
//     <Link href={href}>
//       <motion.div
//         className="relative w-full h-auto lg:h-[400px] bg-[rgba(255,255,255,0.45)] rounded-2xl flex flex-col lg:flex-row shadow-[#00437B] hover:shadow-lg transition-shadow duration-300"
//         initial={{ opacity: 0, y: 30 }}      // 初始狀態（透明 + 向下偏移）
//         animate={{ opacity: 1, y: 0 }}       // 最終狀態（淡入並回到原位）
//         transition={{ duration: 0.6, ease: "easeOut" }} // 動畫時間與緩動
//       >
//         {/* 圖片部分 */}
//         <div
//           className="bg-gray-200 rounded-2xl w-full lg:w-1/2 h-[50vh] lg:h-[400px]"
//           style={{
//             backgroundImage: `url(${image.src})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center'
//           }}
//         ></div>

//         {/* 文字 + 連結部分 */}
//         <div className="overflow-hidden w-full h-full flex p-6 lg:justify-center lg:items-center lg:w-1/2 text-[#00437B]">
//           {/* <div className="w-full h-full flex p-6 lg:justify-center lg:items-center lg:w-1/2 text-[#00437B]"> */}
//             <p>{content}</p>
//           {/* </div> */}
          
//         </div>
//       </motion.div>
//     </Link>
//   );
// }
