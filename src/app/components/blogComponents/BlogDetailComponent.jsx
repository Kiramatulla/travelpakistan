import Blogs from "../tourDetailPage/Blogs";
import RelatedTours from "../tourDetailPage/RelatedTours";
import BlogContent from "./BlogContent";
import BlogImage from "./BlogImage";
import BlogOverview from "./BlogOverview";

const BlogDetailComponent = ({ blogs, relatedTours, relatedBlogs }) => {
  return (
    <div className=" lg:flex lg:flex-row lg:ml-16">
      <div className=" lg:w-[65%] lg:pl-2 lg:ml-8 pb-6 rounded-lg">
        {/* render detail here */}
        <BlogImage blogs={blogs} />
        <BlogOverview blogs={blogs} />
        <BlogContent blogs={blogs} />
        <RelatedTours relatedTours={relatedTours} />
        
      </div>
      <div className="p-8 lg:w-[27%] lg:p-8 lg:sticky lg:top-8 lg:mt-34">
        {/* Render your sidebar details here */}
        <Blogs relatedBlogs={relatedBlogs} />
      </div>
    </div>
  );
};

export default BlogDetailComponent;
