// console.log("first task");
// console.time();
// for (let i = 0; i < 10; i++) {
//   console.log("Hey, everyone is waiting on me");
// }
// console.timeEnd();

// console.log("next time");

const { readFile } = require("fs");

console.log("started a first task");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
  console.log("complete first task");
});

console.log("starting second task");
