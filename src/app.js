import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.PORT
app.get('/',(req,res)=>{
    res.json({message:'Welcome to my application'});
})

app.get('/api',(req,res)=>{
    res.json({message:'please enter your credentials !!!'});
})


app.listen(port,()=>{
    console.log(`App is listening on port ${port} !!!`);
})

export default app