'use strict';

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
const street = 'Park Rd';
const propPublish = 'yearOfPublish';

const book = {
    title: 'The Last Kingdom',
    author: 'Bernard Co',
    genres: ['prose', 'adventure'],
    rating: 3.12,
    isPublic: true,
    [propPublish]: 1986,
    location: {
        country: 'Jamaica',
        city: 'O',
        street,
    },
};

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
