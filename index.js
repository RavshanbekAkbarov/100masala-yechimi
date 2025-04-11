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
let x = +prompt("x ning qiymatini kiriting");

let res;
if (x > 0) {
  res = 2 * Math.sin(x);
} else if (x <= 0) {
  res = x - 6;
} else {
  res = "xato qiymat";
}
console.log(res);
