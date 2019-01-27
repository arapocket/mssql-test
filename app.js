const sql = require('mssql')


sql.connect('mssql://Administrator:h5bBXn9;(;yjWc4ANb)aIn7Xjl88.nia@localhost/mobss').then(res => {
    sql.query`select * from mytable where id = ${value}
    `
    console.log(res);
}).catch(err => {
    console.log('logging err');
    console.log(err);
})



