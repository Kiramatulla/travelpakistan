import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'


const CardComp = ({tour}) => {
  return (
    <Link
    href={`/tours/${tour.slug.current}`}
    className="flex justify-center items-center font-sans mb-10"
  >
    <article className="max-w-[700px] mx-auto transition-transform hover:scale-105">
      <div className="relative flex flex-col mt-6 text-gray-700 bg-slate-50 border-4 border-b-8 border-slate-300 shadow-2xl bg-clip-border rounded-xl w-[19rem] md:w-[15rem] lg:w-[17rem] h-[26rem] lg:h-[26rem]">
        {/* Card Image */}
        <figure className="relative h-48 mx-2 -mt-6 overflow-hidden shadow-lg bg-clip-border rounded-xl">
          <Image
            src={urlFor(tour.images && tour.images[0]).url()}
            alt={tour.name}
            width={300}
            height={300}
            className="shadow-2xl object-cover w-full h-full"
            priority={false} // Prevents unnecessary preloading
          />
        </figure>

        {/* Card Content */}
        <div className="p-4 flex-1 overflow-hidden">
          <header>
            <h5 className="mb-2 font-bold">{tour.title}</h5>
          </header>
          <p className="font-sans overflow-hidden text-sm">
            {tour.tourOverview}
          </p>
        </div>

        {/* Read More Button */}
        <footer className="p-6 pt-0 flex items-center justify-center">
          <button
            className="font-sans font-bold text-xs py-2 mt-2 px-4 rounded-lg bg-cyan-600 text-white hover:text-orange-500 shadow-md hover:shadow-lg"
            type="button"
          >
            Read More
          </button>
        </footer>
      </div>
    </article>
  </Link>
  )
}

export default CardComp