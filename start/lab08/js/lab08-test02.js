let Bill = prompt("Enter total bill:");
let iBill = Number(Bill);

if (iBill > 0) {
    const tip_percentage = 0.10;
    let tip = iBill * tip_percentage;
    console.log(`For bill of $${Bill} the tip should be $${tip}`);
} else {
    console.log(`${Bill} is not a valid number`);
}