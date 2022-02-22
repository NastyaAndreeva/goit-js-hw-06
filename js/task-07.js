const inputRange = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');
const number = document.querySelector('#number');

//input

inputRange.addEventListener('input', onInputRange);
number.addEventListener('input', (event) => { 
    console.log(event.currentTarget.value);
    const item = document.createElement('div');
    item.style.width = `${event.currentTarget.value}px`;
    item.style.height = `${event.currentTarget.value}px`;
    item.style.backgroundColor = 'green';
    document.body.append(item);
});

//focus
number.addEventListener('focus', ()=> {
    console.log('focus');
})

//blur
number.addEventListener('blur', ()=> {
    console.log('blur');
})

function onInputRange() {
    spanEl.style.fontSize = `${inputRange.value}px`;
    
}