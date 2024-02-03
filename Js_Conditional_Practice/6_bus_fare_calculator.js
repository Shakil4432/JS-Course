/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

const prompt = require("prompt-sync")();

let age =parseInt(prompt("Enter your age : "));
let ticketPrice = parseInt(800);
let discount;
if (age<10) {
    console.log("free");
}
else if (age >= 60) {
    
    discount = (ticketPrice * 15) / 100;
    ticketPrice = ticketPrice - discount;
    console.log(ticketPrice);
}
else{
    let isStudent = prompt("Enter Your Occupation : ");
    if(isStudent.toLowerCase()=== "student"){
        discount = (ticketPrice * 50) / 100;
        ticketPrice = ticketPrice - discount;
        console.log(ticketPrice);
    }
    else{
        console.log(ticketPrice);
    }
}
