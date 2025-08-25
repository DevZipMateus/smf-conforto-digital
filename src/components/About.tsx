
import { Users, Award, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    {
      icon: Clock,
      value: "10+",
      label: "Anos de experiência",
      description: "Mais de uma década servindo com excelência"
    },
    {
      icon: Users,
      value: "1000+",
      label: "Clientes satisfeitos",
      description: "Transformando lares em São Paulo"
    },
    {
      icon: Award,
      value: "100%",
      label: "Qualidade garantida",
      description: "Produtos selecionados com cuidado"
    },
    {
      icon: MapPin,
      value: "SP+",
      label: "Grande São Paulo",
      description: "Atendimento em toda região"
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-section section-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-section-foreground mb-4">
            Sobre a SMF Móveis
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de 10 anos transformando lares com móveis e colchões de qualidade superior
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-heading font-semibold text-section-foreground">
                Nossa História
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A SMF Móveis e Colchões nasceu com o propósito de oferecer conforto, 
                estilo e qualidade para seu lar. Ao longo de mais de 10 anos, construímos 
                uma reputação sólida atendendo a capital de São Paulo, grande São Paulo e região.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é transformar casas em lares aconchegantes, oferecendo uma 
                seleção cuidadosa de móveis e colchões que combinam design moderno, 
                qualidade superior e preços justos.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-section-foreground">
                Por que escolher a SMF?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Produtos de qualidade superior</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Atendimento personalizado</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Experiência de mais de 10 anos</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Cobertura em toda Grande São Paulo</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 rounded-2xl flex items-center justify-center">
              <div className="text-muted-foreground text-center">
                <Users className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Imagem da empresa</p>
                <p className="text-sm opacity-70">Showroom SMF Móveis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="font-semibold text-section-foreground mb-2">{stat.label}</div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
