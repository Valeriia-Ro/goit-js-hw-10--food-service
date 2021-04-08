import './styles.css';
import menuElements from './menu.json';
import foodItem from './fooditem.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menu = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const btn = document.querySelector('#theme-switch-toggle');

const cardsMarkup = createCardElement(menuElements);

function createCardElement(data) {
  return data.map(foodItem).join('');
}
menu.insertAdjacentHTML('beforeend', cardsMarkup);

btn.addEventListener('change', defineTheme);

function changeClass(addClass, remClass) {
  bodyRef.classList.remove(remClass);
  bodyRef.classList.add(addClass);
}


function updateTheme(addClass, remClass) {
  changeClass(addClass, remClass);
  localStorage.setItem('Theme', addClass);
}

function defineTheme(e) {
  changeThemeColor(e.target.checked);
}

function changeThemeColor(toggle) {
  if (toggle) {
    updateTheme(Theme.DARK, Theme.LIGHT);
  } else {
    updateTheme(Theme.LIGHT, Theme.DARK);
  }
}

(function () {
  const value = localStorage.getItem('Theme');
  const toggle = value === Theme.DARK;
  changeThemeColor(toggle);
  if (toggle) btn.setAttribute('checked', toggle);
})();
