import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.json({message:'Welcome to my application'});
})

<<<<<<< HEAD
app.listen(port,()=>{
    console.log(`App is listening on port ${port} !!!`);
=======
app.get('/api',(req,res)=>{
    res.send({message:'please enter your credentials'});
})

app.listen(3000,()=>{
    console.log("App is listening on port 3000!!!");
>>>>>>> 8fa0f17 (changed the branch in yml file)
})


export default app