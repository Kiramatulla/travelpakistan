import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

const TrekkingBlogs = ({relatedBlogs}) => {
  return (
    <div>
      <div className="font-sans">
        <h3 className="text-center text-3xl lg:text-start lg:text-2xl font-semibold px-4 ">
          Explore More About Your Destination
        </h3>
        <div>
          {relatedBlogs.map((relatedBlog) => {
            return (
              <div 
              key={relatedBlog._id}
              className="my-5 border-b-2  border-spacing-2  px-4 cursor-pointer transition-transform hover:scale-105">
                <Link
                  href={`/blogs/${relatedBlog.slug.current}`}
                  
                >
                 
                  <h4 className="font-medium text-xl lg:text-sm mb-2">
                    {relatedBlog.title}
                  </h4>
                 
                  <button className="font-medium  lg:text-sm pb-2 hover:text-orange-500 inline-flex items-center ">
                    Read Post <FaArrowRightLong className="pl-1 pt-1" />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TrekkingBlogs;
