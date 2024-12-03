'use client';
import { useParams } from 'next/navigation';
import { influencers } from '@/data/influencers';
import Image from 'next/image';
import Link from 'next/link';

export default function InfluencerProfile() {
  const params = useParams();
  const influencer = influencers.find(inf => inf.id === parseInt(params.id));

  if (!influencer) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Influencer bulunamadı</h1>
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-gray-800 to-gray-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profil Resmi */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-2xl overflow-hidden flex-shrink-0 shadow-xl">
              <Image
                src={influencer.image}
                alt={influencer.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>

            {/* Profil Bilgileri */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{influencer.name}</h1>
              <p className="text-xl text-gray-300 mb-6">{influencer.category}</p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
                <div className="bg-white/10 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-300">Takipçi</div>
                  <div className="text-2xl font-bold">{influencer.followers}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-300">Etkileşim</div>
                  <div className="text-2xl font-bold">{influencer.engagement}</div>
                </div>
                <div className="bg-white/10 rounded-lg px-6 py-3">
                  <div className="text-sm text-gray-300">Aylık Erişim</div>
                  <div className="text-2xl font-bold">{influencer.monthlyReach}</div>
                </div>
              </div>
              
              {/* Sosyal Medya Bağlantıları */}
              <div className="flex gap-4 justify-center md:justify-start">
                {influencer.socialMedia?.instagram && (
                  <a
                    href={`https://instagram.com/${influencer.socialMedia.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors duration-300 px-4 py-2 rounded-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <span>Instagram</span>
                  </a>
                )}
                
                {influencer.socialMedia?.tiktok && (
                  <a
                    href={`https://tiktok.com/${influencer.socialMedia.tiktok}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors duration-300 px-4 py-2 rounded-lg"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                    </svg>
                    <span>TikTok</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sol Kolon - Hakkında ve Uzmanlıklar */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hakkında */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Hakkında</h2>
              <p className="text-gray-600 leading-relaxed">
                {influencer.description}
              </p>
            </div>

            {/* Uzmanlık Alanları */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Uzmanlık Alanları</h2>
              <div className="flex flex-wrap gap-3">
                {influencer.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Hedef Kitle ve İstatistikler */}
          <div className="space-y-6">
            {/* Hedef Kitle Kartı */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Hedef Kitle Analizi</h2>
              
              {/* Yaş Dağılımı */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-600 text-sm">Yaş Aralığı</span>
                  <span className="text-sm text-gray-700 font-semibold bg-gray-100 px-3 py-1 rounded-full">
                    {influencer.targetAudience}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-3/4 bg-gradient-to-r from-gray-500 to-gray-700 rounded-full"></div>
                </div>
              </div>

              {/* Cinsiyet Dağılımı */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Cinsiyet Dağılımı</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-700">{influencer.demographics.gender.female}%</div>
                    <div className="text-xs text-gray-500 mt-1">Kadın</div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3 text-center">
                    <div className="text-2xl font-bold text-gray-700">{influencer.demographics.gender.male}%</div>
                    <div className="text-xs text-gray-500 mt-1">Erkek</div>
                  </div>
                </div>
              </div>

              {/* Lokasyon */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-3">Top Lokasyonlar</h3>
                <div className="space-y-2">
                  {influencer.demographics.locations.map((location, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{location.city}</span>
                      <span className="text-sm font-medium text-gray-900">{location.percentage}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platformlar */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">Aktif Platformlar</h3>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(influencer.socialMedia).map(([platform, username]) => (
                    <a
                      key={platform}
                      href={`https://${platform}.com/${username.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-2 rounded-lg text-sm font-medium text-gray-700"
                    >
                      {platform === 'instagram' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )}
                      {platform === 'tiktok' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                        </svg>
                      )}
                      {platform === 'youtube' && (
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      )}
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geri Dön Butonu */}
        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    </div>
  );
}