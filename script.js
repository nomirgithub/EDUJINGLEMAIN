const articleBody = document.body;
function darkMode() {
    articleBody.style.backgroundColor = "white";
    articleBody.style.color = "black";

}
function lightMode() {
    articleBody.style.backgroundColor = "black";
    articleBody.style.color = "white";

}






function Preloader() {
    const Preloader = document.getElementById('quantum');
    const mainDiv = document.getElementById('mainDiv');
    
    
    setTimeout(() => {
        Preloader.style.display = 'none';
        mainDiv.style.display = 'block';
    }, 1000);
}

window.addEventListener('load', Preloader);

