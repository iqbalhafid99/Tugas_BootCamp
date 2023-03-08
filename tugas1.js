// soal nomer 1

// Buat funsi `Palindrome` dengan parameter `string`
function Palindrome(string) {
  // Konversi `string` menjadi huruf kecil
  string = string.toLowerCase();

  // Buat `reversedString` dengan menggabungkan huruf-huruf `string` yang sudah dibalik urutannya
  const reversedString = string.split("").reverse().join("");

  // Bandingkan `string` dengan `reveredString`
  if (string === reversedString) {
    // Jika sama, `string` merupakan palindrome
    return true;
  } else {
    // Jika tidak, `string` bukan palindrome
    return false;
  }
}

console.log(Palindrome("kasur ini rusak"));
console.log(Palindrome("kasur ini tidak rusak"));
console.log(Palindrome("malam"));
console.log(Palindrome("lama"));

console.log("\n\n");

// soal nomer 2

//Buat sebuah fungsi bernama `reverseWords` yang menerima satu parameter `str`.
function reverseWords(str) {
  // Gunakan metode `split()` untuk memecah `str` menjadi array kata-kata
  const wordsArray = str.split(" ");

  // Gunakan metode `reverse()` untuk membalik urutan elemen pada array
  const reversedWordsArray = wordsArray.reverse();

  // Gabungkan elemen array yang telah dibalik urutannya menjadi string
  const reversedStr = reversedWordsArray.join(" ");

  // Kembalikan string yang telah diubah urutan katanya
  return reversedStr;
}

console.log(reverseWords("nama saya mohammad iqbal hafid"));
console.log(reverseWords("Ini adalah contoh kalimat reverse word"));
console.log(reverseWords("saya suka wanita"));
