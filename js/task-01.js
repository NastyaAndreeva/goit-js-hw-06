// 1)

const numberItems = document.querySelectorAll('li.item');

console.log(`Number of categories: ${numberItems.length}`);

// 2)

numberItems.forEach(elem => {
    console.log(`Category: ${elem.querySelector('h2').textContent}`);
    console.log(`Elements: ${elem.querySelectorAll('li').length}`);
})