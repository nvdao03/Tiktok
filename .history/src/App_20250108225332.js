const app = document.getElementsByClassName('.App');
const modeTheme = document.querySelector('#title');

if (modeTheme.textContent === 'Light Mode') {
  app.classList.add('dark');
  console.log('Light Mode');
}
