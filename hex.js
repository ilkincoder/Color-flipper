const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


// HEX Color variations start from 0 to 9 and then A is 10 and Accordingly other letters till 15
// Hex color shoudl have a hashtag

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){

    // Var to hold hashtag 
    let hexColor = '#';


    // For loop to add random letter and numbers to generate HEX Color value
    for (let i = 0; i < 6; i++ ){

        hexColor += hex[getRandomNumber()];
    }

    // Updating DOM
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}) ;


// Function to get random number
function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);

}





























