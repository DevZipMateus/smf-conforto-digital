
import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from '@/components/ui/carousel';

const ProductCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

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

  // Auto-play functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [api]);

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

        <div className="max-w-6xl mx-auto">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {products.map((product) => (
                <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <Dialog>
                          <DialogTrigger asChild>
                            <div className="aspect-[4/3] relative cursor-pointer">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                            <div className="relative">
                              <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-auto max-h-[80vh] object-contain"
                              />
                              <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                                <p className="text-gray-600">{product.description}</p>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
