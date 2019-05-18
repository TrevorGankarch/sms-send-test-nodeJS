const express = require('express');
const router = express.Router();
const Nexmo = require('nexmo');


//Init nexmo
const nexmo = new Nexmo({
    apiKey: 'XXXXX',
    apiSecret: 'XXXXX'
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
    });

})


module.exports= router;