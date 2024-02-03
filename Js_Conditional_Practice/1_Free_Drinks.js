/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/
const prompt = require("prompt-sync")();

let burgerPrice = prompt("Inter Your Burger Price : ");

if(burgerPrice>500){
    console.log("Free Coke");   
}
else{
    console.log("Coke 30tk");
}
