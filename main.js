let Onlights =document.querySelectorAll('.onlight');
let OnlightsArray = Array.from(Onlights);
let timeOut = document.getElementById('timer');


//One of the light is turned on when reloaded
let randNum= Math.round(Math.random()*2);
OnlightsArray[randNum].style.visibility ='visible';


//light changer function
let randomLight=()=>{
    let randNum= Math.round(Math.random()*2);
    console.log(randNum)
    OnlightsArray.forEach((el,indx, arr)=>{
        // console.log(el)
        // console.log(OnlightsArray[randNum])
        if(el!=OnlightsArray[randNum]){
            el.style.visibility ='hidden';
        }else{
            el.style.visibility='visible';
        }
    })
}
//setInterval(randomLight, 30000)// The light changes in 1min
// randomLight();
var secRemain = timeOut.getAttribute('data');

let Timer = ()=>{
    timeOut.innerText = secRemain-1; 
    secRemain = secRemain - 1;
    console.log(secRemain)
    if(secRemain < 1){
        randomLight();
        secRemain = 30;
    }
    
}
setInterval(Timer, 1000);