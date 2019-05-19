const express = require('express');
const router = express.Router();
const Nexmo = require('nexmo');


//Init nexmo
const nexmo = new Nexmo({
    apiKey: 'XXXXXX',
    apiSecret: 'XXXXXXX'
   }, {debug: true});
   

//Index route
router.get('/',(req,res) => {
    res.render('index');
})

//catch form submit
router.post('/', (req,res) => {
    // console.log(req.body);
    // res.send(req.body);
    const from = 'nexmo'
    const number = req.body.number;
    const text = req.body.text;

    nexmo.message.sendSms(from, number, text, {type: 'unicode'}, (err, responseData) => {
        if(err){
        console.log(err)
        }
        else
        console.dir(responseData);
        //Get data from response
        const data = {
            id: responseData.message[0]['message-id'],
            number: responseData.message[0]['to']
        }

        //Emit data to the client
        io.emit('smsStatus', data);
    });

})


module.exports= router;