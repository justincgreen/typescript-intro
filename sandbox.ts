let person: string = 'Bob';
let id: number = 1;
let isLoggedIn: boolean = false;

const circ = (diameter: number) => {
	return diameter * Math.PI
}

//console.log(circ(7));

class Invoice {
	client: string;
	details: string;
	amount: number;
	
	constructor(c: string, d: string, a: number) {
		this.client = c;
		this.details = d;
		this.amount = a;
	}
	
	format() {
		return `${this.client} owes $${this.amount} for ${this.details}`
	}
}

const invOne = new Invoice('Hank', 'Propane', 50);
const invTwo = new Invoice('Bob', 'Delivery', 20);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);