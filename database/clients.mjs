import * as dotenv from "dotenv";
dotenv.config();
const PG_PW = process.env.PG_PW;
import pg from "pg";

const client = new pg.Client({
    host: "localhost",
    user: "express_admin",
    port: 5432,
    password: `${PG_PW}`,
    database: "express"
});

export default client;