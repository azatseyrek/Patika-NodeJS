// const promise1 = new Promise((resolve, reject) => {
//   //   resolve("Veriler Alindi");
//   reject("baglanti hatasi");
// });

// promise1.then((value) => {
//   console.log(value);
// });

// promise1.catch((err) => {
//   console.log(err);
// });

// promise1
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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

const addBook = (newBook) => {
  const promise = new Promise((resolve, reject) => {
    resolve(books.push(newBook));
    reject("Bir hata olustu");
  });

  return promise
};

addBook({ name: "book4", author: "Auth4" })
  .then(() => {
    console.log("yeni liste");
    listBooks();
  })
  .catch((err) => {
    console.log(err);
  });
