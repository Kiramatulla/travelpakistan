import { urlFor } from "@/sanity/lib/image"
import Image from "next/image"
import Link from "next/link"


const TrekPagCard =({trek}) => {
     
  return (
    <section>
        <Link href={`/trekking/${trek.slug.current}`}>
      <div className="flex flex-col justify-center space-y-5 md:flex-row md:space-y-0  mt-7 mb-8">
        <div className="max-w-sm lg:max-w-[300px]">
          <div>
            <Image
              src={urlFor(trek.images && trek.images[0]).url()}
              alt="background Image"
              width={300}
              height={300}
              className="rounded-2xl w-full h-full"
            />
          </div>
          <div className="mt-2">
            <h3 className=" mb-3 font-bold text-center">
              {trek.title}
            </h3>

            {/* ✅ Limit height & truncate overflow text */}
            <p className="text-sm text-center h-[58px] overflow-hidden ">
              {trek.trekOverview}
            </p>

            <button className="w-full bg-cyan-600 flex items-center justify-center text-white rounded-full px-2 py-2 mt-2 text-xs font-semibold lg:text-md hover:text-orange-500">
              View More Details
            </button>
          </div>
        </div>
      </div>
    </Link>
    </section>
  )
}

export default TrekPagCard