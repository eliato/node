const express = require('express');
const app = express();
const cors = require('cors'); 
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('./database.js');



app.set('Port', process.env.PORT || 3000);
//app.use(morgan('dev'));
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());
//app.use(bodyParser.json());

app.listen(app.get('Port'), () => {
    console.log(`Server is running on portr ${app.get('Port')}`);
})

