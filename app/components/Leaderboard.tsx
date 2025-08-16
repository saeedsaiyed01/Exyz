export type LeaderboardRow = {
  id: string | number;
  logoSrc: string;
  teamName: string;
  score: number;
  rewardSol?: number;
};

type LeaderboardProps = {
  title?: string;
  rows?: LeaderboardRow[];
  skullSrc?: string;
};

const defaultRows: LeaderboardRow[] = [
  {
    id: 1,
    logoSrc: "/Image/1stteamlogo.png",
    teamName: "REALTECH",
    score: 17,
    rewardSol: undefined,
  },
  {
    id: 2,
    logoSrc: "/Image/2stteamlogo.png",
    teamName: "PSYCHO AZOO",
    score: 15,
    rewardSol: 30,
  },
  {
    id: 3,
    logoSrc: "/Image/3thteamlogo.png",
    teamName: "SSTS",
    score: 8,
    rewardSol: 25,
  },
  {
    id: 4,
    logoSrc: "/Image/4thteamlogo.png",
    teamName: "38TH ARMA",
    score: 11,
    rewardSol: 25,
  },
];

export default function Leaderboard({
  title = "THE LEAGUE",
  rows = defaultRows,
  skullSrc = "/Image/skull.png",
}: LeaderboardProps) {
  return (
    <div className="w-full px-4 sm:px-8 lg:px-16 py-12 ">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center text-white font-atomos-solid font-bold text-[clamp(40px,8vw,96px)] leading-none mb-8">
          {title}
        </h2>

        <div className="mx-auto w-full max-w-[1179px] bg-[#000D18] rounded-[11px] border border-white overflow-hidden lg:min-h-[500px]">
          {rows.map((row) => (
            <div key={row.id} className="relative">
              <div className="grid grid-cols-[auto_1fr_auto_8rem] items-center gap-6 sm:gap-8 px-6 sm:px-10 py-6 sm:py-8">
                {/* logo */}
                <img
                  src={row.logoSrc}
                  alt={row.teamName}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />

                {/* team name */}
                <div className="font-voltec text-[18px] sm:text-[22px] leading-[1] tracking-[-0.54px] uppercase text-white/90">
                  {row.teamName}
                </div>

                <div className="flex items-center justify-end gap-3">
                  <span className="font-press text-[18px] sm:text-[22px] leading-[1] tracking-[-0.54px] text-white/90">
                    {row.score}
                  </span>
                  <img
                    src={skullSrc}
                    alt="skull"
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
                  />
                </div>

                {/* reward */}
                {row.rewardSol !== undefined ? (
                  <div className="font-press text-[16px] sm:text-[20px] leading-[1] tracking-[-0.54px] text-white/80 whitespace-nowrap justify-self-end">
                    {row.rewardSol} <span className="opacity-80">SOL</span>
                  </div>
                ) : (
                  <div className="justify-self-end" />
                )}
              </div>

              <div className="px-6 sm:px-10">
                <div className="h-[3px] bg-[#FF6348]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
