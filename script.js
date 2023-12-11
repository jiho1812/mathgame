const idTwo = document.getElementById("2");
const idSeven = document.getElementById("7");
const idNine = document.getElementById("9");
const idfourteen = document.getElementById("14");
const idTwenty = document.getElementById("20");
const idTwentyTwo = document.getElementById("22");
const idTwentySix = document.getElementById("26");
const idTwentySeven = document.getElementById("27");
const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const answer1 = document.getElementById("answer1");
const answer2 = document.getElementById("answer2");




function clickidTwo(){
    question1.classList.toggle("hidden");
}

function submitAnswer1(){
    if(answer1.value==1){
    console.log("123");
    }
}



function clickidSeven(){
    question2.classList.toggle("hidden");
    
}

idTwo.addEventListener("click", clickidTwo);
answer1.addEventListener("keydown", submitAnswer1);

idSeven.addEventListener("click", clickidSeven);



