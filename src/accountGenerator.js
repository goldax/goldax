"use strict";

const Account = require("./Account");

function accountGenerator(dailyBudget) {
	const account = new Account();
	let lastRecord;

	return record => {
		if(!lastRecord || lastRecord.date.getDate() !== record.date.getDate()) {
			account.addCapital(dailyBudget);
		}

		lastRecord = record;

		return {
			capital: account.capital,
			handler(stocks) {
				const cost = record.value * stocks;

				if(cost > account.capital) {
					throw new Error("Too expensive.");
				}
				account.buyStocksFor(stocks, cost);
			}
		};
	};
}

module.exports = accountGenerator;
