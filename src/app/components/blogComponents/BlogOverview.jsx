const BlogOverview = ({ blogs }) => {
    return (
      <section className="px-6 text-justify lg:text-start my-8 lg:pl-8 lg:pr-8">
        <h1 className="font-bold text-2xl font-sans mb-4">{blogs.title}</h1>
        <p className=" font-sans lg:text-sm lg:leading-6">{blogs.blogOverview}</p>
      </section>
    );
  };
  
  export default BlogOverview;
  