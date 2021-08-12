let btn = document.querySelector('button');
let output = document.querySelector('#number');

function getRandomNumber(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
}

function createArrayOfNumbers(start, end) {
    let myArray = [];
    for (let i = start; i <= end; i++) {
        myArray.push(i);
    }
    return myArray;
}

let numbersArray = createArrayOfNumbers(1, 99);

btn.addEventListener('click', () => {
    if(numbersArray.length == 0) {
        output.innerText = "Owari";
        return;
    }

    let randomIndex = getRandomNumber(0, numbersArray.length - 1);
    let randomNumber = numbersArray[randomIndex];
    numbersArray.splice(randomIndex, 1);
    output.innerText = randomNumber;


});

// reps.addEventListener("keyup", function (event) {
//     event.preventDefault();
//     if (event.keyCode === 13) {
//         sub.click();
//     }
// });