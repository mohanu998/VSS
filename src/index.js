// var express = require('express');

import Express from "express";
const app = Express();
app.get('/', (req,res)=> {res.send('hello world')})

app.listen(3000, ()=>console.log('i am running'))


// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   con