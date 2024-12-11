const { readFileSync, writeFileSync } = require("fs");
console.log("start");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// With writeFileSync 1st parameter = path, second = value, 3 = Object additions

//Node creates the file if it is not already there and overwrites the value by default.

// -a FLAG appends the value of the 2nd param to an existing value
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first} and ${second}`,
  { flag: "a" }
);

console.log("done with this task");
console.log("starting the next");
