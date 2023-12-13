const idTwo = document.getElementById("2");
const idSeven = document.getElementById("7");
const idNine = document.getElementById("9");
const idfourteen = document.getElementById("14");
const idTwenty = document.getElementById("20");
const idTwentyTwo = document.getElementById("22");
const idTwentySix = document.getElementById("26");
const idTwentySeven = document.getElementById("27");
const question2 = document.getElementById("question2");
const question7 = document.getElementById("question7");
const question9 = document.getElementById("question9");
const question14 = document.getElementById("question14");
const question20 = document.getElementById("question20");
const question22 = document.getElementById("question22");
const question26 = document.getElementById("question26");
const question27 = document.getElementById("question27")
const answer2 = document.getElementById("answer2");
const answer7 = document.getElementById("answer7");
const answer9 = document.getElementById("answer9");
const answer14 = document.getElementById("answer14");
const answer20 = document.getElementById("answer20");
const answer22 = document.getElementById("answer22");
const answer26 = document.getElementById("answer26");
const answer27 = document.getElementById("answer27");
const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
let rightCount=0;
const playButton=document.querySelector(".playButton");
const nextButton = document.querySelector(".nextButton");

const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const a = document.getElementById("a");
const b = document.getElementById("b");

const soundAndNumber = {
    1:c,
    2:d,
    3:e,
    4:f,
    5:g,
    6:a,
    7:b,
}


function clickidTwo(){
    question2.classList.toggle("hidden");
}

function submitAnswer2(){
    if (event.key === "Enter"){
    if(answer2.value==1){
        answer2.value='';
        right.classList.toggle("hidden");
        question2.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idTwoSpan=idTwo.querySelector("span");
            idTwoSpan.textContent="1";
            idTwo.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
        }, 1000);
    }else{
        answer2.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}



function clickidSeven(){
    question7.classList.toggle("hidden");
    
}

function submitAnswer7(){
    if (event.key === "Enter"){
    if(answer7.value==5){
        answer7.value='';
        right.classList.toggle("hidden");
        question7.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idSevenSpan=idSeven.querySelector("span");
            idSevenSpan.textContent="5";
            idSeven.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
            
        }, 1000);
    }else{
        answer7.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}

function clickidNine(){
    question9.classList.toggle("hidden");
    
}

function submitAnswer9(){
    if (event.key === "Enter"){
    if(answer9.value==4){
        answer9.value='';
        right.classList.toggle("hidden");
        question9.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idNineSpan=idNine.querySelector("span");
            idNineSpan.textContent="4";
            idNine.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
            
        }, 1000);
    }else{
        answer9.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}

function clickidFourteen(){
    question14.classList.toggle("hidden");
    
}

function submitAnswer14(){
    if (event.key === "Enter"){
    if(answer14.value==2){
        answer14.value='';
        right.classList.toggle("hidden");
        question14.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idFourteenSpan=idfourteen.querySelector("span");
            idFourteenSpan.textContent="2";
            idfourteen.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
            
        }, 1000);
    }else{
        answer14.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}

function clickidTwenty(){
    question20.classList.toggle("hidden");
    
}

function submitAnswer20(){
    if (event.key === "Enter"){
    if(answer20.value==4){
        answer20.value='';
        right.classList.toggle("hidden");
        question20.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idTwentySpan=idTwenty.querySelector("span");
            idTwentySpan.textContent="4";
            idTwenty.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
            
        }, 1000);
    }else{
        answer20.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}

function clickidTwentyTwo(){
    question22.classList.toggle("hidden");
    
}

function submitAnswer22(){
    if (event.key === "Enter"){
    if(answer22.value==3){
        answer22.value='';
        right.classList.toggle("hidden");
        question22.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idTwentyTwoSpan=idTwentyTwo.querySelector("span");
            idTwentyTwoSpan.textContent="3";
            idTwentyTwo.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
            
        }, 1000);
    }else{
        answer22.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}

function clickidTwentySix(){
    question26.classList.toggle("hidden");
    
}

function submitAnswer26(){
    if (event.key === "Enter"){
    if(answer26.value==5){
        answer26.value='';
        right.classList.toggle("hidden");
        question26.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idTwentySixSpan=idTwentySix.querySelector("span");
            idTwentySixSpan.textContent="5";
            idTwentySix.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
            
        }, 1000);
    }else{
        answer26.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}

function clickidTwentySeven(){
    question27.classList.toggle("hidden");
    
}

function submitAnswer27(){
    if (event.key === "Enter"){
    if(answer27.value==4){
        answer27.value='';
        right.classList.toggle("hidden");
        question27.classList.toggle("hidden");        
        setTimeout(function() {
            // 실행하고자 하는 코드
            right.classList.toggle("hidden");
            const idTwentySevenSpan=idTwentySeven.querySelector("span");
            idTwentySevenSpan.textContent="4";
            idTwentySeven.classList.toggle("colored");
            rightCount++;
            if (rightCount===8){
                playButton.classList.toggle("hidden");
            }
            
            console.log(rightCount);
        }, 1000);
    }else{
        answer27.value='';
        wrong.classList.toggle("hidden");
        setTimeout(function() {
            // 실행하고자 하는 코드
            wrong.classList.toggle("hidden");
        }, 1000);
    }
    }
}

function clickPlayButton(){
    playButton.classList.toggle("hidden");
    for(step=1; step<33; step++){
        const stringNumber = String(step);
        const idid=document.getElementById(stringNumber);
        const ididSpan=idid.querySelector("span");
        console.log(ididSpan.textContent);
        const playSound = soundAndNumber[ididSpan.textContent];
        setTimeout(function() {
        if(playSound==null){
            console.log("한박자 쉬기");
        }else{
            playSound.play();
        }
        
    }, 1000*step);
    }
    setTimeout(function() {
        // 실행하고자 하는 코드
        nextButton.classList.toggle("hidden");
    }, 33000);
}


idTwo.addEventListener("click", clickidTwo);
answer2.addEventListener("keydown", submitAnswer2);

idSeven.addEventListener("click", clickidSeven);
answer7.addEventListener("keydown", submitAnswer7);

idNine.addEventListener("click", clickidNine);
answer9.addEventListener("keydown", submitAnswer9);

idfourteen.addEventListener("click", clickidFourteen);
answer14.addEventListener("keydown", submitAnswer14);

idTwenty.addEventListener("click", clickidTwenty);
answer20.addEventListener("keydown", submitAnswer20);

idTwentyTwo.addEventListener("click", clickidTwentyTwo);
answer22.addEventListener("keydown", submitAnswer22);

idTwentySix.addEventListener("click", clickidTwentySix);
answer26.addEventListener("keydown", submitAnswer26);

idTwentySeven.addEventListener("click", clickidTwentySeven);
answer27.addEventListener("keydown", submitAnswer27);


playButton.addEventListener("click", clickPlayButton);