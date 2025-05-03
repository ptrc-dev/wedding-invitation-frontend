import React from "react";
import CountdownTimer from "./CountdownTimer";
import { cn } from "@/app/lib/utils";

type HeroSectionProps = {
  imageUrl: string;
  weddingDate: Date;
  className?: string;
};

const HeroSection = ({
  imageUrl,
  weddingDate,
  className,
}: HeroSectionProps) => {
  return (
    <div className={cn("bg-wedding-pattern py-16 md:py-24", className)}>
      <div className="container mx-auto grid md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8">
        {/* Left column: Photo */}
        <div className="flex items-center justify-center">
          <div className="w-full max-w-md overflow-hidden rounded-lg shadow-xl border-4 border-white transform md:rotate-[-2deg] hover:rotate-0 transition-all duration-500">
            <img
              src={imageUrl}
              alt="Casal feliz"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right column: Countdown */}
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-6 text-center">
            Contagem regressiva para o grande dia
          </h2>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-md">
            Estamos ansiosos para celebrar este momento especial com vocês.
            Marquem em seus calendários!
          </p>

          <CountdownTimer targetDate={weddingDate} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
