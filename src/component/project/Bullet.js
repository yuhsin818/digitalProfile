export default function Bullet({ text }) {
    return (
      <div className="flex items-center p-2">
        <div className="bg-gradient-to-br from-[#008BBF] to-[#AAD2E4] w-[20px] aspect-square rounded-full"></div>
        <p className="pl-4">{text}</p>
      </div>
    );
  }
  