// 'use strict'

// ввод пользователя
// Методы window.confirm() and windows.promt()

// когда жмем ok or cancel, идет возврат (в confirm)и возвращает true or false;
// confirm возвращает true or false, блокирует исполнение кода на свое место возвращает значение boolean

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);  

// prompt 'Введите количество товаров' не важно что ввели в prompt он всегда вернет строку, для этого преобразуем через Number

let quantity = prompt('введите кол товара');
quantity = Number (quantity);
console.log(quantity);
console.log(typeof quantity);