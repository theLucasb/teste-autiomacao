import fetch from 'node-fetch';

const randomPos = Math.round(Math.random() * 1000);
const url = `https://api.tenor.com/v1/search?q=thank%20you&pos=${randomPos}&limit=1&media_filter=minimal&contentfilter=high&key=0ARWZ9AIEKM1`;
const response = fetch(url);
const { results } = response.json();
const gifUrl = results[0].media[0].tinygif.url;

console.log(gifUrl);