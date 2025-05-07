// components/DateCard.tsx
import React from "react";

type DateCardProps = {
	date: string;
};

const DateCard = ({ date }: DateCardProps) => {
	return (
		<div className="flex flex-col items-center font-playball text-3xl md:text-5xl text-gray-700">
			<h2 className="text-xl font-playball ">
				<span className="block transform -rotate-5">SÁBADO</span>
			</h2>

			<div className="flex items-center justify-center space-x-8 text-lg font-light border-t border-b py-2 w-full max-w-md">
				<div className="flex flex-col items-center">
					<div className="border-t border-b border-gray-400 px-4 py-1">{date?.split(' ')[0]}</div>
				</div>
				<div className="text-3xl font-bold">{date?.split(' ')[1]}</div>
				<div className="flex flex-col items-center">
					<div className="border-t border-b border-gray-400 px-4 py-1">{date?.split(' ')[2]}</div>
				</div>
			</div>

			<div className="mt-4 text-lg tracking-wide border-t border-b border-gray-400 px-4 py-1">
				ÀS 16H
			</div>
		</div>
	);
};

export default DateCard;
