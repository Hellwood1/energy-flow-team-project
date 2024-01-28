import EnergyFlowApiSevice from './api-service.js';
import { showMessageBadRequest, showMessageOkRequest } from './showMessage';

const emailInput = document.querySelector('.input-footer');
export const form = document.querySelector('.footer-subscription');

export async function handleFormSubmit(event) {
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
    emailInput.value = '';
    showMessageOkRequest();
  } catch (error) {
    showMessageBadRequest();
  }
}

function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}
