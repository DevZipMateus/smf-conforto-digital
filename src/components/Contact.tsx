
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefones",
      details: ["(11) 91355-8281", "(11) 97717-7632"],
      action: "tel:+5511913558281"
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["smfmoveis675@gmail.com"],
      action: "mailto:smfmoveis675@gmail.com"
    },
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Avenida Deputado Cantidio Sampaio", "807 / 1539 - São Paulo, SP"],
      action: "https://maps.google.com/?q=Avenida+Deputado+Cantidio+Sampaio+807+São+Paulo"
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sábado", "09:00 às 19:00"],
      action: undefined
    }
  ];

  return (
    <section id="contato" className="py-20 bg-section section-pattern">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-section-foreground mb-4">
            Entre em Contato
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos prontos para atender você e transformar seu lar com móveis e colchões de qualidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-section-foreground mb-6">
                Fale Conosco
              </h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa equipe está pronta para atender você com o melhor atendimento. 
                Entre em contato através dos canais abaixo ou preencha o formulário.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-section-foreground mb-2">
                          {info.title}
                        </h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                        {info.action && (
                          <a
                            href={info.action}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-sm text-primary hover:text-primary/80 mt-2 transition-colors"
                          >
                            Clique aqui
                          </a>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-whatsapp/10 border border-whatsapp/20 rounded-2xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-whatsapp rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">W</span>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-section-foreground mb-1">
                    Atendimento via WhatsApp
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Converse conosco agora mesmo e tire suas dúvidas
                  </p>
                  <a
                    href="https://wa.me/5511913558281"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-whatsapp hover:bg-whatsapp-hover text-white font-medium rounded-lg transition-colors"
                  >
                    Iniciar conversa
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl font-heading">
                Solicite seu Orçamento
              </CardTitle>
              <p className="text-muted-foreground">
                Preencha o formulário e entraremos em contato em breve
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-section-foreground mb-2">
                      Nome completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Seu nome"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-section-foreground mb-2">
                      Telefone *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(11) 99999-9999"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-section-foreground mb-2">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-section-foreground mb-2">
                    Mensagem *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Conte-nos sobre suas necessidades..."
                    className="w-full min-h-[120px] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cta hover:bg-cta-hover text-cta-foreground py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Map */}
        <div className="mt-16">
          <Card className="overflow-hidden shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl font-heading">Nossa Localização</CardTitle>
              <p className="text-muted-foreground">
                Venha nos visitar em nosso showroom
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="aspect-[16/9] bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Mapa Interativo</p>
                  <p className="text-sm">Avenida Deputado Cantidio Sampaio, 807</p>
                  <p className="text-sm">São Paulo, SP</p>
                  <a
                    href="https://maps.google.com/?q=Avenida+Deputado+Cantidio+Sampaio+807+São+Paulo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Abrir no Google Maps
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
