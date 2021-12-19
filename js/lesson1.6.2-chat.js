'use strict'
// Напиши скрипт который проверяет возможность открыть чат с пользователем, для этого пользователь должен быть:
// другом
// онлайн 
// без режима не беспокоить

const isOnLine = true;
const isFriend = true;
const isDnd = false;

const canOpenChat =isOnLine && isFriend && !isDnd;
console.log(`Можно открыть чат?`, canOpenChat)