import { createConnection, getConnectionManager } from "typeorm"

const promise =(async function x(){
    const manager = getConnectionManager()
    if (!manager.has('default')){
        return createConnection()
    }else{
        const current = manager.get('default')
        if(current.isConnected){
            return current
        }else {
            return createConnection()
        }
    }
})()

export const getDataBaseConnection=async ()=>{
    return promise
}