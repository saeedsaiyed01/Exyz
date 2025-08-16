export type CardProps = {
  imageSrc: string;
  leftLabel?: string;
  rightLabel?: string;
};

export default function Card({
  imageSrc,
  leftLabel = "BUY MINT",
  rightLabel = "20 SOL",
}: CardProps) {
  return (
    <div className="group relative overflow-hidden transition-transform duration-300 will-change-transform hover:z-20">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"></div>

      <div className="aspect-[3/4]">
        <img
          src={imageSrc}
          alt="card"
          className="w-full h-full object-cover block transition-transform duration-300 mt-4 group-hover:scale-[1.03]"
        />
      </div>

      <div className="absolute left-0 right-0 bottom-[-56px] h-14 bg-[#FF6348] text-[#0A1318] flex items-center justify-between px-4 transition-all duration-300 group-hover:bottom-0 z-30">
        <span className="font-atomos-solid text-white text-[19.55px] leading-[100%] tracking-[0.49px] uppercase">
          {leftLabel}
        </span>
        <span className="font-atomos-solid text-white text-[19.55px] leading-[100%] tracking-[0.49px] uppercase">
          {rightLabel}
        </span>
      </div>
    </div>
  );
}
