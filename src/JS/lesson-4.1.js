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
//     { name: 'А', score: 37 },
//     { name: 'Киви', score: 94 },
//     { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter(student => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter(student => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом А

// // В callback-функции удобно destruction свойства объекта
// const average = students.filter(
//     ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE,
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон

// // callback-функция
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

// ---- arguments-----

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

//return to JS

/**
 * Функция результатом своей работы может возвращать другую функцию
 *
 * Возвращаемая функция во время вызова будет иметь доступ ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули), это называется замыканием
 *
 *
 *
 *
 *
 *
 */

// function fnA(parameter) {
//     const innerVariable = 'значение внутренней функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('это вызов innerFunction');
//     };
//     return innerFunction;
// }

// console.log(fnA(555));

// const fnB = fnA();

// console.log(fnB);
// fnB();

/**
 * поваренок
 */

// function makeDish(cookName, dish) {
//     console.log(`${cookName}, готовит ${dish}`);
// }

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'Омлет');

// makeDish('Poly', 'суп');
// makeDish('Poly', 'кофе');

// function makeCook (name) {

//     const makeDish = function(dish){
//         console.log(`${name}, готовит ${dish}`);
//     }

//     // const makeDish = (dish)=>{
//     //     console.log(`${name}, готовит ${dish}`);
//     // };

//     //эта функция не подходит
//     // function makeDish (dish) {
//     //     console.log`${name}, готовит ${dish}`
//     // };

//     return makeDish;
// };

// const mango = makeCook('Mango');

// // console.log(mango);
// mango('котлеты')

// const poly = makeCook('Poly');
// poly('Халва')
// poly('Суп')

// console.dir(mango);

/**
 *
 *
 * округлить
 *
 *
 *
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint);//3

// const withDecimals = Number(floatingPoint.toFixed(2));
// console.log(withDecimals);

// const number1 = 3.23423;
// const number2 = 5.123123;

// // console.log(Number(number1.toFixed(3)));
// // console.log(Number(number2.toFixed(1 )));

// function rounder (places) {
//     return function (num) {
//         return Number(num).toFixed(places);
//     };
// };

// console.dir(rounder());

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.log(rounder2(6.2342342));
// console.log(rounder2(number1));
// console.log(rounder3(number2));

// const myLibs = {
//     value: 0,

//     add(number) {
//         this.value += number;
//     },

//     getValue(){
//         return this.value;
//     },
// };
// myLibs.add(10)
// console.log(myLibs.getValue());

/******
 *
 *
 *
 * приватные значение
 *
 *
 *
 *
 */

// const myLibsFactory = function() {
//     let value = 0;

//     const add = function(number){
//         value += number;
//     }

//     return {
//         // add: add,
//         add,
//         getValue(){
//             return value
//         },
//     };
// };

// console.log(myLibsFactory());

// const myLib = myLibsFactory();

// console.dir(myLib.getValue);
// console.log(myLib.getValue());
// myLib.add(100);

// console.log(myLib.getValue());

/**
 *
 *
 * приватные данные и функции - скрытые реализации, интерфейс
 *
 *
 *
 */

//  const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     const changeBy = function (amount) {
//         salary += amount;
//     };

//     return {
//         raise(amount) {
//             changeBy(amount);
//         },

//         lower(amount) {
//             salary -= amount;
//         },

//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);
// console.dir(salaryManager.current());

// ----------continue JS------------------

/**new task
 *
 *
 *
 * createProduct(obj,callback) - принимает объект товара без id, а также callback. Функция создает объект товара, добавляя ему уникальный идентификатор в свойство id и вызывает callback передавая ему созданный объект
 * logProduct(product) - callback принимающий объект продукта и выводит его в консоль через console.log
 * logTotalPrice(product) - callback принимающий объект продукта и выводит в консоль общую стоимость товара в консоль
 */

// const createProduct = (obj, callback) => {
//     // obj.id = Date.now();//происходит мутация объекта
//     // callback(obj)

//     const id = Math.floor(Math.random() * (100000 - 1 + 1)) + 99999;

//     const newProduct = {
//         ...obj,
//         id,
//     };

//     console.log(callback(newProduct));
//     // console.log(newProduct);
// };

// const logProduct = product => console.log(product);

// const logTotalPrice = product =>`Total price of your order: ${product.price * product.quantity}`;

// // createProduct({ name: 'apple', price: 30, quantity: 3 }, logProduct);
// createProduct({ name: 'apple', price: 30, quantity: 3 }, product => product,
// );

// createProduct({ name: 'lemon', price: 50, quantity: 5 }, logTotalPrice);

/*
 * Добавьте объекту account методы withdraw(amount, onSuccess, onError) and deposit(amount,onSuccess, onError), где первый параметр это сумма операции, а вторая и третий - callback
 *
 * Метод withdraw вызывает onError если amount больше TRANSACTION_LIMIT или this.balance, и onSuccess в противном случае.
 *
 * Метод deposit вызывает onError если amount больше TRANSACTION_LIMIT или меньше либо равен нулю, и onSuccess в противном случае
 *
 */

// const TRANSACTION_LIMIT = 1000;

//     withdraw(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             onError(`сумма ${amount} превышает лимит`);
//         } else if (amount > this.balance) {
//             `сумма ${amount} превышает остаток на счете - ${this.balance}`;
//         } else {
//             this.balance += amount;
//             return onSuccess(
//                 `Пополнение на сумму ${amount} успешно, ваш баланс ${this.balance}`,
//             );
//         }

//         // console.log(this.balance += amount);
//     },

//     // deposit(amount, onSuccess, onError) {
//     //     if (amount > TRANSACTION_LIMIT) {
//     //         onError('`сумма ${amount} превышает лимит`')
//     //     }else if(amount <= 0 ){
//     //         onError('`сумма снятия ${amount} больше остатка`')
//     //     }else {
//     //         this.balance = amount;
//     //         return onSuccess(`Снятие на сумму ${amount} успешно, ваш баланс ${this.balance}`)
//     //     }

//     deposit(amount, onSuccess, onError) {
//         if (amount > TRANSACTION_LIMIT) {
//             return onError('`сумма ${amount} превышает лимит`');
//         }

//         if (amount <= 0) {
//             return onError('`сумма снятия ${amount} больше остатка`');
//         }
//         this.balance = amount;
//         return onSuccess(
//             `Снятие на сумму ${amount} успешно, ваш баланс ${this.balance}`,
//         );
//     },
// };

// const handleSuccess = message => console.log(`Success! ${message}`);

// const handleError = message => console.log(`Error! ${message}`);

// account.withdraw(2000, handleSuccess, handleError);
// account.withdraw(350, handleSuccess, handleError);
// account.withdraw(600, handleSuccess, handleError);
// account.deposit(-400, handleSuccess, handleError);
// account.deposit(0, handleSuccess, handleError);
// account.withdraw(200, handleSuccess, handleError);

/**new task
 *
 *
 *
 *
 * Напиши функцию each(array, callback), которая первым параметром ожидает массив, а вторым - fn  которая применится к каждому элементу массива.FN  each должна вернуть новый массив, элементами которого будут результаты вызова callback
 *
 *
 *
 *
 */

// const each = (array, callback) => {
//     // const newArray = [];

//     // array.forEach(element => {
//     //     newArray.push(callback(element));
//     // });

//     const newArray = array.map(callback)

//     return newArray;
// };

// console.log(each([64, 49, 36, 43, 16], value => value * 2));
// console.log(each([64, 49, 36, 43, 16], value => value - 2));
// console.log(each([1.2, 3.2, 36, 6.32, 16], value => Math.ceil(value)));

/**new task
 *
 * Выполни рефакторинг кода исп. метод forEach и стрелочные функции
 *
 */

// const logItems = items => {
//     console.log(items);

//     items.forEach((item, index) => {
//         console.log(`${index + 1} - ${item}`);
//     });
// };

// logItems(['mango', 'poly', 'ajax']);

/**new task
 *
 *
 * рефакторинг
 *
 */

// const calculateAverage = (...args) => {
//     let total = 0;

//     args.forEach(number => (total += number));

//     return total/args.length;
// };

// console.log(calculateAverage(1, 2, 3, 4));
// console.log(calculateAverage(12,3,56,8,3,78));
