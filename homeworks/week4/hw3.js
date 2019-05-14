const request = require('request');
const process = require('process');

switch (process.argv[2]) {
  case 'list':
    request('https://lidemy-book-store.herokuapp.com/books/', (error, response, body) => {
      for (let i = 0; i <= 19; i += 1) {
        console.log(`${JSON.parse(body)[i].id}${' '}${JSON.parse(body)[i].name}`);
      }
    });
    break;
  case 'read':
    request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
      console.log(`${JSON.parse(body).id}${' '}${JSON.parse(body).name}`);
    });
    break;
  default:
    console.log('Use "list" or "read + Number" to run hw2.js');
}
