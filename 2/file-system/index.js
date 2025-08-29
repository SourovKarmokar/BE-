const fs = require("fs")
const path = require("path")

const createFolder  = path.join(__dirname ,"souorv")
if(!fs.existsSync(createFolder)){

    fs.mkdirSync(createFolder)
}
const createFile= path.join(createFolder ,"demo.txt")
fs.writeFileSync(createFile,"Hallo World")

fs.appendFileSync(createFile,"\n sourov karmokar")
const content = fs.readFileSync(createFile,"utf-8")
console.log(content);
