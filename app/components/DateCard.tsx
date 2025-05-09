// components/DateCard.tsx
import React from "react";

type DateCardProps = {
	date: string;
};

const DateCard = ({ date }: DateCardProps) => {
	return (
		<div className="flex flex-col md:mt-20 items-center font-playball text-3xl md:text-8xl text-black">
			{/* Texto curvado */}
			<svg viewBox="0 0 300 150" className="w-40 h-10 md:w-80 md:h-20">
				<defs>
					<path
						id="curvePath"
						d="M 50 100 A 100 50 0 0 1 250 100"
						fill="none"
					/>
				</defs>
				<text className="text-7xl" fill="black">
					<textPath href="#curvePath" startOffset="50%" textAnchor="middle">
						{date?.split(' ')[0]}
					</textPath>
				</text>
			</svg>

			{/* Data */}
			<div className="flex items-center justify-center gap-6 text-xl md:text-4xl font-light text-black">
				<div className="flex flex-col items-center">
					<div className="border-t border-b border-wedding-green w-20 md:w-32 text-center">
						{date?.split(' ')[1]}
					</div>
				</div>

				<div className="flex flex-col items-center text-3xl md:text-6xl font-bold border-l border-r border-wedding-green px-4 md:px-8">
					{date?.split(' ')[2]}
				</div>

				<div className="flex flex-col items-center">
					<div className="border-t border-b border-wedding-green w-20 md:w-32 text-center">
						{date?.split(' ')[3]}
					</div>
				</div>
			</div>

			{/* Hora */}
			<div className="flex items-center gap-2 text-lg md:text-2xl text-black mt-2 md:mt-4">
				<div className="w-16 md:w-24 border-t border-wedding-green" />
				<span>ÁS 16H</span>
				<div className="w-16 md:w-24 border-t border-wedding-green" />
			</div>
		</div>
	);
};

export default DateCard;
