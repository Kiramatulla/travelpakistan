import Link from 'next/link'


const TrekDropDown = () => {
  return (
    <div className="group relative">
    <Link href="/trekking" className="text-white hover:text-orange-600">Treks</Link>
    <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded-md shadow-lg min-w-[250px] z-50">
      <Link
        href="/trekking"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        All Treks
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        K2 Base Camp Trek
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        K2 Base Camp and Ghondoghoro La
      </Link>
      <Link
      href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        Snow Lake Trek
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        Lupke La trek
      </Link>
      <Link
       href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        Khordopin Trek
      </Link>
      <Link
       href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        Hisper La Trek
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        Skam La Trek
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        Shimshal Pamir Trek
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-orange-100"
      >
        Patundas Trek
      </Link>
    </div>
  </div>
  )
}

export default TrekDropDown