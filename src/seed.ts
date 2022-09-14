import "reflect-metadata";
import {createConnection} from "typeorm";
import { User } from "./entity/User";

createConnection().then(async connection => {
    const {manager} = connection
    const a1 = new User()
    a1.username='song'
    a1.passwordDigest='xxx'
    await manager.save(a1)
    console.log(a1.id);
    connection.close()

}).catch(error => console.log(error));
