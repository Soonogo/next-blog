import {useEffect, useState} from "react";
import axios from "axios";

export const usePosts=()=>{
    const [posts,setPosts] = useState<Posts[]>([])
    useEffect(()=>{
        axios.get('api/v1/posts').then((response)=>{
            console.log(response.data);
            setPosts(response.data)

        })
    },[])
    return { posts,setPosts}
}