const path = require("path")
// console.log(path.dirname(__filename));

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
console.log(path.join("users" ,"sourov","sourov.js"));
console.log(path.normalize("users//sourov//..//main.js"));



// console.log(__dirname);
// console.log(__filename);

