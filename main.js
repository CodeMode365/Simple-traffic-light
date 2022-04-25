let Onlights = document.querySelectorAll('.onlight');
let OnlightsArray = Array.from(Onlights);
let timeOut = document.getElementById('timer');
let message = document.getElementById('message')


//One of the light is turned on when reloaded
// var randNum = Math.round(Math.random() * 2);
// OnlightsArray[randNum].style.visibility = 'visible';


//light changer function
var randNew = 0;
var randNum = 0;
var randStore = 0;
    let randomLight = () => {
        randStore = randNew;
        randNum = Math.round(Math.random() * 2);
        randNew = randNum;
        console.log(randNew)
        console.log(randStore)

        //to reduce repetation : only available for single repetation
        if (randNew == randStore) {
            console.log('donto repeat')
            randNum = Math.round(Math.random() * 2);
           
        }


        OnlightsArray.forEach((el, indx, arr) => {
           
            if (el != OnlightsArray[randNum]) {
                el.style.visibility = 'hidden';
            } else {
                el.style.visibility = 'visible';
            }
        })
        if(randNum==0){
            message.innerText='Stop';
            message.style.color='red';
        }
        else if(randNum==1){
            message.innerText='Go';
            message.style.color='Green';

        }
        else if(randNum==2){
            message.innerText='Wait';
            message.style.color='Yellow';

        }
    }

//for timing part

var secRemain = timeOut.getAttribute('data');

let Timer = () => {
    timeOut.innerText = secRemain - 1;
    secRemain = secRemain - 1;
    console.log(secRemain)
    if (secRemain < 1) {
        randomLight();
        secRemain = 30;
    }

}
setInterval(Timer, 1000);

