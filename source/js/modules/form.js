const NAME_PROPERTY = /^[a-zа-яё\s]{0,}$/i;
const TEL_PROPERTY = /^[0-9\s]{0,}$/;
const ERROR_TEXT_NAME = 'Используйте только буквы';
const ERROR_TEXT_TEL = 'Используйте только цифры';
const ERROR_TEXT = 'Заполните поле';

const form = document.querySelector('.form');
const errorName = document.querySelector('.form__error--name');
const errorTel = document.querySelector('.form__error--tel');
const formName = form.querySelector('.form__input--name');
const formTel = form.querySelector('.form__input--tel');

const createError = (errorItem, errorText) => {
  errorItem.textContent = errorText;
};

const showError = (item, errorText, errorItem) => {
  item.classList.add('form__input--error');
  createError(errorItem, errorText);
};

const hideError = (item, err) => {
  item.addEventListener('input', () => {
    item.classList.remove('form__input--error');
    err.textContent = '';
  });
};

const testedValid = (property, input, error, errorText) => {
  form.addEventListener('submit', (evt) => {
    const isValid = property.test(input.value);

    if (!isValid) {
      evt.preventDefault();
      showError(input, errorText, error);
      hideError(input, error);
    }

    if (input.value.length === 0) {
      evt.preventDefault();
      showError(input, ERROR_TEXT, error);
      hideError(input, error);
    }
  });
};

const checkValid = () => {
  testedValid(NAME_PROPERTY, formName, errorName, ERROR_TEXT_NAME);
  testedValid(TEL_PROPERTY, formTel, errorTel, ERROR_TEXT_TEL);
};

export { checkValid };
