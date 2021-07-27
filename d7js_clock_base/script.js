let digitalElement = document.querySelector('.digital');
let segElement = document.querySelector('.p_s');
let minElement = document.querySelector('.p_m');
let hourElement = document.querySelector('.p_h');

// Analog clock - Relógio analógico
function updateClock(){
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  
  // Calculating pointer angle - Cálculo do angulo do ponteiro
  let sDeg = ((360 / 60) * second) - 90;
  let mDeg = ((360 / 60) * minute) - 90;
  let hDeg = ((360 / 12) * hour) - 90;
  
  // Set angle in CSS - Defini ângulo no css
  segElement.style.transform = `rotate(${sDeg}deg)`;
  minElement.style.transform = `rotate(${mDeg}deg)`;
  hourElement.style.transform = `rotate(${hDeg}deg)`;

  // Digital clock - Relógio digital
  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`;
}

// Add 0 to digital clock - Adiciona 0 no relógio digital
function fixZero(time){
  // Abbreviated logic - Lógica abreviada
  return time < 10 ? `0${time}` : time;
  
  // Initial logic - Lógica inicial
  /* if(time < 10){
    return '0'+time;
  } else {
    return time;
  } */
}

setInterval(updateClock, 1000);
updateClock();