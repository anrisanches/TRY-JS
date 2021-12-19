'use strict'
// Парс числа Number.parseInt() and Number.parseFloat()

// парсит с 1-го символа или позиции и до первого запинания потом прекращает парсить, он на свое место возвращает новое значение parseInt

let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);

// console.log(result);
// console.log(typeof result);

elementWidth = Number.parseInt (elementWidth)
console.log('elementWidth', elementWidth)


// parseFloat тоже самое
let elementHeight ='200.74px';
elementHeight = Number.parseFloat(elementHeight);

console.log('elementHight', elementHeight);

// Метод число который обрезает числа после запятой.toFixed(digits), вызывается на самом числе, не деструктивный метод, он возвращает значение на место своеого вызова, возвращает строку, поэтому Number

let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary); 
// для упрощения кода 

salary = Number(salary.toFixed(2));
console.log(salary);
console.log(typeof salary);
// или 

// console.log(Number(salary.toFixed(2)));

// приведение (преобразование)к числу NaN
let quantity = '30';
let value1 = 'Эту строку не возможно привести к числу';

console.log(Number(quantity));
console.log(Number(value1));

// Обьект Math -возведение в степень and Exponent operator
console.log(Math.PI);

const base = 2;
const power = 5;

const result1 = Math.pow(base, power);
console.log(result1);
// одинаковые
console.log(2 ** 5); 

// 1.Попросить ввести число и сохранить в переменную
let base1 = prompt('Давай число!');
base1 = Number (base1);
console.log(base1);
// 2.Попросить ввести в стерень и сохр в перем
let power1 = prompt('Давай степень!');
power1 = Number(power1);
console.log(power1);

// 3.Возвести введенные дыние в стерень и возвести

const result4 = base1 ** power;
console.log(`Число ${base1}, степень ${power1} результат ${result4}`);



let userNumber = 5;
let userDegree = 7;

const result2 = Math.pow(userNumber, userDegree);

console.log(`Число ${userNumber}, степень ${userDegree} результат ${result2}`);

// Псевдо случайные числа
// console.log(Math.random());
// Math.random() * (max - min) + min

const max = 50;
const min = 20;

const result5 = Math.round(Math.random() * (max - min) + min);

console.log(result5);

// console.log(Math.random() * (max - min) + min);

