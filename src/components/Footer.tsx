
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-hero text-hero-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-heading font-bold text-hero-foreground mb-2">
                SMF MÓVEIS & COLCHÕES
              </h3>
              <p className="text-hero-foreground/80 mb-4">
                Conforto, estilo e qualidade para seu lar
              </p>
              <p className="text-hero-foreground/70 leading-relaxed">
                Há mais de 10 anos transformando lares com móveis e colchões de qualidade superior. 
                Atendemos São Paulo, Grande São Paulo e região com excelência e dedicação.
              </p>
            </div>
            
            <div className="text-sm text-hero-foreground/60">
              <p>CNPJ: 49.629.552/0001-52</p>
              <p>SMF MÓVEIS E COLCHÕES LTDA</p>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-hero-foreground mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a 
                href="tel:+5511913558281"
                className="flex items-center gap-3 text-hero-foreground/80 hover:text-hero-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(11) 91355-8281</span>
              </a>
              <a 
                href="tel:+5511977177632"
                className="flex items-center gap-3 text-hero-foreground/80 hover:text-hero-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(11) 97717-7632</span>
              </a>
              <a 
                href="mailto:smfmoveis675@gmail.com"
                className="flex items-center gap-3 text-hero-foreground/80 hover:text-hero-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>smfmoveis675@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Address & Hours */}
          <div>
            <h4 className="text-lg font-semibold text-hero-foreground mb-4">
              Localização
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-hero-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Avenida Deputado</p>
                  <p>Cantidio Sampaio, 807 / 1539</p>
                  <p>São Paulo, SP</p>
                </div>
              </div>
              <div className="flex items-start gap-3 text-hero-foreground/80">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Segunda a Sábado</p>
                  <p>09:00 às 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Banner */}
        <div className="mt-12 pt-8 border-t border-hero-foreground/20">
          <div className="bg-whatsapp/20 border border-whatsapp/30 rounded-2xl p-6 text-center">
            <h4 className="text-xl font-semibold text-hero-foreground mb-2">
              Fale conosco pelo WhatsApp
            </h4>
            <p className="text-hero-foreground/80 mb-4">
              Atendimento rápido e personalizado para suas necessidades
            </p>
            <a
              href="https://wa.me/5511913558281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp hover:bg-whatsapp-hover text-white font-medium rounded-lg transition-colors"
            >
              <span>💬</span>
              Iniciar conversa
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-hero-foreground/20 text-center">
          <p className="text-hero-foreground/60 text-sm">
            © {currentYear} SMF Móveis e Colchões LTDA. Todos os direitos reservados.
          </p>
          <p className="text-hero-foreground/50 text-xs mt-2">
            Desenvolvido com tecnologia moderna para oferecer a melhor experiência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
