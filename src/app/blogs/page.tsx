import BlogCard from "@/components/ui/BlogCard";
import { Blog } from "@/type";

const BlogPage = async() => {
    const res = await fetch("http://localhost:5000/blogs" , {cache : "no-store"})
    const blogs = await res.json();
  return (
    <div>
      <h1 className="text-center text-4xl my-5 ">All <span className="text-accent">Blogs</span></h1>
      <p className="text-xl text-center text-gray-400 w-2/4 mx-auto">
        <i>
        Dive into the fascinating world of quantum computing, where unlocking unprecedented computational power.
        </i>
      </p>
      <div className="grid grid-cols-3 gap-20 py-5 px-10">
        {blogs?.map((blog : Blog) => <BlogCard key={blog.id} blog={blog}/>)}
    </div>
    </div>
  )
}

export default BlogPage;
