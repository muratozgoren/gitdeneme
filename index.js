const express = require('express');
require('./db/dbConnection');

//ROUTES
const userRouter = require('./router/userRoter');

const app = express();

app.use('/api/users',userRouter);
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.listen(3000,()=>{
    console.log("3000 portundan server ayaklandırıldı");
});