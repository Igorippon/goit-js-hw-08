const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const STORAGE_KEY = "feedback-form-state"
let data = {};

form.addEventListener('input', throttle(handlerInput, 500));
function handlerInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    
}
   
data = getData();

for (let key in data) {
    form.elements[key].value = data[key];
}

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    const { email, message } = evt.target.elements;
    const emailVel = email.value.trim();
    const messageVel = message.value.trim();
     data = createdObj(emailVel, messageVel);
    console.log(data);
   localStorage.removeItem(STORAGE_KEY)
    evt.target.reset();
}  

function createdObj(email, message) {
     return {
        email, message  
    }
}

function getData() {
    try{
    const data = localStorage.getItem(STORAGE_KEY);
        if (data) {
           return JSON.parse(data)
            }
        return {};
    } catch(err) {
        console.log(err.message);
        }
}
