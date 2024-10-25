let start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reset = document.querySelector('.reset')
const sec = document.querySelector('.sec');
const min = document.querySelector('.min');
const hr = document.querySelector('.hr');

let hours = 0;
let mintue = 0;
let second = 0;

let pauseBtn = 0;

pause.disabled = true;




let val;
let intial=true;

let display=()=>{
    intial=false;
    val = setInterval(() => {
        second++;
        sec.textContent = ''
        sec.textContent = second;
        if (second === 60) {
            min.textContent = '';
            min.textContent = mintue++;
            second = 0;
        }
        if (mintue === 60) {
            hr++;
            hr.textContent = ''
            hr.textContent = hr;
            mintue = 0;
            if (hr == 24) {
                hr = 0;
            }
        }
    }, 1000)
}


start.addEventListener('click', () => {
    pause.disabled=false;
    if(intial===false)return;
        display();
})

pause.addEventListener('click', () => {
    if(pause.textContent==='Pause'){
        clearInterval(val);
        pause.textContent='Resume'
    }
    else{
        display();
        pause.textContent='Pause';
        
    }
})


reset.addEventListener('click', () => {

    second = 0;
    mintue = 0;
    hours = 0;
    sec.textContent = '0';
    min.textContent = '0';
    hr.textContent = '0';
    clearInterval(val);
    pause.disabled = true;
    intial=true;
    pause.textContent='Pause';
})
