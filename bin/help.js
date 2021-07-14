#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

const greeting = chalk.white.bold("greetme - Greets the name you entered. \n hello - Says hello back (test command) \n joke - Sends a joke to you.. (make sure you have wifi, it gets them off the web) \n roast - Sends a roast (make sure you have wifi, it gets them off the web)");

const boxenOptions = {
 padding: 1,
 margin: 1,
 borderStyle: "round",
 borderColor: "green",
 backgroundColor: "#555555"
};
const msgBox = boxen( greeting, boxenOptions );

console.log(msgBox);
