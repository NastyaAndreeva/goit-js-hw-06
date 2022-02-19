const inputRange = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputRange.addEventListener('input', onInputRange);

function onInputRange() {
    spanEl.style.fontSize = `${inputRange.value}px`;
    
}