import EnergyFlowApiSevice from './api-service';

import {
  showMessageOkRequest,
  showMessageConflictRequest,
} from './showMessage';

export async function sendMessage(e) {
  e.preventDefault();

  const api = new EnergyFlowApiSevice();
  const inputValue = document.querySelector('.input-footer').value;
  const formFooter = document.querySelector('.footer-subscription');
  isValidEmail(inputValue);

  try {
    const res = await api.sendSubscription(inputValue);
    showMessageOkRequest(res.message);
    formFooter.reset();
  } catch (error) {
    if (error.response.status === 400) {
      return;
    }
    showMessageConflictRequest(
      `The subscription has already been sent to this email`
    );
  }
}

export function isValidEmail(email) {
  let reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (email.match(reg) === null) {
    return showMessageConflictRequest(`Please, enter the valid email :)`);
  }
}
