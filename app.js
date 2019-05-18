const express = require('express');
const Nexmo = require('nexmo');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const socketio = require('socket.io');

const indexRoutes = require('./routes/index');



//Define port
const port = 3000;

//Init app
const app = express();

//Template engine set up
app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

//Public folder set up
app.use(express.static(__dirname+'/public'));

//BodyParser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//index routes
app.use(indexRoutes);






//Start server
const server = app.listen(port, () => console.log(`Server is running on port ${port}`));
