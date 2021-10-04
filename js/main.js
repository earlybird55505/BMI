
// // Digital clock..........

// const hours = document.getElementById("hours")
// const minutes = document.getElementById("minutes")
// const seconds = document.getElementById("seconds")
// const progress = document.getElementById("progress")
// const formt = document.getElementById("formt")



// function setCurrantTime(even){
//     let nowTime = new Date();
//     let hu = nowTime.getHours();
//     let mi = nowTime.getMinutes();
//     let sec = nowTime.getSeconds();
//     let timeFormate = "AM"

//     if(hu == 0){
//         hu = 12
//     }
//     if(hu > 12){
//         hu = hu -12;
//         timeFormate = "PM"
//     }

//     hu = (hu < 10)? "0" + hu : hu;
//     mi = (mi < 10)? "0" + mi : mi;
//     sec = (sec < 10)? "0" + sec : sec;

//     hours.innerText = hu;
//     minutes.innerText = mi;
//     seconds.innerText = sec;
//     formt.innerText = timeFormate
//     progress.style.width = (sec/60)*100 + "%";
    
//     setInterval(setCurrantTime, 1000)
// }

// setCurrantTime()

// let even = document.querySelector('#progress').addEventListener('mouseover', setEven)
// function setEven(even) {
//     this.style.background = `#${even.offsetX}`
// }




// //// digital clock ...........
// let newTime = document.querySelector(".time")
// let newformet = document.querySelector("small")
// function currantTime(){
//     let todayTime = new Date()
//     let hours = todayTime.getHours()
//     let minutes = todayTime.getMinutes()
//     let seconds = todayTime.getSeconds()
//     let timeFormate = "AM"

//     if(hours == 0){
//         hours = 12
//     }
//     if(hours > 12){
//         hours = hours - 12;
//         timeFormate = "PM"
//     }
//     hours = (hours < 10) ? "0" + hours : hours
//     minutes = (minutes < 10) ? "0" + minutes : minutes
//     seconds = (seconds < 10) ? "0" + seconds : seconds

//     let finalTime = `${hours} : ${minutes} : ${seconds}`;
//     let finalformat = `${timeFormate}`;

//     newTime.innerHTML = finalTime
//     newformet.innerHTML = finalformat

//     setInterval(currantTime, 1000)
// }
// currantTime()









// BMI calculator........................
let weightInput = document.querySelector("#weight");
let heightInput = document.querySelector("#height");
let calculInput = document.querySelector(".calcul");
let resetInput = document.querySelector(".reset");
let resultInput = document.querySelector(".sum");
let commentInput = document.querySelector(".comment");


// calculInput.addEventListener('click', calculte)
calculInput.addEventListener('click', evenHandelar)
resetInput.addEventListener('click', restart)


function calculte(){
    let height,weight,BMI;
    height = Number(heightInput.value)
    weight = Number(weightInput.value)
    BMI = weight / (height * .0254 * height * .0254 )
    resultInput.textContent = BMI.toFixed(2)
    let mg = showComment(BMI)
    commentInput.textContent = mg
}

function showComment(bmiValue){
    if(bmiValue < 18.5){
        return "You are Underweight"
    }else if(bmiValue >= 18.5 && bmiValue <= 24.9){
        return "Your weight is Normal"
    }else if(bmiValue >= 25 && bmiValue <= 29.9){
        return "You are Over weight"
    }else if(bmiValue >= 30 && bmiValue <= 34.9){
        return "You are Obesity class-I"
    }else if(bmiValue >= 35 && bmiValue <= 39.9){
        return "You are Obesity class-II"
    }else{
        return "You are Obesity class-III"
    }
}
function restart(){
    heightInput.value = "";
    weightInput.value = "";
    resultInput.textContent = "________";
    commentInput.textContent = "";
}

function evenHandelar(){
    if(Number(heightInput.value) && Number(weightInput.value)){
        calculte()
    }else{
        alert ('plz provide valid inputs')
        restart()
    }
}


// Underweight = <18.5
// Normal weight = 18.5–24.9
// Overweight = 25–29.9
// Obesity = BMI of 30 or greater

