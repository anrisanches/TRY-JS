'user strict'

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
  
//   for (const key in book) {
//     // Ключ
//     console.log(key);
//     // Значение свойства с таким ключом
//     console.log(book[key]);
//   }

// const book = {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["historical prose", "adventure"],
//     rating: 8.38,
//   };
//   const keys = Object.keys(book);
//   console.log(keys);

//   for (const key of keys) {
//     // Ключ
//     console.log(key);
//     // Значение свойства
    // console.log(book[key]);
//   }

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//     {
//       title: "Сон смешного человека",
//       author: "Федор Достоевский",
//       rating: 7.75,
//     },
//   ];

//   const authorName = [];

//   for (const book of books){
//       authorName.push(book.author);
//   }

//   console.log(authorName);

//   let totalRating = 0;

//   for (const book of books){
//       console.log(book.rating)

//       totalRating += book.rating;
//       console.log(totalRating)
//   }

//   console.log((totalRating / books.length).toFixed(1));
//   for (const book of books) {
//     // Объект книги
//     console.log(book);
//     // Название
//     console.log(book.title);
//     // Автор
//     console.log(book.author);
//     // Рейтинг
//     console.log(book.rating);
//   }

//   const bookNames = [];

// for (const book of books) {
//   bookNames.push(book.title);
// }

// =====================


// function multiply(firstNumber, secondNumber, ...otherArgs) {
//   console.log(firstNumber); // Значение первого аргумента
//   console.log(secondNumber); // Значение второго аргумента
//   console.log(otherArgs); // Массив остальных аргументов
// }

// multiply(1, 2);
// multiply(1, 2, 3);
// multiply(1, 2, 3, 4, 5);

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "На берегу спокойных вод",
//       author: "Роберт Шекли",
//       rating: 8.51,
//     },
//   ];
  
//   for (const book of books) {
//     console.log(book.title);
//     console.log(book.author);
//     console.log(book.rating);
//   }

//   const user = {
//     name: "Jacques Gluke",
//     tag: "jgluke",
//     stats: {
//       followers: 5603,
//       views: 4827,
//       likes: 1308,
//     },
//   };
  
//   const {
//     name,
//     tag,
//     stats: { followers, views: userViews, likes: userLikes = 0 },
//   } = user;
  
//   console.log(name); // Jacques Gluke
//   console.log(tag); // jgluke
//   console.log(followers); // 5603
//   console.log(userViews); // 4827
//   console.log(userLikes); // 1308

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];


// const productKeys = [];

// function getAllPropValues(propName) {
//   // Change code below this line

 
//   for( const product of products){

//     // console.log(product[propName]);

//     if(Object.keys(product) === propName){
//         console.log(5)
//     }
//   }
//   return
// }
// console.log(productKeys)

// console.log(getAllPropValues("name"));




// const users = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location1: {
//     country: "Jamaica",
//     city: "Ocho Rios",
//   },
//   hobbies: ["swiming", "music", "sci-fi", 'ajax', 'merry'],
// };

// const location1 = users.location1;
// console.log(location1);

// const country = users.location1.country;
// console.log(country); 

// const hobbies = users.hobbies;
// console.log(hobbies); 

// const firstHobby = users.hobbies[3];
// console.log(firstHobby); 

// const numberOfHobbies = users['hobbies'];
// console.log(numberOfHobbies);

// const  index4 = users.location1.indexf('music')


// const nameSecond = 'Edvard Po';

// const secondAuthor = 'nameSecond';


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//     rating: 8.38,
//     [secondAuthor]: 'Edgar Po'
// };

// // user[secondAuthor] = 'nameSecond';

// book.translations = ["ua", "ru"];
// book.languages = 'en'

// const bookTitle = book["title"];
// console.log(bookTitle); // 'The Last Kingdom'

// const bookGenres = book["genres"];
// console.log(bookGenres); // ['historical prose', 'adventurs']

// const propKey = "author";
// const bookAuthor = book[propKey];
// console.log(bookAuthor); // 'Bernard Cornwell'

// const bookLanguages = book["languages"];
// console.log(bookLanguages);

// console.log(book)


// Необходимо написать логику обработки заказа пиццы. Выполни рефакторинг метода order так, чтобы он принимал вторым и третим параметрами два колбэка onSuccess и onError.

// Если в свойстве pizzas нет пиццы с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onError, передавая ему аргументом строку "There is no pizza with a name <имя пиццы> in the assortment."
// Если в свойстве pizzas есть пицца с названием из параметра pizzaName, метод order должен возвращать результат вызова колбэка onSuccess, передавая ему аргументом имя заказанной пиццы.
// После объявления объекта pizzaPalace мы добавили колбэки и вызовы методов. Пожалуйста ничего там не меняй.

// ---------------------------------------------
// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, onSuccess, onError) {
//     if (this.pizzas.includes(pizzaName)) {
//       return onSuccess(pizzaName);
//     }
//     return onError(pizzaName);
//   },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `There is no pizza with a name ${error} in the assortment.`;
// }

// // Method calls with callbacks
// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// console.dir(pizzaPalace)


// -----------------------------------------
// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line
//   numbers.forEach(number => {
//     if (number > value) {
//       return filteredNumbers.push(number)
//     }
//   });

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20))


// ---------------------------------
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   firstArray.forEach(number => {
//     if (secondArray.includes(number)) {
//       commonElements.push(number)
//     }
//   });

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));

// Change code below this line

// --------------------------
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0

//   orderedItems.forEach(item => totalPrice += item)

//   return totalPrice;
// }

// // function calculateTotalPrice(orderedItems) {
// //   let totalPrice = 0;

//   // orderedItems.forEach(function (item) {
//   //   totalPrice += item;
//   // });
 
//   // return totalPrice;
// // }
// // Change code above this line

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]))
// ------------------------------------------------------

// Замени объявление функции filterArray() и коллбек для метода forEach() на стрелочные функции.

// const filterArray = (numbers, value) => {
//   const filteredNumbers = []
  
//   numbers.forEach(number => {
//     if (number > value) {
//       filteredNumbers.push(number)
//     }
//   });
//   return filteredNumbers
// };

// // function filterArray(numbers, value) {
// //   const filteredNumbers = [];

// //   numbers.forEach(function (number) {
// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   });

//   // Change code above this line
// //   return filteredNumbers;
// // }

// console.log(filterArray([12, 24, 8, 41, 76], 20));

// ------------------------------------------------------

// Замени объявление функции getCommonElements() и коллбек для метода forEach() на стрелочные функции.

// const getCommonElements = (firstArrey, secondArrey) => {
//   const commonElements = [];

//   firstArrey.forEach(element => {
//     if (secondArrey.includes(element)) {
//       commonElements.push(element);
//     }
//   });
//   return commonElements;
// }

// // function getCommonElements(firstArray, secondArray) {
// //   const commonElements = [];

// //   firstArray.forEach(function (element) {
// //     if (secondArray.includes(element)) {
// //       commonElements.push(element);
// //     }
// //   });

//   // Change code above this line
//   // return commonElements;
// // }

// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))

// ----------------------------------------

// Функция changeEven(numbers, value) принимает массив чисел numbers и обновляет каждый элемент, значение которого это чётное число, добавляя к нему значение параметра value.    Выполни рефакторинг функции так, чтобы она стала чистой - не изменяла массив чисел numbers, а создавала, наполняла и возвращала новый массив с обновлёнными значениями.

// const changeEven = (numbers, value) => {
//   const newChacgeEven = [];
 

// newArray = changeEven;


// function changeEven(numbers, value) {
//   // Change code below this line
//   let newArray = [];

//   numbers.forEach(number => {
//     if (number % 2 === 0) {
//       newArray.push(number + value)
//     } else {
//       newArray.push(number)
//     }
//   });
//   return newArray

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] % 2 === 0) {
//   //     numbers[i] = numbers[i] + value;
//   //   }
//   // }
//   // newArray.push(...numbers)
//   // // newArray = numbers
//   // console.log(numbers)
//   // return newArray
//   // do not tach
// }

// console.log(changeEven([9,2,13,34,13,15,32,24,15,20,32,34,20,32,23], 14 ))

// -----------------------------------------

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planets => planets.length);

// console.log(planetsLengths)

// -----------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(books => books.title);

// console.log(titles)

// ---------------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers)
// console.log(oddNumbers)

// -------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(books => books.genres);
// const uniqueGenres = allGenres.filter((genres, index, array)=> array.indexOf(genres) === index);

// console.log(allGenres);
// console.log(uniqueGenres);

// ----------------------------------------------------

// Используя метод filter() дополни код так, чтобы:В переменной topRatedBooks получился массив книг рейтинг которых (свойство rating) больше либо равно значению переменной MIN_RATING. В переменной booksByAuthor получился массив книг написанных автором с именем (свойство author) которое совпадает со значением в переменной AUTHOR.



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// // const topRatedBooks = books.filter(({rating}) => rating >=MIN_RATING);


// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks)
// console.log(booksByAuthor)

// ---------------------------------
// const students1 = ["Вика", "Андрей", "Олег", "Юля", "Борис", "Катя"];

// const inAlphabetOrder = [...students1].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students1].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']


// const students = [
//   { name: "Манго", score: 83 },
//   { name: "Поли", score: 59 },
//   { name: "Аякс", score: 37 },
//   { name: "Киви", score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );

// console.log(inAscendingScoreOrder)

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder)

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder)

// -----------------------------------------------------------

// -----------------.FILTER----------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//     age: 37
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//     age: 34
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//     age: 24
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//     age: 21
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//     age: 27
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//     age: 38
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//     age: 39
//   }
// ]


// // const getUsersWithEyeColor = (users, color) => {
// //   return users.filter(user => user.eyeColor === color);
// // };
// // getUsersWithEyeColor(users, 'brawn')
// // // console.log(color)
// // console.log(users[1].eyeColor)



// // --------------------------------------

// const getUsersWithAge = (users, minAge, maxAge) => {
  
//   return users.filter(user => user.age >= minAge && user.age <= maxAge);
// };

// console.log(getUsersWithAge(users, 20, 40))
// // Дополни функцию getUsersWithFriend(users, friendName) так, чтобы она возвращала массив пользователей у которых есть друг с именем в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

// const getUsersWithFriend = (users, friendName) => {
//   return users.filter(user => user.friends.includes(friendName))
//   // users.flatMap(user=> user.friends)
//   // users.filter(user => user.friends === friendName).flatMap()
// };
// const friendName = "Briana Decker"
// console.log(getUsersWithFriend(users, "Briana Decker"))

// // Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.

// const getFriends = (users) => {
//   return users.flatMap(user=>user.friends).filter((friends, index, array)=> array.indexOf(friends) === index)
//   // return users.filter((user, index, array)=> array.infexOf(user) === index)
// };

// console.log(getFriends(users));


// // Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.

// const getActiveUsers = (users) => {
//   return users.filter(user => user.isActive === true)
//   // isActive: true,
// };
// console.log(getActiveUsers(users))

// // Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.

// const getActiveUsers1 = (users) => {
//   return users.filter(user => user.isActive !== true)
//   // isActive: false,
// };
// console.log(getActiveUsers1(users))

//-------------------------------------------------------------

// -------------.FIND--------------

// Используя метод find() дополни код так, чтобы:
// В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// // console.log(bookWithTitle)
// const bookByAuthor = books.find(book => book.author === AUTHOR);
// console.log(bookByAuthor);

// // -------------------------------------------------------------------------


// // Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ];


// const getUserWithEmail = (users, email) => {
//   return users.find(user => user.email === email);
// };
// console.log(getUserWithEmail(users, "elmahead@omatom.com"));

// // --------------------.EVERY(CALLBACK)-------------------------------
// Используя метод every() дополни код так, чтобы:
// В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.

// const firstArray = [26, 94, 36, 18];

// const eachElementInFirstIsEven = firstArray.every(number => number %2 === 0);
// console.log(eachElementInFirstIsEven);

// const eachElementInFirstIsOdd = firstArray.every(number => number %2 !== 0);
// console.log(eachElementInFirstIsOdd);

// --------------.REDUCE(PREVIOUSvALUE, ELEMENT, INDEX, ARRAY)=>{BODY CALLBACK}----------------
// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((playerTime, time) => playerTime + time);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(averagePlayTime);

// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const totalScore = students.reduce((total, student) => {
//   return total + student.score
// },0);
// console.log(totalScore);

// const averageScore = totalScore / students.length;
// console.log(averageScore);

// -------------------------------------

// Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//   return total + (player.playtime / player.gamesPlayed);
// },0);


// console.log(totalAveragePlaytimePerGame)

// ----------------------------------------
// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// // Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.

// const calculateTotalBalance = users => {
//   return users.reduce((userBalanse, user) => userBalanse + user.balance, 0);
//   // users.reduce((userBalanse, user) => userBalanse + user.balance);
// };

// console.log(calculateTotalBalance(users))

// // Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
// console.log(users[1].friends.length)

// const getTotalFriendCount = users => {
//   // 1-first
//   // let userLength = users.flatMap(user => user.friends);
//   // console.log(userLength.length)

//   // 2-second
//   // return users.reduce((userFriends, user) => { return (userFriends += user.friends.length); }, 0);

//   // 3 - third
//   return users.reduce((userFriends, user) => (userFriends += user.friends.length), 0);
// }
// console.log(getTotalFriendCount(users))

// --------------[...args].SORT()---------------------------

// Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// // const ascendingReleaseDates = [...releaseDates].sort();
// // console.log(ascendingReleaseDates);

// // const alphabeticalAuthors = [...authors].sort();
// // console.log(alphabeticalAuthors);

// // Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.

// // const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// // const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// // console.log(descendingReleaseDates)

// // Онлайн бибилиотеке необходимо отображать книги отсортированные по автору, в алфавитном и обратном алфавитном порядке. Дополни код так, чтобы в переменной authorsInAlphabetOrder получилась отсортированная по алфавиту копия массива authors, а в переменной authorsInReversedOrder копия отсортированная в обратном алфавитном порядке.

// const authorsInAlphabetOrder = [...authors].sort((firstString, secondString)=> firstString.localeCompare(secondString));
// // console.log(authorsInAlphabetOrder)

// const authorsInReversedOrder = [...authors].sort((firstString, secondString) => secondString.localeCompare(firstString));

// ---------------------------------------------------

// Дополни код так, чтобы:
// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const sortedByAuthorName = [...books].sort((firstString, secondString)=> firstString.author.localeCompare(secondString.author));
// // console.log(sortedByAuthorName)


// const sortedByAscendingRating = [...books].sort((a,b)=> a.rating-b.rating);
// // console.log(sortedByAscendingRating)

// const sortedByDescentingRating = [...books].sort((b,a)=> a.rating - b.rating);

// -------------------------------------
const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
]

// Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).

// const sortByAscendingBalance = users => {
//   // return [...users].sort((a, b) => {
//   //   return b.balance.localeCompare(a.balance)
//   // })
//   return [...users].sort((firtsBalance, secondBalance)=> secondBalance.balance - firtsBalance.balance)
// };

// console.log(sortByAscendingBalance(users))

// Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).

// const sortByDescendingFriendCount = users => {
//   return [...users].sort((firstQuantityFriends, secondQuantityFriends)=> secondQuantityFriends.friends.length - firstQuantityFriends.friends.length)
   
// };

// console.log(sortByDescendingFriendCount(users))

// Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.

// const sortByName = users => {
//    return [...users].sort((firstName, secondName)=> firstName.name.localeCompare(secondName.name))
// };

// console.log(sortByName(users))


// ------------------------------------------
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter((author)=>author.rating > MIN_BOOK_RATING).map(book=>book.author).sort((firstName,secondName)=> firstName.localeCompare(secondName));
// // const names = [...books].sort((firstName,secondName)=> firstName.author.localeCompare(secondName.author)).filter((author)=>author.rating > MIN_BOOK_RATING).map(book=>book);

// // const names = 

// console.log(names)

// ----------------------------------
// const getNamesSortedByFriendCount = users => {
//    return [...users].sort((a,b)=>b.friends.length - a.friends.length).map((nameBiggestFriend)=> nameBiggestFriend.name)
// };
// // Change code above this line
// // 1. [names]
// // 2. sort by -> friends.length

// console.log(getNamesSortedByFriendCount(users))

// --------------------------------------
// Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .

// const getSortedFriends = users => {
//   return users.flatMap((user)=>user.friends).filter((frendsUnicode, index, array) => array.indexOf(frendsUnicode) === index).sort((a,b)=>a.localeCompare(b))

// };

// console.log(getSortedFriends(users))


// ------------------------------------------
// Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// const getTotalBalanceByGender = (users, gender) => {
//    return users.filter(user => user.gender === gender).map(user=> user.balance).reduce((totalBalanse, userBalanse)=> totalBalanse +userBalanse,0)
// };

// // 1. Oll balanse
// // 2. gender = male

// console.log(getTotalBalanceByGender(users, "male"))
// // gender это строка "male"
// // gender это строка "female"