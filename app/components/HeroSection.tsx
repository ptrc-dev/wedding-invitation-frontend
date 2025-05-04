import React from "react";
import CountdownTimer from "./CountdownTimer";
import { cn } from "@/app/lib/utils";
import { FaMapMarkerAlt } from "react-icons/fa"; // Importa o ícone de localização

type HeroSectionProps = {
  imageUrl: string;
  weddingDate: Date;
  localization: {
    local: string;
    space: string;
  };
  className?: string;
};

const HeroSection = ({
  imageUrl,
  weddingDate,
  localization,
  className,
}: HeroSectionProps) => {
  return (
    <div className={cn("bg-wedding-pattern py-6 md:py-24", className)}>
      <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-12 px-4 md:px-8">
        {/* Left column: Photo */}
        <div className="relative md:top-[-100px] w-full max-w-lg">
          {/* Imagem maior (fundo) */}
          <div className="absolutetop-0 left-0 w-full h-auto z-0">
            <img
              src={imageUrl}
              alt="Imagem maior"
              className="w-full h-[250px] md:w-[400px] md:h-[500px] object-cover shadow-lg"
            />
          </div>

          {/* Imagem menor (frente) */}
          <div className="absolute top-[115px] md:top-20 md:left-30 w-full h-auto md:top-[250px] md:left-[150px] z-10">
            <img
              src={imageUrl}
              alt="Imagem menor"
              className="w-[150px] h-[150px] md:w-[300px] md:h-[350px] object-cover shadow-lg"
            />
          </div>
        </div>

        {/* Right column: Countdown */}
        <div className="flex flex-col items-center justify-center">
          <img
            src="roses.png"
            alt="flower"
            className="absolute right-0 z-0 md:w-[600px] w-[250px] md:top-[1250px] top-[1300px]"
          />

          <img
            src="roses.png"
            alt="flower"
            className="absolute scale-x-[-1] left-0 z-0 md:w-[600px] w-[250px] md:top-[1450px] top-[1300px]"
          />
          <h2 className="font-playfair font-bold text-3xl md:text-4xl mb-6 text-center flex items-center gap-2 z-10">
            <FaMapMarkerAlt className="text-black" />{" "}
            {/* Ícone de localização */}
            {localization.space}
          </h2>
          <p className="text-2xl md:text-4xl font-playball text-black mb-4 text-center z-10">
            {localization.local}
          </p>
          <p className="text-lg text-gray-600 mb-10 text-center max-w-md z-10">
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
