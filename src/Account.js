"use strict";

const p = {
	capital: Symbol("capital"),
	stocks: Symbol("stocks")
};

class Account {
	constructor() {
		this[p.capital] = 0;
		this[p.stocks] = 0;
	}

	get capital() {
		return this[p.capital];
	}

	get stocks() {
		return this[p.stocks];
	}

	addCapital(amount) {
		this[p.capital] += amount;
	}

	buyStocksFor(stocks, cost) {
		this[p.capital] -= cost;
		this[p.stocks] += stocks;
	}

}

module.exports = Account;
