'use strict';
// Привидение к булю на примере Boolean(value)

console.log(Boolean(undefined));

// логическое И (оператор &&)
// Запинается на лжи иди последний true

console.log(5 && 6);
console.log(null && 6);

// Логическое ИИ (операто ||) 
// Запинается на true или последний false

console.log(5 || false);
console.log(0 || false);
console.log(0 || null || 5 || false);