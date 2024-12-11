const { readFile, writeFile } = require("fs").promises;

// The util.promisify() could be changed by adding .promises to require('fs').promises.
// Then you can Just simply use readFile and writeFile

// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/result-mind-granade2.txt",
      `This is DOUBLE AWESOME: ${first} and ${second}`, {flag: 'a'}
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};

start();

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// getText("../content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));
