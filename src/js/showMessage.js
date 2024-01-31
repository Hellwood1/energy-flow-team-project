import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const showMessageBadRequest = () => {
  iziToast.error({
    message: `Ooops...Something happen. Please, try again later`,
    backgroundColor: 'rgba(246, 246, 246, 0.6)',
    messageColor: 'black',
    maxWidth: 300,
    position: 'bottomRight',
    timeout: 4000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const showMessageOkRequest = message => {
  iziToast.success({
    message: message,
    backgroundColor: 'rgba(246, 246, 246, 0.6)',
    messageColor: 'black',
    maxWidth: 300,
    position: 'bottomRight',
    timeout: 4000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const showMessageConflictRequest = message => {
  iziToast.error({
    message: message,
    backgroundColor: 'rgba(246, 246, 246, 0.6)',
    messageColor: 'black',
    maxWidth: 300,
    position: 'bottomRight',
    timeout: 4000,
    progressBar: false,
    transitionIn: 'bounceInRight',
    transitionOut: 'fadeOutLeft',
    messageSize: 14,
  });
};

const showMessageRatingSuccess = () => {
  iziToast.success({
    message: 'Thank you for your feedback',
    backgroundColor: 'rgba(246, 246, 246, 0.6)',
    messageColor: 'black',
    maxWidth: 300,
    position: 'bottomRight',
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
    backgroundColor: 'rgba(246, 246, 246, 0.6)',
    messageColor: 'black',
    maxWidth: 300,
    position: 'bottomRight',
    timeout: 4000,
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
