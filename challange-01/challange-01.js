'use strict'

function wrapping(gifts) {
    return gifts.map(gift => {
        let giftWrapped
        const len = gift.length + 2
        const topAndBottom = '*'.repeat(len)
        giftWrapped = topAndBottom + '\n'
        giftWrapped += `*${gift}*`
        giftWrapped += '\n' + topAndBottom

        return giftWrapped
    })
}

module.exports = wrapping