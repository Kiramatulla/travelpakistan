import React from "react";
import BlogImage from "./BlogImage";

const BlogHeader = ({ blogs }) => {
  return (
    <div className=" pt-7">
      <div className=" rounded flex flex-col">
        <h1 className="px-8 text-xl sm:text-3xl font-serif font-semibold inline-block">
          {blogs.title}
        </h1>

        <div>
          <BlogImage blogs={blogs} />
        </div>
        <p className="px-8 text-gray-700 py-5 text-base leading-8">
          {blogs.blogOverview}
        </p>
        <div className="px-8 pb-8 text-sm font-regular text-gray-900 flex">
          <span className="mr-3 flex flex-row items-center">
            <div>
              <span className="font-bold"> Read Time: </span>
              {blogs.readTime} min
            </div>
          </span>
          <div className="flex flex-row items-center">
            <div className="ml-1">
           
              <span className="font-bold">Updated On:</span> {blogs.publishedAt}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
