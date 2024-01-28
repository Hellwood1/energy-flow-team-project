import EnergyFlowApiSevice from './api-service.js';
import {showMessageBadRequest, showMessageOkRequest, showMessageConflictRequest} from './showMessage';



const form = document.querySelector('.footer-subscription');
const emailInput = document.querySelector('.input-footer');

form.addEventListener('submit', handleFormSubmit);


async function handleFormSubmit(event) {
  event.preventDefault();
 
  const email = emailInput.value.trim();
  const request = new EnergyFlowApiSevice();
  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (email === '') {
    alert('Please enter an email address');
    return;
  }

  try {
    const response = await request.sendSubscription(email);
    console.log('Data sent successfully');
    emailInput.value = '';
    showMessageOkRequest();
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
    if (error.response && error.response.status === 409) {
      showMessageConflictRequest();
    } else {
      showMessageBadRequest();
    }
  }
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export { validateEmail, handleFormSubmit };
