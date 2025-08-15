export default function CollectionSection() {
  return (
    <div>
      {/* NEW COLLECTION marquee bar */}
      <section className="mt-8 w-full border-y border-white bg-[#071317]">
        <div className="overflow-hidden">
          <div className="marquee flex gap-16 py-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="font-megaton text-[24px] leading-[100%] tracking-[0.6px] align-middle text-white/80"
              >
                NEW COLLECTION
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 8 Card boxes - compact grid like reference */}
      <section className="w-full px-0 py-8 bg-[#061015]">
        <div className="relative w-full">
          {/* Always-visible horizontal lines (under cards) */}
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/25 z-0"></div>
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-[2px] bg-white/25 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {Array.from({ length: 8 }).map((_, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden transition-transform duration-300 will-change-transform hover:scale-[1.02] hover:z-20"
              >
                {/* Side highlight lines (visible only on hover for this card) */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-[2px] bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20"></div>

                {/* Card media area fills fully without thick frames */}
                <div className="aspect-[3/4]">
                  <img
                    src="/Image/img.png"
                    alt="card"
                    className="w-full h-full object-cover block"
                  />
                </div>

                {/* Bottom price bar - pops up on hover */}
                <div className="absolute left-0 right-0 bottom-[-56px] h-14 bg-[#FF6348] text-[#0A1318] flex items-center justify-between px-4 transition-all duration-300 group-hover:bottom-0 z-30">
                  <span className="font-press text-white text-[14px] tracking-wide uppercase">BUY MINT</span>
                  <span className="font-press text-white text-[14px] tracking-wide uppercase">20 SOL</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}