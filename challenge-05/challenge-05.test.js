'use strict'

const getMaxGifts = require('./challenge-05')

describe('Tests of challenge 05', () => {
    test('it should return 20', () => {
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 20
        const maxCities = 3

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        expect(higherSum).toEqual(maxGifts)
    })

    test('it should return 0', () => {
        const giftsCities = [50]
        const maxGifts = 15
        const maxCities = 1

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        expect(higherSum).toEqual(0)
    })

    test('it should return 50', () => {
        const giftsCities = [50]
        const maxGifts = 100
        const maxCities = 1

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        expect(higherSum).toEqual(50)
    })

    test('it should return 70', () => {
        const giftsCities = [50, 70]
        const maxGifts = 100
        const maxCities = 1

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        expect(higherSum).toEqual(70)
    })

    test('it should return 100', () => {
        const giftsCities = [50, 70, 30]
        const maxGifts = 100
        const maxCities = 2

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        expect(higherSum).toEqual(100)
    })

    test('it should return 100', () => {
        const giftsCities = [50, 70, 30]
        const maxGifts = 100
        const maxCities = 3

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        expect(higherSum).toEqual(100)
    })
    
    test('it should return 100', () => {
        const giftsCities = [50, 70, 30]
        const maxGifts = 100
        const maxCities = 4

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        expect(higherSum).toEqual(100)
    })
})