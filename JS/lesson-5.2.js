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

// const objA = {
//     x: 5,
// }

// console.log(objA.__proto__===Object.prototype);

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


