import { Client } from 'pg'

export const getUsuario = async (username:string, password:string) => {
    const client = new Client({
        user: 'georgekoke',
        host: 'dpg-cjio6kvjbvhs73aeq1q0-a.oregon-postgres.render.com',
        database: 'logindb_04rj',
        password: 'kpoZIaohuRdOeiVuPCei306uteGNpI0f',
        port: 5432,
    })
    await client.connect()
     
    const res = await client.query(`SELECT * FROM public."USUARIO"`)
    const result = res.rows[0].nombre
    console.log(result)
    await client.end()
    return result.toString()
}