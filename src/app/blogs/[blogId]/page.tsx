import BlogDetails from "@/components/ui/BlogDetails";

interface BlogId {
    params : {
        blogId : string;
    }
}

const BlogDeailsPage = async({params} : BlogId) => {
    // const res = await fetch(`http://localhost:3000/blogs/1`);
    // const blog = await res.json();

    const res = await fetch(`http://localhost:5000/blogs/${params.blogId}` , {cache : "no-store"})
    const blog = await res.json()
  
    
   
    console.log(blog)
  return (
    <div>
      <BlogDetails blog={blog}/>
    </div>
  )
}

export default BlogDeailsPage;
