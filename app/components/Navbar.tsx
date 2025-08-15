export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-20 px-8 py-4">
      {/* Left - EHYZ Logo */}
      <div className="absolute top-4 left-8 text-2xl font-voltec text-white tracking-wider">
        EHYZ
      </div>
      
      {/* Center - Leaderboard with Close Button */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-voltec text-white tracking-wide">
          Leaderboard
        </h2>
      </div>
      
      {/* Right - Connect Wallet with Edge Design */}
      <div className="absolute top-4 right-8">
        <div className="relative">
          {/* Edge Design - Four L-shaped brackets */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-l-2 border-t-2 border-white"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 border-r-2 border-t-2 border-white"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-l-2 border-b-2 border-white"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r-2 border-b-2 border-white"></div>
          
          {/* CONNECT WALLET Text */}
          <div className="connect-wallet-typography text-white px-4 py-2">
            CONNECT WALLET
          </div>
        </div>
      </div>
    </header>
  );
}
