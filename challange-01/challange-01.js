'use strict'

function wrapping(gifts) {
    return gifts.map(gift => {
        const len = gift.length + 2
        const topAndBottom = '*'.repeat(len)
        return `${topAndBottom}\n*${gift}*\n${topAndBottom}` 
    })
}

module.exports = wrapping