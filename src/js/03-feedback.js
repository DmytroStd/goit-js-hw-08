import throttle from 'lodash.throttle';

const refs = {
form : document.querySelector('.feedback-form'),
email : document.querySelector('input[name="email"]'),
textarea : document.querySelector('textarea[name="message"]'),
}

const STORAGE_KEY = 'feedback-form-state';

populateTextarea();

let formData = {}

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
    try {
    let savedMassege = localStorage.getItem(STORAGE_KEY);
    let formData = JSON.parse(savedMassege)
        if (formData) {
        refs.email.value = formData.email;
        refs.textarea.value = formData.textarea;
        // return formData = localData;
    }
        
    }
    catch (error) {
    console.log(error.name);
    console.log(error.message);
    };   
    
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