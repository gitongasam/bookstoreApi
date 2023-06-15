const express = require('express');

const router = require('./src/routes/routes.js')

const app = express();

app.use(express.json());

app.get('/', (req, res) =>{
    res.send('sam')
})

app.use(router)

const port = 5003;

app.listen(port, ()=>console.log(`Server is listening at port ${port}`));