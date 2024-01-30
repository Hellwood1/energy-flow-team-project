import { renderExercises } from './render-exercises';
import { initialRequest } from './renderCategoriesByFilter';
import { renameFilter } from './render-exercises';
import { isSearchByKey } from './render-exercises';
import { searchExercises } from './render-exercises';

export let page = 1;
export let category = 'test';
export const navForm = document.querySelector('.navigation-list-form');
export const navBtnsList = document.querySelector('.exercises-navigation-list');

export default function generatePageNumbers(total, current) {
  let result = [];
  if (total < 5) {
    for (let i = 1; i <= total; i++) {
      result.push(i);
    }
  } else if (total >= 5 && current <= 3) {
    result = [1, 2, 3, 4, '...', total];
  } else if (total >= 5 && total - current <= 2) {
    result = [1, '...', total - 3, total - 2, total - 1, total];
  } else {
    result = [
      1,
      '...',
      current - 1,
      current,
      parseInt(current) + 1,
      '...',
      total,
    ];
  }
  return result;
}

export function renderPageList(totalPages, perPage, pageTypeValue) {
  const pageList = generatePageNumbers(totalPages, perPage)
    .map(
      p => `<li class="exercises-navigation-item">
        <button type="submit" class="exercises-navigation-number" value="${p}">${p}</button>
      </li>`
    )
    .join('');

  navBtnsList.innerHTML = pageList;

  chooseCurrentPage(pageTypeValue);
  return;
}

export function changeCurrentPage(e) {
  e.preventDefault();
  const namePath = document.querySelector('.exercises-path-name');
  if (!parseInt(e.submitter.textContent)) {
    return;
  }
  page = e.submitter.textContent;

  category = renameFilter(
    document.querySelector('.current-category-btn').textContent
  ).trim();
  if (namePath.classList.contains('hidden')) {
    initialRequest(category);
  } else if (isSearchByKey) {
    searchExercises();
  } else {
    renderExercises();
  }
}

export function resetPage() {
  page = 1;
}

export function chooseCurrentPage(pageTypeValue) {
  const allPages = document.querySelectorAll('.exercises-navigation-item');
  if (pageTypeValue <= 1) {
    allPages[0].firstElementChild.classList.add('pagination-current');
  } else {
    for (let i = 0; i < allPages.length; i++) {
      if (
        allPages[i].firstElementChild.classList.contains('pagination-current')
      ) {
        allPages[i].firstElementChild.classList.remove('pagination-current');
      } else if (allPages[i].firstElementChild.textContent === pageTypeValue) {
        allPages[i].firstElementChild.classList.add('pagination-current');
      }
    }
  }
}

export function removePageList() {
  navBtnsList.innerHTML = '';
}
