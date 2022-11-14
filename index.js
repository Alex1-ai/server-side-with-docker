const express = require('express');
const app = express();
const port = 3000;



app.get("/", (req,res)=> res.json([
    {
    name:"Bob",
    email:"bob@example.com"
},
{
    name:"Alice",
    email:"alice@example.com"
},
{
    name:"jake",
    email:"jake@example.com"
},
{
    name:"maria",
    email:"maria@example.com"
},

]))


app.listen(port, ()=>console.log(`Example app listening on port ${port}`))