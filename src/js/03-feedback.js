const throttle = require('lodash.throttle');
const form = document.querySelector('.feedback-form');
const input = document.querySelector('#email');
const STORAGE_KEY = "feedback-form-state"
const data = {};

form.addEventListener('input', throttle(handlerInput, 500));
function handlerInput(evt) {
    data[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
   }

form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
    evt.preventDefault();
    
    const { email, message } = evt.target.elements;
    const emailVel = email.value.trim();
    const messageVel = message.value.trim();
    const data = createdObj(emailVel, messageVel);
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
