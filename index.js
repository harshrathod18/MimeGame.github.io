document.addEventListener("DOMContentLoaded", function() {
    onLoadSet();
  });

function getRandomNumbers(){
    let numbers = [];
    let x = Math.random() * 10;
    let r1 =  Math.floor(x);
    let a = Math.random() * 10;
    let r2 =  Math.floor(a);
    if(r2 == r1){
        r2++;
    }
    let c = Math.random() * 10;
    let d =  Math.floor(c);
    let e = Math.random() * 10;
    let f =  Math.floor(e);
    let r3 = d + r1;
    let r4 = f + r2;
    if(r3 == r1 || r3 == r2){
        r3++;
    }
    if(r4 == r3 || r4 == r1 || r4 == r2){
        r4++;
    }
    if(r1 == 0){r1++;}
    if(r2 == 0){r2++;}
    if(r3 == 0){r3++;}
    if(r4 == 0){r4++;}
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
        alert("you lost");
        setTimeout(() => {
            location.reload();
        }, 3000);
    }
}