import { logIn } from '../api/festival.js';

document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.querySelector('.feedback-form');
  const logoutBtn = document.getElementById('logoutBtn');
  const loginLink = document.getElementById('loginLink');

  // Перевірка стану аутентифікації при завантаженні сторінки
  if (localStorage.getItem('isAuthenticated') === 'true') {
    loginLink.style.display = 'none';
    logoutBtn.style.display = 'block';
  }

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'admin@gmail.com' && password === '11111111') {
      localStorage.setItem('isAuthenticated', 'true');
      window.location.href = './tours.html'; // Перенаправлення на сторінку турів після успішного входу
    } else {
      alert('Неправильний логін або пароль');
    }
  });

  logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('isAuthenticated');
    window.location.href = './index.html'; // Перенаправлення на головну сторінку після виходу
  });
});



/*const formData = {
  username: '',
  password: '',
};

const form = document.querySelector('.feedback-form');

const loadFormDataFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.assign(formData, parsedData); // Копіюємо властивості з parsedData в formData
    form.elements.username.value = formData.username;
    form.elements.password.value = formData.password;
  }
};

loadFormDataFromLocalStorage();

form.addEventListener('input', event => {
  const { name, value } = event.target;

  formData[name] = value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

const isFormValid = () => {
  return formData.username.trim() !== '' && formData.password.trim() !== '';
};

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!isFormValid()) {
    alert('Fill please all fields');
    return;
  }
const response = logIn(formData);

console.log(formData);
console.log(response);

  localStorage.removeItem('feedback-form-state');
  form.reset();
  Object.keys(formData).forEach(key => (formData[key] = '')); // Очищаємо дані у formData
});
*/