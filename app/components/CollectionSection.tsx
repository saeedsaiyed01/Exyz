import Card from './Card';

const collectionCards = Array.from({ length: 8 }, (_, id) => ({ id, imageSrc: '/Image/img.png' }));

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


      <section className="w-full px-0 pt-0 pb-8 bg-[#061015]">
        <div className="relative w-full">
     
          <div className="pointer-events-none absolute left-0 right-0 top-0 h-[2px] bg-white/25 z-0"></div>
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[2px] bg-white/25 z-0"></div>
          <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-[2px] bg-white/25 z-0"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {collectionCards.map(card => (
              <Card key={card.id} imageSrc={card.imageSrc} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}