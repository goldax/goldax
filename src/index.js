"use strict";

const csv = require("csv");
const fs = require("fs");

fs.createReadStream("data/dax.csv").pipe(csv.parse({
	columns: true
})).on("data", row => console.log(row));
