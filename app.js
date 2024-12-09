// console.log("first task");
// console.time();
// for (let i = 0; i < 10; i++) {
//   console.log("Hey, everyone is waiting on me");
// }
// console.timeEnd();

// console.log("next time");

// const { readFile } = require("fs");

// console.log("started a first task");

// readFile("./content/first.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log(result);
//   console.log("complete first task");
// });

// console.log("starting second task")

// asyncronous
// console.log('first');
// setTimeout(() => {
//     console.log('second');
    
// }, 0)
// console.log('third');

// setInterval(() => {
//     console.log('hello world');
    
// }, 2000)
// console.log('I will run first');


const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Yo man')
    
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000....');
    
})
