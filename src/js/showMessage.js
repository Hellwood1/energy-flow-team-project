import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const showMessageBadRequest = () => {
  iziToast.error({
    message: `Sorry, something went wrong. Please, try again later`,
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

const showMessageRatingFailed = message => {
  iziToast.error({
    message: 'Sorry, you have already leave a review',
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
  showMessageBadRequest,
  showMessageRatingFailed,
  showMessageRatingSuccess,
};
