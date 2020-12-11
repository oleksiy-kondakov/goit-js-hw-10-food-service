import './styles.css';
import menuData from './menu.json';
import menuTemplate from './templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');
const bodyRef = document.querySelector('body');
const themeButtonRef = document.querySelector('.theme-switch__toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const markup = menuTemplate(menuData);
menuRef.insertAdjacentHTML("beforeend", markup)

if (localStorage.getItem('setting')) {
  let setting = localStorage.getItem('setting');
  bodyRef.classList.add(setting);
  if (setting === 'dark-theme') {
    themeButtonRef.checked = true;
  }
}
themeButtonRef.addEventListener('change', function () {
  bodyRef.className = '';
  if (this.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('setting', Theme.DARK);
  } else {
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('setting', Theme.LIGHT);
  }
});