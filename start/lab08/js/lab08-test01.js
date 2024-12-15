/* add code below this */

let Bill = prompt("Enter total bill:");
let iBill = Number(Bill);

const tip_percentage = 0.10;
let tip = iBill * tip_percentage;

console.log(`For bill of $${Bill} the tip should be $${tip}`);