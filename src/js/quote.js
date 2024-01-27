import EnergyFlowApiSevice from './api-service';
const quoteText = document.querySelector('.quote-text');
const quoteAuthor = document.querySelector('.quote-author');

const example = new EnergyFlowApiSevice;

// функція для отримання цитати з backend і зберігання її в localStorage
const fetchQuote = async () => {
  try {
    // запит на сервер
    const data = await example.getQuote();

    if (data && data.quote && data.author) {
      // Зберігаємо цитату та дату (на момент останнього запиту) в localStorage
      const currentDate = new Date().toDateString();
      localStorage.setItem('quoteObj', JSON.stringify(data));
      localStorage.setItem('currentDate', currentDate);
    }
  } catch (error) {
    console.error('Помилка при отриманні цитати:', error);
  }
}

// функція для перевірки дати та зміни цитати в разі незбігання дат, а також перезапису нової дати в localStorage
const checkDate = async () => {
  const currentDate = new Date().toDateString();
  const storedDate = localStorage.getItem('currentDate');

  // перевіряю, чи змінилась дата або в разі її відсутності(наприклад, при першому заході на сайт)
  if (!storedDate || currentDate !== storedDate) {
      // функція отримання цитати
      await fetchQuote();
      changeContent();
  } else {
    // якщо дата не змінилась, вик.збережена цитата з localStorage
      changeContent();
  }
}

function changeContent() {
    const storedQuote = JSON.parse(localStorage.getItem('quoteObj'));
      quoteText.innerHTML = storedQuote.quote;
      quoteAuthor.innerHTML = storedQuote.author;
}

// експорт
export { checkDate };