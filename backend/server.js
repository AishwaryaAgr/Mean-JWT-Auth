const express = require('express');
const cors = require('cors');

const PORT = 3000;
const api = require('./routes/api')
const app =  express();

app.use(cors());
app.use(express.json());

app.use('/api',api);
app.get('/', (req,res)=>{
    res.send("Hello World");
})

app.listen(PORT, ()=>{
    console.log("Server Running");
})