// 'use strict'
// const friends = ['Mango', 'Poly', 'Ajax', 'Hercules', 'AnDre17']
// console.table(friends);
// for (let i = 0; i < friends.length; i++) {
//     const el = friends[i];
// console.log(el);
// console.log(`${i} - ${el}`);
// friends[i] += '-STRING'
// };
// console.log(friends);

// for (const friend of friends) {
//     console.log(friend + '-H');
// }

// --------Counting the amount of purchases
// const cart = [58, 23, 78, 63, 65, 12, 34, 14, 63];
// let sumEl = 0;
// for (let i = 0; i < cart.length; i++) {
//     sumEl += cart[i];
// };

// for (const val of cart) {
//     sumEl += val
// }
// console.log('Total -', sumEl);

// --------Write a script that calculates the sum of all paired numbers
// for (let i = 0; i < cart.length; i++) {
//     const el = cart[i];
//     console.log(el);
//     if (el % 2 === 0) {
//         sumEl += el
//     }
// };
// for (const el of cart) {
//     if (el % 2 === 0) {
//         sumEl += el;
//     }
// };
// console.log('Total -',sumEl);

// --------write login search script
// Если логина нет, вывести [пользователь] логина не найден
// Если есть, вывести [пользователь] логина найден
// сделать через for, for_of, tone operator

// const logins = ['Mango', 'Poly', 'Ajax', 'AnDre17','Hercules'];
// const loginToFind = 'AnDre17';
// let message = `Пользователь логина ${loginToFind} не найден`;

// for (let i = 0; i < logins.length; i++) {
//     const login = logins[i].toLowerCase();
//     if (login === loginToFind.toLowerCase()) {
//         message = `Пользователь логина ${loginToFind}  найден`;
//         break;
//     }
// }
// for (const login of logins) {
//     if (login === loginToFind) {
//         message = `Пользователь логина ${loginToFind}  найден - YES`;
//         break;
//     }
// // };
// const message = logins.includes(loginToFind) ? `Пользователь логина ${loginToFind}  найден - YES` : `Пользователь логина ${loginToFind} не найден`;
// console.log(message);

// -------Find most little number
// const numbers = [58, 23, 78, 63, 65, 12, 34, 14, 63];
// let littleNumber = numbers[0];
// for (const number of numbers) {
//     if (littleNumber > number) {
//         littleNumber = number
//     }
// }
// console.log('SmallestNumber: ', littleNumber);

// -------Write a script that concatenates all elements of an array into a single string by delimiter
// const friends = ['Mango', 'Poly', 'Ajax', 'Hercules', 'AnDre17'];
// let stringFriend = '';
// for (let i = 0; i < friends.length; i++) {
//     stringFriend += friends[i] + ',';
// }
// console.log(stringFriend.slice(0, stringFriend.length - 1));
// const stringFriends = friends.join(',');
// console.log(stringFriends);
// -------SPLICE
// const cards = ["user1", "user2", "user3", "user4"];
// const deleteCard = cards.splice(0, 2);
// console.log(deleteCard)
// const removeCard = cards.splice(1, 0, '2')
// console.log(removeCard);

// -------------------------------------------------------------------
// const firstPart = 'likes';
// const secondPart = 'likes';

// const id = Symbol('id');
// // Symbol('id') --- не отображается при переборе

// let userInfo = {
//     name: 'Mango',
//     age: 30,
// 'Java Script': true,

//     address: {
//         city: 'NewYork',
//         street: 'HighWay',
//     },

//     [firstPart + ' JavaScript']: true,
//     [secondPart]: false,
//     [id]: 'Some value',
// };

// console.table(userInfo);
// console.log(userInfo['Java Script']);

// console.log(userInfo['likes JavaScript']);
// console.log(userInfo.likes);
// console.log(userInfo[secondPart]);
// console.log(userInfo['address'].city);
// console.log(userInfo['address']['street']);

// -------------------------------------------------------------

// function makeUserInfo(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// const user = makeUserInfo('Mango', 30);
// user.gender = 'men';
// user.age = 25;
// user.removeKey = 'value';

// // console.table(user);

// delete user.removeKey;
// // удалить свойство

// // console.log(user);

// const userInfo = user;

// userInfo.gender = 'women';
// console.log(userInfo);

//Дублирование объекта Object.assign(куда(объект), что(свойство №1), что(свойство №2), ...);

// const copyUserInfo = Object.assign({}, userInfo);

// copyUserInfo.height = true;
// console.log(Object.keys(copyUserInfo));

const firstPart = 'likes';
const secondPart = 'likes';

const id = Symbol('id');
// Symbol('id') --- не отображается при переборе

let userInfo = {
    name: 'Mango',
    age: 30,
    'Java Script': true,

    address: {
        city: 'NewYork',
        street: 'HighWay',
    },

    [firstPart + ' JavaScript']: true,
    [secondPart]: false,
    [id]: 'Some value',
};

console.table(userInfo);
console.table(userInfo.address.city);
// console.log(userInfo?.address?.house);
// console.log(userInfo.address.house);

// if ('age' in userInfo) {
//     console.log(userInfo.age);
// }

// if (userInfo.age) {
//     console.log(userInfo.age);
// }

// Поиск самого большого числа, сначала распыляем, потому что Math.max ищет не среди массива, а среди произвольного количества аргументов
const temps = [12, 32, 45, 1, 2];

const maxTemps = Math.max(...temps);

console.log(maxTemps);
// создание нового массива, точная и независимая копия
const copyOfTemps = [...temps];
console.log(copyOfTemps);
// Распыление разных массивов в 1
const firstArr = [12, 2, 3, 4, 5];
const secondArr = [5, 4, 3, 2, 1];

const finalTemps = [...firstArr, ...secondArr];
console.log(finalTemps);
// создание нового объекта, методом распыления других объектов

const firstObj = { propA: 1, propB: 2 };
const secondObj = { propC: 10, propD: 15, propB: 50 };

const thirdObj = { propE: 232, ...firstObj, ...secondObj };
console.log(thirdObj);

//Destructuring объектов, с присвоением несуществующих переменных и переименованием переменных
// const book = {
//     title: 'The last Kingdom',
//     author: 'Bernard',
//     genres: ['historical prose', 'adventure'],
//     isPublic: true,
//     rating: 3.58,
// };

// const {
//     title: bookName,
//     genres,
//     isPublic,
//     rating,
//     email = 'book@gmail.com',
// } = book;
// console.log(
//     `Книга ${bookName} c рейтингом ${rating}, жанры ${genres}, присылайте свои отзывы на почту  ${email}`,
// );
// Destructuring in cycle

// const books = [
//     {
//         title: 'The last Kingdom',
//         author: 'Bernard',
//         rating: 3.58,
//     },
//     {
//         title: 'На берегу спокойных вод',
//         author: 'Роберт',
//         rating: 8.51,
//     },
// ];

// for (const book of books) {
//     const { title, author, rating } = book;

//     console.log(title);
// }

// for (const { title, author, rating } of books) {
//     console.log(author);
// }

// const rgb = [200, 250, 100];
// const [red, green, blue] = rgb;
// console.log(red);

// const [red, ...other] = rgb;
// console.log(other);

// const [, , blue] = rgb;
// console.log(blue);
// ------------------------------
// const apartment = {
//     descr: 'Spacious apartment in the city center',
//     rating: 4,
//     price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// //Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.

// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);
// -------------------
//Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.
const keys = [];
const values = [];
const advert = {
    service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city center';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
    // Change code below this line

    keys.push(key);
    values.push(apartment[key]);

    // Change code above this line
}
