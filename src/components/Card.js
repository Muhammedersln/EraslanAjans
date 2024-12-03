import Image from 'next/image'
import Link from 'next/link'

const Card = ({ influencer }) => {
  return (
    <div className="bg-background-light rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl hover:scale-[1.02] h-full">
      <div className="relative h-80">
        <Image
          src={influencer.image}
          alt={influencer.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-bold mb-2 text-white">
            {influencer.name}
          </h3>
          <p className="text-gray-200 text-sm mb-3">
            {influencer.category}
          </p>
          <div className="flex items-center text-sm text-white">
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
      <div className="p-6 bg-background-light">
        <div className="flex gap-4">
          <Link href={`/influencer/${influencer.id}`} className="flex-1">
            <button className="w-full bg-primary/10 text-primary hover:bg-primary hover:text-white py-3 rounded-xl font-semibold transition-all duration-300">
              Profili İncele
            </button>
          </Link>
          <a 
            href={`https://instagram.com/${influencer.socialMedia.instagram}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1"
          >
            <button className="w-full bg-primary hover:bg-primary text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:opacity-90">
              <div className="flex items-center justify-center">
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Instagram
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card 