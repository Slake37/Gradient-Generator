let gradientContainer = document.querySelector('.gradient-container');
let firstHex = document.querySelector('#firstHex');
let secondHex = document.querySelector('#secondHex');
let btn = document.querySelector('button');

btn.addEventListener('click', function(event){
    event.preventDefault();
    gradientContainer.style.backgroundColor = `${firstHex.value}`;
    gradientContainer.style.backgroundImage = `linear-gradient(${firstHex.value},${secondHex.value})`
})