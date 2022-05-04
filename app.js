// usando objeto express
const express = require('express');
// app express
const app= express();
app.use(express.json());
// puerto
const port = 3000;
// con esto iniciamos esta app

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`);
})