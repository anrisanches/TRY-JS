// Напиши скрипт который проверяет вхождение числа в отрезок х1 и х2.
// до х1, после х2, от х1 до х2, до х1 или после х2

const x1 = 10;
const x2 = 30;
const number = 5;

x1 < number;
console.log(`Число ${number} попадает в отрезок до ${x1}?`, number < x1);
console.log(`Число ${number} попадает после отрезка ${x2}?`, number > x2);

console.log(`Число ${number} попадает в отрезок от ${x1} до ${x2}`, number > x1 && number < x2);

console.log(`Число ${number} попадает в отрезок до ${x1} или после ${x2}`, number < x1 || number > x2);


