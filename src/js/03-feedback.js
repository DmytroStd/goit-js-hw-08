import throttle from 'lodash.throttle';

const refs = {
form : document.querySelector('.feedback-form'),
email : document.querySelector('input[name="email"]'),
textarea : document.querySelector('textarea[name="message"]'),
}

const STORAGE_KEY = 'feedback-form-state';

populateTextarea();

let formData = {
    // email: email.value,
    // textarea: textarea.value,
}

//refs.email.addEventListener('input', throttle(onEmailInput, 500));
refs.form.addEventListener('input', throttle(e => {
formData= {email: refs.email.value, textarea: refs.textarea.value}
localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
//  console.log(formData);
}, 500));

refs.form.addEventListener('submit', e => {
    e.preventDefault();
    if (!refs.email.value || !refs.textarea.value) {
        alert('заполните форму полностью')
        return
    }
    console.log(formData)
    refs.form.reset();
    localStorage.removeItem(STORAGE_KEY)
});

function populateTextarea() {
    let savedMassege = localStorage.getItem(STORAGE_KEY);

    let localData = JSON.parse(savedMassege)
    if (localData) {
        refs.email.value = localData.email;
        refs.textarea.value = localData.textarea;
    }
}
       // formData = JSON.parse(savedMassege);
    // } else if (refs.email.value == '' && refs.textarea.value == '') {
    //     refs.email.value = undefined;
    // refs.textarea.value = undefined;
        // console.log(savedMassege);





////////////////////////////////////////////
// import throttle from 'lodash.throttle';

// const refs = {
// form : document.querySelector('.feedback-form'),
// email : document.querySelector('input[name="email"]'),
// textarea : document.querySelector('textarea[name="message"]'),
// }

// const STORAGE_KEY = 'feedback-form-state';

// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 500));

// populateTextarea();

// function onTextAreaInput(evt) {
//     const message = evt.currentTarget.value;
//     localStorage.setItem(STORAGE_KEY, message)
//     console.log('feetback-msg', message);
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     console.log('отправляем форму')
//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KEY)
// }

// function populateTextarea() {
//     const savedMassege = localStorage.getItem(STORAGE_KEY);
//     if (savedMassege) {
//         refs.textarea.value = savedMassege;
//         console.log(savedMassege);
//     }
// }