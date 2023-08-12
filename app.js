const express=require('express');
const port=process.env.PORT || 5500;

const app=express();

app.use(express.json());

app.use(express.urlencoded());







app.get('/form',(req,res)=>{

    res.sendFile(__dirname + '/public/post.html');

})

app.post('/formPost',(req,res)=>{
    console.log(req.body);

})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
});