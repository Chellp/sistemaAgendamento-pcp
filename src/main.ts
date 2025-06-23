const button = document.getElementById('counter-btn') as HTMLButtonElement;
const countDisplay = document.getElementById('count') as HTMLSpanElement;

let count = 0;
  console.log(count);

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count.toString();
});