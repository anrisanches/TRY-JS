'use strict';

// const arr = [1, 2, 3];
// arr.hello = ':)';

// console.log(arr);

// function fn() {
//     console.log('Hello');
// }
// fn.hello = ':)';

// console.dir(fn);
// console.dir(fn.hello);

// console.log({ a: 5, b: 10 });

// const playlist = {
// name: 'My first objects',
// rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     // trackCount: 3,
//     changeName (newName){
//         this.name = newName;
//         console.log(this);
//     },

//     addTrack(track){
//         this.tracks.push(track);
//         // this.trackCount = this.tracks.length
//     },

//     updateRating(newRating){
//         this.rating = newRating;
//     },
//     getTrackCount(){
//         return this.tracks.length;
//     },
//     // getName: function(a){
//     //     console.log('ага это getName', a);
//     // },
// // // Одно и тоже, верхнее старый метод
// //     getName(a){
// //         console.log('ага это getName', a);
// //     },
//     // это метод обЪекта
// };

// playlist.changeName('John new name');
// playlist.addTrack('new track');
// playlist.updateRating(11);
// console.log(playlist);
// console.log(playlist.getTrackCount());
// // Вызов ф-ции

// // playlist.getName(3422342);

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// // const keys = Object.keys(feedback);
// // // const keys = Object.keys(feedback);

// // for (const key of keys) {
// //     console.log(key);
// //     console.log(feedback[key]);

// //     totalFeedback += feedback[key];
// //     console.log(totalFeedback);
// // }

// const values = Object.values(feedback);
// console.log(values);

// const friends = [
//     {name: 'Mango', online: false},
//     {name: 'Kiwi', online: true},
//     {name: 'Poly', online: true},
//     {name: 'Ajax', online: false},
// ];

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         if(friend.name === friendName){
//             return 'Нашли!!!'
//         }
//     }
//     return 'не нашли :('
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Antonio'));

// const getAllName = function (allFriends){
//     const names = [];
//     for (const friend of friends) {

//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// };

// console.log(getAllName(friends));

// const getOnlineFriends = function (allFriends){
//     const onlineFriends = [];

//     for (const friend of friends) {
//         console.log(friend);
//         console.log(friend.online);

//         if(friend.online){
//             onlineFriends.push(friend)
//         }
//     }
//     return onlineFriends
// }

// console.log(getOnlineFriends(friends));

//RETURN TO JS--------------------------------------
// const street = 'Park Rd';
// const propPublish = 'yearOfPublish';

// const book = {
//     title: 'The Last Kingdom',
//     author: 'Bernard Co',
//     genres: ['prose', 'adventure'],
//     rating: 3.12,
//     isPublic: true,
//     [propPublish]: 1986,
//     location: {
//         country: 'Jamaica',
//         city: 'O',
//         street,
//     },
// };

// console.log(book.title);
// console.log(`work with array - ${book.genres}`);
// console.log(book.genres[0]);
// console.log(book.genres.length);
// console.log(book.location.country);
// console.log(book.location.street);
// console.log(book.yearOfPublish);
// const bookRating = book['rating'];
// console.log(bookRating);

// const propKey = 'location';
// const bookLocation = book[propKey];
// console.log(bookLocation);
//Change value

// const changeLocationCity = book.location.city;
// book.location.city = 'Kingston';
// book.genres.push('драма');

// console.table(book);

//add value

// book.pageCount = 834;
// book.translation = 'ua';
// console.table(book);

// book.location.street;
// console.table(book);

// const bookShelf = {
//     books: ['The Last Kingdom', 'Dream Guardian'],

//     getBook() {
//         console.log('this method will return oll books - property books');
//         return this.books;
//         // return bookShelf.books;
//     },

//     addBook(bookName) {
//         console.log('this method will be add new book in property books');
//         this.books.push(bookName);
//         // bookShelf.books.push(bookName);
//         return this.books;
//         // return bookShelf.books;
//     },
//     removeBook(bookName) {
//         const bookIndex = this.books.indexOf(bookName);
//         this.books.splice(bookIndex, 1);
//     },
// };

// console.log(bookShelf.getBook());
// bookShelf.addBook('New book');
// console.log(bookShelf.books);
// bookShelf.removeBook('New book');
// console.log(bookShelf.getBook());

// const playlist = {
//     name: 'my playlist',
//     rating: 5,
//     tracks: ['track-1', 'track-2', 'track-3'],
//     trackCount: 3,
//     getName(number) {
//         console.log('This is a function, :) -', number);
//     },
//     changeName(newName) {
//         console.log('this внутри changeName -', this);
//         this.name = newName;
//     },
//     addTrack(newTrack) {
//         this.tracks.push(newTrack);
//         // this.trackCount = this.tracks.length; - количество треков в плейлисте не должно хранится на самом плейлисте, нужно новую функцию
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         // this.trackCount = this.tracks.length; - хранить на самом объекте не нужно, при потребности мы прости его берем с метода, когда нужно, поэтому здесь return
//         return this.tracks.length;
//     },
// };

// playlist.getName(8);
// playlist.changeName('New name playlist');
// playlist.addTrack('New track-4');
// playlist.updateRating(10);
// console.log(playlist.getTrackCount());

// console.table(playlist);

/*
 * Перебор через (for...in - не юзать бесполезен) и Object.keys|values|entries
 */

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// const entries = Object.entries(feedback);
// console.log(entries);

// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//     // console.log(typeof key);
//     console.log(`${key} - it's equals values - ${feedback[key]}`);

//     totalFeedback += feedback[key];
// }
// console.log('totalFeedback: ', totalFeedback);

// const objValues = Object.values(feedback);

// for (const objValue of objValues) {
//     totalFeedback += objValue;
// }

// console.log('totalFeedback: ', totalFeedback);

/*
 *Работа с коллекцией (массив объектов)
 */

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Ajax', online: false },
//     { name: 'Kong', online: true },
// ];

// console.table(friends);

/*
 * find friend by the name
 */

// function findFriendByName(allFriends, name) {
//     for (const obj of allFriends) {
//         if (obj.name === name) {
//             return `We find your friend ${name}`;
//         }
//     }
//     return `Your friend ${name} isn't find`;
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Che'));

/*
 * get names oll friends
 */

// function getAllNames(allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// }

// console.log(getAllNames(friends));

/*
 * get online friends
 */

// function getOnlineFriends(allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         // if (friend.online === true) { ---- плохая практика буль сравнивать с булем (у на и так понятно что online - true, поэтому вариант ниже)
//         //     onlineFriends.push(friend);
//         // }

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }
//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));

// function getOfflineFriends(allFriends) {
//     const offlineFriends = [];
//     for (const friend of allFriends) {
//         if (!friend.online) {
//             offlineFriends.push(friend);
//         }
//     }
//     return offlineFriends;
// }

// console.log(getOfflineFriends(friends));

// Создать 2 массива офлайн и онлайн

// function getFriendsByOnlineStatus(allFriends) {
//     const onlineStatus = {
//         online: [],
//         offline: [],
//     };

//     for (const friend of allFriends) {
//         // if (friend.online) {
//         //     onlineStatus.online.push(friend);
//         // } else onlineStatus.offline.push(friend);

//         //тернарный оператор плохая идея
//         //     const friendStats = friend.online
//         //         ? onlineStatus.online.push(friend)
//         //         : onlineStatus.offline.push(friend);
//         // }

//         if (friend.online) {
//             onlineStatus.online.push(friend);
//             continue;
//         }
//         onlineStatus.offline.push(friend);

//         // onlineStatus[friend.online ? 'online' : 'offline'].push(friend);

//         // const key = friend.online ? 'online' : 'offline';
//         // onlineStatus[key].push(friend);
//     }

//     return onlineStatus;
// }

// console.log(getFriendsByOnlineStatus(friends));

/**
 * Работаем с коллекцией товаров в корзине:
 * - getItems();
 * - add(product);
 * - remove(productName);
 * - clear();
 * - countTotalPrice();
 * increaseQuantity(productName);
 * decreaseQuantity(productName);
 */

// const x = {
//     a: 2,
//     b: 10,
//     c: 50,
//     d: 100,
// };

// console.log(Object.keys(x).length);

const cart = {
    item: [],
    getItem(product) {
        return this.item;
    },

    add(product) {
        product.quantity = 1;
        product.quantity += 1;
        this.item.push(product);
    },

    remove(productName) {
        for (const product of this.item) {
            if (product.name === productName) {
                const indexProductInItem = this.item.indexOf(product);

                const deleteItem = this.item.splice(indexProductInItem, 1);
            }
        }
    },

    clear() {
        this.item = [];
    },

    countTotalPrice() {
        let totalPrice = 0;

        for (const product of this.item) {
            totalPrice += product['price'];
        }

        return totalPrice;
    },
    increaseQuantity(productName) {
        for (const product of this.item) {
            if (product.name === productName) {
                this.item.push(product);
                break;
            }
        }
    },

    decreaseQuantity(productName) {
        for (const product of this.item) {
            if (product.name === productName) {
                const findIndexProduct = this.item.indexOf(product);
                this.item.splice(findIndexProduct, 1);
                break;
            }
        }
    },
};

// console.table(cart.getItem());

cart.add({ name: 'lemon', price: 50 });
cart.add({ name: 'apple', price: 60 });
cart.add({ name: 'apple', price: 60 });
cart.add({ name: 'strawberry', price: 110 });

// console.table(cart.getItem());

// cart.remove('apple');
// console.log(cart.getItem());

// cart.clear();
// console.log(cart.getItem());

// cart.increaseQuantity('lemon');
// cart.increaseQuantity('strawberry');
// console.table(cart.getItem());

// cart.decreaseQuantity('apple');
// cart.decreaseQuantity('apple');

// console.log(cart.getItem());

// console.log('Total: ',cart.countTotalPrice());
