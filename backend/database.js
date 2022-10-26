import * as pg from 'pg';
const { Pool } = pg.default

const pool = new Pool({
    user: "postgres",
    password: "root",
    host: "localhost",
    port: 5432,
    database: "iaeround",
});

export default pool;