function calculateTip(total) {
  let tip;
  
  if (total > 75) {
    tip = total * 0.10;
  } else if (total > 29) {
    tip = total * 0.20;
  } else {
    tip = total * 0.30;
  }
  
  return tip;
}

let billTotals = [50.00, 150.00, 20.00, 500.00];
for (let bt of billTotals) {
  // console.log("For bill of $" + bt + " the tip should be $" + calculateTip(bt));
  console.log(`For bill of $${bt} the tip should be $${calculateTip(bt)}`);
}