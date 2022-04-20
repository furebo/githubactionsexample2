import express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send({message:'Welcome to my application'});
})

app.get('/api',(req,res)=>{
    res.send({message:'please enter your credentials'});
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000!!!");
})

export default app