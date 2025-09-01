
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProductCarousel = () => {
  const products = [
    {
      id: 1,
      image: '/lovable-uploads/8efdc933-0693-496a-b927-03e9d99fbca0.png',
      title: 'Estante Organizadora Verde Menta',
      description: 'Estante moderna com prateleiras amplas para organização'
    },
    {
      id: 2,
      image: '/lovable-uploads/2587e698-0670-46ac-bc7d-a09a40093650.png',
      title: 'Cozinha Planejada Madeira e Cinza',
      description: 'Cozinha completa com acabamento em madeira e detalhes modernos'
    },
    {
      id: 3,
      image: '/lovable-uploads/145f9057-d1fd-4a2f-b9aa-c2d16f826743.png',
      title: 'Cozinha Planejada Verde Água',
      description: 'Design elegante com armários em verde água e estrutura em madeira'
    },
    {
      id: 4,
      image: '/lovable-uploads/782d86e2-b5c6-402b-bb71-dbef402ba250.png',
      title: 'Cozinha Planejada Bege',
      description: 'Cozinha sofisticada com tons neutros e acabamento premium'
    },
    {
      id: 5,
      image: '/lovable-uploads/fda5050d-c88a-4ebb-8504-9737e0132c01.png',
      title: 'Cozinha de Canto Laranja',
      description: 'Aproveitamento inteligente de espaço com design em L'
    },
    {
      id: 6,
      image: '/lovable-uploads/fba13a18-1e4f-4996-88e5-07b2b075ab31.png',
      title: 'Guarda-Roupa Espelhado',
      description: 'Guarda-roupa moderno com espelho e acabamento em madeira'
    },
    {
      id: 7,
      image: '/lovable-uploads/b4c625be-5b5a-486b-be03-f3f5dc2d8f53.png',
      title: 'Guarda-Roupa Verde Menta',
      description: 'Guarda-roupa amplo com portas espelhadas e cor moderna'
    },
    {
      id: 8,
      image: '/lovable-uploads/2976930a-5073-4f53-895a-88f292aa9cde.png',
      title: 'Guarda-Roupa Cinza Premium',
      description: 'Design sofisticado com espelhos e acabamento de alta qualidade'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [products.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? products.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nossos Produtos em Destaque
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça nossa seleção premium de móveis planejados para transformar sua casa
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main carousel container */}
          <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="min-w-full">
                  <div className="aspect-[16/10] relative">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                      <p className="text-lg opacity-90">{product.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm border-white/20 hover:bg-white/90"
              onClick={goToNext}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-red-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="text-sm text-gray-500 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              Alternando automaticamente a cada 3 segundos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
