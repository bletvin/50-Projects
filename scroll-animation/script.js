const contents = document.querySelectorAll('.content'); 

window.addEventListener('scroll', checkContents); 

checkContents(); 

function checkContents() {
    // variable for when boxes will transition in 
    const triggerBottom = window.innerHeight / 5 * 4; 

    contents.forEach(content => {
        // get position of the top of each box
        const contentTop = content.getBoundingClientRect().top; 

        if(contentTop < triggerBottom ) {
            content.classList.add('show'); 
        }else{
            content.classList.remove('show'); 
        }
    })
}