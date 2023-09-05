// let countSecond = 0;
// let maxSecond = 60;
// function setSecond(){
//    const setTimeoutSecondId = setInterval(() => {
//         ++countSecond;


//         if(countSecond === maxSecond){
//              clearInterval(setTimeoutSecondId)
//          }
            
//         },1000)
        
// }


// let countMinute = 0;
// function setMinute(){
//   const setTimeoutMinuteId = setInterval(() => {
//        },1000*60 );
//        return setTimeoutMinuteId()
    
// }


// let countHour = 0
// function setHour(){
//     const setTimeoutHourId = setInterval(() => {
        
//     },(1000*60 )*60);
//     return setTimeoutHourId()
// }

const hour = document.getElementById('hour')
const minute = document.getElementById('minute')
const second = document.getElementById('second')
  
// function final(you , divOf){
   
// }
// final(setSecond() , second)
// final(setMinute() , minute)
// final(setHour() , hour)
const minuteZero = document.getElementById('minute-zero')
const secondZero = document.getElementById('second-zero')
let countSecond = 0;
const secondTime = setInterval(() => {
    if(countSecond === 60){
        countSecond = countSecond - 60;
        
     }
     else if(countSecond >= 9){
        secondZero.innerText = ""
        
    }
 else if(countSecond <= 9 ){
    second.innerText = ++countSecond;
    secondZero.innerText = "0"
 }

 second.innerText = ++countSecond;
 

}, 1000);
let countMinute = 0;
const minuteTime = setInterval(() => {
    minute.innerText = ++countMinute
}, 1000*60);
let countHour = 0;
const hourTime = setInterval(() => {
   hour.innerText = ++countHour
}, (1000*60)*60);


