let gradientContainer = document.querySelector('.gradient-container');
let firstHex = document.querySelector('#firstHex');
let secondHex = document.querySelector('#secondHex');
let btn = document.querySelector('button');
let gradientCode = document.querySelector('.gradient-css-code');
let error = document.querySelector('.error');

btn.addEventListener('click', function(event){
    if(firstHex.value==='' || secondHex.value===''){
        error.style.display = 'block';
    }else{
    event.preventDefault();
    gradientContainer.style.backgroundColor = `${firstHex.value}`;
    gradientContainer.style.backgroundImage = `linear-gradient(${firstHex.value},${secondHex.value})`
    gradientCode.innerHTML = `background-color: ${firstHex.value}</br>
                              background-image: linear-gradient(${firstHex.value}, ${secondHex.value});`
}})