const getData = (data) => {
  return new Promise((resolve, reject) => {
    console.log("Veriler alinmaya calisiliyor");

    if (data) {
      resolve("veriler alindi");
    } else {
      reject("veriler alinamadi");
    }
  });
};

const cleanData = (recivedData) => {
  return new Promise((resolve, reject) => {
    console.log("veriler duzenleniyor");

    if (recivedData) {
      resolve("veriler duzenlendi");
    } else {
      reject("veriler duzenlenemedi");
    }
  });
};

//------------------------------------------------------------

//PROMISE YAPISI ILE COZUM

// getData(true)
//   .then((result) => {
//     console.log(result);
//     return cleanData(false);
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
//------------------------------------------------------------

//ASYNC - AWAIT YAPISI ILE COZUM

// const processData = async () => {
//   try {
//     const recivedData = await getData(true);
//     console.log(recivedData);
//     const cleanedData = await cleanData(false);
//     console.log(cleanedData);
//   } catch (err) {
//     console.log(err);
//   }
// };

// processData();

//ADD BOOK EXAMPLE WITH ASYNC-AWAIT

const books = [
    { name: "Kitap 1", author: "Yazar 1" },
    { name: "Kitap 2", author: "Yazar 2" },
    { name: "Kitap 3", author: "Yazar 3" },
  ];
  
  const listBooks = () => {
    books.map((book) => {
      console.log(book.name);
    });
  };
  
  const addBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
      books.push(newBook);
      resolve('kitaplar alindi');
      reject('BIR HATA OLUSTU');
    });
  
    return promise1;
  };
  
  async function showBooks() {
    try {
      await addBook({ name: "Kitap 4", author: "Yazar 4" });
      listBooks();
    } catch (error) {
      console.log(error);
    }
  }
  
  showBooks();
