//shart operatorlari 10dan boshlab

//10
// let a=5
// let b = 5
//  let res;
// if (a == b) {
//  res=0
// } else {
//     res=a+b
// }
// console.log(res);

// 11-masala
// let a = prompt("a sonni kiriting");
// let b = prompt("b sonni kiriting");
// let res;
// if (a == b) {
//   res = 0;
// } else if (a > b) {
//   res = a;
// } else {
//   res = b;
// }
// console.log( res);

//12-masala
// let a = prompt("1 sonni kiriting ");
// let b = prompt("2 sonni kriting");
// let c = prompt(" 3-sonni kiriting");
// let res;
// if (a > c && b > c) {
//   res = c;
// } else if (a < b && a < c) {
//   res = a;
// } else if (a > b && b < c) {
//   res = b;
// }
// console.log(res);

// 13-masala
// let a = Number(prompt("1 sonni kiriting"));
// let b = Number(prompt("2 sonni kiriting"));
// let c = Number(prompt("3 sonni kiriting"));
// let res;
// if ((a < b && a > c) || (a > b && a < c)) {
//   res = a;
// } else if ((a > b && c < b) || (a < b && b < c)) {
//   res = b;
// } else if ((c < b && c > a) || (c > b && c < a)) {
//   res = c;
// }
// console.log(res);

// 14-maasala
// let a = Number(prompt("1 sonni kiriting"));
// let b = Number(prompt("2 sonni kiriting"));
// let c = Number(prompt("3 sonni kiriting"));
// let res;
// let reskatta;
// if ((a < b && a < c && b < c) || (a < b && a < c && b > c)) {
//   res = a;
//   reskatta = c;
// } else if ((b < a && b < c && a > c) || (b < a && b < c && a < c)) {
//   res = b;
//   reskatta = a;
// } else if ((c < a && c < b && a < b) || (c < a && c < b && a > b)) {
//   res = c;
//   reskatta = b;
// }
// console.log(res);
// console.log(reskatta);

// 15 - masala
// let a = Number(prompt("1 sonni kiriting"));
// let b = Number(prompt("2 sonni kiriting"));
// let c = Number(prompt("3 sonni kiriting"));
// let res;
// let reskatta;
// if (a < b < c) {
//   res = b;
//   reskatta = c;
// } else if (a > b > c) {
//   res = b;
//   reskatta = a;
// } else if (a < c < b) {
//   res = c;
//   reskatta = b;
// }
// console.log(res);
// console.log(reskatta);

// 16-masala
// let a = Number(prompt("1 sonni kiriting"));
// let b = Number(prompt("2 sonni kiriting"));
// let c = Number(prompt("3 sonni kiriting"));
// let res1;
// let res2;
// let res3;
// if (a <= b <= c) {
//   res1 = a * 2;
//   res2 = b * 2;
//   res3 = c * 2;
// }
// if (a > b || b > c) {
//   res1 = "-a";
//   res2 = " -b";
//   res3 = "-c";
// } else {
//   console.log(tugadi);
// }
// console.log(res1);
// console.log(res2);
// console.log(res3);

// 18-masala
// let a = Number(prompt("1 sonni kiriting"));
// let b = Number(prompt("2 sonni kiriting"));
// let c = Number(prompt("3 sonni kiriting"));
// let res;
// if (a == b) {
//   res = "3-tartib raqamda";
// } else if (a == c) {
//   res = "2-tartib raqamda";
// } else if (b == c) {
//   res = "4-tartib raqamda";
// } else {
//   res = "hech qaysi son bir-biriga teng emas";
// }
// console.log(res);

// 19-masala
// let son1 = prompt("1-sonni kirting");
// let son2 = prompt("2-sonni kriting");
// let son3 = prompt("3-sonni kiriting");
// let son4 = prompt("4-sonni kiriting");
// let res;
// if (son1 == son2 && son2 == son3) {
//   res = "4-raqam";
// } else if (son1 == son2 && son2 == son4) {
//   res = "3-raqam";
// } else if (son2 == son3 && son3 == son4) {
//   res = "1-raqam";
// } else if (son1 == son3 && son3 == son4) {
//   res = "2-raqam";
// }
// console.log(res);

// // let son1 = Number(prompt("1-sonni kirting"));
// // let son2 = Number(prompt("2-sonni kriting"));
// // let son3 = Number(prompt("3-sonni kiriting"));
// // let son4 = Number(prompt("4-sonni kiriting"));

// let sonlar = [son1, son2, son3, son4];

// let nechtadanligi = {};
// sonlar.forEach((son) => (nechtadanligi[son] = (nechtadanligi[son] || 0) + 1));

// // let res;

// sonlar.forEach((son, index) => {
//   if (nechtadanligi[son] == 1) {
//     res = `${i + 1}-raqam`;
//   }
// });
// console.log(res);

// 20-masala
// A nuqtasi
// let ax = +prompt("A nuqtaning x koordinatasini kiriting:");
// let ay = +prompt("A nuqtaning y koordinatasini kiriting:");

// // B nuqtasi
// let bx = +prompt("B nuqtaning x koordinatasini kiriting:");
// let by = +prompt("B nuqtaning y koordinatasini kiriting:");

// // C nuqtasi
// let cx = +prompt("C nuqtaning x koordinatasini kiriting:");
// let cy = +prompt("C nuqtaning y koordinatasini kiriting:");

// const AdanBgacha = Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);
// const AdanCgacha = Math.sqrt((cx - ax) ** 2 + (cy - ay) ** 2);

// let res1;

// if (AdanBgacha < AdanCgacha) {
//   res = `A nuqtasiga eng yaqin nuqta B. Masofa: ${AdanBgacha}`;
// } else {
//   res = `A nuqtasiga eng yaqin nuqta C. Masofa: ${AdanCgacha}`;
// }

// console.log(res);

// let x = +prompt("x o'qidagi qiymatni kiriting");
// let y = +prompt("y o'qidagi qiymatni kiriting");

// let res;
// if (x == 0 && y == 0) {
//   res = 0;
// } else if (y === 0) {
//   res = 1;
// } else if (x === 0) {
//   res = 2;
// } else {
//   res = 3;
// }
// console.log(res);

// 22-masala
// let x = +prompt("x oqidagi nuqtani kriting");
// let y = +prompt("y oqidagi nuqtani kriting");
// let res;

// if (x == 0 || y == 0) {
//   res = "Nuqtalar 0 bo'lishi mumkun emas";
// } else if (x > 0 && y > 0) {
//   res = "1-chorak";
// } else if (y > 0 && x < 0) {
//   res = "2-chorak";
// } else if (x < 0 && y < 0) {
//   res = "3-chorak";
// } else if (x > 0 && y < 0) {
//   res = "4-chorak";
// }
// console.log(res);

// // 23-masala
// let x1 = +prompt("A nuqtaning x koordinatasini kiriting:");
// let y1 = +prompt("A nuqtaning y koordinatasini kiriting:");
// let x2 = +prompt("B nuqtaning x koordinatasini kiriting:");
// let y2 = +prompt("B nuqtaning y koordinatasini kiriting:");
// let x3 = +prompt("C nuqtaning x koordinatasini kiriting:");
// let y3 = +prompt("C nuqtaning y koordinatasini kiriting:");

// let x4, y4;

// if (x1 == x2) {
//   x4 = x2;
// } else if (x1 == x3) {
//   x4 == x3;
// } else {
//   x4 = x1;
// }

// if (y1 == y2) {
//   y4 = y2;
// } else if (y1 == y3) {
//   y4 = y3;
// } else {
//   y4 = y1;
// }
// console.log(x4, y4);

// 24-masala
// let x = +prompt("x ning qiymatini kiriting");

// let res;
// if (x > 0) {
//   res = 2 * Math.sin(x);
// } else if (x <= 0) {
//   res = x - 6;
// } else {
//   res = "xato qiymat";
// }
// console.log(res);

// 25-masala
// let x = +prompt("x ning qiymatini kiriting");

// let res;

// if (x < -2 || x > 2) {
//   res = 2 * x
// } else {
//   res=-3*x
// }

// console.log(res)

// 27- masala

// let x = +prompt("x haqiqiy sonni kiriting");

// let res;

// if (x < 0) {
//   res = 0;
// } else if (x % 2 == 0) {
//   res = 1;
// } else if (x % 2 == 1) {
//   res = "-1";
// }
// console.log(res);

// 28-masala
// let yil = +prompt("Yil qiymatini kiriting");

// let res;
// if ((yil % 4 == 0 && yil % 100 !== 0) || yil % 400 == 0) {
//   res = "Kabisa yili";
// } else {
//   res = "Kabisa yili emas";
// }
// console.log(res);

// 30-masala
// let x = prompt("1 dan 999gacha bolgan sonlardan kiriting");

// let honalar = x.length;
// let juftliklar = x % 2 == 0 ? "juft" : "toq";
// let res = `${honalar} honali ${juftliklar} son`;

// console.log(res);

//Tanlash opertorlariga doir masalalar

// 10-masala
// let yonalish = prompt(
//   "roboting yonalishini kirting s-shimol-j-janub-q-sharq-g-garb"
// );
// let komand = prompt(
//   "komanda bering 0-togriga 1-chapga burilish 2-ongga burilish "
// );

// switch (komand) {
//   case "0":
//     console.log(`robot hozir ${yonalish}ga qarab ketmoqda`);
//     break;
//   case "1": //agar robot shimoldan chapga burilsa garbga qaraydi
//     if (yonalish === "shimol") {
//       yonalish = " garb";
//     } else if (yonalish === "garb") {
//       //garbdan chapga burilsa janubga
//       yonalish = "janub";
//     } else if (yonalish === "janub") {
//       //janubdan chapga sharq
//       yonalish = "sharq";
//     } else if (yonalish === "sharq") {
//       //sharqdan chapga shimol
//       yonalish = "shimol";
//     }
//     console.log(
//       `Robot chapga burildi ,hozirgi yonalish ${yonalish}ga qarab ketmoda`
//     );
//     break;
//   case "2":
//     if (yonalish === "shimol") {
//       //shimoldan ong sharq
//       yonalish = "sharq";
//     } else if (yonalish === "sharq") {
//       //sharqdan ong janub
//       yonalish = "janub";
//     } else if (yonalish === "janub") {
//       // janubdan ong garb
//       yonalish = "garb ";
//     } else if (yonalish === "garb") {
//       //garbdan ong shimol
//       yonalish = "shimol";
//     }
//     console.log(
//       `Robot o'ngga burildi ,hozirgi yonalish ${yonalish}ga  qarab ketmoda`
//     );
//     break;
//   default:
//     console.log("notog'ro komand");
// }

// 11-masala
// let yonalish = prompt("lakatr yonalishini kirting shimol-janub-sharq-garb");
// let komand = prompt(
//   "komanda bering   0-ongga burilish 1-chapga burilish 2-180 gradusga "
// );

// switch (komand) {
//   case "0": //o'ngga burilish
//     if (yonalish === "shimol") {
//       yonalish = "sharq";
//     } else if (yonalish === "sharq") {
//       yonalish = "janub";
//     } else if (yonalish === "janub") {
//       yonalish = "garb ";
//     } else if (yonalish === "garb") {
//       yonalish = "shimol";
//     }
//     break;
//   case "1": //chapga burilish
//     if (yonalish === "shimol") {
//       yonalish = " garb";
//     } else if (yonalish === "garb") {
//       yonalish = "janub";
//     } else if (yonalish === "janub") {
//       yonalish = "sharq";
//     } else if (yonalish === "sharq") {
//       yonalish = "shimol";
//     }
//     break;
//   case "2": //180 ga burilish
//     if (yonalish === "shimol") {
//       yonalish = "janub";
//     } else if (yonalish === "janub") {
//       yonalish = "shimol";
//     } else if (yonalish === "garb") {
//       yonalish = "sharq ";
//     } else if (yonalish === "sharq") {
//       yonalish = "garb";
//     }
//     break;

//   default:
//     console.log("notog'ro komand");
// }
// console.log(`lakatr ${yonalish}ga qarab turibdi`);

// 12-masala
// let p = 3.14;
// let element = prompt(
//   "Doiraning radiusi yuzi  diametri yoki uzunligi qaysi birini kiritasiz "
// );
// let result;
// switch (element) {
//   case "radius":
//     let r = +prompt("doiraning radiusini kiriting");
//     let rd = 2 * r;
//     let rl = 2 * p * r;
//     let rs = p * r * r;
//     result = `radius berilganda diametr ${rd} uzunlik ${rl} yuza ${rs}`;
//     break;

//   case "diametr":
//     let d = +prompt("doiraning diametrini kiriting");
//     let dr = d / 2;
//     let dl = 2 * p * dr;
//     let ds = p * dr * dr;
//     result = `diametr berilganda radius ${dr} uzunlik ${dl} yuza ${ds}`;
//     break;

//   case "uzunligi":
//     let l = +prompt("doiraning uzunligini kiriting");
//     let lr = l / (2 * p);
//     let ld = 2 * lr;
//     let ls = p * lr * lr;
//     result = `uzunligi berilganda radiusi ${lr} diametri ${ld} yuza ${ls}`;
//     break;

//   case "yuzi":
//     let s = +prompt("doiraning yuzini kiriting");
//     let sr = Math.sqrt(s / p);
//     let sd = 2 * sr;
//     let sl = 2 * p * sr;
//     result = `yuzasi berilganda diametr ${sd} uzunlik ${sl} radiusi ${sr}`;
//     break;
// }
// console.log(result);

// 15-masala
// let M = +prompt("1 dan 4 gacha sonlardan birni kiriting");
// let N = +prompt("6 dan 14 gacha sonlardan birni kiriting");

// let m;
// let n;

// switch (M) {
//   case 1:
//     m = "g'isht";
//     break;
//   case 2:
//     m = "olma";
//     break;
//   case 3:
//     m = "chillak";
//     break;
//   case 4:
//     m = "qarg'a";
//     break;

//   default:
//     console.log("xato qiymat kiritdingiz");
// }

// switch (N) {
//   case 6:
//     n = "olti";
//     break;
//   case 7:
//     n = "yetti";
//     break;
//   case 8:
//     n = "sakkiz";
//     break;
//   case 9:
//     n = "to'qqiz";
//     break;
//   case 10:
//     n = "o'n ";
//     break;
//   case 11:
//     n = "o'n bir";
//     break;
//   case 12:
//     n = "o'n ikki";
//     break;
//   case 13:
//     n = "o'n uch";
//     break;
//   case 14:
//     n = "o'n to'rt";
//     break;

//   default:
//     console.log("xato qiymat kiritdingiz");
// }

// console.log(`${n} ${m}`);

// 16-masala
// let yosh = +prompt("yodhingizni kiriting faqat 20dan 69gacha");
// let onliklar;
// let birliklar;
// if (20 <= yosh <= 69) {
//   onliklar = Math.floor(yosh / 10);
//   //math.floor bu yaxliutlar ekan
//   birliklar = yosh % 10;
// }
// //ha ifni ichidagi elon qilingan qiymatni tashqaridan ololmas ekanman
// let resonlik;
// let resbirlik;

// switch (onliklar) {
//   case 2:
//     resonlik = "yigirma";
//     break;
//   case 3:
//     resonlik = "o'ttiz";
//     break;
//   case 4:
//     resonlik = "qirq";
//     break;
//   case 5:
//     resonlik = "ellik";
//     break;
//   case 6:
//     resonlik = "oltmush";
//     break;
// }

// switch (birliklar) {
//   case 1:
//     resbirlik = "bir";
//     break;
//   case 2:
//     resbirlik = "ikki";
//     break;
//   case 3:
//     resbirlik = "uch";
//     break;
//   case 4:
//     resbirlik = "to'rt";
//     break;
//   case 5:
//     resbirlik = "besh";
//     break;
//   case 6:
//     resbirlik = "olti";
//     break;
//   case 7:
//     resbirlik = "yetti";
//     break;
//   case 8:
//     resbirlik = "sakkiz";
//     break;
//   case 9:
//     resbirlik = "to'qqiz";
//     break;
// }
// console.log(`${resonlik} ${resbirlik}`);

// 18-masala
// let son = +prompt("100dan 999gacha sonlardan birini kiriting");

// let yuzlik;
// let onlik;
// let birlik;
// let resonlik = "";
// let reonlik = "";
// let resbirlik = "";

// if (son >= 100 && son <= 999) {
//   yuzlik = Math.floor(son / 100);
//   onlik = Math.floor((son / 10) % 10);
//   birlik = son % 10;
// }

// switch (yuzlik) {
//   case 1:
//     resonlik = "bir yuz";
//     break;
//   case 2:
//     resonlik = "ikki yuz";
//     break;
//   case 3:
//     resonlik = "uch yuz";
//     break;
//   case 4:
//     resonlik = "to'rt yuz";
//     break;
//   case 5:
//     resonlik = "besh yuz";
//     break;
//   case 6:
//     resonlik = "olti yuz";
//     break;
//   case 7:
//     resonlik = "yetti yuz";
//     break;
//   case 8:
//     resonlik = "sakkiz yuz";
//     break;
//   case 9:
//     resonlik = "to'qqiz yuz";
//     break;
// }

// switch (onlik) {
//   case 1:
//     reonlik = "o'n";
//     break;
//   case 2:
//     reonlik = "yigirma";
//     break;
//   case 3:
//     reonlik = "o'ttiz";
//     break;
//   case 4:
//     reonlik = "qirq";
//     break;
//   case 5:
//     reonlik = "ellik";
//     break;
//   case 6:
//     reonlik = "oltmish";
//     break;
//   case 7:
//     reonlik = "yetmish";
//     break;
//   case 8:
//     reonlik = "sakson";
//     break;
//   case 9:
//     reonlik = "to'qson";
//     break;
//   default:
//     reonlik = "";
// }

// switch (birlik) {
//   case 1:
//     resbirlik = "bir";
//     break;
//   case 2:
//     resbirlik = "ikki";
//     break;
//   case 3:
//     resbirlik = "uch";
//     break;
//   case 4:
//     resbirlik = "to'rt";
//     break;
//   case 5:
//     resbirlik = "besh";
//     break;
//   case 6:
//     resbirlik = "olti";
//     break;
//   case 7:
//     resbirlik = "yetti";
//     break;
//   case 8:
//     resbirlik = "sakkiz";
//     break;
//   case 9:
//     resbirlik = "to'qqiz";
//     break;
//   default:
//     resbirlik = "";
// }

// console.log(`${resonlik} ${reonlik} ${resbirlik}`);

//for takrorlash opertoriga oid masalar
// 10-masala

// let n = +prompt("n butun sonni kirtitng");
// let s=0;

// for (let i = 1; i <= n; i++) {
//   s += 1 / i;
// }

// console.log(s);

// 11-masala
let n = +prompt("n butun sonni kirtitng");
let s = 0;

for (let i = n; i <= 2 * n; i++) {
  s += i ** 2;
}

console.log(s);
