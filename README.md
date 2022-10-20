# Javascript Basic Logic Mine Game

# Mine Game Part 1

## Learning Competencies
Menggunakan JavaScript coding conventions
Menggunakan input via terminal (process.argv)
Pemodelan sistem dengan Object Oriented Programming
Menggunakan class dan object instance pada JavaScript
Dapat menggunakan properti default dan dinamis dalam pembuatan instance
Memahami pembuatan dan cara penggunaan dari instance method

## Summary
Mine Game merupakan game simulasi kegiatan seorang penambang dengan antarmuka terminal. Untuk memulai permainan, kita harus menentukan ukuran dari area tambang tersebut. Game ini harus dibuat menggunakan konsep OOP. Maka dari itu pikirkan baik-baik tentang properti dan method apa saja yang akan dibutuhkan.

<img width="397" alt="Screen Shot 2022-07-27 at 04 23 29" src="https://user-images.githubusercontent.com/22075597/181114590-d9493e92-5f77-433c-83bd-df99b745a398.png">

Kita akan membuat game seperti gambar gif di atas. Sebelum mulai mengerjakan coba pikirkan jawaban dari pertanyaan berikut:
Informasi apa saja yang dibutuhkan oleh game ini?
Bagaimana algoritma dari game ini?

## Release 0: Class
Buatlah sebuah class yang bernama MineGame. Class tersebut akan memiliki properti sebagai berikut:
- height (number)
Tinggi dari area tambang.
- width (number)
Lebar dari area tambang.
- miner (string)
Symbol dari miner. Nilai awalnya adalah ☻ (smiley, alt code 1).
- money (number)
Properti untuk menghitung jumlah '$' yang didapat. Nilai awalnya adalah 0.
- diamond (number)
Properti untuk menghitung jumlah 'D' yang didapat. Nilai awalnya adalah 0.
- stamina 
Merupakan hasil dari angka random di antara 5 s/d 10. Gunakan instance method untuk membuat method randomStamina tsb.

```js
const mineGame1 = new MineGame(4, 5);
console.log(mineGame1);
// MineGame {
//  height: 4,
//  width: 5,
//  miner: '☻',
//  money: 0,
//  diamond: 0,
//  stamina: 7 → di dapat dari method randomStamina
// }
```

## Release 1: Validation
Buatlah sebuah instance method yang digunakan untuk validasi pada class MineGame yang akan memeriksa apakah input user valid atau tidak. Input user dianggap valid/benar apabila nilai width dan height lebih dari atau sama dengan 2 dan kurang dari sama dengan 8. Gunakan nama method yang baik dan benar.

```js
const mineGame1 = new MineGame(1, 8);
console.log(mineGame1.[methodForValidation]());
//“<message yang menyatakan bahwa height tidak memenuhi requirement>”
const mineGame2 = new MineGame(2, 9);
console.log(mineGame2.[methodForValidation]());
//“<message yang menyatakan bahwa width tidak memenuhi requirement>”
```

## Release 2: Method randomStartPosition 
Modifikasi baru pada class MineGame yaitu:
Method randomStartPosition
Untuk menentukan koordinat miner secara random. Nilai koordinat miner tidak boleh melebihi properti (width - 1) dan (height - 1), dan tidak boleh kurang dari 0.
Property private position 
Koordinat posisi miner pada board saat ini yang dibuat dari method randomStartPosition.
contoh : [  0, 2  ] berarti start pada row 0 dan col 2.

Gunakan kedua method tersebut pada constructor untuk menginisialisasi nilai dari properti position dan stamina.

```js
const mineGame = new MineGame(4, 5);
console.log(mineGame);
// MineGame {
//   height: 4,
//   width: 5,
//   miner: '☻',
//   money: 0,
//   diamond: 0,
//   stamina: 7
//   position: [ 4, 3 ] → private, tidak terlihat pada terminal   
// }
console.log(mineGame.position) // [ 4, 3 ] → gunakan getter 
```

## Release 3: Method generateBoard
Buatlah sebuah instance method generateBoard pada class MineGame. Method ini akan membuat sebuah array multidimensi, yaitu representasi dari board game. Ketentuan dari pembuatan board adalah:
- Lebar board sesuai dengan properti width.
- Tinggi board sesuai dengan properti height.
- Elemen array dengan index sama dengan properti position, akan memiliki nilai string sesuai dengan properti miner.
- Setiap elemen yang akan ada dalam board ditentukan berdasarkan Math.random()
- Jika nilai dari Math.random() antara 0 hingga 0.8, maka nilainya '  ' (space).
- Jika nilai dari Math.random() lebih dari 0.8 kurang dari 0.9 maka nilainya '$' (money).
- Jika nilai dari Math.random() antara 0.9 hingga sebelum 1 maka nilainya '♦︎' (diamond).

```js
const mineGame = new MineGame(4, 5);
console.log(mineGame.generateBoard()) 
// [
//   [ ' ', '$', ' ', '$', '$' ],
//   [ ' ', ' ', ' ', ' ', ' ' ],
//   [ ' ', ' ', ' ', '$', '$' ],
//   [ '$', ' ', ' ', ' ', '♦︎' ]
// ]
```

## Release 4: Method play
Buat sebuah instance method play pada class MineGame yang akan membuat miner berjalan dari kiri ke kanan. Apabila miner sudah sampai di ujung kanan, maka miner akan turun 1 baris ke bawah, kemudian mulai lagi berjalan dari kiri ke kanan. Tampilkan juga message yang menyatakan position terbarunya  `Position row <num> and column <num>`

Miner akan terus berjalan selama memiliki stamina. Tiap 1 langkah akan mengurangi stamina sebanyak 1 poin. Apabila miner sudah sampai di akhir board atau stamina habis, maka miner akan berhenti.  Cek hint dan gambar pada gif dibawah ini

Hint:
Method ini akan berjalan apabila input user valid. 
Gunakan instance method yang digunakan untuk validasi.
Method ini akan memodifikasi nilai dari properti position.
Gunakan process.argv.
Gunakan method sleep & clearScreen yang telah disediakan.
Kamu boleh menambahkan instance method untuk membuat lebih modular pada board atau hal lainnya.

<img width="291" alt="Screen Shot 2022-07-27 at 04 27 37" src="https://user-images.githubusercontent.com/22075597/181115327-b059807a-4151-4141-9ee6-937ac81cf5f0.png">
Pada gambar diatas stamina = 10

## Release 5 : Menghitung Hasil Mining
Lakukan perubahan/penambahan value properti dari diamond dan money : 
Apabila hasil mining adalah '$', maka properti money akan bertambah 1. 
Apabila hasil mining adalah '♦︎', maka properti diamond akan bertambah 1. 
Pada contoh demo di atas, seharusnya nilai properti money adalah 1, sedangkan nilai properti diamond adalah 2. Lakukan hal ini pada saat game dimainkan.

## Release 6 : Method info 
Buat sebuah instance method info pada class MineGame yang akan menampilkan informasi detail proses mining (miner, stamina, money, diamond). Method ini selalu dijalankan setiap miner berjalan dan pada akhir permainan. Hasil yang diharapkan dari memanggil method play adalah seperti gambar di bawah.

<img width="490" alt="Screen Shot 2022-07-27 at 04 29 15" src="https://user-images.githubusercontent.com/22075597/181115480-5088ab16-5fe9-493c-ba99-c27b84c548df.png">


# Mine Game Part 2

## Learning Competencies
- Menggunakan JavaScript coding conventions
- Menggunakan input via terminal (process.argv)
- Pemodelan sistem dengan Object Oriented Programming
- Menggunakan konsep OOP karakteristik di JavaScript (Abstraction, Encapsulation, Inheritance dan Polymorphism)

## Summary
Pada challenge sebelumnya, kita sudah menerapkan salah satu karakteristik OOP yaitu abstraction. Karakteristik tersebut diwakili oleh instance method play. Pada challenge ini kita akan mencoba untuk menerapkan karakteristik-karakteristik OOP lainnya. Hasil dari challenge ini adalah 2 varian baru dari MineGame, yaitu EmoMine dan DangerousMine.

<img width="521" alt="Screen Shot 2022-07-27 at 04 31 10" src="https://user-images.githubusercontent.com/22075597/181115832-1a2b575d-0819-4b4b-b749-c37563dbef76.png">

## Release 0: Modifikasi Class MineGame
Pada release ini, lakukan modifikasi pada class MineGame yang telah dibuat sebelumnya. Modifikasi yang diminta adalah sebagai berikut:

Pada class MineGame, terdapat properti miner yang memiliki nilai awal sebuah symbol ☻. Buat agar nilai properti tersebut dapat dapat diatur saat proses instantiate. Jika pada saat proses instantiate kita tidak menyertakan nilai untuk properti itu, maka nilai default-nya adalah ☻.

## Release 1: Inheritance
Para release ini, kita akan membuat dua buah child class dari MineGame. Kedua class tersebut adalah EmoMine dan DangerousMine. Kedua class tersebut memiliki beberapa properti dan method yang sama dari class MineGame.
Perbedaan dari class MineGame dengan class EmoMine dan DangerousMine :
Pada class EmoMine, value properti miner milik parent adalah symbol ☹.
Pada class DangerousMine, value properti miner milik parent adalah symbol ☺.
Note:
Kerjakan class EmoMine pada file emo-mine.js.
Kerjakan class DangerousMine pada file dangerous-mine.js.

```
$ node emo-mine.js 5 5
EmoMine {
  height: 5,
  width: 5,
  miner: '☹',
  money: 0,
  diamond: 0,
  stamina: 8,
  position: [ 3, 4 ] // ← Tidak terlihat karena private
}
```

```
$ node dangerous-mine.js 5 5
DangerousMine {
  height: 5,
  width: 5,
  miner: '☺',
  money: 0,
  diamond: 0,
  stamina: 9,
  position: [ 2, 2 ] // ← Tidak terlihat karena private
}
```

## Release 2 : Polymorphism Class EmoMine
Lakukan polymorphism pada class EmoMine. Polymorphism pada Instance method randomStamina. Pada class MineGame, properti stamina memiliki value antara 5-10. Lakukan polymorphism pada class EmoMine sehingga nilai properti stamina memiliki value antara 10-15.

<img width="312" alt="Screen Shot 2022-07-27 at 04 34 06" src="https://user-images.githubusercontent.com/22075597/181116206-6d795c5b-d09d-4316-8713-5276ffb5786f.png">

## Release 3: Polymorphism Class DangerousMine
3 Perubahan game dengan menggunakan konsep Polymorphism terhadap DangerousMine :
Instance method randomStamina
Lakukan polymorphism pada class DangerousMine sehingga nilai properti stamina memiliki value antara 10-20.


Instance method generateBoard
Pada class MineGame, setiap elemen dari board yang di-generate memiliki dua kemungkinan value yaitu '$' dan '♦︎'. Dari hasil tersebut tambahkan sebuah value lagi yaitu ‘⌖’ (Boom) yang memiliki posisi random, dengan cara melakukan polymorphism. Ketentuan penambahannya adalah:
Boleh menimpa elemen lain yang sudah ada kecuali miner.
Posisi random yang dihasilkan tidak boleh melebihi nilai properti width - 1 dan height - 1.
Jumlah 'B' pada board hanya 1.

Perhatikan gambar dan gif dibawah ini 

<img width="444" alt="Screen Shot 2022-07-27 at 04 35 13" src="https://user-images.githubusercontent.com/22075597/181116442-e9f4e972-20a3-4b87-ad6b-70698ff9bc92.png">
<img width="335" alt="Screen Shot 2022-07-27 at 04 35 20" src="https://user-images.githubusercontent.com/22075597/181116472-f33b6285-0587-492e-bfa2-43f8180c4ae1.png">

Perubahan aturan game saat bermain
Terdapat aturan tambahan apabila miner menetapi posisi dari ‘⌖’ (Boom) maka stamina akan habis dan permainan berakhir. Board akan tetap ditampilkan pada akhir permainan (tidak di clearScreen) , Tampilkan pesan jika terkena ‘⌖’ “BOOM!! BOOM!! BOOM!!” juga.
