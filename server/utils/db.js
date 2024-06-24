import { Client } from 'pg'

export default defineNuxtPlugin(nuxtApp => {
    
    const client = new Client({
        user:   process.env.DB_USER, //'postgres',
        host: process.env.DB_HOST, //'localhost',
        database: 'pcmappv3',
        password: 'my_password',
        port: 54320, // Default PostgreSQL port
    
    })

    client.connect()
    console.log(client)

    return {
        provide: {
          pg: client
        }
      }
    
  })
  


