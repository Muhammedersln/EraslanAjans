'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const influencers = [
  {
    id: 1,
    name: "Ayşe Yılmaz",
    followers: "850K",
    category: "Lifestyle & Fashion",
    image: "/influencers/influencer1.jpg"
  },
  {
    id: 2,
    name: "Mehmet Demir",
    followers: "1.2M",
    category: "Tech & Gaming",
    image: "/influencers/influencer2.jpg"
  },
  {
    id: 3,
    name: "Zeynep Kaya",
    followers: "650K",
    category: "Food & Travel",
    image: "/influencers/influencer3.jpg"
  },
  {
    id: 4,
    name: "Can Yıldız",
    followers: "2.1M",
    category: "Fitness & Health",
    image: "/influencers/influencer4.jpg"
  },
  {
    id: 5,
    name: "Elif Şahin",
    followers: "920K",
    category: "Beauty & Makeup",
    image: "/influencers/influencer5.jpg"
  },
  {
    id: 6,
    name: "Burak Özdemir",
    followers: "1.5M",
    category: "Food & Cooking",
    image: "/influencers/influencer6.jpg"
  },
  {
    id: 7,
    name: "Deniz Akar",
    followers: "750K",
    category: "Travel & Adventure",
    image: "/influencers/influencer7.jpg"
  },
  {
    id: 8,
    name: "Selin Yüksel",
    followers: "1.8M",
    category: "Fashion & Style",
    image: "/influencers/influencer8.jpg"
  }
];

const InfluencersSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-background relative">
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(255, 255, 255, 0.9);
          width: 3rem !important;
          height: 3rem !important;
          border-radius: 50%;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: white;
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.2rem !important;
          font-weight: bold;
          color: #374151;
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #374151;
          transform: scale(1.2);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-darktext mb-4">
            Çalıştığımız <span className="text-accent">Influencerlar</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-lighttext text-lg">
            Markalarla influencerları buluşturarak etkili sosyal medya kampanyaları oluşturuyoruz
          </p>
        </div>
        
        <div className="relative px-12">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={true}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            className="pb-14"
          >
            {influencers.map((influencer) => (
              <SwiperSlide key={influencer.id} className="py-8">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-[1.02] h-full">
                  <div className="relative h-80">
                    <Image
                      src={influencer.image}
                      alt={influencer.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">
                        {influencer.name}
                      </h3>
                      <p className="text-gray-200 text-sm mb-3">
                        {influencer.category}
                      </p>
                      <div className="flex items-center text-sm">
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                          />
                          <path
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        {influencer.followers} Takipçi
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-white">
                    <button className="w-full bg-accent/10 text-accent hover:bg-accent hover:text-white py-3 rounded-xl font-semibold transition-all duration-300">
                      Profili İncele
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default InfluencersSection; 