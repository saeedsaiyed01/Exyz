type FooterProps = {
  leftLabel?: string;
  rightLabel?: string;
  year?: number | string;
};

export default function Footer({
  leftLabel = "© WEBTHREE 2024",
  rightLabel = "ALL RIGHTS RESERVED",
  year = new Date().getFullYear(),
}: FooterProps) {
  return (
    <footer className="w-full  border-t border-white/10 bg-[#000D18]">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 pt-1 pb-4 flex items-center justify-between text-white  mt-5">
        <div className="flex items-center">
          <span className="font-voltec italic uppercase text-[15px] sm:text-[20px] text-[#95FF00] leading-none">
            /
          </span>
          <span className="ml-2 font-voltec italic uppercase text-[16px] sm:text-[20px] tracking-[0.06em] text-white/90 leading-none">
            {leftLabel}
          </span>
        </div>

        <div className="flex items-center">
          <span className="font-voltec italic uppercase text-[15px] sm:text-[20px] text-[#95FF00] leading-none">
            /
          </span>
          <span className="ml-2 font-voltec italic uppercase text-[16px] sm:text-[20px] tracking-[0.06em] text-white/90 leading-none">
            {rightLabel}
          </span>
        </div>
      </div>
    </footer>
  );
}
