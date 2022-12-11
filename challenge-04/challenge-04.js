'use strict'

function fitsInOneBox(boxes) {
    let canBeFitted = false

    boxes.sort((boxA, boxB) => {
        if (boxA.l > boxB.l) return 1
        else if (boxA.l < boxB.l) return -1
        else if (boxA.l == boxB.l) return 0
    })

    for (let i = 0; i < boxes.length - 1; i++) {
        if (
            i < boxes.length - 1 &&
            (boxes[i]).l < (boxes[i+1]).l &&
            (boxes[i]).w < (boxes[i+1]).w &&
            (boxes[i]).h < (boxes[i+1]).h
        ){
            canBeFitted = true
        } else {
            canBeFitted = false
            break
        }
    }

    return canBeFitted
}

module.exports = fitsInOneBox