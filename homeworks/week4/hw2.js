const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request('https://lidemy-book-store.herokuapp.com/books/', (error, response, body) => {
    for (let i = 0; i <= 19; i += 1) {
      console.log(`${JSON.parse(body)[i].id}${' '}${JSON.parse(body)[i].name}`);
    }
  });
} else if (process.argv[2] === 'read' && process.argv[3] !== undefined) {
  request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
    console.log(`${JSON.parse(body).id}${' '}${JSON.parse(body).name}`);
  });
} else console.log('Wrong, use "list" or "read + Number" to run hw2.js');
