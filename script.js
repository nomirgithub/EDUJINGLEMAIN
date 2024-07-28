


function Preloader() {
    const Preloader = document.getElementById('quantum');
    const mainDiv = document.getElementById('mainDiv');
    
    
    setTimeout(() => {
        Preloader.style.display = 'none';
        mainDiv.style.display = 'block';
    }, 2000);
}

window.addEventListener('load', Preloader);

