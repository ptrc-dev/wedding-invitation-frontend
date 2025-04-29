
import React from 'react';
import { cn } from '@/app/lib/utils';

type HeaderProps = {
    coupleNames: string;
    date: string;
    location?: string;
    imageUrl: string;
    welcomeMessage: string;
    className?: string;
};

const Header = ({
    coupleNames,
    date,
    location,
    imageUrl,
    welcomeMessage,
    className
}: HeaderProps) => {
    return (
        <header className={cn(
            'min-h-[85vh] flex flex-col items-center justify-center relative overflow-hidden py-12 px-4 md:px-8',
            className
        )}>
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-white/90 z-0"></div>
            
            {/* Background image */}
            <div 
                className="absolute inset-0 -z-10 bg-cover bg-center opacity-50"
                style={{ backgroundImage: `url(${imageUrl})` }}
            ></div>

            {/* Content */}
            <div className="container mx-auto max-w-4xl text-center z-10 animate-fade-in">
                <h4 className="font-dancing text-xl md:text-2xl text-wedding-gold mb-4">
                    Convite de Casamento
                </h4>
                
                <h1 className="font-dancing text-5xl md:text-7xl lg:text-8xl font-bold mb-8">
                    {coupleNames}
                </h1>
                
                <div className="floral-divider">
                    <span className="floral-divider-icon">❦</span>
                </div>
                
                <p className="font-playfair text-xl md:text-2xl lg:text-3xl italic mb-6 text-gray-800">
                    {welcomeMessage}
                </p>
                
                <div className="space-y-2 font-montserrat text-lg md:text-xl text-gray-700 mt-8">
                    <p className="font-medium">{date}</p>
                    {location && <p>{location}</p>}
                </div>
            </div>
        </header>
    );
};

export default Header;
