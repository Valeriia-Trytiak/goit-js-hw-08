/**
 * 1. Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
2. При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
3. При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
4. Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle. */

const throttle = require('lodash.throttle');

const formEl = document.querySelector('form');
const inputEmailEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

updateFormEl();

formEl.addEventListener('input', throttle(onFormElInput, 500));
formEl.addEventListener('submit', onBtnSubmit);

function onFormElInput() {
  if (inputEmailEl.value !== '' && textareaEl.value !== '') {
    const resultForm = { email: inputEmailEl.value, message: textareaEl.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(resultForm));
    // console.log(resultForm);
  }

  updateFormEl();
}

function updateFormEl() {
  const values = JSON.parse(localStorage.getItem('feedback-form-state'));

  inputEmailEl.value = values.email || '';
  textareaEl.value = values.message || '';
}

function onBtnSubmit(evt) {
  //  забороняю перезавантаження
  evt.preventDefault();

  const {
    elements: { email: emailForm, message: messageForm },
  } = evt.currentTarget;

  // забираю значення пошти та повідомлення
  if (emailForm.value !== '' && messageForm.value !== '') {
    const resultForm = { email: emailForm.value, message: messageForm.value };

    console.log(resultForm);
  }

  // очищую форму та сховище
  evt.currentTarget.reset();
  localStorage.clear();
}
