const express=require('express');
const app=express();
const path=require('node:path');

app.use(express.static('./project'));
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'navbar-app','index.html'));
});
// app.all('*',(req,res)=>{
//     res.status(404).send("<h1>status not found</h1>");
// })
app.listen(3000,()=>{
    console.log("serevr is going on");
});