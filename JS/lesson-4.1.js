'use strict';

// const numbers = [1, 2, 45, , 7, 8];
// numbers.forEach(function (number, index) {
//     console.log(`Index - ${index}, value - ${number}`);
// });

//  -----------ПРИМЕРЫ-----------
// const fnA = function (message, callback) {
//     console.log(message);

//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Log of function fnB', number);
// };

// fnA('Anna', fnB);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);

//     console.log(result);
// };

// const add = function (x, y) {
//     return x * y;
// };

// const sub = function (x, y) {
//     return x - y;
// };

// doMath(2, 3, add);

// ----Литерал ф-ции--------inline ф-ция-------
// doMath(15, 3, function (x, y) {
//     return x * y;
// });
// doMath(34, 234, sub);

// Регистрация вызовов
// const callback = function () {
//     console.log('fn been wort at the 3 seconds');
// };

// console.log('we are the champions');

// setTimeout(callback, 3000);

// console.log('after callback');

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//     { name: 'Манго', score: 83 },
//     { name: 'Поли', score: 59 },
//     { name: 'Аякс', score: 37 },
//     { name: 'Киви', score: 94 },
//     { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//     ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE,
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

// // Колбэк-функция
// function greet(name) {
//     console.log(`Добро пожаловать ${name}.`);
// }

// // Функция высшего порядка
// function registerGuest(name, callback) {
//     console.log(`Регистрируем гостя ${name}.`);
//     callback(name);
// }

// registerGuest('Манго', greet);
// ----implicit----
// const add = (a, b) => a + b;
// console.log(add(2, 5));

// ----Псевдомассив arguments-----

// function add() {
//     console.log(arguments);
// }

// const add = (...args) => {
//     console.log(args);
// };
// add(2, 34, 5, 67, 8, 9, 9);

// -----Контекст------
// Внутри fn=> нет своего this, контекст внутри стрелки определяется местом её объявления, а не вызова, и ссылается на контекст родительской ф-ции

// const showThis = () => {
//     console.log('this in showThis: ', this);
// };
// showThis();
// const user = { name: 'Mango' };
// user.showContext = showThis;
// user.showContext();
// console.log(user);

// const user = {
//     fullName: 'Mango',
//     showName() {
//         console.log('this: ', this);
//         console.log('this fullName: ', this.fullName);
//         // function inner() {
//         //     console.log('this in inner: ', this);
//         // }
//         const inner = () => {
//             console.log('this in inner: ', this);
//         };
//         inner();
//     },
// };

// user.showName();
// ----- Никогда не исп. стрелки как методы объекта----
// ---стрелки никогда не бывают методами объекта----
// const userName = {
//     fullName: 'Mango',
//     // showName: function () {
//     //     console.log('this: ', this);
//     //     console.log('this.fullName: ', this.fullName);
//     // },
//     showName: () => {
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullName);
//     },
// };
// userName.showName();

// ----- стрелочная ф-ция не может быть конструктором-----

// const user = function (name) {
//     this.name = name;
// };

// function user(name) {
//     this.name = name;
// }

// const user = name => {
//     this.name = name;
// };

// console.log(new user('Mango'));

/*
 * еще раз стрелка как метод объекта
 */

// const objA = {
//     x: 5,
//     showX() {
//         console.log(this.x);
//         console.log('This в objB.showX: ', this);
//         // бесполезный(абстрактный) пример на понимание стрелок
//         const objB = {
//             y: 10,
//             // showThis() {
//             //     console.log('this в objB.showThis: ', this);
//             // },
//             showThis: () => {
//                 console.log('this в objB.showThis: ', this);
//             },
//         };

//         objB.showThis();
// },
// };

// objA.showX();
