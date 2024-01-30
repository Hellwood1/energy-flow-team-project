import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const showMessageBadRequest = () => {
  iziToast.error({
    message: `Ooops...Something happen. Please, try again later`,
    backgroundColor: 'rgb(240, 115, 115)',
    messageColor: 'white',
    maxWidth: 300,
    position: 'center',
    timeout: 3000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const showMessageOkRequest = message => {
  iziToast.success({
    message: message,
    messageColor: 'white',
    maxWidth: 300,
    position: 'center',
    timeout: 3000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const showMessageConflictRequest = message => {
  iziToast.error({
    message: message,
    backgroundColor: 'rgb(240, 115, 115)',
    messageColor: 'white',
    maxWidth: 300,
    position: 'center',
    timeout: 3000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const showMessageRatingSuccess = () => {
  iziToast.success({
    message: 'Thank you for your feedback',
    backgroundColor: 'green',
    messageColor: 'white',
    maxWidth: 300,
    position: 'center',
    timeout: 4000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const showMessageRatingFailed = () => {
  iziToast.error({
    message: 'Such email already exists',
    backgroundColor: 'rgb(240, 115, 115)',
    messageColor: 'white',
    maxWidth: 300,
    position: 'center',
    timeout: 3000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

export {
  showMessageRatingFailed,
  showMessageRatingSuccess,
  showMessageBadRequest,
  showMessageOkRequest,
  showMessageConflictRequest,
};
