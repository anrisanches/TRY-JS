import throttle from 'lodash.throttle';
console.log('HEllo');

const STORAGE_NAME = 'userName';
const STORAGE_MESSAGE = 'feedback-msg';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    input: document.querySelector('.js-feedback-form .form__input'),
    textarea: document.querySelector('.js-feedback-form .form__textarea'),
    radioBtn: document.querySelector('.js-feedback-form .form__label'),
};

// refs.form.addEventListener('click', onFormSubmit);
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onInputClick);
refs.textarea.addEventListener('input', onTextareaInput);
refs.radioBtn.addEventListener('change', onChoiceCheckbox);

const dataArr = [];

populateMessageOutput();

/**
 * - Stop actions default
 * - remove message from storage
 * - clean the form
 */

function onInputClick(evt) {
    const userName = evt.currentTarget.value;
    localStorage.setItem(STORAGE_NAME, userName);
}

/**
 * - get field value
 * - save it in storage
 */

function onTextareaInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem(STORAGE_MESSAGE, message);
}

function onChoiceCheckbox(evt) {
    // console.log(evt.currentTarget);
    // console.log(evt.target.value);
    // console.log('onChoiceCheckbox');
}

/**
 * - get value from storage
 * - if there  was something, update DOM
 */

function populateMessageOutput() {
    const data = {};
    const savedName = localStorage.getItem(STORAGE_NAME);
    const savedMessage = localStorage.getItem(STORAGE_MESSAGE);

    if (savedName) {
        data.userName = savedName;

        refs.input.value = savedName;
    }

    if (savedMessage) {
        data[STORAGE_MESSAGE] = savedName;

        refs.textarea.value = savedMessage;
    }

    dataArr.push(data);
}

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_NAME);
    localStorage.removeItem(STORAGE_MESSAGE);
}
