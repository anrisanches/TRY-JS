// 'use strict'
// Длинна строки lenght

const message = 'In this line 26 characters'
console.log(message.length);
// Конкантенация строк
const firstName ='Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' +  lastName;
console.log(fullName);


const type = 'VIP';
const room = 206;

// const welcomeMsg = 'Гость ' + firstName + ' ' + lastName + 'поселяется в ' + type + 'номер ' + room;
const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

console.log(welcomeMsg);
// нормализация

// const brand = 'SamsUng';
// const normalizedBrand = brand.toLocaleLowerCase();
// console.log(normalizedBrand);

// let brand = prompt('Давай бренд');
// brand = brand.toLocaleLowerCase();
// console.log(brand);

let brand = 'SamsUNg';
brand = brand.toLocaleLowerCase();

console.log(brand);

// Поиск в строке с методом includes()

const blackListWord1 = 'спам';
const blackListWord2 = 'распродажа';

const string1 = 'Привет, я принц абдул, это не спам!';
const string2 = 'Самая Большая РАСПРОДАЖА';
const string3 = 'Рекламная кампания #fatlivemastter';

console.log(string1.includes(blackListWord1));
console.log(string1.includes(blackListWord2));

console.log(string2.includes(blackListWord1));
console.log(string2.toLocaleLowerCase().includes(blackListWord2));

console.log(string3.includes(blackListWord1));
console.log(string3.includes(blackListWord2));