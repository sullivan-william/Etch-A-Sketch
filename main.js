const canvas = document.querySelector('#canvas')

function fillCanvas(num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div')
        canvas.appendChild(div)        
    }
}

fillCanvas(16)