const secondsHand=document.querySelector('.second-hand')
const minutesHand=document.querySelector('.min-hand')
const hoursHand=document.querySelector('.hour-hand')
function setTime() {
    const now=new Date()

    // handling seconds hand
    const seconds=now.getSeconds()
    const secondsDegrees=((seconds/60)*360)+90;
    secondsHand.style.transform=`rotate(${secondsDegrees}deg)`


    // handling minutes hand
    const min=now.getMinutes()
    const minutesDegrees=((min/60)*360)+90;
    minutesHand.style.transform=`rotate(${minutesDegrees}deg)`

    // handling  hours hand
    const hour=now.getHours()-12
    const hourDegrees=(((hour)/12)*360)+90;
    hoursHand.style.transform=`rotate(${hourDegrees}deg)`

}

setInterval(setTime,1000)