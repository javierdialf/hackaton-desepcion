import { config } from "dotenv";
import { DataSource } from "typeorm";

config({
    path:`.env.${process.env.NODE_ENV}`,
});

export default new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    entities: ['src/**/*.entity.ts'],
    migrations: ["database/migrations/*.ts"],
})
