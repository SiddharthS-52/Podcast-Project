import BlogPic from "../Components/BlogPic"
import Navbar from "../Components/Navbar";
import Suggest from "../Components/Suggest";
import './Blog.css';

function Blog() {
    return (
        <>
            <Navbar/>
            <BlogPic/>
            <Suggest/>
        </>
    )
}

export default Blog;