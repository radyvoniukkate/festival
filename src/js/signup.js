import { signUp } from '../api/festival.js';

const formData = {
  //email: '',
  username: '',
  //name: '',
  password: '',
};

const form = document.querySelector('.feedback-form');

const loadFormDataFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    Object.assign(formData, parsedData); // Копіюємо властивості з parsedData в formData
    //form.elements.email.value = formData.email;
    form.elements.username.value = formData.username;
    //form.elements.name.value = formData.name;
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
  return (
    //formData.email.trim() !== '' &&
    formData.username.trim() !== '' &&
    //formData.name.trim() !== '' &&
    formData.password.trim() !== ''
  );
};

form.addEventListener('submit', event => {
  event.preventDefault();
  
  if (!isFormValid()) {
    return;
  }
  const response = signUp(formData);
  
  console.log(formData);
  console.log(response);
  localStorage.removeItem('feedback-form-state');
  form.reset();
  Object.keys(formData).forEach(key => (formData[key] = '')); // Очищаємо дані у formData
});
