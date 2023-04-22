import throttle from 'lodash.throttle';
console.log('HEllo');

const STORAGE_NAME = 'userName';
const STORAGE_MESSAGE = 'feedback-msg';
const STORAGE_DATA = 'userData';
const SELECTED_FILTER_DATA = 'selectedFilter';

const refs = {
    form: document.querySelector('.js-feedback-form'),
    input: document.querySelector('.js-feedback-form .form__input'),
    textarea: document.querySelector('.js-feedback-form .form__textarea'),
    radioBtn: document.querySelector('.js-feedback-form .form__label'),
};

refs.form.addEventListener('input', throttle(onFormInput, 1000));
refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', onInputClick);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
refs.radioBtn.addEventListener('change', onChoiceCheckbox);

const dataArr = [];

populateMessageOutput();

/**
 * - Stop actions default
 * - remove message from storage
 * - clean the form
 */

/**
 *
 * if we want to write data in localStorage, we use JSON.stringify(dog);
 * if we want to take data from localStorage, we use JSON.parse()
 */

function onInputClick(evt) {
    // const userName = evt.currentTarget.value;
    const userName = evt.target.value;
    localStorage.setItem(STORAGE_NAME, userName);
}

/**
 * - get field value
 * - save it in storage
 */

function onTextareaInput(evt) {
    // const message = evt.currentTarget.value; - will not work, because currentTarget has ascent, and when this event will happen, in stack inside will be full shit
    const message = evt.target.value;

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
    const savedName = localStorage.getItem(STORAGE_NAME);
    const savedMessage = localStorage.getItem(STORAGE_MESSAGE);

    if (savedName) {
        refs.input.value = savedName;
    }

    if (savedMessage) {
        refs.textarea.value = savedMessage;
    }
}

function onFormSubmit(evt) {
    evt.preventDefault();

    savedData(evt);

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_NAME);
    localStorage.removeItem(STORAGE_MESSAGE);
    localStorage.removeItem(STORAGE_DATA);
}

function savedData(eventForm) {
    const userDataResponse = {};

    //-----------START FORM DATA METHOD-----------------
    const formData = new FormData(eventForm.currentTarget);
    // console.log(formData);
    const formDataNew = new Object();

    formData.forEach((value, name) => {
        formDataNew[name] = value;
    });

    dataArr.push(formDataNew);
    //-----------------END FORM DATA METHOD--------------

    const { name, text_response, choice } = eventForm.currentTarget.elements;

    userDataResponse.name = name.value;
    userDataResponse.response = text_response.value;
    userDataResponse.choice = choice.value;

    dataArr.push(userDataResponse);
}

// console.log(dataArr);

const formData = {};

function onFormInput(evt) {
    const eventTarget = evt.target;
    formData[eventTarget.name] = eventTarget.value;

    const formDataJSON = JSON.stringify(formData);

    const sendDataLocalStorage = localStorage.setItem(STORAGE_DATA, formDataJSON);
}

function fillEntryField() {
    const getDataLocalStorage = localStorage.getItem(STORAGE_DATA);

    const parseUserData = JSON.parse(getDataLocalStorage);

    if (getDataLocalStorage) {
        refs.input.value = parseUserData?.name;

        refs.textarea.value = parseUserData?.text_response;
    }
}

fillEntryField();

// const arr = [1, 2, 33, [54, 67, 87, [102, 203], 55, 57]];
// console.log(arr.flat(Infinity));

const formSelect = document.querySelector('.form-select');

formSelect.addEventListener('submit', onFormSelectSubmit);
formSelect.addEventListener('change', onFormSelectChange);

function onFormSelectSubmit(evt) {
    evt.preventDefault();

    const targetEl = evt.target.elements;

    const formDataSelect = new FormData(formSelect);

    formDataSelect.forEach((value, key) => {
        console.log('key - ', key, 'value - ', value);
    });

    localStorage.removeItem(SELECTED_FILTER_DATA);

    formSelect.reset();

    // const formData = new FormData(evt.currentTarget);

    // formData.forEach((value, key) => {
    //     console.log('key - ', key, 'value - ', value);
    // });
}

initForm();

function onFormSelectChange(evt) {
    let parsedFilters = localStorage.getItem(SELECTED_FILTER_DATA);

    parsedFilters = parsedFilters ? JSON.parse(parsedFilters) : {};

    parsedFilters[evt.target.name] = evt.target.value;

    if (parsedFilters) {
        localStorage.setItem(SELECTED_FILTER_DATA, JSON.stringify(parsedFilters));
    }

    // console.log(parsedFilters);
}

function initForm() {
    let parsedFilters = localStorage.getItem(SELECTED_FILTER_DATA);

    parsedFilters = JSON.parse(parsedFilters);
    if (parsedFilters) {
        Object.entries(parsedFilters).forEach(([key, value]) => {
            formSelect.elements[key].value = value;
            // console.log(key, value);
        });
    }
}
