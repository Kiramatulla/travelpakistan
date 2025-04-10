import BlogBanner from "../components/blogComponents/BlogBanner";
import BlogCards from "../components/blogComponents/BlogCard";
import BlogCategory from "../components/blogComponents/BlogCategory";

const page = () => {
  return (
    <div>
      <div>
        <BlogBanner />
      </div>
      <div className="flex ">
        <BlogCategory />
        <main className=" lg:p-4">
          <BlogCards />
        </main>
      </div>
    </div>
  );
};

export default page;
