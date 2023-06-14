const express = require('express');

const router = require('./src/routes/routes')

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Hello")
})

app.use(router)

const port = 5002;

app.listen(port, ()=>console.log(`Server is listening at port ${port}`));