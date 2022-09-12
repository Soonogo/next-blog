import path from "path";
import {promises as fsPromises} from "fs";
import * as fs from "fs";
import matter from "gray-matter";

export const getPosts = async () => {
    const markdown = path.join(process.cwd(), 'markdown');
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