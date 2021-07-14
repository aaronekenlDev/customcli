#!/usr/bin/env node
const axios = require('axios');
const url = "https://evilinsult.com/generate_insult.php?lang=en&type=json";
axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
   const insult = res.data.insult;
   const insultData1 = res.data.created;
   const insultData2 = res.data.shown;
   const insultData3 = res.data.comment;
   const insultData4 = res.data.number;
   const chalk = require("chalk");
   const boxen = require("boxen");
   
   const greeting = chalk.white.bold("Hello!");
   
   const boxenOptions = {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    backgroundColor: "#555555"
   };
   const msgBox = boxen( insult, boxenOptions );
   console.log(`Created On: ${insultData1}, Shown to ${insultData2}, insult comment: ${insultData3}, roast number ${insultData4}`)
   console.log(msgBox);
 });

 