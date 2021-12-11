
//process.argv.splice(2) dedigimizde consola girdigimiz deger bir aray icinde gelir ancak ilk iki elemani dosya konumu ile ilgili bolum oldugu icin o bolumu splice ile ayiriyoruz
const numbers = process.argv.splice(2);
const intNum = [];

//consoledan girlen deger string dondugu icin int e ceviriyoruz
numbers.forEach((element) => {
  intNum.push(parseInt(element));
});

//eger konsoldan girilen degerleri kucukten buyugu siralar
intNum.sort(function (a, b) {
  return a - b;
});

const primeNumber = (lowNumber, highNumber) => {
    for (i = lowNumber; i <= highNumber; i++) {
      let isPrime = true;
    for (j = 2; j < i; j++) {
      if (i % j === 0 ) {
        isPrime = false;
      }
    }
    if (isPrime) {
      console.log(i);
    }
  }
};

primeNumber(intNum[0], intNum[1]);


