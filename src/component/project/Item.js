import Image from "next/image";

export default function Item({ img, text }) {
  return (
    <div className="flex gap-4 mt-4">
      <Image src={img} alt={text} width={500} height={300} className="rounded-[4vh]" />
      <p>{text}</p>
    </div>
  );
}

  