const sql = require('mssql')

async () => {
    try {
        await sql.connect('mssql://Administrator:@localhost/mobss')
        const result = await sql.query`select * from mytable where id = ${value}`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}
