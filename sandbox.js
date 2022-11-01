var person = 'Bob';
var id = 1;
var isLoggedIn = false;
var circ = function (diameter) {
    return diameter * Math.PI;
};
//console.log(circ(7));
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var invOne = new Invoice('Hank', 'Propane', 50);
var invTwo = new Invoice('Bob', 'Delivery', 20);
var invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
