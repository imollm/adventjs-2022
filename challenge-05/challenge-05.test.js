'use strict'

import { describe, test } from 'node:test';
import assert from 'node:assert';
import { getMaxGifts } from './challenge-05.js';

describe('Tests of challenge 05', () => {
    test('it should return 20', () => {
        const giftsCities = [12, 3, 11, 5, 7]
        const maxGifts = 20
        const maxCities = 3

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 20)
    })

    test('it should return 0', () => {
        const giftsCities = [50]
        const maxGifts = 15
        const maxCities = 1

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 0)
    })

    test('it should return 50', () => {
        const giftsCities = [50]
        const maxGifts = 100
        const maxCities = 1

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 50)
    })

    test('it should return 70', () => {
        const giftsCities = [50, 70]
        const maxGifts = 100
        const maxCities = 1

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 70)
    })

    test('it should return 100', () => {
        const giftsCities = [50, 70, 30]
        const maxGifts = 100
        const maxCities = 2

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 100)
    })

    test('it should return 100', () => {
        const giftsCities = [50, 70, 30]
        const maxGifts = 100
        const maxCities = 3

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 100)
    })
    
    test('it should return 100', () => {
        const giftsCities = [50, 10, 40, 1000, 500, 200]
        const maxGifts = 199
        const maxCities = 4

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 100)
    })

    test('it should return 115', () => {
        const giftsCities = [50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
        const maxGifts = 1000
        const maxCities = 1000

        const higherSum = getMaxGifts(giftsCities, maxGifts, maxCities)

        assert.equal(higherSum, 115)
    })
})