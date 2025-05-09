import React from "react";
import { cn } from "@/app/lib/utils";
import DateCard from "./DateCard";

type HeaderProps = {
  coupleNames: string;
  verse: string;
  date: string;
  location?: string;
  imageUrl: string;
  welcomeMessage: string;
  className?: string;
};

const Header = ({
  coupleNames,
  verse,
  date,
  imageUrl,
  welcomeMessage,
  className,
}: HeaderProps) => {
  return (
    <header
      className={cn(
        "min-h-[100vh] flex flex-col items-center justify-center relative overflow-hidden py-12 px-4 md:px-8",
        className
      )}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 z-0"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>

      <img
        src="flower.png"
        alt="flower"
        className="absolute top-1 left-0 w-[60px] h-[700px] md:top-10 md:w-[100px] md:h-[900px] object-contain"
      />

      <img
        src="flower.png"
        alt="flower"
        className="absolute top-1 right-0 w-[60px] h-[700px] md:top-10 md:w-[100px] md:h-[900px] object-contain transform scale-x-[-1]"
      />

      {/* Content */}
      <div className="container mx-auto max-w-4xl text-center z-10 animate-fade-in">

        <h4 className="font-playball italic text-1xl md:text-2xl text-left mb-4 mb-20">
          {verse}
        </h4>

        <h1 className="font-playfair text-6xl md:text-7xl lg:text-8xl font-bold mb-8 mt-[80px]">
          {coupleNames}
        </h1>

        <div className="floral-divider">
          <span className="floral-divider-icon">❦</span>
        </div>

        <p className="font-playball text-xl md:text-2xl lg:text-3xl italic mb-6 text-gray-800">
          {welcomeMessage}
        </p>

        <DateCard date={date} />

      </div>
    </header>
  );
};

export default Header;
