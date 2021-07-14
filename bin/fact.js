#!/usr/bin/env node
const axios = require('axios');
const url = 'https://uselessfacts.jsph.pl/random.json?language=en';

axios.get(url, { headers: { Accept: "application/json" } })
  .then(res => {
      const fact = res.data.text;
      const source = res.data.source;
      const sourceUrl = res.data.source_url;
      const permaLink = res.data.permalink;

      const chalk = require("chalk");
      const boxen = require('boxen');

      const factSend = chalk.white.bold(fact);
      
      const boxenOptions = {
          padding: 1,
          margin: 1,
          borderStyle: "round",
          borderColor: "red",
          backgroundColor: "#555555"
      };
      const msgBox = boxen( factSend, boxenOptions );

      console.log(msgBox);
      console.log(`Source = ${source}, ${sourceUrl}. ${permaLink}`)
  })