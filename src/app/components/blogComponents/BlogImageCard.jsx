import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from "react-icons/fa6";


const BlogImageCard = ({blog}) => {
 return(
    <Link
    href={`/blogs/${blog.slug.current}`}
    >
    <div className="w-full  px-4">
    <div className="w-full mx-auto mb-10">
      <div className="rounded  mb-4">
        {/* <Image
          src={urlFor(blog.featuredImage && blog.featuredImage[0]).url()}
          alt={blog.title}
          width={300}
          height={300}
        /> */}
     <Image
     src={urlFor(blog.featuredImage && blog.featuredImage[0]).url()}
     alt={blog.title}
     width={300}
     height={300}
     />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-2">
          {" "}
          {blog.title}
        </h3>
        <p
         
          className="lg:text-sm pb-2 hover:text-orange-500 inline-flex items-center "
        >
          Read Post <FaArrowRightLong className="pl-1 pt-1" />
        </p>
      </div>
    </div>
  </div>
  </Link>
 )   
}

export default BlogImageCard