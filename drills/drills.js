'use strict';

// DEWEY DECIMAL CHALLENGE

const library = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author: 'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];

function findBook(book) {
  for (let i = 0; i < library.length; i++) {
    if (library[i].author === book.author && library[i].dewey === book.dewey && library[i].title === book.title) {
      return 'We have the book!'
    }
  };
  return 'We don\'t have the book!'
}

const book = { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' }
console.log(findBook(book));


// TREE TRAVERSAL



