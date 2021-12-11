// js single- thread sync

// node js async

// let x = 5

// console.log('first result', x);

// setTimeout(()=> {
//     x = x + 5
//     console.log("second result", x);
// },2000)

// x= x+ 5
// console.log("third result", x);

const books = [
  { name: "book1", author: "Auth1" },
  { name: "book2", author: "Auth2" },
  { name: "book3", author: "Auth3" },
];

const listBooks = () => {
  books.map((book) => {
    console.log(book.author);
  });
};

// listBooks();

//callback parametresi ekleyim fonksiyon icerisinde initialize ettigimizde daha sonra bu fonksiyonu cagirdigimzda parametre olarak cagirmak istedigimiz fonsiyonu yazariz. Bu isleme callback denir
const addBook = (newBook, callback) => {
  books.push(newBook);
  callback();
};

addBook({ name: 'book4', author: 'Auth4' }, listBooks);

//callback yaptigimizdan tekrardan listBooks() cagirmamiza gerek yoktur!
// listBooks();
