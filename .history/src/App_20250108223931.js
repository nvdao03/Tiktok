const app = document.getElementsByClassName('App');
const modeTheme = document.getElementsByClassName('title');

if (modeTheme.textContent === 'Light Mode') {
  app.classList.add('dark');
}
