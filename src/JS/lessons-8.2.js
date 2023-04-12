'use strict';

console.log('HEllo');

const refs = {
    form: document.querySelector('.form'),
    input: document.querySelector('.form__input'),
};

refs.input.addEventListener('input', onInputClick);

function onInputClick(evt) {
    C;
    console.log(evt.currentTarget.value);
}
