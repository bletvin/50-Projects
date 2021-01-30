const bg = document.querySelector('.bg'); 
const text = document.querySelector('.text'); 

let load = 0; 

let int = setInterval(blurring, 30); 

function blurring() {
    load++; 

    if (load > 99) {
        clearInterval(int);
    }

    text.innerText = `${load}%`; 

    // scale takes input number of load which will go from 0 to 100 and scale that to 1 to 0.  Slowly fade text
    text.style.opacity = scale(load, 0, 100, 1, 0); 
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; 

}


// Coppied from stackoverflow
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }