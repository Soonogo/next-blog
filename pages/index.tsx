import { getDataBaseConnection } from 'lib/getDataBaseConnection';
import {GetServerSideProps, NextPage } from 'next';
import { Post } from 'src/entity/Post';
import UAParser from 'ua-parser-js';
import Link from 'next/Link'

interface Props{
    posts:Post[]
    browser:{
        name:string
        version:string
        major:string
    }
}
const Index:NextPage<Props> =(props)=> {
    const {browser,posts}=props
    console.log(posts);
    return (
        <div style={{background: "lightblue"}}>
            <h1>浏览器是2{browser.name}</h1>
            {posts.map(post => <div key={post.id}>
                <Link href={`posts/${post.id}`}>
                    {post.title}

                </Link>
            </div>)}

        </div>
    );
}
export default Index

// SSR
export const getServerSideProps:GetServerSideProps=async (context)=>{
    const connection = await getDataBaseConnection()
    const posts = await connection.manager.find(Post)
    console.log(12345);
    console.log(posts);
    const ua = context.req.headers['user-agent']
    const result = new UAParser(ua).getBrowser()
    console.log(result);
    return{
        props:{
            browser:result,
            posts:JSON.parse(JSON.stringify(posts))
        }
    }
}