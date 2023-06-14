const mssql = require('mssql');
const config = require('../config/config')

async function getAllBooks(req, res){
    let sql = await mssql.connect(config);
    if(sql.connected){
        let results = await sql.query(`SELECT * FROM dbo.BOOKS`)
        console.log(results);
    }
    res.send('Books...')
}
module.exports = {
    getAllBooks
}