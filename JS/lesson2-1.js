'use strict';

// const carts = [1, 5, 8, 9, 54, 23, 65, 23, 86, 109, 12];
// let total = 0;
// for(const cart of carts){
//     if(cart % 2 !== 0 ){
//         console.log('Эту итерацию нужно пропустить', cart);
//         continue;
//     }
//     console.log(`${cart} -четное`);
//     total += cart;
// }
// console.log(total);

// const logins = ['Mama', 'papa', 'aurora2009', 'merlin2007'];
// const loginToFind = 'aurora2009';
// let message = '';
// let message = `Пользователь ${loginToFind} не найден`; - Вписываем значение по дефолту, и переписываем в том случае если есть совпадение

// for (let i = 0; i < logins.length; i++){
//     const login = logins[i];
//     console.log('Login:', login);

//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if(login === loginToFind){
//         message = `Пользователь ${loginToFind} найден`;
//         break;
//         }
//         message = `Пользователь ${loginToFind} не найден`;
//     }
// if(login !== loginToFind){
// message = `Пользователь ${loginToFind} не найден`;
// } else{
//     message = `Пользователь ${loginToFind} найден`;
//     break
// }
// }
// console.log(message);

// for (const login  of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}`, login === loginToFind);

//     if(login === loginToFind){
//         message = `Пользователь ${loginToFind} найден, ура!!!`;
//         break;
//     }
// }
// console.log(message);

// console.log(logins.includes(loginToFind));
// метод через да или нет
// const message = logins.includes(loginToFind) ? 'yes' : `Пользователь ${loginToFind} не найден`;

// console.log(message);

// Найти min число
// const numbers = [222, 5, 8, 9, 54, 23, 65, 23, 86, 109, 12];
// let smallestNumber = numbers[0];
// for (const number of numbers) {
//     // console.log(number);
//     if (number < smallestNumber){
//         smallestNumber = number;
//     }
// }
// console.log('smallestNumber: ', smallestNumber);

// Скрипт записать массив в строку
// const friends = ['Mama', 'papa', 'aurora2009', 'merlin2007'];
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length -1);
// console.log(string);

// const string = friends.join('---');
// console.log(string);

// Массив который заменяет регистр каждого символа в строке на противоположный
// const string = 'JavaScript';
// const letters = string.split('');
// console.log(letters);

// let invertedString = '';
// inverted - перевернутый
// for (const letter of letters) {
//     console.log(letter);

// if(letter === letter.toLocaleLowerCase()){
//     console.log("Эта буква в нижнем регистре -", letter);
//     invertedString += letter.toUpperCase();
//     continue;
// }else{
//     invertedString += letter.toLowerCase();
// }
// console.log("Эта буква в ВЕРХНЕМ регистре -", letter);

// 2метод
//     invertedString += letter === letter.toLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log(invertedString);

// Делаем slug в URL из названия статьи заголовок статьи состоит только из букв и пробелов

// const title = "Top 10 benefits of React framework";

// const normalizeTitle = title.toLowerCase();
// const words = normalizeTitle.split(' ');
// console.log(words);
// const slug = words.join('-');
// console.log(slug);

// const slug1 = title.toLowerCase().split(' ').join('-');
// console.log(slug1);

// Сумма элементов двух массивов

// const array1 = [23, 23, 43, 65];
// const array2 = [1, 67, 23 ,975];

// const array3 = array1.concat(array2);
// console.log(array3);
// let total = 0;

// for (const sum of array3) {
//     total += sum;
// }
// console.log(total);

// const cards = ['Card-1', 'Card-2', 'Card-3', 'Card-4', 'Card-5',];
// console.table(cards);

// const cardToRemove = 'Card-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 1)
// console.table(cards);

// const cardToInsert = 'Card-6';
// const indexInsert = 3;
// cards.splice(indexInsert, 0, cardToInsert)
// console.table(cards);

// const cardToUpdate = 'Card-4';
// const index = cards.indexOf(cardToUpdate);
// console.log(index);
// cards.splice(index, 1, "новая карточка4");
// console.table(cards);

// function getEvenNumbers(start, end) {
//     // Change code below this line
//     let returnNumber = [];

//     for (let i = start; i < end; i += 1) {
//         console.log(i);
//         if (i % 2 === 0) {
//             returnNumber += i;
//         }
//         return returnNumber;
//     }
//     // Change code above this line
// }

/* 
* Создай массив genres с элементами <Jazz> и <Blues>.
* Добавте <Rock-&-Roll> в конце.
* Выведите в консоль первый эл. массива.
* Виведите в консоль последний эл. массива. Код должен работать для массива произвольной длинны.
* Удалите первый эл. и выведите его в консоль.
*Вставьте <Country> & <Raggy> в начало массива
 */

// const genres = ['Jazz', 'Blues'];
// genres.push('Rock-&-Roll');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// const delFirstEl = genres.shift();
// console.log(delFirstEl);
// genres.unshift('Country', 'Raggy');
// console.log(genres);


/* Напиши скрипт который просит пользователя ввести число в prompt до тех пор, пока посетитель не нажмет CANCEL и каждый за добавляет введенное значение к общей сумме
* При загрузке страницы пользователю предлагается prompt ввести число. ВВод добавляется к значению переменной total.
* Операция ввода числа продолжается да тех пор, пока позьзователь не нажмет Cancel в prompt.
*После того как пользователь прекратил ввод нажав кнопку Cancel , показать Alert со строкой "Общая сумма чисел равна $сумма".
* Делать проверку того, что пользователь ввел именно число, а не произвольный набор символов, не обязательно, но рекомендую. Если хочешь, в случае некоректного ввода, показывай alert с текстом "Было введено не число, попробуйте еще раз", при етом результат prompt плюсовать к общей сумме не нужно, после чего снова пользователю предлагается ввести числоо в prompt. */
// let total = 0;
// while (true) {
//     let userInput = prompt("Add number on the string",'');
//     if (userInput === null) {
//         alert(`Общая сумма чисел равна ${total}`)
//         break;
//     } else if (isNaN(Number(userInput))) {
//         alert(`Введите число`);
//     } else {
//         total += Number(userInput);
//         continue;
//     }
// };

// while (true) {
//     let userInput = prompt("Add number on the string",'');
//     if (isNaN(Number(userInput))) {
//         alert(`Введите число`);
//         continue;
//     };
//     if (userInput === null) {
//         alert(`Общая сумма чисел равна ${total}`)
//         break;
//     }
//     total += Number(userInput);
// };

/*
*Напиши скрипт для вычисления площади прямоугольника со сторонами, значение которых хранятся в переменной values в виде строки. Значения гарантировано разделены пробелом
 */

// const values = '8 11';
// const numbers = values.split(' ');
// let counter = 1;
// for (const number of numbers) {
//     counter *= number
// };

// const values = '8 11';
// let area = 1;
// function splitValue() {
//     const splitArr = values.split(' ');
//     return splitArr
// };


// function areaCalculation(func) {
//     console.log(func());
//     for (const value of func() ) {
//         area *= value
//     };
//     return area;
// };

// console.log(splitValue());
// areaCalculation(splitValue);
// console.log(areaCalculation(splitValue));

// function areaCalculation (a, b) {
//         const countArea = a * b;
//         return countArea
//     }
// areaCalculation(8,11);

/*
*Напиши скрипт для перебора массива fruits циклом for. Для каждого эл. массива выведи в консоль строку в формате номер_эл: значение_эл. Нумерация эл. должна начинатся с 1.
 */

// const fruits = ["banana", "cherry", "orange", "kivi"];
// for (let i = 0; i < fruits.length; i+=1) {
//     console.log(`${i+1} - ${fruits[i]}`)
// }

/*
*Напиши скрипт который выводит в консоль имя и телефон пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количевство имен и телефонов гарантировано одинаковое.
 */

// const names = 'Jacoob,William,Solomon,Artemis';
// const phones = '8097, 8063,8050,8067';

// const arrNames = names.split(',');
// const arrPhones = phones.split(',');

// for (let i = 0; i < arrNames.length; i+=1) {
//     console.log(`${arrNames[i]} - ${arrPhones[i]}`);
// }

/*
*Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинатся или заканчиватся пробельным символом. Скрипт должен работать для любой строки.
 */

// const string = 'Welcome to the future';
// const srtingArr = string.split(' ');
// srtingArr.shift();
// srtingArr.pop();
// const newString = srtingArr.join(' ')
// console.log(srtingArr.join(' '));

/*
*Напиши скрипт который <разворачивает> строку (обратный порядок букв) и выводит в консоль.
 */

// const string = 'Welcome to the future';
// console.log(string.split('').reverse().join(' '));

/*
*Напиши скрипт сортировки массива строк в алфавитном порядку по первой букве
 */

// const langs = ['python', 'javascript', 'c++', 'haskell', 'php', 'ruby'];
// const langsSort = langs.sort();
// const sortByFn = langs.sort(function compare(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// });
// console.log(langsSort);
// console.log(sortByFn);

// const months = ['March', 'Jan', 'Feb', 'Dec'];
// months.sort(function compare(a, b) {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     return 0;
// });
// console.log(months);

// const numbers = [3, 45, 7, 23, 0, -6, 2, 4, 67, 98, 333, 343, 334];
// const numbersSort = numbers.sort(
//     function compare(a, b) {
//         return a - b;
//     }
// );
// console.log(numbersSort);

/*
*Напиши скрипт поиска самого маленького числа в миссиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи
 */

// const numbers = [3213, 45, 7, 23, 0, -6, 2, 4, 67, 98, 333, 343, 334];
// let smallestNumber = numbers[0];
// for (let i = 0; i < numbers.length; i+=1) {
//     // console.log(numbers[i]);
//     if (smallestNumber > numbers[i]) {
//         smallestNumber = numbers[i]
//     }
// };

// for (const number of numbers) {
//     if (smallestNumber > number) {
//         smallestNumber = number
//     }
// }

// console.log(smallestNumber)




