const canvas = document.querySelector('#canvas')

function fillCanvas(num) {

    // adds (num) divs with class of 'container' to the canvas div to act as columns in our grid
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div')
        div.classList.add('container')
        canvas.appendChild(div)

        // adds (num) divs with class of 'square' to each 'container' div in order to fill each row with a square
        for (let j = 0; j < num; j++) {
            let container = document.querySelectorAll('.container')
            let square = document.createElement('div')
            square.classList.add('square')
            container[i].appendChild(square)
        }
    }  
}

fillCanvas(16)