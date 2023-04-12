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

// fnA('sa')

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

const players = [
    {
        id: 'player-1',
        name: 'Mango',
        timePlayed: 310,
        points: 54,
        online: false,
    },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },

    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },

    {
        id: 'player-4',
        name: 'Ajax',
        timePlayed: 150,
        points: 71,
        online: false,
    },
    { id: 'player-5', name: 'Alan', timePlayed: 80, points: 48, online: true },
];

// const arrName = players.map(({name,id}, index, array) => {
//     return `${index+1}: ${name} - ${id}`
// });
// console.log(arrName);

// const totalTimePlayer = array => {
//     return array.reduce((total, { timePlayed }) => {
//         return total + timePlayed;
//     }, 0);
// };

// console.log(totalTimePlayer(players));

// function changeEven(numbers, value) {
//     const newAr = numbers.map((number, index) => {
//         if (number % 2 === 0) {
//             number += value;
//         }
//         return number
//     });
//     return newAr;
// }

// console.log(changeEven([17, 24, 68, 31, 42], 100));

/*
 * {
        id: 'player-4',
        name: 'Ajax',
        timePlayed: 150,
        points: 71,
        online: false,
    }
 */

// const arrNamePoint = players.map(({ name, points }) => ({
//     name,
//     points: (points * 0.1).toFixed(2),
// }));

// console.table(arrNamePoint);

// const updatedPlayers = players.map(player => ({
//     ...player,
//     points: (player.points * 1.1).toFixed(2),
// }));

// console.table(updatedPlayers);

const playerIdToUpdate = 'player-3';

const updatedPlayersId = players.map(player =>
    player.id === playerIdToUpdate
        ? { ...player, timePlayed: player.timePlayed + 50000 }
        : player,
);
//---------first variant------
// if (player.id === playerIdToUpdate) {
//     return {...player, timePlayed: player.timePlayed + 50000};
// };
// return player

//---------second variant------
// return player.id === playerIdToUpdate
//     ? { ...player, timePlayed: player.timePlayed + 50000 }
//     : player;

// console.table(updatedPlayersId);

//------find()---------------

const playerIdToFind = 'player-2';

// const playerWithId = players.find(player => player.id === playerIdToFind);

// console.log(playerWithId);

// const findPlayerById = (allPlayer, playerId) =>
//     allPlayer.find(({ id }) => id === playerId);

// console.log(findPlayerById(players, playerIdToFind));
// console.log(findPlayerById(players, 'player-3'));

// const playerNameToFind = 'Ajax';

// const playerWithName = players.find(({name})=> name === playerNameToFind);

// console.log(playerWithName);

//-----Array.prototype.every()-----true-если все подходят
//-----Array.prototype.some()------true-если хотя бы один

// const isAllOnline = players.every(player=>player.online);
// console.log(isAllOnline);

// const isAllPlayersOnline = players.some(player=>player.online);
// console.log(isAllPlayersOnline);

//-----------reduce()---------
//Поэлементно перебирает оригинальный массив
//Возвращает что угодно
//Заменяет все на свете но исп нужно с умом

// const numbers = [1, 2, 3, 4, 56, 78, 342];

// const total1 = numbers.reduce((acc,number)=>{
//     console.log('number', number);
//     console.log('acc:', acc);
//     return 5},0);
// console.log(total1);

// const total = numbers.reduce((totalNumber, number) => totalNumber + number, 0);

// console.log(total);

// const salary = {
//     mango: 100,
//     poly: 50,
//     ajax: 120,
// };

// const totalSalary = Object.values(salary).reduce(
//     (total, value) => total + value,
//     0,
// );
// console.log(totalSalary);

// const totalTime = array =>
//     array.reduce((totalTime, { timePlayed }) => totalTime + timePlayed, 0);

// console.log(totalTime(players));

/**
 * Считаем общую сумму товаров корзины
 */

// const cart = [
//     { label: 'Apples', price: 100, quantity: 2 },
//     { label: 'Bananas', price: 300, quantity: 3 },
//     { label: 'Lemons', price: 150, quantity: 4 },
// ];

// const totalAmount = cart.reduce(
//     (total, { price, quantity }) => total + price * quantity,
//     0,
// );
// console.log(totalAmount);

// const tweets = [
//     { id: '000', likes: 4, tags: ['js', 'nude.js'] },
//     { id: '001', likes: 7, tags: ['html', 'css'] },
//     { id: '002', likes: 2, tags: ['html', 'js', 'node.js'] },
//     { id: '003', likes: 0, tags: ['css', 'react'] },
//     { id: '004', likes: 12, tags: ['js', 'nude.js', 'react'] },
// ];

// const allTags = array => {
//     const uniqueTags = array
//         .flatMap(obj => obj.tags)
//         .filter((element, index, array) => array.indexOf(element) === index);
//     console.log(uniqueTags);
//     // return array.reduce(
//     //     (ollCorses, { tags }) => ollCorses + tags),
//     //     [],
//     // );
// };

// console.log(allTags(tweets));

// const allTags1 = tweets.reduce((accTags, tweet) => {
//     // accTags.push(...tweet.tags); - здесь мы мутируем массив по ссылке, поэтому нужно шаг 2
//     // return accTags;

//     // .filter((item, index, array) => array.indexOf(item) === index);
//     //---2---вернуть распыленный новый массив

//     return [...accTags, ...tweet.tags];
// }, []);

// console.log(allTags1);

//----снова изменение по ссылке
// const tagsStats = allTags1.reduce((acc, tag) => {
//     console.log(acc);

//     if (acc[tag]) {
//         acc[tag] += 1;

//         return acc;
//     }

//     acc[tag] = 1;

//     return acc;
// }, {});
//----снова изменение по ссылке

// const tagsStats = allTags1.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

// console.log(tagsStats);

/**
 * Array.prototype.sort(callback(currentEl, nextEl){})
 * сортирует и ИЗМЕНЯЕТ оригинальный массив
 * По умолчанию:
 *  - сортирует по возрастанию
 *  - приводит элементы к строке и сортирует по [unicode]
 */

/**
 * Сортировка сложных типов
 */

//По игровому времени
// const sortByBestPlayers = [...players].sort(
//     (firstPlayer, nextPlayer) => nextPlayer.timePlayed - firstPlayer.timePlayed,
// );
// // console.table(sortByBestPlayers);

// const byName = [...players].sort((a, b) => {
//     console.log(a.name.charCodeAt(0));
//     const result = a.name[0] > b.name[0];

//     if (result) {
//         return 1;
//     }

//     if (!result) {
//         return -1;
//     }
// });

// console.table(byName);

/**
 * Сортируем тех кто онлайн по рангу
 */

// const onlineAndSort = players
//     .filter(({ online }) => online)
//     .sort((a, b) => a.timePlayed - b.timePlayed);

// console.table(onlineAndSort);

const objName = {
    name: 'Mango',
    location: {
        country: 'Ukraine',
        city: 'Kiev',
    },
};

console.log(objName?.location?.street);
console.log(objName?.location?.country);

const cars = [
    {
        make: 'Honda',
        model: 'CR-V',
        type: 'suv',
        amount: 14,
        price: 24045,
        onSale: true,
    },
    {
        make: 'Honda',
        model: 'Accord',
        type: 'sedan',
        amount: 2,
        price: 22345,
        onSale: true,
    },
    {
        make: 'Mazda',
        model: 'Mazda-6',
        type: 'sedan',
        amount: 8,
        price: 24195,
        onSale: false,
    },
    {
        make: 'Ford',
        model: 'Explorer',
        type: 'suv',
        amount: 6,
        price: 31223,
        onSale: false,
    },
];

// const getModel = arrayCars => arrayCars.map(car => car.model);
const getModel = cars => cars.map(({ model }) => model);
// console.log(getModel(cars));

const makeCarsWithDiscount = (callback, discount) => {
    const carsDiscount = callback.map(car => ({
        ...car,
        price: car.price - car.price * discount,
        model: car.model + '+',
        onSale: !car.onSale,
    }));

    return carsDiscount;
};

// console.log(makeCarsWithDiscount(cars, 0.2));
// console.log(makeCarsWithDiscount(cars, 0.4));

const filterByPrice = (cars, threshold) =>
    cars.filter(car => car.price < threshold);

const minPrice = cars.map(car => car.price);
const findMin = cars.find(car => car.price === Math.min(...minPrice));

const findMinPrice = (cars, callback) => {
    const find = callback(cars, 30000).map(car => car.price);
    const filter = Math.min(...find);
    return cars.find(car => car.price === filter);
};

// console.log(findMinPrice(cars, filterByPrice));

// console.log(findMin);

// console.table(filterByPrice(cars, 30000));
// console.table(filterByPrice(cars, 24000));

const getCarsWithDiscount = cars => cars.filter(car => !car.onSale);

// console.table(getCarsWithDiscount(cars));

const getCarByModel = (cars, model) =>
    cars.find(car => car.model.toUpperCase() === model.toUpperCase());

// console.log(getCarByModel(cars, 'mazDa-6'));

const sortByAscendingAmount = cars => {
    return [...cars].sort((a, b) => a.amount - b.amount);
};

// console.table(sortByAscendingAmount(cars));

const sortByModel = (cars, order) =>
    [...cars].sort((firstItem, nextItem) => {
        if (order === 'asc') {
            return firstItem.model.localeCompare(nextItem.model);
        }

        if (order === 'desc') {
            return nextItem.model.localeCompare(firstItem.model);
        }
    });

// console.table(sortByModel(cars, 'asc'));
// console.table(sortByModel(cars, 'desc'));

const getTotalAmount = cars => cars.reduce((acc, car) => acc + car.amount, 0);

// console.log(getTotalAmount(cars));

const getModelsOnSale = cars =>
    cars.filter(car => car.onSale).map(car => car.model);

// console.log(getModelsOnSale(cars));

const getSortedCarsOnSale = cars =>
    cars.filter(car => car.onSale).sort((a, b) => a.price - b.price);

// console.table(getSortedCarsOnSale(cars));

// console.table(cars);
