import { Blog } from "@/type"
import LatestBlogCard from "./ui/LatestBlogCard"
import BlogCard from "./ui/BlogCard"


const LatestBlogs = ({blogs} : {blogs : Blog[]}) => {
    
  return (
    <div>
      <h1 className="text-center text-4xl my-5 ">Latest <span className="text-accent">Blogs</span></h1>
    <div className="grid grid-cols-2 gap-20 py-5 px-10">
        {blogs?.slice(0 , 2).map((blog) => <LatestBlogCard key={blog.id} blog={blog}/>)}
    </div>
    <div className="grid grid-cols-3 gap-20 py-5 px-10">
        {blogs?.slice(2 , 5).map((blog) => <BlogCard key={blog.id} blog={blog}/>)}
    </div>
    </div>
  )
}

export default LatestBlogs
