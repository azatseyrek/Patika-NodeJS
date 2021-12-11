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

const processData = async () => {
  try {
    const recivedData = await getData(true);
    console.log(recivedData);
    const cleanedData = await cleanData(false);
    console.log(cleanedData);
  } catch (err) {
    console.log(err);
  }
};

processData();
