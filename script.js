const colors = ['green' , 'red', 'blue', 'rgba(133, 122, 200)', '#f15025']

// Getting dom 

const btn = document.getElementById('btn');

const color = document.querySelector('.color');



btn.addEventListener('click', function(){
    let randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})



//  Function to create random color
function getRandomNumber(){

    return Math.floor(Math.random() *5);

}













