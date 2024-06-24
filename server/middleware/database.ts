import pg from 'pg'

export default defineEventHandler(async (event) => {
    const client = new pg.Client({
        user:   process.env.DB_USER, //'postgres',
        host: process.env.DB_HOST, //'localhost',
        database: process.env.DB_DATABASE, //'pcmappv3',
        password: process.env.DB_PASSWORD, //'my_password',
        port: process.env.DB_PORT, //54320, 
    
    })
    const conn = await client.connect()
    console.log(conn)
    event.context.db = conn //await client.connect()
 });
 
 