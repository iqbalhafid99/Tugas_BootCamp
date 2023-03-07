// soal nomer 1

const biodata = {
  name: "Mohammad Iqbal Hafid",
  age: 23,
  hobbies: "futsal",
  isMarried: false,
  schoolList: [
    {
      name: "SDN 02 Lebo",
      yearIn: 2006,
      yearOut: 2012,
      major: null,
    },
    {
      name: "SMP N 4 Batang",
      yearIn: 2012,
      yearOut: 2015,
      major: null,
    },
    {
      name: "SMA N 2 Batang",
      yearIn: 2015,
      yearOut: 2018,
      major: "MIPA",
    },
    {
      name: "STMIK WIDYA PRATAMA",
      yearIn: 2019,
      yearOut: "NOW",
      major: "TEKNIK INFORMATIKA",
    },
  ],

  skills: [
    {
      skillName: "HTML",
      level: "Advance",
    },
    {
      skillName: "CSS",
      level: "Advance",
    },
    {
      skillName: "Javascript",
      level: "Beginner",
    },
  ],
  interestInCoding: true,
};

// soal nomer 2

const mtk = 20;
const bahasaIndonesia = 90;
const bahasaInggris = 89;
const ipa = 69;

const rata = (mtk + bahasaIndonesia + bahasaInggris + ipa) / 4;

if (rata >= 90 && rata <= 100) {
  console.log(`Rata-rata = ${rata}`);
  console.log("Grade = A");
} else if (rata >= 80 && rata <= 89) {
  console.log(`Rata-rata = ${rata}`);
  console.log("Grade = B");
} else if (rata >= 70 && rata <= 79) {
  console.log(`Rata-rata = ${rata}`);
  console.log("Grade = C");
} else if (rata >= 60 && rata <= 69) {
  console.log(`Rata-rata = ${rata}`);
  console.log("Grade = D");
} else if (rata >= 0 && rata <= 59) {
  console.log(`Rata-rata = ${rata}`);
  console.log("Grade = E");
} else {
  console.error("angka error");
}

// soal nomer 3
console.log("\n");

const printSegitiga = 7;

if (!isNaN(printSegitiga)) {
  for (let i = printSegitiga; i >= 1; i--) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += j + " ";
    }
    console.log(str);
  }
} else {
  console.log("data harus angka");
}

// soal nomer 4
console.log("\n\n");

// soal 4a

let data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};

let dataSaya = {
  name: "Mohammad Iqbal Hafid",
  username: "Iqbal",
  email: "mohiqbalhafid@gmail.com",
  hobbies: "Futsal",
};

let dataGabungan = { ...data, ...dataSaya };

console.log(dataGabungan);

// soal 4b
console.log("\n\n");

const {
  address: { street, city },
} = data;
console.log(`street: ${street}, city: ${city}`);
