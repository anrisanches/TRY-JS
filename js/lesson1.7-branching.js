'use strict'
// Оператор ветвление if условте выполняется при true
if(5 > 3){
console.log('qwr');
};
console.log('Дальше');
// if...else
if(50 > 30){
    console.log('x > y');
}else{
    console.log('x < y');
};
// else...if до первого true

const salary =3000;
if (salary <= 500){
    console.log('level 1');
} else if(salary > 500 && salary <= 2000){
    console.log('LEVEL 2');
} else if(salary >= 2000 && salary <= 3000){
    console.log('level 3');
}else {
    console.log('level 4')
}

// Тернарный оператор
const balance = -1000;
// let message;

// if(balance >= 0){
//     message = 'позитивный баланс';
// }else{
//     message = 'негативный баланс';
// } console.log(message);

// const message = условие ? выражение1 : виражение2;
const message = balance >= 0 ? 'позитивный баланс' : 'негативный баланс';

console.log(message);
// Блочная область видимости переменных
const a = 5;

if(true){
    const b = 10;
    console.log(b);
};

// console.log(b); не видит из-за вложенности
console.log(a);