'use strict'
// Напиши скрипт проверки подписки пользователя  при доступе к контенту
// Три типа подписки: free, pro, and VIP
// Получить доступ могут только pro and VIP

const subscription = 'pro';
//If user pro or user VIP when access is allowed

const canAccessContent = subscription === 'pro' || subscription === 'VIP';
console.log('Есть доступ к контенту?', canAccessContent);
