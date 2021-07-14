#!/usr/bin/env node

const axios = require("axios");
console.log('Alright.. let me fetch a joke.. woof');


const url = "https://icanhazdadjoke.com/";
axios.get(url, { headers: { Accept: "application/json" } })
 .then(res => {
   console.log(res.data.joke);
 });

