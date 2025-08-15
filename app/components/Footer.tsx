type FooterProps = {
	leftLabel?: string;
	rightLabel?: string;
	year?: number | string;
};

export default function Footer({
	leftLabel = 'WEB3REE',
	rightLabel = 'ALL RIGHTS RESERVED',
	year = new Date().getFullYear(),
}: FooterProps) {
	return (
		<footer className="w-full border-t border-white/10 bg-[#000D18]">
			<div className="mx-auto max-w-7xl px-4 sm:px-8 py-6 flex items-center justify-between text-white/70">
				<div className="flex items-center gap-2 font-voltec text-[12px] tracking-wide">
					<span className="inline-block h-[10px] w-[3px] bg-emerald-400" />
					<span>/{' '}{leftLabel} {year}</span>
				</div>
				<div className="flex items-center gap-2 font-voltec text-[12px] tracking-wide">
					<span className="inline-block h-[10px] w-[3px] bg-emerald-400" />
					<span>/{' '}{rightLabel}</span>
				</div>
			</div>
		</footer>
	);
}
