import path from "path";
import {promises as fsPromises} from "fs";
import * as fs from "fs";
import matter from "gray-matter";
import { marked } from "marked";

const markdown = path.join(process.cwd(), 'markdown');

export const getPosts = async () => {
    const filename = await fsPromises.readdir(markdown)
    const posts = filename.map(filename => {
        const fullPath = path.join(markdown, filename)
        const id = filename.replace(/\.md$/, '')
        const text = fs.readFileSync(fullPath, 'utf-8')
        const {data: {title, date}, content} = matter(text)
        return {id, date, title}
    })
    console.log(posts);
    return posts
}

export const getPost = async (id:string) => {
    const fullPath = path.join(markdown, id+'.md')
    const text = fs.readFileSync(fullPath, 'utf-8')
    const {data: {title, date}, content} = matter(text)
    const htmlContent = marked(content)
    return JSON.parse(JSON.stringify({id, date, title,content,htmlContent}))
}

export const getPostIds=async ()=>{
    const filename = await fsPromises.readdir(markdown)
    return filename.map(r=>r.replace(/\.md$/g,''))

}