#!/usr/bin/env node
const axios = require('axios');
const url = 'https://uselessfacts.jsph.pl/today.json?language=en';
axios.get(url, { Headers: {Accept:"application/json"}}).then(res => {
    const dFact = res.data.text;
    console.log(dFact);
})

