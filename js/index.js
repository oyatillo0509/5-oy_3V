// Masalalar

// 1-masala

// const students = [
//   { name: "Alice", age: 20, ball: 85, status: "active" },
//   { name: "Bob", age: 22, ball: 92, status: "inactive" },
// ];

// const student = (arr = []) => {
//   arr.forEach((student) => {
//     console.log(`Ismi: ${student.name}. Yoshi: ${student.age}`);
//   });
// };

// student(students);

// 2-masala

// const students = [
//   { name: "Alice", age: 20, ball: 85, status: "active" },
//   { name: "Bob", age: 22, ball: 92, status: "inactive" },
// ];

// function max_b(arr = []) {
//   let ball = arr[0].ball;
//   arr.forEach((i) => {
//     if (i.ball > ball) {
//       ball = i.ball;
//     }
//   });
//   return ball;
// }
// console.log(max_b(students));

// 3-masala

// const students = [
//     { name: 'Alice', age: 20, ball: 85, status: 'active' },
//     { name: 'Bob', age: 22, ball: 92, status: 'inactive' },
//     { name: 'Andrew', age: 23, ball: 88, status: 'active' }
//   ];

// chiqmadi

// 4-masala

// const students = [
//     { name: 'Alice', age: 20, ball: 85, status: 'active' },
//     { name: 'Bob', age: 22, ball: 92, status: 'inactive' }
//   ];
// function arif(arr=[]){
//     let sum=0;
//     arr.forEach(i=>{
//         sum+=i.ball;
//     })
//     return sum/arr.length;
// }
// console.log(arif(students));

// 5-masala

// function searchStudent(arr, name) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].name === name) {
//       return arr[i];
//     }
//   }
//   return arr[i];
// }

// console.log(
//   searchStudent(
//     [
//       { name: "Alice", age: 20, ball: 85, status: "active" },
//       { name: "John", age: 22, ball: 92, status: "inactive" },
//       { name: "Bob", age: 23, ball: 88, status: "active" },
//     ],
//     "John"
//   )
// );

// 6-masala

// const students = [
//   { name: "Alice", age: 20, ball: 80, status: "active" },
//   { name: "Bob", age: 22, ball: 50, status: "inactive" },
//   { name: "Charlie", age: 23, ball: 87, status: "active" },
// ];
// function search_b(arr = []) {
//   let talaba = arr.findIndex((i) => {
//     return i.ball >= 85;
//   });
//   return talaba;
// }
// console.log(search_b(students));

// 7-masala

// function student_m(arr = []) {
//   let new_a = arr.filter((i) => {
//     return i.status == "active";
//   });
//   return new_a;
// }
// console.log(
//   student_m([
//     { name: "Alice", age: 20, ball: 85, status: "active" },
//     { name: "Bob", age: 22, ball: 92, status: "inactive" },
//     { name: "Charlie", age: 23, ball: 88, status: "active" },
//   ])
// );

// 8-masala

// function age(arr = []) {
//   let res = arr.every((i) => i.age > 18);
//   return res;
// }
// console.log(
//   age([
//     { name: "Alice", age: 20, ball: 85, status: "active" },
//     { name: "Bob", age: 22, ball: 92, status: "inactive" },
//     { name: "Charlie", age: 17, ball: 88, status: "active" },
//   ])
// );

// 9-masala

// function met(arr = []) {
//   let a = arr.some((i) => i.ball > 90);
//   return a;
// }
// console.log(
//   met([
//     { name: "Alice", age: 20, ball: 85, status: "active" },
//     { name: "Bob", age: 22, ball: 92, status: "inactive" },
//     { name: "Charlie", age: 23, ball: 88, status: "active" },
//   ])
// );

// 10-masala
// chiqmadi

// 11-masala

// 12-masala

// function student(arr = []) {
//   let new_a = arr.map((i) => {
//     i.name = i.name.toUpperCase();
//     return i;
//   });
//   return new_a;
// }
// console.log(
//   student([
//     { name: "Alice", age: 20, ball: 85, status: "active" },
//     { name: "Bob", age: 22, ball: 92, status: "inactive" },
//   ])
// );

// 13-masala

// function ball(arr = []) {
//   let ball = arr.map((i) => {
//     return i.ball;
//   });
//   return ball;
// }
// console.log(
//   ball([
//     { name: "Alice", age: 20, ball: 85, status: "active" },
//     { name: "Bob", age: 22, ball: 92, status: "inactive" },
//     { name: "Charlie", age: 23, ball: 88, status: "active" },
//   ])
// );

// 14-masala

// function met(arr = []) {
//   let res = Object.keys(arr[0]);
//   return res;
// }
// console.log(met([{ name: "Alice", age: 20, ball: 85, status: "active" }]));

// 15-masala

// function add_s(arr, name, age, ball, status) {
//   let talaba = {
//     name,
//     age,
//     ball,
//     status,
//   };
//   arr.push(talaba);
//   return arr;
// }
// console.log(
//   add_s(
//     [
//       { name: "Alice", age: 20, ball: 85, status: "active" },
//       { name: "Bob", age: 22, ball: 92, status: "inactive" },
//     ],
//     "Alisher",
//     25,
//     88,
//     "active"
//   )
// );

// 16-masala

// function del_s(arr, ism) {
//   let new_a = [];
//   arr.forEach((element) => {
//     if (element.name == ism) {
//       delete element;
//     } else {
//       new_a.push(element);
//     }
//   });
//   return new_a;
// }
// console.log(
//   del_s(
//     [
//       { name: "Alice", age: 20, ball: 85, status: "active" },
//       { name: "Bob", age: 22, ball: 92, status: "inactive" },
//       { name: "Charlie", age: 23, ball: 88, status: "active" },
//     ],
//     "Bob"
//   )
// );

// 17-masala

// function age(arr = []) {
//   let res = arr.every((i) => i.age > 20);
//   return res;
// }
// console.log(
//   age([
//     { name: "Alice", age: 20, ball: 85, status: "active" },
//     { name: "Bob", age: 22, ball: 92, status: "inactive" },
//     { name: "Charlie", age: 19, ball: 88, status: "active" },
//   ])
// );

// 18-masala
// chiqmadi

// 19-masala

// masalalar qiyin ekan
// chiqmadi

// 20-masala

// function serch_j(arr = []) {
//   let res = arr[0];
//   arr.forEach((element) => {
//     if (element.age < res.age) {
//       res = element;
//     }
//   });
//   return res;
// }
// console.log(
//   serch_j([
//     { name: "Alice", age: 18, ball: 85, status: "active" },
//     { name: "Bob", age: 22, ball: 92, status: "inactive" },
//     { name: "Charlie", age: 19, ball: 88, status: "active" },
//   ])
// );

//  string
// 1-masala

// function str(a, s, e) {
//   let res = a.substring(s, e);
//   return res;
// }
// console.log(str("HelloWorld", 2, 5));

// 2-masala

// function edit(txt) {
//   let res = "";
//   let arr = txt.split("");
//   arr.forEach((i) => {
//     if (i == i.toUpperCase()) {
//       res += i.toLowerCase();
//     } else {
//       res += i.toUpperCase();
//     }
//   });
//   return res;
// }
// console.log(edit("Hello, WORLD!"));

// 3-masala

// function str_m(str) {
//   let arr = str.split(" ");
//   return arr;
// }
// console.log(str_m("Hello world from JavaScript"));

// 4-masala

// function str_m(arr) {
//   let str = arr.join(", ");
//   return str;
// }
// console.log(str_m(["Hello", "world", "from", "JavaScript"]));

// 5-masala

// function str_m(str) {
//   let res = str.replaceAll("a", "@");
//   return res;
// }
// console.log(str_m("JavaScript"));

// 6-masala

// function str_m(str) {
//   let res = str.trim();
//   return res;
// }
// console.log(str_m("   Hello, world!   "));

// 7-masala

// function str_m(str, ind) {
//   let res = str.charAt(ind);
//   return res;
// }
// console.log(str_m("Hello World", 3));

// 8-masala
// function str_m(str, txt) {
//   let res = str.includes(txt);
//   return res;
// }
// console.log(str_m("Hello, world!", "world"));

// 9-masala
// function str_m(str, txt) {
//   return str.startsWith(txt);
// }
// console.log(str_m("Hello world", "Hello"));

// 10-masala

// function str_m(str, txt) {
//   return str.endsWith(txt);
// }
// console.log(str_m("Hello world", "world"));
