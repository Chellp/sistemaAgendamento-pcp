"use strict";
const button = document.getElementById('counter-btn');
const countDisplay = document.getElementById('count');
let count = 0;
console.log(count);
button.addEventListener('click', () => {
    count++;
    countDisplay.textContent = count.toString();
});
