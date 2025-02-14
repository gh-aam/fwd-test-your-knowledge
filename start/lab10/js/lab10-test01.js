const stocks = [ 
    { symbol: "AMZN", name: "Amazon", price: 23.67, units: 59 }, 
    { symbol: "AMT", name: "American Tower", price: 11.22, units: 10 }, 
    { symbol: "CAT", name: "Caterpillar Inc", price: 9.00, units: 100 }, 
    { symbol: "APPL", name: "Amazon", price: 234.00, units: 59 }, 
    { symbol: "AWK", name: "American Water", price: 100.00, units: 10 }
];

// Problem #1 — Solution
/*
for (let stock of stocks) {
    stock.total = function () {
        return this.price * this.units;
    };
    
    console.log(stock.total());
}
*/

stocks.forEach(stock => {
    stock.total = function () {
        return this.price * this.units;
    }
});

stocks.forEach(stock => {
    console.log(stock.total());
});

// Problem #2 — Solution
for (let stock of stocks) {
    if (stock.symbol === "CAT") {
        console.log(stock);
        break;
    }
}

const findStock = stocks.find(stock => stock.symbol === "CAT");
console.log(findStock);

// Problem #3 — Solution
const newStocks1 = [];
for (let stock of stocks) {
    if (stock.price > -1.0 && stock.price < 21.0) {
        newStocks1.push(stock);
    }
}
console.log(newStocks1);

const newStocks2 = stocks.filter(stock => stock.price > -1.0 && stock.price < 21.0);
console.log(newStocks2);

// Problem #4 — Solution
const string_list1 = [];
for (let stock of stocks) {
    string_list1.push(`<li>${stock.name}</li>`);
}
console.log(string_list1);

const string_list2 = stocks.map(stock => `<li>${stock.name}</li>`);
console.log(string_list2);

// Problem #5 — Solution
const sortedStocks = stocks.sort((a, b) => a.symbol < b.symbol ? -1 : 1);
console.log(sortedStocks);