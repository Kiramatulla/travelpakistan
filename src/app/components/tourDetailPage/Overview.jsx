const OverView = ({ tours }) => {
    return (
      <section className="px-6 text-justify lg:text-start mt-12 mb-8 lg:pl-8 lg:pr-8">
        <h1 className="font-bold text-2xl text-gray-800 font-sans mb-4">{tours.title}</h1>
        <p className=" font-sans text-sm lg:leading-7 ">{tours.tourOverview}</p>
      </section>
    );
  };
  
  export default OverView;

