import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import InfluencersSection from "../components/InfluencersSection";

export default function Home() {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-accent/10 to-primary/5"></div>
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-primary/10 to-accent/5"></div>
          <div className="absolute top-1/4 right-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-bl from-secondary/10 to-accent/5"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="py-24 lg:py-32">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-5xl lg:text-7xl font-bold text-darktext leading-tight">
                Dijital Dünyada{" "}
                <span className="relative">
                  <span className="relative z-10">Markanızı</span>
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-accent/20 -rotate-1"></span>
                </span>{" "}
                Büyütün
              </h1>
              
              <p className="text-xl text-lighttext max-w-2xl mx-auto leading-relaxed">
                Modern pazarlama stratejileri ve yaratıcı çözümlerle markanızı bir sonraki seviyeye taşıyoruz.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <button className="group bg-accent text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
                  <span className="flex items-center gap-2">
                    Hemen Başlayın
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </button>
                <button className="bg-white text-accent px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-accent hover:-translate-y-0.5">
                  Daha Fazla Bilgi
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-16 border-t border-gray-200 mt-16">
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/5 scale-0 rounded-2xl transition-transform duration-300 group-hover:scale-100"></div>
                  <div className="relative p-4">
                    <div className="text-4xl font-bold text-accent mb-2">100+</div>
                    <div className="text-sm text-lighttext">Mutlu Müşteri</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/5 scale-0 rounded-2xl transition-transform duration-300 group-hover:scale-100"></div>
                  <div className="relative p-4">
                    <div className="text-4xl font-bold text-accent mb-2">50M+</div>
                    <div className="text-sm text-lighttext">Toplam Erişim</div>
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute inset-0 bg-accent/5 scale-0 rounded-2xl transition-transform duration-300 group-hover:scale-100"></div>
                  <div className="relative p-4">
                    <div className="text-4xl font-bold text-accent mb-2">100+</div>
                    <div className="text-sm text-lighttext">Başarılı Proje</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ServicesSection />
      <InfluencersSection />
    </main>
  );
}
