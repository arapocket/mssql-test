const sql = require('mssql')


const config = {
    user: 'Administrator',
    password: '',
    server: 'localhost\\EC2AMAZ-86TAJ27', // You can use 'localhost\\instance' to connect to named instance
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
    console.log(err);
})

sql.on('error', err => {
    console.log(err);
})



