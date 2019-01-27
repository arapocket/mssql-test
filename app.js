const sql = require('mssql')


sql.connect('mssql://EC2AMAZ-86TAJ27\Administrator:@localhost/mobss').then(res => {
    sql.query`select * from mytable where id = ${value}
    `
    console.log(res);
}).catch(err => {
    console.log('logging err');
    console.log(err);
})



