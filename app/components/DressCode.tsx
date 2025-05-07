import React from "react";
import { cn } from "@/app/lib/utils";

type OutfitOption = {
  imageUrl: string;
};

type DressCodeProps = {
  colorPalette: Array<{
    name: string;
    color: string;
  }>;
  outfits: {
    women: OutfitOption[];
    men: OutfitOption[];
  };
  className?: string;
};

const DressCode = ({ colorPalette, outfits, className }: DressCodeProps) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        {/* Outfit Inspirations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Women Outfits */}
          <div>
            <h3 className="text-2xl font-playfair mb-6 text-center">
              Para Elas
            </h3>
            <div className="grid grid-cols-1">
              {outfits.women.map((outfit, index) => (
                <div key={index} className="wedding-card overflow-hidden">
                  <div className="h-96 sm:h-[600px]">
                    <img
                      src={outfit.imageUrl}
                      alt={`Sugestão de roupa feminina ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Men Outfits */}
          <div>
            <h3 className="text-2xl font-playfair mb-6 text-center">
              Para Eles
            </h3>
            <div className="grid grid-cols-1">
              {outfits.men.map((outfit, index) => (
                <div key={index} className="wedding-card overflow-hidden">
                  <div className="h-96 sm:h-[600px]">
                    <img
                      src={outfit.imageUrl}
                      alt={`Sugestão de roupa masculina ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="mt-20">
          <h3 className="wedding-subtitle mb-6">Paleta de Cores</h3>
          <p className="text-center mb-6">
            Sugerimos <span className="font-bold underline">NÃO</span> usar as seguintes opções de cores.
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {colorPalette.map((color, index) => (
              <div key={index} className="flex flex-col items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-white shadow-md"
                  style={{ backgroundColor: color.color }}
                ></div>
                <span className="text-sm mt-2 text-gray-700">{color.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DressCode;
