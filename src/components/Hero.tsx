
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b1cd5e32-aaaa-4d88-83fd-f5a3cb07d63c.png')`
        }}
      ></div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8 sm:py-12 lg:py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 animate-fade-in">
            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 flex-shrink-0" />
            <span className="text-xs sm:text-sm font-medium">Mais de 10 anos de experiência</span>
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold mb-4 sm:mb-6 animate-slide-up leading-tight">
            Conforto, estilo e{' '}
            <span className="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text">
              qualidade
            </span>{' '}
            para seu lar
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto animate-slide-up px-4 sm:px-0 leading-relaxed" style={{animationDelay: '0.2s'}}>
            Transforme sua casa com nossa seleção premium de móveis e colchões. 
            Atendemos São Paulo, Grande São Paulo e região com excelência.
          </p>

          {/* Features */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 lg:gap-6 mb-8 sm:mb-10 animate-slide-up px-4 sm:px-0" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-white/90">Móveis de qualidade</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-white/90">Colchões premium</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-400 flex-shrink-0" />
              <span className="text-sm sm:text-base text-white/90">Atendimento personalizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-scale-in px-4 sm:px-0" style={{animationDelay: '0.6s'}}>
            <Button
              size="lg"
              onClick={() => scrollToSection('contato')}
              className="bg-cta hover:bg-cta-hover text-cta-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('sobre')}
              className="border-2 border-white/40 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Conheça nossa história
            </Button>
          </div>

          {/* WhatsApp contact */}
          <div className="mt-6 sm:mt-8 animate-fade-in px-4 sm:px-0" style={{animationDelay: '0.8s'}}>
            <a
              href="https://wa.me/5511913558281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm sm:text-base"
            >
              <div className="w-5 h-5 sm:w-6 sm:h-6 bg-whatsapp rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span>Ou converse conosco pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-white/60 rounded-full mt-1.5 sm:mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
