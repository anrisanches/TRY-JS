// const a = [5];
// console.log(a);

// forEach(для каждого) ничего не возвращает заменяет for
// const numbers = [3, 5, 6, 42, 78, 43, 12];

// numbers.forEach(
//     function (number, index, array) {
//         console.log('number:', number);
//         // console.log(this);
//         // this в этой ф-ции (в callback-е) будет ссылаться на этот объект
//     },
//     { a: 5, b: 113 },
// );

// // numbers.forEach(number, => {

// // });

// ----Map-----------
// поэлементно перебирает массив оригинальный, не изменяет его, возвращает новый массив такой же длинны

// const numbers = [2, 4, 5, 6, 7, 8, 96, 54, 52, 4];

// // const doubleNumbers = numbers.map(function (number) {
// const doubleNumbers = numbers.map(number => {
//     // number *= 2;
//     return number * 2;
// });
// console.log(numbers);
// console.log('doubleNumbers: ', doubleNumbers);

// const players = [
//     {
//         id: 'player-1',
//         name: 'Mango',
//         timePlayed: 310,
//         points: 54,
//         online: false,
//     },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
//     {
//         id: 'player-4',
//         name: 'Ajax',
//         timePlayed: 150,
//         points: 71,
//         online: false,
//     },
//     { id: 'player-5', name: 'Alan', timePlayed: 80, points: 48, online: true },
// ];
// /*
//  * Получаем массив всех игроков
//  */

// // const playerNames = players.map(player => player.name{
// const playerNames = players.map(player => {
//     return player.name;
// });
// console.log(playerNames);

// const playerId = players.map(player => player.id);
// console.log('PlayerId: ', playerId);
// До и после рефакторинг
// const res = players.map(player => {
//     return {
//         name: player.name,
//         online: player.online,
//     };
// });
// const res = players.map(({ name, online }) => ({ name, online }));
// console.log('result:', res);

// Увеличить кол-во поинтов каждого игрока на 10%

// const updatePlayers = players.map(player => {
//     // console.log(player);
//     return {
//         ...player,
//         points: player.points * 1.1,
//     };
// });

// Рефакторинг---------------------
// const updatePlayers = players.map(player => ({
//     ...player,
//     points: player.points * 1.1,
// }));

// console.log(updatePlayers);
// console.table(updatePlayers);

// const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(player => {
//     console.log(player.id);
//     if (playerIdToUpdate === player.id) {
//         return player.timePlayed + 100;
//     }
//     return;
// });

// console.table(updatedPlayers);

// function printValue1(value) {
//     console.log(value);
// }

// function prettyValue(value) {
//     console.log('logging value: ', value);
// }

// function repeat(n, action) {
//     for (let i = 0; i < n; i += 1) {
//         action(i);
//     }
// }

// // Передаем printValue как callback-функцию
// repeat(3, printValue1);
// // 0
// // 1
// // 2

// // Передаем prettyPrint как callback-функцию
// repeat(3, prettyValue);
// // Logging value: 0
// // Logging value: 1
// // Logging value: 2

// const fnA = function(message){
//     console.log('message: ',message);
// };

// fnA('sadadasdas')

// -----------------------------------------

/*
 * Создание собственной функции высшего порядка
 * Допустим, у нас есть строчный массив, и мы хотим конвертировать его в
 * массив, в котором каждый элемент представляет длину строки из оригинального массива. */

// const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

// -------------------------------------

/*
 * Вам дан массив. Значения в массиве будут либо числами, либо строками, либо их комбинацией. Ваша задача - вернуть массив, в котором будут идти сначала числа, отсортированные в порядке возрастания, а затем строки, отсортированные в алфавитном порядке.Значения должны сохранить свой исходный тип. Если на входе была строка, то и вернуться должна строка, если число - число.
 */

// function arraySort (array){
//     const newArrayString = [];
//     const newArrayNumber = [];  
//     array.forEach(element => {
//         if(typeof element === 'number'){
//             newArrayNumber.push(element)
//         }else{
//             newArrayString.push(element)
//         }  
//     });

//     // return array.sort((a,b)=>a-b)
//     newArrayNumber.sort((a,b)=> a-b)    
    
//     newArrayString.sort((a,b) =>a.localeCompare(b))

    
//     console.log(newArrayString);
//     console.log(newArrayNumber);
//     return [...newArrayString,...newArrayNumber];
// };

// console.log(arraySort([6, 2, 3, 4, 5]));
// console.log(arraySort([14, 32, 3, 5, 5]));
// console.log(arraySort([1, 2, 3, 4, 5]));
// console.log(arraySort(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));

// Пример кода:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']



// ------------------------------------------------------------
// const arr = [
//     12,
//     [34, [2, [33]]],
//     34,
//     [23],
//     'hello',
//     ['five', ['some arr', ['last arr'], { name: 'John' }]],
// ];

// -------------------------------------

// * Как найти сумму элементов массива, если вложенность массива неизвестна?

// arraySum([[1, 2, [3, 4]], [9], [10, 12]])
// ------------------------------------------

