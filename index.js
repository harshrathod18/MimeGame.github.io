document.addEventListener("DOMContentLoaded", function() {
    onLoadSet();
  });
  function random(array) {
    return array[Math.floor((Math.random()*array.length))];
  }
function getRandomNumbers(){
    let allNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    let numbers = [];
    let r1 = random(allNumbers);
    let r2 = random(allNumbers);
    let r3 = random(allNumbers);
    let r4 = random(allNumbers);
    numbers.push(r1,r2,r3,r4);
    return numbers;
}

function onLoadSet(){
    console.log("Welcome To Mime Game.");
    var  randomNumbers = [];
    randomNumbers = getRandomNumbers();
    console.log(randomNumbers);
    for (let i = 1; i <= 25; i++) {
        var temp = document.getElementById("input_"+i);
        if(randomNumbers.includes(i)){
            temp.value = 1;
        }
    }
}

function checkBomb(value){
    var tempDiv = document.getElementById("div_"+value);
    tempDiv.classList.remove("bg-danger");
    valueLength = document.getElementById("input_"+value);
    if(valueLength.value == 1){
        tempDiv.classList.add("bg-dark");
        var style = document.createElement('style');
        style.innerHTML = `#mainDiv { pointer-events: none; }`;
        document.head.appendChild(style);
        alert("Game Over");
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}