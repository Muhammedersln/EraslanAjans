import Image from 'next/image'
import Link from 'next/link'

const Card = ({ influencer }) => {
  return (
    <Link href={`/influencer/${influencer.id}`}>
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
          <button className="w-full bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-xl font-semibold transition-all duration-300">
            Profili İncele
          </button>
        </div>
      </div>
    </Link>
  )
}

export default Card 