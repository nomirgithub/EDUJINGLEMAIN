function insertImage() {

    document.querySelectorAll('.box').forEach(image => {

        if (image.innerText.length !== 0){
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='allimg allpawn'  src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'

            }

            else {

                image.innerHTML = `${image.innerText} <img class= 'allimg' src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }

        }

    });
}
insertImage()



function coloring() {
    const color = document.querySelectorAll('.box')
    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if ( a % 2 == 0) {
            color.style.backgroundColor = ' rgb(6, 0, 0) '
        }
        if ( a % 2 !== 0) {
            color.style.backgroundColor = ' rgb(245,245,220)'
        }

    }

    )
}
coloring()

