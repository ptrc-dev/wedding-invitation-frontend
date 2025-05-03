"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

type CountdownTimerProps = {
  targetDate: Date;
  className?: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const CountdownTimer = ({ targetDate, className }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Dias" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-4 md:gap-6", className)}
    >
      {timeUnits.map((unit, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center w-20 md:w-28 h-20 md:h-28 bg-white/60 backdrop-blur-sm rounded-lg shadow-md border border-wedding-gold/20 animate-pulse-soft"
        >
          <span className="text-2xl md:text-4xl font-bold text-gray-800">
            {unit.value.toString().padStart(2, "0")}
          </span>
          <span className="text-sm md:text-base text-gray-600 font-medium mt-1">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
