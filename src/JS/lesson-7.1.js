('use strict');
import color_pickers from './data/color-pickers.js';
import { courses } from './data/courses.js';

//-----Выбирает одну кнопку из всех-------------

// const containerRefs = document.querySelector('.container');
// containerRefs.addEventListener('click', onBtnCurrentClick);
// let selectedTag = null;

// function onBtnCurrentClick(evt) {
//     if (evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     clickOnCurrentActiveBtn();

//     // if (evt.target.classList.contains('is-active')) {
//     //     evt.target.classList.remove('is-active');
//     //     return;
//     // } //Выделяет все кнопки

//     const nextTag = evt.target;
//     nextTag.classList.add('is-active');
//     selectedTag = nextTag.dataset.value;
//     console.log(selectedTag);
// }

// function clickOnCurrentActiveBtn() {
//     const currentActiveBtn = document.querySelector('.is-active');

//     currentActiveBtn?.classList.remove('is-active'); //более новый синтаксис

//     // if (currentActiveBtn) {
//     // currentActiveBtn.classList.remove('is-active');
//     // }
// }

//--------Выбирает по одной кнопке--------------

// const containerRefs = document.querySelector('.container');
// containerRefs.addEventListener('click', onButtonClick);
// const selectedTags = new Set();

// function onButtonClick(e) {
//     if (e.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const activeBtn = e.target;
//     if (e.target.classList.contains('is-active')) {
//         selectedTags.delete(e.target.dataset.value);
//     } else {
//         selectedTags.add(activeBtn.dataset.value);
//     }

//     console.log(selectedTags);
//     activeBtn.classList.toggle('is-active');
// }

//-----COLOR PICKERS -------------------------

const paletteContainerRef = document.querySelector('.js-palette');
paletteContainerRef.addEventListener('click', onCurrentColorContainerClick);

const markup = createColorCardsMarkup(color_pickers);
// paletteContainerRef.insertAdjacentHTML('afterbegin', markup);
paletteContainerRef.insertAdjacentHTML('beforeend', markup);

function createColorCardsMarkup(cards) {
    return cards
        .map(({ hex, rgb }) => {
            return `<div class="color-card">
                <div
                    class="color-swatch"
                    data-hex="${hex}"
                    data-rgb="${rgb}"
                    style="background-color: ${hex}"
                ></div>
                <div class="color-meta">
                    <p>HEX: ${hex}</p>
                    <p>RGB: ${rgb}</p>
                </div>
            </div>`;
        })
        .join('');
}

function onCurrentColorContainerClick(evt) {
    const isColorSwatchEl = evt.target.classList.contains('color-swatch');
    if (!isColorSwatchEl) {
        return;
    }
    const dataHexCurrentEl = evt.target.dataset.hex;

    const parentColorEl = evt.target.closest('.color-card');
    // console.log(parentColorEl); //Первое совпадение вверх по селектору класса
    /*
    const parentColorCard = swatchEl.parentNode;
    console.log(parentColorCard); //ищет родителя
    */
    removeIsActiveClassFromColorPicker();
    addActiveClass(parentColorEl);
    setBodyColor(dataHexCurrentEl);

    document.addEventListener('keyup', event => {
        event.preventDefault();
        let currentActiveCard = null;
        if (event.code === 'Escape') {
            setBodyColor('#fff');
            removeIsActiveClassFromColorPicker();
        }
    });
}

function removeIsActiveClassFromColorPicker() {
    const currentColorEl = document.querySelector('.color-card.is-active');
    if (currentColorEl) {
        currentColorEl.classList.remove('is-active');
    }
}
function addActiveClass(cart) {
    cart.classList.add('is-active');
}

function setBodyColor(color) {
    document.body.style.backgroundColor = color;
}

//---------способ добавления произвольного количества div
function createBoxes(amount) {
    const arr = [];

    arr.length = amount;

    const newArr = [];

    arr.fill(amount).map((el, index) => {
        const baseSize = 30;
        const biggestSize = baseSize + index * 10;

        newArr.push(biggestSize);
    });

    return newArr;
}

// console.log(createBoxes(10));

/**
 * Practice for 7.1
 */

//Написать скрипт по добавлению кнопок, и прорисовке цен курсов, при клике на любую кнопку, если не выбрано то выводятся все курсы
//
const buttonContainer = document.querySelector('.button-container');
const coursesContainer = document.querySelector('.courses-container');

buttonContainer.addEventListener('click', onCurrentBtnClick);

createButtons(courses);
markupFilteredCourses(courses);

function createButtons(ourCourses) {
    const arrFilteredCourses = filterArrayCourses(ourCourses);

    const markup = arrFilteredCourses
        .map(nameCourse => {
            return `<button class="button-container__button" data-value="${nameCourse}">${nameCourse}</button>`;
        })
        .join('');
    buttonContainer.insertAdjacentHTML('beforeend', markup);
}

function filterArrayCourses(courses) {
    const filteredCourses = courses.flatMap(({ tags }) => {
        return tags;
    });
    const arrTags = [...new Set(filteredCourses)];
    return arrTags;
}

function onCurrentBtnClick(evt) {
    const currentElement = evt.target;
    const currentValue = currentElement.dataset.value;
    const activeEl = document.querySelector('.is-active');

    // if (!currentValue) {
    //     return;
    // }

    if (evt.target.nodeName !== 'BUTTON') {
        return;
    }

    coursesContainer.innerHTML = '';

    if (activeEl) {
        activeEl.classList.remove('is-active');
    }

    currentElement.classList.add('is-active');

    const filteredCourses = courses.filter(course => {
        return course.tags.includes(currentValue);
    });

    markupFilteredCourses(filteredCourses);
}

function markupFilteredCourses(ourCourses) {
    const createItemCourse = ourCourses
        .map(course => {
            return `<li><p>${course.name} - ${course.price}$</p></li>`;
        })
        .join('');

    return coursesContainer.insertAdjacentHTML('beforeend', createItemCourse);
}
