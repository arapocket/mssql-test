const sql = require('mssql')


const config = {
    user: 'Administrator',
    password: '',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'mobss',

    options: {
        encrypt: false // Use this if you're on Windows Azure
    }
}

sql.connect(config).then(pool => {
    // Query
    
    return pool.request()
    .input('input_parameter', sql.Int, value)
    .query('select * from mytable where id = @input_parameter')
}).then(result => {
    console.log(result)
    
    // Stored procedure
    
    return pool.request()
    .input('input_parameter', sql.Int, value)
    .output('output_parameter', sql.VarChar(50))
    .execute('procedure_name')
}).then(result => {
    console.log(result)
}).catch(err => {
    // ... error checks
})

sql.on('error', err => {
    // ... error handler
})



