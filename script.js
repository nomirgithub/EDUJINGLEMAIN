


function Preloader() {
    const Preloader = document.getElementById('quantum');
    const mainDiv = document.getElementById('mainDiv');
    
    
    setTimeout(() => {
        Preloader.style.display = 'none';
        mainDiv.style.display = 'block';
    }, 10);
}

window.addEventListener('load', Preloader);

