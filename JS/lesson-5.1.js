'use strict';
// const denObj = Object.create({message: 'Это свойство объекта прототипа'});
// denObj.message = 'это собственное свойство'
// console.log(`denObj: `, denObj);
// console.log(denObj.message);

// const objB = {z:4};
// const objA = Object.create(objB);

// objA.x = 5;
// console.log(objA);
// console.log(objA.x);

// class User {
//     // Синтаксис объявления метода класса
//     constructor(name, email) {
//       // Инициализация свойств экземпляра
//       this.name = name;
//       this.email = email;
//     }
//   }

//   const mango = new User("Манго", "mango@mail.com");
//   console.log(mango); // { name: 'Манго', email: 'mango@mail.com' }

//   const poly = new User("Поли", "poly@mail.com");
//   console.log(poly); // { name: 'Поли', email: 'poly@mail.com' }

// console.log([] === []);
// console.log({}==={});
// console.log(function(){}===function(){});

const user = {
    name: 'Mango',
    showTag() {
        console.log('showTag-> this', this);
        console.log('showTag-> this', this.name);
    },
};

// user.showTag()

// function foo() {
//     console.log('foo-> this', this);
// };

// user.showFoo = foo;
// user.showFoo()

// const outerShowTag = user.showTag();
// const outerShowTag = user.showTag;

// outerShowTag()
// user.outerShowTag();

function invokeAction(action) {
    console.log(action);

    action();
}

// invokeAction(user.showTag);

// console.log(user);

const book = {
    title: 'React for beginners',
    showThis() {
        console.log('showThis->', this);
    },
    showTitle() {
        console.log('showTitle -> this.title', this.title);
    },
};

// book.showThis();
// book.showTitle();

// const outerShowThis = book.showThis;
// outerShowThis();//ошибка undefine

// const outerShowTitle = book.showTitle;
// outerShowTitle()

// function makeChangeColor() {
//     function changeColor(color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     }
//     // changeColor()//какой this//Undefine

//     const sweater = {
//         color: 'teal',
//     };
//     sweater.updateColor = changeColor;

//     sweater.updateColor('red');//какой this?Ссылается на sweater

//     return sweater.updateColor;
// };

// // makeChangeColor()
// const swapColor = makeChangeColor();
// console.log(swapColor);
// swapColor('blue');//какой this??? Undefine

// function makeChangeColor() {
//     function changeColor(color) {
//         console.log('changeColor -> this', this);
//         this.color = color;
//     }

//     return changeColor;
// }

// const updateColor = makeChangeColor();
// // updateColor('yellow');//какой this

// const hat = {
//     color: 'blue',
//     updateColor,
// };

// hat.updateColor('orange'); //какой this
// console.log(hat);

//--------------------------------

// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
//     },
// };

// function updateCounter(value, operation) {
//     operation(value);
// }

// updateCounter(20, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));
// console.log(counter);

//-------call--------apply

function showThis() {
    console.log('changeColor -> this', this);
}

function changeColor(color) {
    console.log('changeColor -> this', this);
    this.color = color;
}

const hat = {
    color: 'black',
};

const sweater = {
    color: 'green',
};

// showThis.apply(hat);
// changeColor.apply(hat, ['green']);

// console.log(hat);

// changeColor.call(sweater, 'red');
// console.log(sweater);

/**
 * bind( ) - позволяет сделать копию функции с привязанным контекстом
 */

const changeHatColor = changeColor.bind(hat);

// changeHatColor('yellow');
// changeHatColor('purple');

// console.log(hat);

// const stoneShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],

//     calculateTotalPrice(stoneName) {
//         return this.stones.reduce((totalPrice, { name, price, quantity }) => {
//             if (stoneName === name) {
//                 totalPrice = price * quantity;
//             }

//             return totalPrice;
//         }, 0);
//     },
// };
// const stoneShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],

//     // calculateTotalPrice(stoneName) {
//     //     let total = 0;
//     //     this.stones.forEach(stone => {
//     //         if (stone.name === stoneName) {
//     //             total = stone.price * stone.quantity;
//     //         }
//     //     });
//     //     return total;
//     // },

//     calculateTotalPrice(stoneName) {
//         const findStone = this.stones.find(stone => stone.name === stoneName);

//         if (!findStone) {
//             return;
//         }
//         return findStone.price * findStone.quantity;
//     },
// };

// console.log(stoneShop.calculateTotalPrice('Emerald'));
// console.log(stoneShop.calculateTotalPrice('Diamond'));
// console.log(stoneShop.calculateTotalPrice('Sapphire'));
// console.log(stoneShop.calculateTotalPrice('Ruby'));

// const phoneBook = {
//     contacts: [],

//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createAt: this.getDate(),
//         };

//         this.contacts.push(newContact);
//         return this.contacts;
//     },

//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return Date.now;
//     },
// };

// console.log(
//     phoneBook.add({
//         name: 'Mango',
//         email: 'mango@gmail.com',
//         list: 'friends',
//     }),
// );

// const calculator = {
//     read(a, b) {
//         this.a = a;
//         this.b = b;
//         // return this;
//     },

//     add() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     },
// };

// calculator.read(5, 10);
// // console.log(calculator.read(5, 10));
// console.log(calculator.add());
// console.log(calculator.mul());

// console.log(calculator);
