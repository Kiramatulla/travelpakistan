const TrekOverview = ({ treks }) => {
    return (
      <article className="px-6 text-justify lg:text-start my-12 lg:pl-8 lg:pr-8">
        <h1 className="font-bold text-2xl font-sans mb-4">{treks.title}</h1>
        <p className=" font-sans lg:text-sm lg:leading-6">{treks.trekOverview}</p>
      </article>
    );
  };
  
  export default TrekOverview;
  