const numberInput = document.getElementById('number');
const textInput = document.getElementById('msg');
const button = document.getElementById('button');
const response = document.querySelector('.response');


button.addEventListener('click', send, false);

const socket = io();

socket.on('smsStatus', (data) => {
    response.innerHTML = '<h5>Message sent to '+data.number+'</h5>';
});

function send(){
    const number = numberInput.value.replace('/\D/g','');//Regex is to make sure there is no non-numeric characters
    const text = textInput.value;

fetch('/',{
    method: 'post',
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify({number: number, text:text})

})
.then((res) => {console.log(res)})
.catch((err) => {console.log(err)});


}