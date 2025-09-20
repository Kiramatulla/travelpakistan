import bgImage from "../assets/hunzavalley.webp";
import Image from "next/image";
import SearchForm from "./SearchForm";

const Hero = () => {
  return (
    <section className="relative h-[20rem] md:mx-auto lg:h-[28rem] bg-cover bg-center rounded-full">
      <Image
        src={bgImage}
        alt="Hunza adventure tours"
        className="object-cover object-center shadow-2xl"
        fill
        priority="high"
        fetchPriority="high"
        sizes="100vw"
      />

      <span className="absolute inset-0 bg-black bg-opacity-50 md:h-full lg:h-full"></span>

      <header className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="absolute top-40 font-sans lg:top-[14rem] md:top-30 text-xl md:text-4xl font-bold mb-6">
          Discover Pakistans Hidden Treasure
        </h1>

        <div className=" lg:w-full lg:max-w-lg absolute top-44 lg:top-[16rem] py-8">
          <SearchForm />
        </div>
      </header>
    </section>
  );
};

export default Hero;
