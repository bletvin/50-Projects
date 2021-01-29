const prev = document.querySelector('.prev'); 
const next = document.querySelector('.next'); 
const step = document.querySelectorAll('.step'); 
const progress = document.querySelector('.progress'); 

let currentStep = 0; 

prev.addEventListener('click', () => {
    step[currentStep].classList.remove('active'); 
    currentStep -= 1; 
    next.disabled = false;
    progress.style.width = `${(currentStep/(step.length-1))*100}%`;
    if (currentStep === 0){
        prev.disabled = true; 
    }else{
        prev.disabled = false;
    }
})

next.addEventListener('click', () => {
    step[currentStep+1].classList.add('active'); 
    currentStep++;
    prev.disabled = false;
    progress.style.width = `${(currentStep/(step.length-1))*100}%`;
    if  (currentStep === step.length-1){
        next.disabled = true; 
    }else{
        next.disabled = false;
    }
})