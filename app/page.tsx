
import React from 'react';
import Header from '@/app/components/Header';
import HeroSection from '@/app/components/HeroSection';
import PhotoCarousel from '@/app/components/PhotoCarousel';
import RsvpForm from '@/app/components/RsvpForm';
import DressCode from '@/app/components/DressCode';
import PageSection from '@/app/components/layout/PageSection';
import { Separator } from '@/app/components/ui/separator';

const Index = () => {
  // Wedding Date - set to 6 months from now
  const weddingDate = new Date('2026-01-10T00:00:00');
  
  // Sample placeholder photos (You can replace these with actual wedding photos)
  const preWeddingPhotos = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Casal feliz"
    },
    {
      url: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      alt: "Casal abraçado"
    },
    {
      url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Casal de mãos dadas"
    },
    {
      url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Casal na praia"
    },
    {
      url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
      alt: "Casal no parque"
    },
    {
      url: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      alt: "Casal no jardim"
    }
  ];
  
  // Color palette for dress code
  const colorPalette = [
    { name: "Branco", color: "#FFFFFF" },
    { name: "Nude", color: "#FDE1D3" },
    { name: "Dourado", color: "#D4AF37" },
    { name: "Verde Oliva", color: "#808000" },
    { name: "Lavanda", color: "#E5DEFF" },
  ];
  
  // Outfit suggestions
  const outfitSuggestions = {
    women: [
      {
        imageUrl: "https://images.unsplash.com/photo-1581404635708-9a5a1d939788?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      }
    ],
    men: [
      {
        imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80",
      }
    ]
  };
  
  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <Header 
        coupleNames="Gabriel & Laura" 
        verse='“Assim, eles já não são dois, mas sim uma só carne,
        portanto, o que Deus uniu, ninguém separa.” MT 19:6'
        date='10 de Janeiro de 2026'
        imageUrl="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        welcomeMessage="Com a bênção de Deus e seus pais convidam carinhosamente para o seu casamento realizado em"
      />
      
      {/* Hero Section with Countdown */}
      <PageSection id="hero" className="bg-wedding-pattern py-6 md:py-24">
        <HeroSection 
          imageUrl="https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          weddingDate={weddingDate}
          localization={
            {
              local: "Rua Noel Nunes Ferraz, 174 - São Cristovão, Arcoverde-PE, 56.512-140",
              space: "Mãos d’Artes Eventos"
            }
          }
        />
      </PageSection>
      
      <Separator className="bg-wedding-gold/10 h-0.5" />
      
      {/* Photo Gallery */}
      <PageSection id="gallery" className="bg-gradient-to-b">
        <h2 className="wedding-title mb-12">Nossa História</h2>
        <p className="wedding-text text-center max-w-2xl mx-auto mb-12">
          Compartilhamos alguns momentos especiais da nossa jornada juntos. Cada foto conta um pedaço da nossa história de amor.
        </p>
        <PhotoCarousel photos={preWeddingPhotos} />
      </PageSection>
      
      <Separator className="bg-wedding-gold/10 h-0.5" />
      
      {/* RSVP Form */}
      <PageSection id="rsvp" className="bg-gradient-to-b bg-rsvp-color">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="wedding-title">Confirme sua Presença</h2>
          <p className="wedding-text">
            Sua presença é muito importante para nós! Por favor, confirme abaixo para que possamos preparar tudo com carinho.
          </p>
        </div>
        <RsvpForm />
      </PageSection>
      
      <Separator className="bg-wedding-gold/10 h-0.5" />
      
      {/* Dress Code */}
      <PageSection id="dress-code">
        <h2 className="wedding-title mb-8">Inspiração de Trajes</h2>
        <p className="wedding-text text-center max-w-2xl mx-auto mb-12">
          Para nos ajudar a criar memórias visuais harmoniosas.
        </p>
        <DressCode 
          colorPalette={colorPalette} 
          outfits={outfitSuggestions}
        />
      </PageSection>
      
      {/* Footer */}
      <footer className="w-full py-8">
        <div className="container mx-auto text-center">
          <p className="font-dancing text-2xl mb-2">Gabriel & Laura</p>
          <p className="text-sm text-gray-600">
            Com amor, esperamos por você em nosso grande dia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
