'use strict';

const formRef = document.querySelector('.js-registration-form');
// console.log(formRef);

// formRef.addEventListener('submit', onFormSubmit);

// function onFormSubmit(event) {
//     event.preventDefault();
//     console.log(event.currentTarget.elements);
//     console.log(event.currentTarget.elements.subscription.value);

//     const formElements = event.currentTarget.elements;

//     // const email = formElements.email.value;
//     // const password = formElements.password.value;
//     // const subscription = formElements.subscription.value;

//     // const formData = {
//     //     email,
//     //     password,
//     //     subscription,
//     // };
//     // console.log(formData);

//     const formData = new FormData(event.currentTarget); //при вызове мы передаем аргументом ссылку на саму форму
//     formData.forEach((name, value) => {
//         console.log(`name ${name}`);
//         console.log(`value, ${value}`);
//     });
// }

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    console.dir(event.currentTarget);
    console.log(event.currentTarget.elements);

    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
        console.log(`name`, name);
        console.log(`value`, value);
    });
}

const refsFormName = {
    input: document.querySelector('.js-input'),
    licenseCheckBox: document.querySelector('.js-license'),
    button: document.querySelector('.js-button'),
    nameLabel: document.querySelector('.js-button>span'),
};

refsFormName.input.addEventListener('input', onInputChange);
refsFormName.licenseCheckBox.addEventListener('change', onLicenseChange);
// refsFormName.button.addEventListener('click', onSubmitClick);

function onInputChange(event) {
    event.preventDefault();
    // console.log(event);
    // console.dir(event.currentTarget.value);

    refsFormName.nameLabel.textContent = event.currentTarget.value;

    // console.log(event.currentTarget.value);
}

function onLicenseChange(event) {
    // console.log(event.currentTarget.checked);
    refsFormName.button.disabled = !event.currentTarget.checked;
}

// console.log(refsFormName.button.attributes);

const outputRef = document.querySelector('.js-output');
const clearRef = document.querySelector('.js-button-clear');

// window.addEventListener('keypress', onKeyPress);
clearRef.addEventListener('click', onClearOutput);
// const onOutputKeyDown = outputRef.addEventListener('keydown', onKeyPress);
// const onOutputKeyPress = outputRef.addEventListener('keypress', onKeyPress);

function onKeyPress(event) {
    event.preventDefault();
    outputRef.textContent += event.key;
    // outputRef.fontSize = 45;
    console.log('key - ', event.key);
    console.log('code - ', event.code);
}

function onClearOutput(event) {
    outputRef.innerHTML = '';
}

/**
 * MOUSEENTER
 * MOUSELEAVE
 * MOUSEMOVE
 * MOUSEOVER
 * MOUSEOUT
 */

const boxMouseRef = document.querySelector('.box-mouse_enter');

// boxMouseRef.addEventListener('mouseenter', onMouseEnter);
// boxMouseRef.addEventListener('mouseleave', onMouseLeave);
// boxMouseRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
    const box = event.currentTarget;
    box.classList.add('box-mouse_change-color');
}

function onMouseLeave(event) {
    const box = event.currentTarget;
    box.classList.remove('box-mouse_change-color');
}

function onMouseMove(event) {
    console.log(event);
}

/*
*
-----------------OPEN MODAL--------------------
*
*/

const modalRef = {
    openModalBtn: document.querySelector('[data-action="open-modal"]'),
    closeModalBtn: document.querySelector('[data-action="close-modal"]'),
    backdrop: document.querySelector('.js-backdrop'),
};

modalRef.openModalBtn.addEventListener('click', onModalOpenBtnClick);
modalRef.closeModalBtn.addEventListener('click', onCloseModal);
modalRef.backdrop.addEventListener('click', onBackdropClick);

function onModalOpenBtnClick(event) {
    window.addEventListener('keydown', onEscKeyPress);
    // const bodyRef = document.querySelector('body');
    const bodyRef = document.body;
    bodyRef.classList.add('show-modal');
}

function onCloseModal(event) {
    window.removeEventListener('keydown', onEscKeyPress);
    document.querySelector('body').classList.remove('show-modal');
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        // document.body.classList.remove('show-modal'); - можно же просто вызвать функцию
        onCloseModal();
    }

    console.log('Click on backdrop!!!');
    // console.log(event.target);
    // console.log(event.currentTarget);
}

function onEscKeyPress(event) {
    console.log(event);
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
        onCloseModal();
    }
}

//--add button to click

const divRefs = {
    btnRef: document.querySelector('.listenerForBtn'),
    addListener: document.querySelector('.add-listener'),
    removeListener:document.querySelector('.remove-listener'),
    click: document.querySelector('.clicker'),
    textParagraph: document.querySelector('.listener-text__button'),
};

    function clickMe () {
            console.log('CLICK ME');
            divRefs.textParagraph.insertAdjacentHTML('afterend', '<p>It is CLICK ME</p>')
            console.log(event);
    }

    divRefs.addListener.addEventListener('click', ()=>{
        divRefs.textParagraph.textContent = 'Add event to button (click me)'
        divRefs.click.addEventListener('click', clickMe)
    })

    divRefs.removeListener.addEventListener('click',()=>{
        divRefs.textParagraph.textContent = 'Remove to event from button (click me) '

        divRefs.click.removeEventListener('click', clickMe)
    })

console.log(1);