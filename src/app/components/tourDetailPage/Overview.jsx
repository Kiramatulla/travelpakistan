const OverView = ({ tours }) => {
    return (
      <section className="px-6 text-justify lg:text-start mt-12 mb-8 lg:pl-8 lg:pr-8">
        <h1 className="font-bold text-2xl font-sans mb-4">{tours.title}</h1>
        <p className=" font-sans lg:text-sm lg:leading-6">{tours.tourOverview}</p>
      </section>
    );
  };
  
  export default OverView;