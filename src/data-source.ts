import "reflect-metadata"
import { DataSource } from "typeorm";
import { Task } from "./entity/Task";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "bendo01",
    password: "talaso",
    database: "todo",
    synchronize: true,
    logging: false,
    entities: [Task],
    migrations: [],
    subscribers: [],
})
