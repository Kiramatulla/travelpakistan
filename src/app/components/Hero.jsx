import bgImage from "../assets/hunza.jpeg"
import Image from "next/image"
import SearchForm from "./SearchForm"

const Hero = () => {
  return (
    <section className="relative mt-8 lg:mx-40 h-[28rem] bg-cover bg-center rounded-full">

    <Image
      src={bgImage}
      alt="Image of an ibex on a mountain"
      className="object-cover object-center w-full h-full shadow-2xl"
      fill
    />

    
    <span className="absolute inset-0 bg-black bg-opacity-50 md:h-full lg:h-full"></span>


    <header className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
      <h1 className="absolute top-56 font-sans lg:top-[14rem] md:top-30 text-xl md:text-4xl font-bold mb-6">
        Discover Pakistans Hidden Treasure
      </h1>

      
      <div className="lg:w-full max-w-lg absolute top-60 lg:top-[16rem] py-8">
        <SearchForm />
      </div>
    </header>
  </section>
  )
}

export default Hero