
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-header shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <img 
              src="/lovable-uploads/d0c99ca9-e7dd-4276-82ca-f8c0b1c52c8b.png" 
              alt="SMF Móveis e Colchões - Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-header-foreground hover:text-white/80 transition-colors font-medium text-sm xl:text-base"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-header-foreground hover:text-white/80 transition-colors font-medium text-sm xl:text-base"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-header-foreground hover:text-white/80 transition-colors font-medium text-sm xl:text-base"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('contato')}
              className="text-header-foreground hover:text-white/80 transition-colors font-medium text-sm xl:text-base"
            >
              Contato
            </button>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <div className="flex items-center space-x-2 text-xs xl:text-sm text-header-foreground/80">
              <Phone className="h-3 w-3 xl:h-4 xl:w-4" />
              <span>(11) 91355-8281</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-cta hover:bg-cta-hover text-cta-foreground text-xs xl:text-sm px-3 xl:px-4 py-2"
            >
              Orçamento
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 text-header-foreground" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 text-header-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-header/95 backdrop-blur-sm border-t border-header-foreground/20">
            <nav className="flex flex-col space-y-2 sm:space-y-4 p-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-header-foreground hover:text-white/80 transition-colors font-medium py-2 text-sm sm:text-base"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-left text-header-foreground hover:text-white/80 transition-colors font-medium py-2 text-sm sm:text-base"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-left text-header-foreground hover:text-white/80 transition-colors font-medium py-2 text-sm sm:text-base"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-left text-header-foreground hover:text-white/80 transition-colors font-medium py-2 text-sm sm:text-base"
              >
                Contato
              </button>
              <div className="flex flex-col space-y-2 pt-3 sm:pt-4 border-t border-header-foreground/20">
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-header-foreground/80">
                  <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span>(11) 91355-8281</span>
                </div>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-header-foreground/80">
                  <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="break-all">smfmoveis675@gmail.com</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contato')}
                  className="bg-cta hover:bg-cta-hover text-cta-foreground w-full mt-2 text-sm"
                >
                  Solicitar Orçamento
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
