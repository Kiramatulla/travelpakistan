
const OverView = ({ tours }) => {

  
    return (
      <section className="px-6 text-justify lg:text-start mt-12 mb-8 lg:pl-8 lg:pr-8">
        <h1 className="font-bold text-2xl text-gray-800 font-sans mb-4">{tours.title}</h1>
        <p className=" font-sans text-sm lg:leading-7 "> {tours.tourOverview} </p>
      </section>
    );
  };

  export default OverView;

// import { PortableText } from "next-sanity";

  





// const overView = ({ tours }) => {
  
//   return (
//     <section className="px-6 text-justify lg:text-start mt-8 mb-8 lg:pl-8 lg:pr-8">
//       <h1 className="font-bold text-2xl text-gray-800 font-sans mt-4 mb-4">{tours.title}</h1>
//       <section className="font-sans text-sm lg:leading-6">
//         {tours.tourOverview}
//       </section>
//     </section>
//   );
// };

// export default overView;
