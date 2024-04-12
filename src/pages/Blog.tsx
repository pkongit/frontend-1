import { BlogSkeleton } from "../components/BlogSkeleton";
import { FullBlog } from "../components/FullBlog";
import { useBlog } from "../hooks"
import { useParams } from "react-router-dom";


export const  Blog =() => {
    const {id} = useParams();
    const {loading, blog} = useBlog({
        id : id ||""
    });
    if(loading || !blog){
        return  <div className="flex-start  mt-20">
        <div className="flex justify-center flex-col  ">
        <BlogSkeleton   />
        </div>
    </div>

    }
return <div>
    <FullBlog blog={blog} />
</div>
}