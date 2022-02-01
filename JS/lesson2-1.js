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
