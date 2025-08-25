
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
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 section-pattern opacity-10"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-hero-foreground">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Star className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium">Mais de 10 anos de experiência</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-slide-up">
            Conforto, estilo e{' '}
            <span className="text-transparent bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text">
              qualidade
            </span>{' '}
            para seu lar
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-hero-foreground/80 mb-8 max-w-3xl mx-auto animate-slide-up" style={{animationDelay: '0.2s'}}>
            Transforme sua casa com nossa seleção premium de móveis e colchões. 
            Atendemos São Paulo, Grande São Paulo e região com excelência.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-slide-up" style={{animationDelay: '0.4s'}}>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-hero-foreground/90">Móveis de qualidade</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-hero-foreground/90">Colchões premium</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="text-hero-foreground/90">Atendimento personalizado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in" style={{animationDelay: '0.6s'}}>
            <Button
              size="lg"
              onClick={() => scrollToSection('contato')}
              className="bg-cta hover:bg-cta-hover text-cta-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Solicitar Orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('sobre')}
              className="border-2 border-white/30 bg-white/10 backdrop-blur-sm text-hero-foreground hover:bg-white/20 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
            >
              Conheça nossa história
            </Button>
          </div>

          {/* WhatsApp contact */}
          <div className="mt-8 animate-fade-in" style={{animationDelay: '0.8s'}}>
            <a
              href="https://wa.me/5511913558281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-hero-foreground/80 hover:text-hero-foreground transition-colors"
            >
              <div className="w-6 h-6 bg-whatsapp rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">W</span>
              </div>
              <span className="text-sm">Ou converse conosco pelo WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
