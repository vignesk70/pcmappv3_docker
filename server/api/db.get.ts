export default defineEventHandler(async (event) => {

    // const [rows, fields] = await event.context.db.execute('select * from pcmappv2_member');
    const res = await event.context.db.query('SELECT NOW() as now')
    console.log('RESPONSE --------', res)
    return res
 })