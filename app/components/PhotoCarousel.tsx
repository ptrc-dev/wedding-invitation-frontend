
"use client"
import React, { useState } from 'react';
import { cn } from '@/app/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/app/components/ui/carousel";

type Photo = {
    url: string;
    alt: string;
};

type PhotoCarouselProps = {
    photos: Photo[];
    className?: string;
};

const PhotoCarousel = ({ photos, className }: PhotoCarouselProps) => {
    const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
    
    const openFullscreen = (photo: Photo) => {
        setSelectedPhoto(photo);
    };
    
    const closeFullscreen = () => {
        setSelectedPhoto(null);
    };

    return (
        <div className={cn('relative', className)}>
            <div className="container mx-auto max-w-5xl px-4 md:px-8">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {photos.map((photo, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                <div className="wedding-card p-1 h-72 sm:h-96 cursor-pointer overflow-hidden" onClick={() => openFullscreen(photo)}>
                                    <img 
                                        src={photo.url} 
                                        alt={photo.alt}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="hidden sm:block">
                        <CarouselPrevious className="border-wedding-gold/50 bg-white/80 text-gray-800 hover:bg-wedding-gold hover:text-white" />
                        <CarouselNext className="border-wedding-gold/50 bg-white/80 text-gray-800 hover:bg-wedding-gold hover:text-white" />
                    </div>
                </Carousel>
                
                {/* Fullscreen modal */}
                {selectedPhoto && (
                    <div 
                        className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
                        onClick={closeFullscreen}
                    >
                        <div className="relative max-w-6xl max-h-[90vh] w-full">
                            <img 
                                src={selectedPhoto.url} 
                                alt={selectedPhoto.alt}
                                className="w-full h-full object-contain"
                            />
                            <button 
                                className="absolute top-4 right-4 text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-black transition-colors"
                                onClick={closeFullscreen}
                            >
                                ×
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoCarousel;
