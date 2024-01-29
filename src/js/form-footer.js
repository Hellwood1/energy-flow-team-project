import EnergyFlowApiSevice from './api-service';
import iziToast from 'izitoast';
import {
  showMessageOkRequest,
  showMessageConflictRequest,
} from './showMessage';

export async function sendMessage(e) {
  e.preventDefault();

  const api = new EnergyFlowApiSevice();
  const inputValue = document.querySelector('.input-footer').value;
  let reg = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

  if (inputValue.match(reg) === null) {
    return showMessageConflictRequest(`Please, enter the valid email :)`);
  }

  try {
    const res = await api.sendSubscription(inputValue);
    showMessageOkRequest(res.message);
  } catch (error) {
    showMessageConflictRequest(
      `The subscription has already been sent to this email`
    );
  }
}
