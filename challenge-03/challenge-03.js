'use strict'

function distributeGifts(packOfGifts, reindeers) {
    function calcGiftsWeight(packOfGifts) {
        let weightGifts = 0
    
        packOfGifts.forEach(gift => {
            if (gift.length <= 0) {
                return false
            } else {
                weightGifts += gift.length
            }
        });
    
        return weightGifts
    }
    
    function calcMaxReindeersWeight(reindeers) {
        let maxWeightReindeers = 0
    
        reindeers.forEach(reindeer => {
            if (reindeer.length <= 0) {
                return false
            } else {
                maxWeightReindeers += reindeer.length * 2
            }
        });
    
        return maxWeightReindeers
    }
    
    if (!packOfGifts.length || !reindeers.length) {
        return false
    }

    const weightGifts = calcGiftsWeight(packOfGifts)
    const maxWeightReindeers = calcMaxReindeersWeight(reindeers)

    if (!maxWeightReindeers || !weightGifts) {
        return false
    }

    return Math.floor(maxWeightReindeers / weightGifts)
}

module.exports = distributeGifts