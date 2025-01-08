const app = document.getElementsByClassName('.App');
const modeTheme = document.getElementById('#title');

if (modeTheme.textContent === 'Light Mode') {
  app.classList.add('dark');
  console.log('Light Mode');
}
