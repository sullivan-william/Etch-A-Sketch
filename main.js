const canvas = document.querySelector('#canvas')
let size = prompt('How many squares would you like on each side of your canvas?', 16)

fillCanvas(size)

function fillCanvas(num) {

    // adds (num) divs with class of 'container' to the canvas div to act as columns in our grid
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div')
        div.classList.add('container')
        canvas.appendChild(div)

        // adds (num) divs with class of 'square' to each 'container' div in order to fill each row with a square
        for (let j = 0; j < num; j++) {
            let containers = document.querySelectorAll('.container')
            let newSquare = document.createElement('div')
            newSquare.classList.add('square')
            containers[i].appendChild(newSquare)
        }
    }  

    // adds event listener to each of the 'square' divs so that they change color on mouseover
    let squares = document.querySelectorAll('.square')

    for (let i = 0; i < squares.length; i++) {
        squares[i].addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })
    }
}


const reset = document.querySelector('.reset')
reset.addEventListener('click', () => {
    window.location.reload()
})