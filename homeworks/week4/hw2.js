const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books/', (error, response, body) => {
    const json = JSON.parse(body);
    const numberOfBook = Object.keys(json).length;
    for (let i = 0; i < numberOfBook; i += 1) {
      console.log(`${json[i].id}${' '}${json[i].name}`);
    }
  });
} else if (process.argv[2] === 'read' && process.argv[3] !== undefined) {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
    if (JSON.parse(body).id === undefined) {
      console.log('book not found, try another id');
    } else {
      console.log(`${JSON.parse(body).id}${' '}${JSON.parse(body).name}`);
    }
  });
} else console.log('Use "list" or "read + id" to run hw2.js');
