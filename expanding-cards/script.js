const photos = document.querySelectorAll('.photo'); 

photos.forEach ((photo) => {
    photo.addEventListener('click', () => {
        removeActive(); 
        photo.classList.add('active');
    })
}

)

function removeActive() {
    photos.forEach((photo)=>{
        photo.classList.remove('active'); 
    })
}