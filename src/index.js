import './styles.css';
// import menuElements from '../src/menu.json';
// import foodItem from '../src/fooditems.hbs';


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const menu = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const btn = document.querySelector('#theme-switch-toggle');


// const cardsMarkup =  createCardElement(menuElements);

// function createCardElement(menuElements) {
//     return menuElement.map(foodItem).join('');
// }

// menu.insertAdjacentHTML('beforeend',cardsMarkup);

bodyRef.classList.add(Theme.LIGHT);

localStorage.setItem('theme', JSON.stringify(Theme));
const string = localStorage.getItem('theme');


btn.addEventListener('change',changeThemeColor);

function changeClass(addClass, remClass) {
    bodyRef.classList.remove(remClass);
    bodyRef.classList.add(addClass);
};

function darkTheme () {
    changeClass(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
    btn.setAttribute('checked', true)
};

function lightTheme () {
    changeClass(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
};

function changeThemeColor() {

    if(bodyRef.classList.contains(Theme.LIGHT)) {
        darkTheme();
    } else {
        lightTheme();
    };

};

