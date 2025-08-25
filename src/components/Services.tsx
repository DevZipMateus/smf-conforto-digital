
import { Sofa, Bed, Home, Truck, Shield, Headphones } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: Sofa,
      title: "Móveis Residenciais",
      description: "Sofás, poltronas, mesas, cadeiras e estantes com design moderno e qualidade superior.",
      features: ["Diversos estilos", "Materiais premium", "Acabamento impecável"]
    },
    {
      icon: Bed,
      title: "Colchões Premium",
      description: "Colchões de marcas renomadas para garantir o melhor descanso para você e sua família.",
      features: ["Tecnologia avançada", "Máximo conforto", "Durabilidade garantida"]
    },
    {
      icon: Home,
      title: "Decoração Completa",
      description: "Soluções completas para transformar ambientes residenciais com estilo e funcionalidade.",
      features: ["Consultoria gratuita", "Projetos personalizados", "Entrega rápida"]
    }
  ];

  const benefits = [
    {
      icon: Truck,
      title: "Entrega Rápida",
      description: "Entregamos em toda Grande São Paulo com agilidade e segurança"
    },
    {
      icon: Shield,
      title: "Garantia Total",
      description: "Todos os produtos com garantia e suporte pós-venda"
    },
    {
      icon: Headphones,
      title: "Atendimento Premium",
      description: "Equipe especializada para atender suas necessidades"
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos soluções completas em móveis e colchões para transformar seu lar
          </p>
        </div>

        {/* Main Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
              Por que escolher a SMF?
            </h3>
            <p className="text-lg text-muted-foreground">
              Benefícios exclusivos que fazem a diferença
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-2xl shadow-lg mb-6 group-hover:shadow-xl transition-shadow duration-300">
                  <benefit.icon className="h-10 w-10 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="https://wa.me/5511913558281"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-whatsapp hover:bg-whatsapp-hover text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span className="mr-2">💬</span>
              Fale conosco pelo WhatsApp
            </a>
            <button
              onClick={() => {
                const element = document.getElementById('contato');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Solicitar Orçamento
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
