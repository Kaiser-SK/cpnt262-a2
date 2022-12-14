'use strict';

// TODO: Allow theme change without needing to refresh the page

const defaultMode = document.getElementById('default-theme');
const darkMode = document.getElementById('dark-theme');
const halloweenMode = document.getElementById('halloween-theme');
const christmasMode = document.getElementById('christmas-theme');
const themeTitle = document.querySelector('.theme-selection')

const body = document.querySelector('body');


const changeTheme = function(event) {
  event.preventDefault()
  if (defaultMode.checked) {
    body.classList.replace('default','default');
    themeTitle.innerHTML = "Default Theme";
  } 
  else if (halloweenMode.checked) {
    body.classList.replace('default','halloween');
    themeTitle.innerHTML = "Halloween Theme";
  } 
  else if (christmasMode.checked) {
    body.classList.replace('default','christmas');
    themeTitle.innerHTML = "Christmas Theme";
  } 
  else if (darkMode.checked) {
    body.classList.replace('default','dark');
    themeTitle.innerHTML = "Dark Theme";
  } 
}

body.addEventListener('submit', changeTheme);