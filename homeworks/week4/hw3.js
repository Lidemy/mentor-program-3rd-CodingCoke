const request = require('request');
const process = require('process');

const sourceLink = 'https://lidemy-book-store.herokuapp.com/books/';
const listBooks = () => {
  request(sourceLink, (error, response, body) => {
    const json = JSON.parse(body);
    for (let i = 0; i < json.length; i += 1) {
      console.log(`${json[i].id}${' '}${json[i].name}`);
    }
  });
};

const findBooks = () => {
  if (process.argv[3] !== undefined) {
    request(`${sourceLink}${process.argv[3]}`, (error, response, body) => {
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

const deleteBooks = () => {
  if (process.argv[3] !== undefined) {
    request.delete(`${sourceLink}${process.argv[3]}`, (error, response) => {
      if (response.statusCode === 404) {
        console.log(`Did not work, book id:${process.argv[3]} does not exist`);
      } else {
        console.log(`Sucess, book id:${process.argv[3]} has been deleted `);
      }
    });
  } else {
    console.log('Use "delete + id" to delete book');
  }
};

const createBooks = () => {
  if (process.argv[3] !== undefined) {
    request.post({
      url: sourceLink,
      form: { name: process.argv[3] },
    }, () => {
      console.log('Sucess');
    });
  } else {
    console.log('Use "create + book name" to create book');
  }
};

const updateBooks = () => {
  if (process.argv[3] !== undefined && process.argv[4] !== undefined) {
    request.patch({
      url: `${sourceLink}${process.argv[3]}`,
      form: { name: process.argv[4] },
    }, (error, response) => {
      if (response.statusCode === 404) {
        console.log('Did not work, make sure the id is exisit');
      } else {
        console.log('Sucess');
      }
    });
  } else {
    console.log('Use "update + id + new name" to update book');
  }
};

switch (process.argv[2]) {
  case 'list':
    listBooks();
    break;
  case 'read':
    findBooks();
    break;
  case 'delete':
    deleteBooks();
    break;
  case 'create':
    createBooks();
    break;
  case 'update':
    updateBooks();
    break;
  default:
    console.log('Use 1.[list] / 2.[read + id] / 3.[delete + id] / 4.[create + book name] / 5.[update + id + new name] to run hw3.js');
}
