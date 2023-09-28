// при destruction лучше ставить значение по умолчанию {} например, что бы не было ошибки
// const User = function({email, password} = {}){

//     this.email = email;
//     this.password = password;
// };

// console.log(User.prototype);

// User.prototype.changeEmail = function(newMail){
//     this.email = newMail
// }
// const mango = new User({email: 'mango@gmail.com', password: 'www'});

// mango.changeEmail('my-email@mail.com')
// console.log(mango);

const objA = {
  x: 5,
};


  // body

// console.log(objA.__proto__ === Object.prototype);

// class Car {

//     static staticProperty = 'Тут записывается статическое свойство';
//     static description = 'Класс описывающий автомобиль';
//     static logInfo (carObj){
//         console.log('Статический метод Car.logInfo -> carObj', carObj);
//     };

//     #test = 'test';

//     // Синтаксис публичного свойства, все что объявляется публичным свойством идет на экземпляр, но мы не хотим что бы методы класса были публичными свойствами - лучше что бы все лежало на прототипе
//     mySuperPublicField = 555;
//     // changeBrand = (newBrand) => {
//     //     this.brand = newBrand;
//     // }
//     constructor ({brand, model, price}){
//         // console.log('work construction');
//         // console.log(this);

//         this.brand = brand;
//         this._model = model;
//         this.price = price;

//         // this.mySuperPublicField = 555 - то же что и вверху

//         // this.#test = test-нужно объявить в самом классе выше и без this
//     }

//     changePrice(newPrice){
//         this.price = newPrice;
//     }
//     // updateModel(newModel){
//     //     this.model = newModel;
//     // }

//     get model (){
//         return this._model
//     };
//     // getModel(){
//     //     return this._model
//     // }

//     set model (newModel){
//         this._model = newModel
//     }
//     // setModel(newModel){
//     //     this._model = newModel;
//     // };
// };

// // console.dir(Car);

// const carInstance = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000
// });

// // console.log(Car.description);
// // console.log(carInstance);

// // console.log(Object.getPrototypeOf(carInstance));
// console.log(Object.getPrototypeOf(carInstance)=== Car.prototype);

// // carInstance.changePrice(49999999);
// // Car.logInfo(carInstance);

// // console.log(carInstance.getModel());

// // carInstance.setModel('Q4');
// // console.log(carInstance.getModel())

// console.log(carInstance.model)

// carInstance.model='TT'
// console.log(carInstance.model);

//----------------Наследование------------------

// class Hero{
//     constructor({name = 'hero', xp = 0} = {}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount){
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount
//     }
// }

// // const mango = new Hero({name: 'Mango', xp: 1000})

// // console.log(mango);

// class Warrior extends Hero{

//     constructor(amount){
//         // super() - супер это вызов конструктора родителя
//         super(amount)
//         // console.log(amount);
//         this.weapon = weapon;
//     }
// }

// const mango = new Warrior({name:'mango', xp: 1500, weapon: 'алебарда'})
// console.log(mango);

// class Hero {

//     constructor({name = 'hero', xp = 0}) {
//         this.name = name;
//         this.xp = xp;
//     }

//     gainXp(amount) {
//         console.log(`${this.name} получает ${amount} опыта`);
//         this.xp += amount;
//     }
// }

// // const mango = new Hero({name: 'Mango', xp: 1000})

// // console.log(mango);

// class Warrior extends Hero {
//     constructor({weapon, ...restProps}= {}) {
//         // super() - супер это вызов конструктора родителя
//         super(restProps);
//         // console.log(amount);
//         this.weapon = weapon;
//     }

//     attack() {
//         console.log(`${this.name} атакует используя ${this.weapon}`);
//     }
// }

// class Mage extends Hero {
//     constructor({name, xp, spells} = {}) {
//             super({name, xp});

//         this.spells = spells;
//     }

//     cast(){
//         console.log(`${this.name} создает из ${this.spells} бурю`);
//     }
// }
// const ajax = new Mage({name:'Ajax',xp: 2500, spells:['FireBall']});
// ajax.cast()
// ajax.gainXp(2900)
// console.log(ajax);

// const mango = new Warrior({name:'mango', xp:1500, weapon:'алебарда'});
// mango.attack();
// mango.gainXp(1000);

// class Storage {

//     constructor(items){
//         this.items = items;
//     }

//     getItems(){
//         return this.items;
//     };

//     addItem(newItem){
//         this.items.push(newItem)
//     }

//     removeItem(itemToRemove ){
//         this.items = this.items.splice(this.items.indexOf(itemToRemove), 1)
//     }
// }

// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."

// ----------------------------------------

// console.dir(Math.__proto__);

// const Car = function ({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
// };

// Car.prototype.changePrice = function (newPrice) {
//     this.price = newPrice;
// };

// Car.logInfo = function (carObj) {
//     console.log('Car logInfo ->', carObj);
// };

// const car = new Car({
//     brand: 'Audi',
//     model: 'Q3',
//     price: 35000,
// });

// class CarUser {
//     static description = 'Класс описывающий автомобиль';

//     static logInfo(carObj) {
//         console.log('CarUser  logInfo -> carObj', carObj);
//     }

//     #price;

//     constructor({ brand, model, price } = {}) {
//         console.log('Выполняется конструктор автоматически');
//         console.log('THIS ->', this);

//         this.a = 5;
//         this.b = 'aaa';

//         this.brand = brand;
//         this._model = model;
//         this.#price = price;
//     }

//     get model() {
//         return this._model;
//     }

//     set model(newModel) {
//         this._model = newModel;
//     }
// }

// const carInstance = new CarUser({ brand: 'Audi', model: 'Q3', price: 35000 });

// // console.dir(carInstance);
// // console.log(CarUser.prototype);
// // console.log(Object.getPrototypeOf(carInstance));
// // console.log(Object.getPrototypeOf(carInstance) === CarUser.prototype);

// // carInstance.price();

// carInstance.model = 'TT';

// console.log(carInstance.model);

// CarUser.logInfo(carInstance);

/**
 *
 * --------------------------------------------------Practice--------------------------------------------------------
 *
 */

/**
 * Напиши класс blogger для создания  объекта блогера со следующими свойствами:
 * email - почта, строка;
 * age - возраст, число;
 * numberOfPosts - количество постов, число
 * topics - массив тем на которых специализируется блогер
 * Класс ожидает один параметр - объект настроек с одноименными свойствами
 *
 * Добавить метод getInfo(), который возвращает строку:
 * Blogger ${email} is ${age} years old and has ${quantity posts} posts.
 *
 * Добавить метод updatePostCount(value), который в параметре value принимает количество постов которые нужно добавить пользователю.
 *
 *
 */

class Blogger {
  constructor({age,email,numberOfPosts,topics}={}) {
    this.age = age;
    this.email = email;
    this.numberOfPosts = numberOfPosts;
    this.topics = topics;
  }

  getInfo() {
    return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
  }

  updatePostCount(value) {
    // this.numberOfPosts = 
  }
}

const mango = new Blogger({
    email: 'mango@mail.com',
    age: 30,
    numberOfPosts: 343,
    topic: ['tech', 'cooking'],
});

mango.updatePostCount(555);
console.log(mango.getInfo());

// class Bloggers {
//     constructor({
//         email = '',
//         age = Number,
//         numberOfPosts = Number,
//         topic = [],
//     }) {
//         this.email = email;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topic = topic;
//     }

//     getInfo() {
//         return `Blogger ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//     }

//     updatePostCount(value) {
//         this.numberOfPosts += value;
//     }
// }

// const mango = new Bloggers({
//     email: 'mango@mail.com',
//     age: 30,
//     numberOfPosts: 343,
//     topic: ['tech', 'cooking'],
// });

// mango.updatePostCount(555);
// console.log(mango.getInfo());

/**
 * Напиши класс Storage который создает объект для управления складом товаров. При вызове будет получать один аргумент - начальный массив товаров и записывать его в свойство items.
 *
 * Добавь методы класса:
 *
 * getItems() - возвращает массив товаров
 * addItems(item) - получает новый товар и добавляет его к текущим
 * removeItem(item) - получает товар и если он есть, удаляет его из текущих
 *
 */

// class Storage {
//     constructor(items = []) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }
//     addItems(item) {
//         this.items.push(item);
//     }
//     removeItem(itemName) {
//         const item = this.items.find(el => el === itemName);

//         if (item) {
//             this.items = this.items.filter(element => element !== itemName);
//         }
//     }
// }

// const storage = new Storage(['apple', 'orange', 'lemon']);

// storage.addItems('banana');
// storage.removeItem('apple');

// console.log(storage.getItems());

//Напиши класс User который создает объект со свойствами login и email, Объяви приватные свойства #login #email и доступ к которым сделай через get set

// class User {
//     #_login;

//     #_email;

//     constructor({ login, email }) {
//         this.#_login = login;
//         this.#_email = email;
//     }

//     get login() {
//         return this.#_login;
//     }

//     set login(newLogin) {
//         this.#_login = newLogin;
//     }
// }

// const mango = new User({ login: 'mango', email: 'mango@mail.com' });

// mango.login = 'Ajax';
// console.log(mango.login);

/**
 * Напиши класс Notes который управляет коллекцией заметок в свойстве items.  Заметка - это объект со свойствами text и priority. Добавь классу статическое свойство Priority, в котором будет хранится объект с приоритетами.
 *
 * Добавь методы addNote(note), removeNote(text)? updateNote(text, newPriority);
 */

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//     };

//     constructor({ text = '', priority }) {
//         this.text = text;
//         this.Priority = priority;

//         this.items = [];
//     }

//     addNote(note) {
//         this.items.push(note);
//     }

//     removeNote(text) {
//         this.items = this.items.filter(el => el.text !== text);
//     }

//     updateNote(text, newPriority) {
//         const item = [...this.items].find(el => el.text === text);
//         if (item) {
//             return (item.priority = newPriority);
//         }
//     }
// }

// const myNote = new Notes([]);

// myNote.addNote({
//     text: 'my first note',
//     priority: Notes.Priority.LOW,
// });

// myNote.addNote({
//     text: 'my second note',
//     priority: Notes.Priority.NORMAL,
// });
// myNote.addNote({ text: 'my NOTE', priority: Notes.Priority.NORMAL });

// console.table(myNote.items);
// myNote.removeNote('my first note');

// myNote.updateNote('my NOTE', 'low');
// console.table(myNote.items);

//Напиши класс Toggle который принимает объект настроек {isOpen: boolean} и объявляет одно свойство on - состояние вкл/выкл (true\false). По умолчанию значение свойства false.

// class Toggle {
//     constructor({ isOpen = false } = {}) {
//         this.isOpen = isOpen;

//         this.on = isOpen;
//     }

//     toggle() {
//         this.on = !this.on;
//     }
// }

// const firstToggle = new Toggle({ isOpen: true });

// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();

// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');

class Hero {
  #quantityUsers;
  #password;
  static counter = 0;
  static addUser() {
    this.counter += 1;
    console.log(`Count of users ${this.counter}`);
  }
  constructor({ name, sex, age, classHero, email, password } = {}) {
    this.name = name;
    this.sex = sex;
    this.age = age;
    this.classHero = classHero;
    this.email = email;
    this.#password = password;
    Hero.addUser();
  }
  get passwordUser() {
    return this.name;
  }

  set passwordUser(value) {
    const unswer = prompt('Enter password');

    if (unswer !== this.#password) {
      return alert(`Go ==> to another plase`);
    } else {
      this.#password === value;
      console.log('Your password changed');
    }
  }
}

class Wizard extends Hero {
  constructor({ name, sex, age, classHero, email, password, damage, speling }) {
    super({ name, sex, age, classHero, email, password });
    this.damage = damage;
    this.speling = speling;
  }
}

const wizard = new Wizard({
  name: 'Alex',
  sex: 'man',
  age: 18,
  classHero: 'Wizard',
  email: 'ss@mail.com',
  password: 'qwerty',
  damage: 100,
  speling: 'fireBoll',
});

// wizard.passwordUser = 'sss';
// console.log(wizard);

// console.dir(wizard.passwordUser());

//!! 0
//Boolian(0)
//!!~0

//Порівняння на 0 та " " - пустий рядок не використовується, пошукати практику, що саме використовується
// if(array.includes(item) - we can replace on if(!!~index) )
//if(!!~ind) або if(ind !== -1)

// Change code below this line
const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// Change code above this line

console.log(
  getUserWithEmail(
    [
      {
        name: 'Moore Hensley',
        email: 'moorehensley@indexia.com',
        eyeColor: 'blue',
        friends: ['Sharron Pace'],
        isActive: false,
        balance: 2811,
        gender: 'male',
      },
      {
        name: 'Sharlene Bush',
        email: 'sharlenebush@tubesys.com',
        eyeColor: 'blue',
        friends: ['Briana Decker', 'Sharron Pace'],
        isActive: true,
        balance: 3821,
        gender: 'female',
      },
      {
        name: 'Ross Vazquez',
        email: 'rossvazquez@xinware.com',
        eyeColor: 'green',
        friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
        isActive: false,
        balance: 3793,
        gender: 'male',
      },
      {
        name: 'Elma Head',
        email: 'elmahead@omatom.com',
        eyeColor: 'green',
        friends: ['Goldie Gentry', 'Aisha Tran'],
        isActive: true,
        balance: 2278,
        gender: 'female',
      },
      {
        name: 'Carey Barr',
        email: 'careybarr@nurali.com',
        eyeColor: 'blue',
        friends: ['Jordan Sampson', 'Eddie Strong'],
        isActive: true,
        balance: 3951,
        gender: 'male',
      },
      {
        name: 'Blackburn Dotson',
        email: 'blackburndotson@furnigeer.com',
        eyeColor: 'brown',
        friends: ['Jacklyn Lucas', 'Linda Chapman'],
        isActive: false,
        balance: 1498,
        gender: 'male',
      },
      {
        name: 'Sheree Anthony',
        email: 'shereeanthony@kog.com',
        eyeColor: 'brown',
        friends: ['Goldie Gentry', 'Briana Decker'],
        isActive: true,
        balance: 2764,
        gender: 'female',
      },
    ],
    'blackburndotson@furnigeer.com'
  )
);
