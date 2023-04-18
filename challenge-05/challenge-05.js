'use strict'

function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let counter = 0
    let accumulate = 0

    giftsCities.sort((giftA, giftB) => {
        if (giftA > giftB) return -1
        else if (giftA < giftB) return 1
        else if (giftA == giftB) return 0
    })

    giftsCities.forEach(giftCity => {
        if (
            giftCity < maxGifts &&
            counter < maxCities &&
            giftCity + accumulate <= maxGifts
        ) {
            counter++
            accumulate += giftCity
        }
    })

    return accumulate
}

module.exports = getMaxGifts