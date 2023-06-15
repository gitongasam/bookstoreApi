const mssql = require('mssql');
const config = require('../config/config');

async function borrowBook(req, res) {
  try {
    const bookID = req.params.id;

    const sql = await mssql.connect(config);

async function registerMember(req, res) {
  try {
    const { MemberId, Name, Address, ContactNumber } = req.body;
    if (!MemberId || !Name || !Address || !ContactNumber) {
      return res.status(400).json({ error: 'MemberId, Name, Address, and ContactNumber are required' });
    }

    let sql = await mssql.connect(config);
    if (sql.connected) {
      const query = `INSERT INTO dbo.Members (MemberId, Name, Address, ContactNumber) VALUES (${MemberId}, '${Name}', '${Address}', '${ContactNumber}')`;
      let result = await sql.query(query);
      console.log(result);

  } catch (error) {
    console.error('Error borrowing book:', error);
    res.status(500).send('An error occurred while borrowing the book.');
  }
}

async function returnBook(req, res) {
  try {
    const bookID = req.params.id;

    const sql = await mssql.connect(config);

    const result = await sql
      .request()
      .input('bookID', mssql.Int, bookID)
      .query(`UPDATE dbo.Books
              SET Status = 'Available'
              WHERE BookID = @bookID;
              SELECT * FROM dbo.Books WHERE BookID = @bookID`);
    const returnedBook = result.recordset[0];
    res.status(200).send(`Book returned successfully. \n\nBook details: ${JSON.stringify(returnedBook)}`);

  } catch (error) {
    console.error('Error returning book:', error);
    res.status(500).send('An error occurred while returning the book.');
  }
}

module.exports = {
  borrowBook,
  returnBook,
};
