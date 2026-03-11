const express =require('express')
require('dotenv').config()
const app=express()
const port=3000

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/keshav',(req,res)=>{
    res.send('he is best')
})

app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${port}`)
})

