const express =  require('express');
const path =  require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


// DB Config
require('./config/db');

const app =  express();
const poll =  require('./routes/poll');

// Set ublic Folder
app.use(express.static(path.join(__dirname,'public')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


// Enable Cors
app.use(cors());
app.use('/poll',poll);

const port = 3000;


app.listen(port, ()=>{
    console.log(`Server has beens tarted at port : ${port}`)
})
