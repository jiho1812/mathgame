const idOne = document.getElementById("1");
const idTwo = document.getElementById("2");
const idThree = document.getElementById("3");
const idFour = document.getElementById("4");
const idFive = document.getElementById("5");
const idSix = document.getElementById("6");
const idSeven = document.getElementById("7");
const idEight = document.getElementById("8");
const idNine = document.getElementById("9");
const idTen = document.getElementById("10");
const idEleven = document.getElementById("11");
const idTwelve = document.getElementById("12");
const idThirdteen = document.getElementById("13");
const idfourteen = document.getElementById("14");
const idfifteen = document.getElementById("15");
const idSixteen = document.getElementById("16");
const idSeventeen = document.getElementById("17");
const idEighteen = document.getElementById("18");
const idNineteen = document.getElementById("19");
const idTwenty = document.getElementById("20");
const idTwentyOne = document.getElementById("21");
const idTwentyTwo = document.getElementById("22");
const idTwentyThree = document.getElementById("23");
const idTwentyFour = document.getElementById("24");
const idTwentyFive = document.getElementById("25");
const idTwentySix = document.getElementById("26");
const idTwentySeven = document.getElementById("27");
const idTwentyeight = document.getElementById("28");
const idTwentynine = document.getElementById("29");
const idThirty = document.getElementById("30");
const idThirtyone = document.getElementById("31");
const idThirtytwo = document.getElementById("32");

const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");
const f = document.getElementById("f");
const g = document.getElementById("g");
const a = document.getElementById("a");
const b = document.getElementById("b");
const upC = document.getElementById("upC");

const playButton=document.querySelector(".playButton");
const nextButton = document.querySelector(".nextButton");

const soundAndNumber = {
    1:c,
    2:d,
    3:e,
    4:f,
    5:g,
    6:a,
    7:b,
    8:upC,
}

let Count=0;


for (step = 1; step < 33; step++) {
    const stringNumber = String(step);
    const idElement = document.getElementById(stringNumber);
    const idSpan = idElement.querySelector("span");
    const idSpanInput = idSpan.querySelector("input");
    idSpanInput.addEventListener('keydown', function (event) {
        numberEnter(stringNumber, idSpan, idSpanInput, event);
    });

    function numberEnter(stringNumber, idSpan, idSpanInput, event) {
        if (event.key === "Enter") {
            if(0 <= idSpanInput.value && idSpanInput.value <= 8){
                const numberValue = idSpanInput.value
                idSpan.innerHTML = '';
                idSpan.textContent = numberValue;
                Count=Count+1;
                if (Count===32){
                    playButton.classList.toggle("hidden");
                }
            }else{
                alert("0부터 8까지의 숫자만 입력해주세요.");
            }
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

playButton.addEventListener("click", clickPlayButton);
