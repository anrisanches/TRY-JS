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
