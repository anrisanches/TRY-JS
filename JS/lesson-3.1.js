'use strict'

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

const friends = [
    {name: 'Mango', online: false},
    {name: 'Kiwi', online: true},
    {name: 'Poly', online: true},
    {name: 'Ajax', online: false},
];

console.table(friends);

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

const getOnlineFriends = function (allFriends){
    const onlineFriends = []; 

    for (const friend of friends) {
        console.log(friend);
        console.log(friend.online);

        if(friend.online){
            onlineFriends.push(friend)
        }
    }
    return onlineFriends
}

console.log(getOnlineFriends(friends));

























