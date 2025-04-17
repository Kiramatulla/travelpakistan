import BlogCards from "../components/blogComponents/BlogCard";
import BlogCategory from "../components/blogComponents/BlogCategory";

export const metadata ={
  title:"Pakistan Tour Packages 2025",
  description:"Looking for a once-in-a-lifetime adventure? Discover 20+ handpicked Pakistan tour packages for 2025, designed just for you. Whether you want to explore the mountains of Hunza, the deserts of Cholistan, or the culture of Lahore — weve got a trip that fits your style, budget, and time",
  
}

const page = () => {
  return (
    <div>
      <div className=" flex ">
       <section className="hidden md:flex">
       <BlogCategory />
       </section> 
        <main className=" lg:p-4">
          <BlogCards />
        </main>
      </div>
    </div>
  );
};

export default page;
