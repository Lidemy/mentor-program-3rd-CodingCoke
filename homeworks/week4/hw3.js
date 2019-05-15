const request = require('request');
const process = require('process');

const listFunction = () => {
  request('https://lidemy-book-store.herokuapp.com/books/', (error, response, body) => {
    const json = JSON.parse(body);
    const numberOfBook = Object.keys(json).length;
    for (let i = 0; i < numberOfBook; i += 1) {
      console.log(`${json[i].id}${' '}${json[i].name}`);
    }
  });
};

const readFunction = () => {
  if (process.argv[3] !== undefined) {
    request(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, (error, response, body) => {
      if (JSON.parse(body).id === undefined) {
        console.log('book not found, try another id');
      } else {
        console.log(`${JSON.parse(body).id}${' '}${JSON.parse(body).name}`);
      }
    });
  } else {
    console.log('Use "read + id" to read book');
  }
};

const deleteFunction = () => {
  if (process.argv[3] !== undefined) {
    request.delete(`https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, () => {
      console.log(`book id:${process.argv[3]} does not exist or it has been deleted `);
    });
  } else {
    console.log('Use "delete + id" to delete book');
  }
};

const createFunction = () => {
  if (process.argv[3] !== undefined) {
    request.post({ url: 'https://lidemy-book-store.herokuapp.com/books/', form: { name: process.argv[3] } }, () => {
      console.log('Already done');
    });
  } else {
    console.log('Use "create + book name" to create book');
  }
};

const updateFunction = () => {
  if (process.argv[3] !== undefined && process.argv[4] !== undefined) {
    request.patch({ url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`, form: { name: process.argv[4] } }, () => {
      console.log('Already updated');
    });
  } else {
    console.log('Use "update + id + new name" to update book');
  }
};

switch (process.argv[2]) {
  case 'list':
    listFunction();
    break;
  case 'read':
    readFunction();
    break;
  case 'delete':
    deleteFunction();
    break;
  case 'create':
    createFunction();
    break;
  case 'update':
    updateFunction();
    break;
  default:
    console.log('Use 1.[list] / 2.[read + id] / 3.[delete + id] / 4.[create + book name] / 5.[update + id + new name] to run hw3.js');
}
