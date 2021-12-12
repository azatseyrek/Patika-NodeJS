const fs = require('fs')

// DOSYA OKUMAK

fs.readFile('password.txt', 'utf8', (err, data)=>{
    
});

// DOSYA YAZMAK
fs.writeFile('example.txt', "merhaba azat", 'utf8', (err, data)=> {
    if(err) console.log(err);
    console.log(data);
    console.log("veri yazildi");
})

//VERI EKLEME appendFile kullanilir
// veriyi baska satira eklemek icin \n kullanilir

fs.appendFile('example.txt', "\n ekleme yapildi", 'utf8', (err, data)=> {
    if(err) console.log(err);
    console.log(data);
    console.log("ekleme yapildi");
})


//  DOSYA SILMEK (unlink)

fs.unlink('test.txt', (err)=> {
    console.log("dosya silinemedi");
})

// KLASOR OLUSTURMAK


//asagidaki gibi olmayan birden fazla klasor olursturmaya kalktigimizda hata alacagiz. bunu kullanabilmek icin eger olusturmak istedigimiz ic ice dosyalarin ilki sistemde yok ise {recursive: true} parametresini kullanmaliyiz.

// fs.mkdir("uploads/img", (err)=>{
//     if (err)  console.log(err);
//     console.log("klasorler olusturuldu...");

// })


// IC ICE KLASOR OLUSTURMAK {RECURSIVE: TRUE}    olusturulan dosyanin ilkide sistemde yok ise su sekilde kullanbiliriz.

fs.mkdir('uplado.img', {recursive: true}, (err) => {
    if(err) console.log(err);
    console.log('klasorler olusturuldu');
})

// KLASOR SILMEK

// burda {recursive: true} birakirsak ilk klasorude silecektir

fs.rmdir('uplado.img', {recursive: true}, (err) => {
    if(err) console.log(err);
    console.log('klasorler olusturuldu');
})

