'use strict';

//1. У каждого объекта есть свойство __proto__
//2. В этом свойстве лежит ссылка на его ПРОТОТИП, то есть другой объект
//3. При создании литерала объекта, в свойство __proto__ записывается ссылка на function.prototype (на функция конструктор)
//
//
//

// const objA = {
//     x: 5,
// };

// console.log(objA.__proto__ === Object.prototype);
//
//
//

//4. Функция конструктор это просто функция:) (все делает магия оператора new ).
//5. Всю магию делает оператор new
//6. !!!Если функция вызывается через (new), создается пустой объект(где-то в памяти)
//7. Функция конструктора вызывается в контексте созданного объекта(её this ссылается на пустой объект).
//8. (За нас под капотом) В свойство this.__proto__ записывается ссылка на объект (какое-то имя например) функция Car.prototype
//  this = Object.create(User.prototype) - создается пустой объект с уже привязанным прототипом
//9. Ссылка на объект возвращается на место new Функция () "Car"
//
//
//

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

/**
 * ----------------------------
 * ----------------------------
 * ----------------------------
 * ----------------------------
 * ----------------------------
 * ----------------------------
 * ----------------------------
 * */

// class User {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }
// }

// // console.log(User);
// const mango = new User('Mango', 'Sancho');

// // console.log(mango);
// // console.log(mango.name, mango.email);
// const poly = new User('Poly', 'PolyDog');
// console.log(poly);

// const ajax = new User({
//     name: 'Ajax',
//     email: 'ajax@gmail.com',
//     age: 1231,
// });
// console.log(ajax);

// class UserName {
//     #password;

//     constructor({ name, email, password }) {
//         this.name = name;
//         this.email = email;
//         this.#password = password;
//     }

//     getEmail() {
//         return this.email;
//     }

//     removeEmail(newMail) {
//         this.email = newMail;
//     }

//     getPassword() {
//         return this.#password;
//     }

//     changePassword(newPassword) {
//         this.#password = newPassword;
//     }
// }
// const ajax = new UserName({
//     name: 'Ajax',
//     email: 'ajax@gmail.com',
//     age: 1231,
//     password: 'port123',
// });

// // console.log(ajax);
// // console.log(ajax.name);

// ajax.removeEmail('ajax@');
// console.log(ajax.getEmail());

// console.log(ajax.getPassword());
// ajax.changePassword('PORTO555');
// console.log(ajax.getPassword());
// // console.log(ajax.#password);

// class User {
//     static Roles = {
//         ADMIN: 'admin',
//         EDITOR: 'editor',
//     };

//     #password;
//     #role;

//     constructor({ name, age, password }) {
//         this.name = name;
//         this.age = age;
//         this.#password = password;
//     }

//     get role() {
//         return this.role;
//     }

//     set role(newRole) {
//         this.role = newPassword;
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2323,
//     password: 'MANGO123',
// });

// mango.name = 'Ajax';

// mango.password = '123123131';

// console.log(mango.password);
// console.log(mango);

// const User = function ({ name, age, email, country } = {}) {
//     this.name = name;
//     this.age = age;
//     this.email = email;
//     this.country = country;
// };

// User.prototype.changeName = function (newName) {
//     this.name = newName;
// };

// User.prototype.getName = function () {
//     return this.name;
// };

// User.prototype.changeAge = function () {
//     return this.age;
// };

// const mango = new User({
//     name: 'Mango',
//     age: 28,
//     email: 'mango@mail.com',
//     country: 'USA',
// });

// mango.changeName('Margo');
// console.log(mango.getName());
// console.log(mango);

// const ajax = new User();
// console.log(ajax);

console.log(Math.PI);
// Object.keys();--статический метод на конструкторе Object

// const Car = function ({ name } = {}) {
//     //2. Эта функция вызывается в контексте созданного где-то там объекта, то есть в this записывается ссылка на него
//     this.name = name;
//     // console.log(this); //это ссылка на пустой объект

//     //3. В свойство this.__proto__ записывается ссылка на объект Car.prototype, то есть Car.prototype это прототип будущего объекта (экземпляра)

//     //4.Ссылка на объект возвращается в место  вызова !new Car!
// };

// console.log(Car.prototype);
// //3. В свойство this.__proto__ записывается ссылка на объект Car.prototype, то есть Car.prototype это прототип будущего объекта (экземпляра)

// Car.prototype.changeName = function (newName) {
//     console.log('Car.prototype ->', this);
//     console.log('Hello :) ');
//     this.name = newName;
// };

// //1. Если функция создается через new где-то там создается пустой объект
// const myCar = new Car({
//     name: 'Mango',
// });
// myCar.changeName();

// console.log(myCar);
