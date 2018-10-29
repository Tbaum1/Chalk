console.log("hello World");
const chalk = require("chalk");
const chalkAnimation = require('chalk-animation');

console.log(chalk.blue("Hello World"));

chalkAnimation.rainbow("Loren ipsum");
 
setTimeout(() => {
    console.log("dolor sit amet");
}, 1000);