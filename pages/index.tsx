import {GetServerSideProps, NextPage } from 'next';
import UAParser from 'ua-parser-js';
interface Props{
    browser:{
        name:string
        version:string
        major:string
    }
}
const Index:NextPage<Props> =(props)=> {
    const {browser}=props
  return (
    <div  style={{background:"lightblue"}}>
        <h1>浏览器是{browser.name}</h1>

    </div>
  )
}
export default Index

// SSR
export const getServerSideProps:GetServerSideProps=async (context)=>{
    const ua = context.req.headers['user-agent']
    const result = new UAParser(ua).getBrowser()
    console.log(result);
    return{
        props:{
            browser:result
        }
    }
}