import React from 'react'

const ServicesSection = () => {
  const services = [
    {
      icon: "🎯",
      title: "Sosyal Medya Yönetimi",
      description: "Markanızın sosyal medya varlığını güçlendiriyoruz.",
      features: ["Strateji Geliştirme", "İçerik Üretimi", "Topluluk Yönetimi"]
    },
    {
      icon: "💻",
      title: "Web Geliştirme",
      description: "Modern ve etkileyici web siteleri tasarlıyoruz.",
      features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yükleme"]
    },
    {
      icon: "📊",
      title: "Dijital Pazarlama",
      description: "Veriye dayalı pazarlama stratejileri oluşturuyoruz.",
      features: ["SEO", "Google Ads", "Analytics"]
    },
    {
      icon: "🎨",
      title: "Marka Kimliği",
      description: "Markanızı rakiplerinizden farklılaştırıyoruz.",
      features: ["Logo Tasarımı", "Kurumsal Kimlik", "Marka Stratejisi"]
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-text-default mb-4">
            Profesyonel <span className="text-primary">Hizmetlerimiz</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-text-light text-lg">
            Dijital dünyada başarıya ulaşmanız için ihtiyacınız olan tüm hizmetleri sunuyoruz
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-background-light rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-text-default mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text-light mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-text-light">
                    <svg
                      className="w-4 h-4 mr-2 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
