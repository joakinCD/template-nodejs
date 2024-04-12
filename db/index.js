import pg from "pg";
import fs from "fs";

const pool = new pg.Pool({
  connectionString: "postgres://fl0user:AxPyB19JRUoC@ep-nameless-poetry-a1eg49ik.ap-southeast-1.aws.neon.fl0.io:5432/databaseName?sslmode=require",
});


export const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};