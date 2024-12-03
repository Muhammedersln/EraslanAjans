'use client';
import { influencers } from '../data/influencers'
import Card from './Card'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import Image from 'next/image'

// Swiper stilleri
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className='text-primary-light'>Çalıştığımız</span> <span className="text-primary-dark">Influencerlar</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
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
                <Card influencer={influencer} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default InfluencersSection 