import Button from './components/Button';
import CollectionSection from './components/CollectionSection';
import Footer from './components/Footer';
import Leaderboard, { LeaderboardRow } from './components/Leaderboard';
import Navbar from './components/Navbar';

export default function Home() {
  const leaderboardRows: LeaderboardRow[] = [
    { id: 1, logoSrc: '/Image/1stteamlogo.png', teamName: 'REALTECH', score: 17, rewardSol: undefined },
    { id: 2, logoSrc: '/Image/2stteamlogo.png', teamName: 'PSYCHO AZOO', score: 15, rewardSol: 30 },
    { id: 3, logoSrc: '/Image/3thteamlogo.png', teamName: 'SSTS', score: 8, rewardSol: 25 },
    { id: 4, logoSrc: '/Image/4thteamlogo.png', teamName: '38TH ARMA', score: 11, rewardSol: 25 },
  ];
  const skullSrc = '/Image/skull.png';

  return (
    <div className="min-h-screen bg-[#000D18] text-white font-mono relative overflow-hidden">
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        
        {/* Navbar Component */}
        <Navbar />

        {/* Main Content Section */}
        <div className="flex-1 flex items-center justify-center px-8 pt-32">
          {/* Main Content Container */}
          <div className="w-[1147px] h-[648px] relative mt-14">
            
            {/* Center Content - Main Title, Description, Button */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-6xl z-10 ">
              {/* Main Title - Atomos font with hollow/outlined appearance */}
              <h1 className="font-atomos text-transparent bg-clip-text bg-gradient-to-r from-white to-white mb-6 text-[84px] leading-[80px] font-bold whitespace-nowrap" style={{
                WebkitTextStroke: '2px white'
              }}>
                EXPLORE NFT COLLECTION
              </h1>
              
              {/* Description - Voltec font with proper italic styling */}
              <p className="text-[23px] text-white/90 italic mb-8 leading-relaxed max-w-2xl mx-auto font-voltec">
                A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, metaverse-ready, and designed to benefit their holders.
              </p>
              
              {/* Start Game Button - Orbitron font */}
              <Button className="font-orbitron" size="sm" >
                START GAME
              </Button>
            </div>

            {/* Left Side Info Panels */}
            <div className="absolute left-0 top-0 space-y-48">
              {/* DSP and FPS Panel with edge */}
              <div className="relative">
                {/* Edge design for DSP/FPS panel */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
                <div className="px-6 py-4 space-y-4">
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">DSP: 1787 X 979</div>
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">FPS: 67.90</div>
                </div>
              </div>
              
              {/* ///: 0.20 Panel */}
              <div className="text-green-400 font-orbitron text-[8px] leading-relaxed pl-6 font-light tracking-[0.08em]">///: 0.20</div>
              
              {/* EVO and VERS Panel with edge */}
              <div className="relative">
                {/* Edge design for EVO/VERS panel */}
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
                <div className="px-6 py-4 space-y-4">
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">EVO: Alpha</div>
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">VERS: 01.08.84</div>
                </div>
              </div>
            </div>

            {/* Right Side Info Panels */}
            <div className="absolute right-0 top-0 space-y-48">
              {/* Date and Time Panel with edge */}
              <div className="relative">
                {/* Edge design for Date/Time panel */}
                <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
                <div className="px-6 py-4 space-y-4 text-right">
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">10-08-2225:DATE</div>
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">02:56:20 TIME</div>
                </div>
              </div>
              
              {/* 0.49 :\\ Panel */}
              <div className="text-green-400 font-orbitron text-[8px] leading-relaxed text-right pr-6 font-light tracking-[0.08em]">0.49 :\\</div>
              
              {/* LOG Panel with edge */}
              <div className="relative">
                {/* Edge design for LOG panel */}
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
                <div className="px-6 py-4 space-y-4 text-right">
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">74.926 :LOG</div>
                  <div className="text-green-400 font-orbitron text-[8px] leading-relaxed font-light tracking-[0.08em]">Win11 Chrome/138.0.0.0:SYS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Grid Image - Below main content */}
      <div className="relative w-full h-[50vh] mt-6">
        {/* Top fade gradient (background -> transparent) behind the line */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#000D18] via-[#000D18]/70 to-transparent z-10 pointer-events-none"></div>

        {/* #FF6348 halo ABOVE the line (does not overlap the line) */}
        <div className="absolute -top-6 left-0 right-0 z-20 pointer-events-none ">
          <div className="h-6 w-full bg-gradient-to-t from-[#FF6348]/35 via-[#FF6348]/15 to-transparent"></div>
        </div>

        {/* Line image flush at the top; keep its intrinsic thin thickness */}
        <img
          src="/Image/line.png"
          alt="Neon glow overlay"
          className="absolute top-0 left-0 w-full h-auto object-contain z-30 pointer-events-none select-none mt-[-100px]"
        />

        {/* #FF6348 glow BELOW the line (starts just under the line) */}
        <div className="absolute top-[6px] left-0 right-0 z-20 pointer-events-none">
          <div className="h-12 w-full bg-gradient-to-b from-[#FF6348]/55 via-[#FF6348]/30 to-transparent"></div>
        </div>

        {/* Grid image */}
        <img 
          src="/Image/bottomimg.png" 
          alt="Retro-futuristic grid pattern"
          className="w-full h-full object-cover object-top opacity-100 z-0"
        />
      </div>

      <CollectionSection />

      <Leaderboard rows={leaderboardRows} skullSrc={skullSrc} />

      <Footer leftLabel="WEB3REE" rightLabel="ALL RIGHTS RESERVED" />
    </div>
  );
}
