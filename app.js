const button = document.querySelector('button');
const h2E1 = document.querySelector('h2');
const bgE1 = document.querySelector('section');

button.addEventListener('click',() => {
     let color = '#';
     const random = Math.random().toString(16).slice(2,8);
     color += random;
     bgE1.style.backgroundColor = color
     console.log(color)
})