interface Posts {
    id:string
    title:string
    date:string
    content:string
    htmlContent:string
}

declare module "*.png"{
    const value:string
    export default value
}