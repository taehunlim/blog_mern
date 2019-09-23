const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const db = "mongodb+srv://blog:asd123@cluster0-rsbsu.mongodb.net/test?retryWrites=true&w=majority";

mongoose
    .connect(db, {
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology : true
    })
    .then(()=> console.log("mongoDB connected"))
    .catch(err => console.log(err));

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


const port = 3000;

app.listen(port, ()=> console.log(`server running on port ${port}`));