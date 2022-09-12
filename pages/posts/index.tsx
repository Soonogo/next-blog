import {NextPage} from "next";
import {usePosts} from "../../hooks/usePosts";
import {getPosts} from "../../lib/posts";
interface Props{
    posts:Posts[]
}
const PostsIndex:NextPage<Props> =(props)=>{
    const {posts} = props

    return(
        <div>
            <h1>文章列表</h1>
            {posts.map(r=><div key={r.id}>{r.id}</div>)}
        </div>
    )
}

export default PostsIndex

// SSG
export const getStaticProps = async ()=>{
    const posts = await getPosts()
    return{
        props:{
            posts:JSON.parse(JSON.stringify(posts))
        }
    }
}

