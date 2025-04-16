import Link from 'next/link'


const HunzaDropDown = () => {
  return (
    <div className="group relative">
    <Link href="/tours" className=" hover:text-orange-600">Tours</Link>
    <div className="absolute left-0 hidden group-hover:block bg-white text-black rounded-md shadow-lg min-w-[250px] z-50">
      <Link
        href="/tours"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        All Tours
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Hunza Valley Tours
      </Link>
      <Link
       href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Skardu Valley Tour
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Fairy Meadow And Nanga Parbat
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Hunza And Skardu Trip
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Fairy Meadows, Skardu and Hunza
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Kalash Festival Tour
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Peshawar One Day Tour
      </Link>
      <Link
      href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Lahore One Day Tour
      </Link>
      <Link
        href="#"
        className="block px-4 py-2 hover:bg-cyan-950 hover:text-white"
      >
        Karachi One Day
      </Link>
    </div>
  </div>
  )
}

export default HunzaDropDown