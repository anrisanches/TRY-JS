'use strict';

// const numbers = [1, 2, 3].concat([5, 6, 7], [1, 5, 7, 8]);
// console.log(numbers);

// const numbers = [3, 2, 5, ...[1, 2, 3], 4, 5];
// console.log(numbers);

// const temps = [14, 34, 76, 13, 11, 87];
// console.log(Math.min(...temps));

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 5 };

// const c = {
//     name: 'Mango',
//     ...a,
//     ...b,
// };

// console.log(c);

// const defaultSettings = {
//     theme: 'dark',
//     showNotification: true,
//     hideSidebar: false,
// };

// const userSetting = {
//     showNotification: false,
//     hideSidebar: true,
// };

// const finalSetting = {
//     ...defaultSettings,
//     ...userSetting,
// };

// console.log(finalSetting);

// ----DESTRUCTURING----

// const playlist = {
//     name: 'My first object',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
// };

// const {
//     name,
//     tracks,
//     trackCount: numberOfTracks = 'default value',
//     author = 'default name',
// } = playlist;

// console.log(playlist);
// // Переименовать (переменную в которой destructing какое-то свойство)tracks в numberOfTracks в которой
// console.log(
//     'Вставлено значение для локальной переменной из имени свойства из playlist = ',
//     numberOfTracks,
// );

// console.log(
//     'Это вызов с author которого нет',
//     name,
//     tracks,
//     trackCount,
//     author,
// );
// console.log(trackCount);

// const user = {
//     name: 'Jacques John',
//     tag: 'john2006',
//     location1: 'Oslo',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, location1, stats } = user;

// const { followers, views, likes } = stats;

// console.log(
//     name,
//     tag,
//     location1,
//     stats,
//     'в следующей консоли на место stats выведено его свойства с переменной, в которой проведена destruction',
// );
// console.log(name, tag, location1, followers, views, likes,'следующая запись короче');

// const {
//     name,
//     tag,
//     location1,
//     stats: { followers, views, likes },
// } = user;

// console.log(name, tag, location1, followers, views, likes);

// const rgb = [255, 100, 80];

// const [a, , c] = rgb;
// console.log(a, c);

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// };
// const ratings = Object.values(authors);
// console.log(Math.max(...ratings));

// const entries = Object.entries(authors);

// for (const entry of entries) {
//     console.log(entry);
//     const [name, rating] = entry;

// const name = entry[0];
// const rating = entry[1];

//     console.log(name, rating,'следующий пример такой же только еще короче');
// }

// for (const [name, rating] of entries) {
//     console.log(name, rating);
// }

// ---REST----

// const user = {
//     name: 'Jacques John',
//     tag: 'john2006',
//     location1: 'Oslo',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, ...restProps } = user;
// // в ...restProps будет лежать все что мы не destruction, так как ...rest - это сбор
// console.log(name, tag);
// console.log(restProps);
// // const restProps = {
// //     location1: user.location1,
// //     stats: user.stats,
// // };

// const showProfileInfo = function (userProfile) {
//     // console.log(userProfile);
//     const {
//         name,
//         tag,
//         location1,
//         stats: { followers, views, likes },
//     } = userProfile;

//     console.log(name, tag, location1, followers, views, likes);
// };
// ---То же самое, с передачей destruction в function(userProfile)---
// const showProfileInfo = function ({
//     name,
//     tag,
//     location1,
//     stats: { followers, views, likes },
// }) {
//     console.log(name, tag, location1, followers, views, likes);
// };

// const showProfileInfo = function ({ name, tag, ...resProps }) {
//     console.log(name, tag, resProps);
// };

// const profile = {
//     name: 'Jacques John',
//     tag: 'john2006',
//     location1: 'Oslo',
//     stats: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);

// ---practice---

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
// console.table(this.items);
// добавляем распыление ждя того что бы было продуктов одинаковых больше 1, создаем новую переменную в которую добавляем новый объект quantity но перед этим  распиливаем оригинальный продукт в который мы передали (name, price)  и уже новый объект запушили в корзину

// const newProduct = {
//     ...product,
//     quantity: 1,
// };

//  теперь нужно проверить перед добавлением есть ли такой продукт в корзине и если есть, то изменить quantity
// this.items.push(newProduct);

// --- по результату перебора, если такой продукт уже есть, то увеличивается quantity количество на 1 и выходит с данного цикла к следующему не перебирая весь массив
//     for (const item of this.items) {
//         if (item.name === product.name) {
//             // console.log(item);
//             item.quantity += 1;
//             return;
//         }
//     }

//     const newProduct = {
//         ...product,
//         quantity: 1,
//     };
//     this.items.push(newProduct);
// },

// remove(productName) {
// ---- destruction this   =   {items} - сразу будет выводить нам массив, так как он является значением свойства items

// const { items } = this;

//----- for (const item of this.items) - пока что не подходит потому что нам нужно удалить методом splice в котором нам нужен индекс поэтому for  с итерацией [i]
// for (let i = 0; i < items.length; i += 1) {
// console.log(item);

//----- для простоты чтения, лучше сделать локальную переменную const item = this.items[i].name
// console.log(this.items[i]);

// if (productName === this.items[i].name) {
//     console.log('Нашли такой продукт', productName);
// }

//----- здесь мы после локальной переменной можем сделать destruction для item-так как она является объектом из массива items который мы перебрали

// const item = this.items[i];
// if (productName === item.name) {
//     console.log('Нашли такой продукт', productName);
// }

//---- const { name } = this.items[i]; - после destruction const {items} = this -- везде заменяем this.items на items

// const { name } = items[i];

// console.log(name);
//         if (productName === name) {
//             console.log('Нашли такой продукт', productName);
//             console.log(`Индекс продукта что удаляем ${productName} :`, i);
//             items.splice(i, 1);
//         }
//     }
// },
// clear() {
//     this.items = [];
// },
// countTotalPrice() {
// let total = 0;
// for (const item of this.items) {
//     // console.log(item);
//     total += item.price;
// }
// return total; --- делаем destruction

//         const { items } = this;
//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }
//         return total;
//     },
//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'orange', price: 70 });
// cart.add({ name: 'cherry', price: 110 });
// cart.add({ name: 'cherry', price: 110 });
// cart.add({ name: 'cherry', price: 110 });

// // console.table(cart.getItems());

// console.table(cart.getItems());

// console.log('Total:', cart.countTotalPrice());

// cart.remove('apple');

// console.table(cart.getItems());

// cart.clear();
// console.log(cart.getItems());

// console.log(apartment.location);
// console.log(apartment);

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line
//     const allPropName = [];
//     for (const product of products) {
//         const keys = Object.keys(product);
//         // const value = Object.values(product);

//         // console.log(keys);
//         // console.log(value);

//         if (keys.includes(propName)) {
//             // console.log(product[propName]);

//             allPropName.push(product[propName]);
//         }
//     }
//     // console.log(allPropName);
//     return allPropName;
//     // Change code above this line

// // Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// let totalPrice = 0;

//     // Пиши код ниже этой строки

// function calculateTotalPrice(productName) {
//     for (const product of products) {
//         const valueProducts = Object.values(product);
//         console.log(valueProducts);
//         if (valueProducts.includes(productName)) {
//             // console.log(valueProducts[1]);
//             // console.log(valueProducts[2]);
//             totalPrice = valueProducts[1] * valueProducts[2];
//         }
//     }
//     return totalPrice;
//     // Пиши код выше этой строки
// }

// calculateTotalPrice('Radar');
// console.log(totalPrice);

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line
// const {
//     today: {
//         low,
//         high,
//         icon: todayIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
//     tomorrow: {
//         low,
//         high,
//         icon: tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg',
//     },
// } = forecast;

// // const highToday = forecast.today.high;
// // const lowToday = forecast.today.low;
// // const todayIcon = forecast.today.icon;

// // const highTomorrow = forecast.tomorrow.high;
// // const lowTomorrow = forecast.tomorrow.low;
// // const tomorrowIcon = forecast.tomorrow.icon;
// console.log(high);

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],

//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//             this.potions.push(newPotion);
//         }
//     },

//     // Удаление элемента
//     removePotion(potionName) {
//         for (const potion of this.potions) {
//             if (potion.name === potionName) {
//                 this.potions.splice(this.potions.indexOf(potion), 1);
//                 return;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;
//     },

//     updatePotionName(oldName, newName) {
//         for (const potion of this.potions) {
//             if (potion.name === oldName) {
//                 potion.name = newName;
//                 return;
//             }
//         }
//         return `Potion ${oldName} is not in inventory!`;
//     },
// };

// const fruitPrice = {
//     apple: 10,
//     orange: 20,
//     kiwi: 15,
//     cherry: 30,
// };

// const entries = Object.entries(fruitPrice);
// // lvl 1
// // for (const entry of entries) {
// //     const [name, price] = entry;

// //     console.log(name, price);
// // }
// // lvl 2
// for (const [name, price] of entries) {
//     console.log(name, price);
// }

// // Объект настроек - Паттерн - когда в ф-цию прилетает много параметров это неудобно, поэтому

// const nameFn = function (params) {
//     // это метод destruction в теле функции, можно сделать тоже самое но только в параметрах
//     console.log(params);

//     const { age, friends, isOnline, ...restProps } = params;

//     console.log(age, friends, isOnline, restProps);
// };

// const nameFn1 = function ({ age, friends, isOnline }) {
//     console.log(age, friends, isOnline);
// };

// // nameFn(10, 5, true, [], {}, 6); - очень тяжело понять что это

// nameFn({
//     age: 10,
//     friends: 5,
//     isOnline: true,
//     hobbies: [],
//     games: {},
//     rating: 6,
// });

// nameFn1({
//     age: 10,
//     friends: 5,
//     isOnline: true,
//     hobbies: [],
//     games: {},
//     rating: 6,
// });

// const showProfileInfo = function (userProfile) {
//     console.log(userProfile);
// };
/**
 * Операция spread (распыление)
 * -Array.prototype.concat() и аналог через spread
 */

//Поиск самой маленькой и большой температуры (чисел)

// const temps = [12, 34, 5, 32, 1, 38, 6];

// console.log(Math.max(...temps));

/**
 * Сшиваем несколько массивов в один через concat() и spread
 */

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [];

// const allTempsConcat = lastWeekTemps.concat(currentTemps, nextWeekTemps);
// allTemps.push(...lastWeekTemps, ...currentTemps, ...nextWeekTemps);

// console.log(allTemps);
// console.log(allTempsConcat);

/**
 * Распыление объектов
 * Object.prototype.assign() and spread
 */

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 10 };

// const c = Object.assign({}, a, b);
// console.log(c);

// const ollObj = { ...a, ...b };
// console.log(ollObj);

/*
 *
 */

// const playlist = {
//     name: 'you',
//     rating: 5,
//     tracks: ['track-1', 'track-2'],
//     trackCount: 2,
// };

// const { name, rating: ratingTracks, tracks, ...restProps } = playlist;
// // console.log(rating);
// console.log(name, ratingTracks, tracks);
// console.log(restProps );
// console.log(playlist.rating);

//
// const[ ] = [1,2,3]
// console.log(([] = [1, 2, 3]));
//

// const rbg = [255, 155, 344];
// const [red, green, blue, alfa = 0.3] = rbg;

// console.log(red, alfa);

/**
 *
 *
 * Destructing array
 *
 *
 *
 */

// const author = {
//     kiwi: 4,
//     mango: 5,
//     polly: 12,
//     ajax: 10,
// };

// const entries = Object.entries(author);
// console.table(entries);

// for (const [name, rating] of entries) {
//     // console.log(entry);
// //ур 1

//     // const name = entry[0];
//     // const rating = entry[1];
//     // console.log(name, rating);

// //ур2
//     // const [name, rating] = entry;
//     console.log(name, rating);
// }

/**
 * Паттерн объект настроек - применяется когда у fn з и больше аргументов
 */

// const profiles = {
//     name: 'Jack',
//     tag: 'luke',
//     location: 'Jamaica',
//     avatar: 'https//s3.amazon',
//     stats: {
//         followers: 1352,
//         views: 2341,
//         likes: 3131,
//     },
// };

// function showProfileInfo(userProfile) {
//     // console.log(userProfile);
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         stats: { followers, views, likes },
//     } = userProfile;
//     console.log(name);
// }

// showProfileInfo(profiles);

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Работаем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 */

// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         for (const item of this.items) {
//             const { name } = item;

//             if (name === product.name) {
//                 // console.log(product);

//                 console.log('Такой продукт уже есть: ', product.name);
//                 item.quantity += 1;
//                 return;
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//         // this.items.push(product);
//     },
//     remove(productName) {
//         // for (const item of this.items) {
//         //     // console.log(item);
//         //     if (item.name === productName) {
//         //         console.log(`Мы нашли такой продукт ${productName}`);
//         //         const indexRemoveItem = this.items.indexOf(item);
//         //         return this.items.splice(indexRemoveItem, 1);
//         //     }
//         // }

//         // for (let i = 0; i < this.items.length; i += 1) {
//         //     const item = this.items[i];
//         //     if (item.name === productName) {
//         //         console.log(`Мы нашли такой продукт ${productName}`);

//         //         return this.items.splice(item, 1);
//         //     }
//         // }

//         //COOL---------COOL-----------COLL

//         const { items } = this;
//         // console.log(items);
//         for (let i = 0; i < items.length; i += 1) {
//             // console.log(items[i]);

//             const { name } = items[i];
//             // console.log(items[i].name);
//             // console.log(name);
//             if (name === productName) {
//                 console.log(`Мы нашли такой продукт ${productName}`);
//                 console.log('Индекс: ', i);
//                 return items.splice(i, 1);
//             }
//         }

//         //-------COOL-------COOL-----------COOL--------
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         const { items } = this;

//         let total = 0;

//         // for (const item of items)

//         for (const { price, quantity } of items) {
//             // const { price } = item;
//             // console.log(item)

//             total += price * quantity;
//         }
//         return total;
//     },
//     increaseQuantity(productName) {
//         //получает имя продукта, увеличивает quantity на 1, если такой продукт уже есть

//         const { items } = this;
//         for (let i = 0; i < items.length; i += 1) {
//             // console.log(items[i].name);
//             const { name } = items[i];

//             if (name === productName) {
//                 items[i].quantity += 1;
//             }
//         }
//     },
//     decreaseQuantity(productName) {
//         //получает имя продукта, если есть то  уменьшает quantity на 1;
//         const { items } = this;

//         for (let i = 0; i < items.length; i++) {
//             const { name } = items[i];

//             if (name === productName && items[i].quantity > 1) {
//                 items[i].quantity -= 1;
//             }
//         }
//     },
// };

// // console.table(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'strawberry', price: 160 });
// cart.add({ name: 'strawberry', price: 160 });
// cart.add({ name: 'strawberry', price: 160 });
// cart.add({ name: 'orange', price: 50 });
// cart.add({ name: 'cherry', price: 250 });

// // console.table(cart.getItems());

// cart.remove('lemon');

// // console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// cart.increaseQuantity('orange');
// cart.increaseQuantity('orange');
// cart.increaseQuantity('orange');
// cart.increaseQuantity('orange');

// console.log('Total: ', cart.countTotalPrice());

// cart.decreaseQuantity('orange');
// cart.decreaseQuantity('strawberry');
// cart.decreaseQuantity('strawberry');
// cart.decreaseQuantity('strawberry');
// cart.decreaseQuantity('strawberry');

// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 * Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов
 */

// function calcBMI({weight,height}) {
//     // const {weight,height} = params - сделали destruction в параметрах функции
//     const numberWeight = Number(weight.replace(',', '.'));
//     const numberHeight = Number(height.replace(',', '.'));
//     return Number((numberWeight / numberHeight ** 2).toFixed(1));
// }

// /**
//  * Было
//  * console.log(calcBMI('88,3','1,75'));
//  * console.log(calcBMI('68,2','1.64'));
//  * console.log(calcBMI('118,3','1.95'));
//  */

// //Ожидается
// console.log(calcBMI({weight:'88,3', height:'1,75',}))
// console.log(calcBMI({weight:'68,2', height:'1.64',}))
// console.log(calcBMI({weight:'118,3', height:'1.95',}))

/**
 * Перепиши функцию так, чтобы она принимала один объект параметров, вместо набора независимых аргументов
 */

// function printContactsInfo ({names,phones}) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     for (let i = 0; i < nameList.length; i+=1) {
//         console.log(`${nameList[i]}: ${phoneList[i]}`);
//     }
// };

// //Было

// // printContactsInfo(
// //     'Jacob,Mango',
// //     '8097,8050',
// // );

// //Ожидается

// printContactsInfo({
//     names:'Jacob,Mango',
//     phones:'8097,8050',
// });

/**
 * Перепиши функцию так чтобы она принимала один объект параметров, вместо набора независимых аргументов
 */

// function getBotReport(params) {
//     const {
//         companyName,
//         bots: { repair: repairBots, defense: defenseBots },
//     } = params;

//     return `${companyName} has ${repairBots + defenseBots} bots in stock`;
// }

// //It was
// // console.log(getBotReport('Cyber system', 150,50));

// //Expected
// console.log(
//     getBotReport({
//         companyName: 'Cyber system',
//         bots: {
//             repair: 150,
//             defense: 50,
//         },
//     }),
// );

/**
 * Дополни функцию createContacts(partialContact) так, что бы она возвращала новый объект контакта с добавлением свойства id и createdAt, а также list со значением 'default' если в partialContact нет такого свойства
 */

// function createdContacts(params) {
//     // const { name, email, list = 'default' } = params;

//     // const newObj = { name, email, list, id: generateId() };

//     // return newObj;

//     return {
//         list: 'default',
//         ...params,
//         id: generateId(),
//         createAt: Date.now(),
//     };
// }

// console.table(
//     createdContacts({
//         name: 'Mango',
//         email: '@gmail.com',
//         list: 'friend',
//     }),
// );

// function generateId() {
//     return '_' + Math.random().toString(36).substr(2, 9);
// }

/**
 *
 *
 *
 * Напиши функцию transformUserName(user) так, чтобы она возвращала новый объект со свойством fullName, вместо firstName и lastName
 *
 *
 *
 */

function transformUserName(user) {
    const { firstName, lastName, ...otherProps } = user;
    return {
        fullName: `${firstName + ' ' + lastName}`,
        ...otherProps,
        //при распылении ...otherProps в них не будут входить firstName and lastName
    };
}

console.log(
    transformUserName({
        id: 1,
        firstName: 'Jacob',
        lastName: 'Mer',
        email: '@gmail.com',
        friendCount: 40,
    }),
);
