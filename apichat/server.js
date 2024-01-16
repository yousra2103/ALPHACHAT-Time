const express = require("express");
const app = express();
require('./config/connect');
app.use(express.json());

const cors = require('cors');
const clientURL = 'http://192.168.56.1:4000';

app.use(cors({
    credentials : true ,
    origin : clientURL
}))



const userRouter = require('./routes/user');

app.use('/apichat', userRouter);









app.listen(4000 , ()=>{
    console.log("conécté au serveur , Merci !");
})