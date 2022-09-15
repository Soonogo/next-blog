import { createConnection } from "typeorm"

const promise =(async function x(){
    return await createConnection()
})()

export const getDataBaseConnection=async ()=>{
    return promise
}