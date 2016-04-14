"use strict";

class Record {
	constructor(data) {
		this.date = new Date(data.date);
		this.value = +data.value;
		Object.freeze(this);
	}
}

module.exports = Record;
