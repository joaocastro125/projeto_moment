let myName="maria cristina"

function start(){


   let times=document.getElementById('time')
   let now=new Date();
   let hours=now.getHours()
   let minutes=now.getMinutes()
   hours = hours < 10 ? '0' + hours : hours;
   minutes = minutes < 10 ? '0' + minutes : minutes;
  
   times.innerHTML=`${hours}:${minutes}`

  
}

function timeInformation(){
 let greetingDiv = document.getElementById('informacao');

    let now = new Date();
    let hours = now.getHours();
    if (hours > 0 && hours < 12) {
        greetingDiv.innerHTML = `Bom dia, ${myName}.`;
    } else if (hours >= 12 && hours < 18) {
        greetingDiv.innerHTML = `Boa tarde, ${myName}.`;
    } else {
        greetingDiv.innerHTML = `Boa noite, ${myName}.`;
    }
}




start()
timeInformation()
setInterval(start, 1000)

