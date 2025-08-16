import Button from "./components/Button";
import CollectionSection from "./components/CollectionSection";
import Footer from "./components/Footer";
import Leaderboard from "./components/Leaderboard";
import Navbar from "./components/Navbar";

const pageContent = {
  hero: {
    title: "EXPLORE NFT COLLECTION",
    description:
      "A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, metaverse-ready, and designed to benefit their holders.",
    buttonText: "START GAME",
    hud: {
      dspLabel: "DSP:",
      dspValue: "1787 X 979",
      fpsLabel: "FPS:",
      fpsValue: "67.90",
      diagLabel: "///:",
      diagValue: "0.20",
      evoLabel: "EVO:",
      evoValue: "Alpha",
      versLabel: "VERS:",
      versValue: "01.08.84",
      dateLabel: "DATE:",
      dateValue: "10-08-2225",
      timeLabel: "TIME:",
      timeValue: "02:56:20",
      logLabel: "LOG:",
      logValue: "74.926",
      sysLabel: "SYS:",
      sysValue: "Win11 Chrome/138.0.0.0",
    },
    images: {
      line: "/Image/line.png",
      grid: "/Image/bottomimg.png",
    },
  },
} as const;

export default function Home() {

  return (
    <div className="min-h-screen bg-[#00120A] text-white font-mono relative overflow-hidden">
      <div className="relative z-10 min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-1 flex items-center justify-center px-8 pt-32">
          <div
            className="relative mt-14 will-change-transform"
            style={{
              width: 1147,
              height: 648,
              transform: "scale(min(100vw / 1147, 100vh / 648))",
              transformOrigin: "center center",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
              <h1
                className="font-atomos text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-6 text-[clamp(40px,8vw,84px)] leading-[1] font-bold whitespace-nowrap"
                style={{
                  WebkitTextStroke: "2px white",
                }}
              >
                {pageContent.hero.title}
              </h1>

              <p className="text-[clamp(14px,2.2vw,23px)] text-white/90 italic mb-8 leading-relaxed max-w-2xl mx-auto font-voltec">
                {pageContent.hero.description}
              </p>

              <Button className="font-orbitron" size="sm">
                {pageContent.hero.buttonText}
              </Button>
            </div>

            <div className="absolute left-0 top-0 space-y-48">
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                <div className="px-6 py-4 space-y-4">
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.dspLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.dspValue}
                    </span>
                  </div>
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.fpsLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.fpsValue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="font-orbitron text-[8px] leading-relaxed pl-6 font-light tracking-[0.08em]">
                <span className="text-white/90">
                  {pageContent.hero.hud.diagLabel}{" "}
                </span>
                <span className="text-green-400">
                  {pageContent.hero.hud.diagValue}
                </span>
              </div>

              <div className="relative">
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                <div className="px-6 py-4 space-y-4">
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.evoLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.evoValue}
                    </span>
                  </div>
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.versLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.versValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-0 top-0 space-y-48">
              <div className="relative">
                <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                <div className="px-6 py-4 space-y-4 text-right">
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.dateLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.dateValue}
                    </span>
                  </div>
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.timeLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.timeValue}
                    </span>
                  </div>
                </div>
              </div>

              <div className="font-orbitron text-[8px] leading-relaxed text-right pr-6 font-light tracking-[0.08em]">
                <span className="text-white/90">\\\\: </span>
                <span className="text-green-400">
                  {pageContent.hero.hud.logValue}
                </span>
              </div>

              <div className="relative">
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                <div className="px-6 py-4 space-y-4 text-right">
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.logLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.logValue}
                    </span>
                  </div>
                  <div className="font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">
                    <span className="text-white/90">
                      {pageContent.hero.hud.sysLabel}{" "}
                    </span>
                    <span className="text-green-400">
                      {pageContent.hero.hud.sysValue}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-[50vh] mt-6">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#000D18] via-[#000D18]/70 to-transparent z-10 pointer-events-none"></div>

        <div className="absolute -top-6 left-0 right-0 z-20 pointer-events-none ">
          <div className="h-6 w-full bg-gradient-to-t from-[#FF6348]/35 via-[#FF6348]/15 to-transparent"></div>
        </div>

        <img
          src="/Image/line.png"
          alt="Neon glow overlay"
          className="absolute top-0 left-0 w-full h-auto object-contain z-30 pointer-events-none select-none mt-[-100px]"
        />

        <div className="absolute top-[6px] left-0 right-0 z-20 pointer-events-none">
          <div className="h-12 w-full bg-gradient-to-b from-[#FF6348]/55 via-[#FF6348]/30 to-transparent"></div>
        </div>

        <img
          src={pageContent.hero.images.grid}
          alt="Retro-futuristic grid pattern"
          className="w-full h-full object-cover object-top opacity-100 z-0"
        />
      </div>

      <CollectionSection />

      <div className="bg-[#000D18]">
        <Leaderboard />
      </div>

      <Footer />
    </div>
  );
}
