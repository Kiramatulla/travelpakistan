import CallToAction from "../CallToAction";
import Blogs from "../tourDetailPage/Blogs";
import RelatedTours from "../tourDetailPage/RelatedTours";
import BlogContent from "./BlogContent";
import BlogHeader from "./BlogHeader";
import RelatedBlogTours from "./RelatedBlogTours";

const BlogDetailComponent = ({ blogs, relatedTours, relatedBlogs }) => {
  return (
    <div className=" lg:flex lg:flex-row lg:ml-16">
      <div className=" lg:w-[65%] lg:pl-2 lg:ml-8 pb-6 rounded-lg">
        <section>
          <BlogHeader blogs={blogs} />
        </section>
        <section>
          <BlogContent blogs={blogs} />
        </section>
        <section>
          <RelatedBlogTours relatedTours={relatedTours} />
        </section>
      </div>
      <aside className="p-8 lg:w-[27%] lg:p-8 lg:sticky lg:top-8 lg:mt-34">
        <CallToAction />
        <Blogs relatedBlogs={relatedBlogs} />
      </aside>
    </div>
  );
};

export default BlogDetailComponent;
