const mssql = require('mssql');
const config = require('../config/config');

async function getAllBooks(req, res) {
  try {
    let sql = await mssql.connect(config);
    if (sql.connected) {
      let results = await sql.query('SELECT * FROM dbo.Books');
      res.json(results.recordset);
    }
  } catch (error) {
    console.error('Error retrieving books:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function getAllMembers(req, res) {
  try {
    let sql = await mssql.connect(config);
    if (sql.connected) {
      let results = await sql.query('SELECT * FROM dbo.Members');
      res.json(results.recordset);
    }
  } catch (error) {
    console.error('Error retrieving members:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}



// async function registerMember(req, res) {
//   try {
//     const {MemberID, Name, Address, ContactNumber } = req.body;

//     // Validate the input data (e.g., check for required fields, format validation, etc.)


//     if (sql.connected) {
//       // Insert the new member into the Members table
//       const result = await sql.query(
//         `INSERT INTO dbo.Members (MemberID, Name, Address, ContactNumber) VALUES ('${MemberID}', '${Name}', '${Address}', '${ContactNumber}')`
//       );

//       res.status(201).json({ message: 'Member registered successfully', memberID });
//     }
//   } catch (error) {
//     console.error('Error registering member:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// }

async function registerMember(req, res) {
  try {
    const { MemberId, Name, Address, ContactNumber } = req.body;
    if (!MemberId || !Name || !Address || !ContactNumber) {
      return res.status(400).json({ error: 'MemberId, Name, Address, and ContactNumber are required' });
    }

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