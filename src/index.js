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

//обновляем цветовую тему
function updateTheme(addClass, remClass) {
  changeClass(addClass, remClass);
  localStorage.setItem('Theme', addClass);
}

//передаем состояние инпута для изменения цветовой темы
function defineTheme(e) {
  changeThemeColor(e.target.checked);
}

//переключаем цветовую тему
function changeThemeColor(toggle) {
  if (toggle) {
    updateTheme(Theme.DARK, Theme.LIGHT);
  } else {
    updateTheme(Theme.LIGHT, Theme.DARK);
  }
}

//самовызывающаяся функция, срабатывает при загрузке страницы для определения цветовой темы
(function () {
  const value = localStorage.getItem('Theme');
  const toggle = value === Theme.DARK;
  changeThemeColor(toggle);
  if (toggle) btn.setAttribute('checked', toggle);
})();
