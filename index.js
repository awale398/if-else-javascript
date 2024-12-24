// javascript code

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);
    
    if(age >= 100){
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(age == 0){
        resultElement.textContent = `You cant enter this site. Youre just born`;
    }
    else if(age >= 18){
        resultElement.textContent = `Youre old enough to enter this site`;
    }
    else if(age < 0){
        resultElement.textContent = `Your age cant be below 0`;
    }
    else {
        resultElement.textContent = `You must 18+ to enter this site`;
    }
}
