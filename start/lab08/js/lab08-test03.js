/*
let Bill = prompt("Enter total bill:");
let iBill = Number(Bill);

if (iBill > 0) {
    const tip_percentage = 0.10;
    let tip = iBill * tip_percentage;
    console.log(`For bill of $${Bill} the tip should be $${tip}`);
} else {
    console.log(`${Bill} is not a valid number`);
}
*/

let billTotals = [50.00, 150.00, 20.00, 500.00];
let tips = [];

for (let total of billTotals) {
    let tip;
    
    if (total > 75) {
        tip = total * 0.10;
    } else if (total > 29) {
        tip = total * 0.20;
    } else {
        tip = total * 0.30;
    }
    
    tips.push(tip);
}

for (let index = 0; index < billTotals.length; index++) {
    console.log(`For bill of $${billTotals[index]} the tip should be $${tips[index]}`);
}