'use strict'

import { describe, test } from 'node:test'
import assert from 'node:assert'
import { distributeGifts } from './challenge-03.js'

describe('Tests of challenge 03', () => {
    test('it should return false, when no presents or reindeers', () => {
        const packOfGifts = []
        const reindeers = []
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.equal(howManyBoxes, false)
    })

    test('it should return false, when the name of presents is less than 1', () => {
        const packOfGifts = ['']
        const reindeers = ["dasher", "dancer"]
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.equal(howManyBoxes, false)
    })

    test('it should return false, when the name of reindeers is less than 1', () => {
        const packOfGifts = ["book", "doll", "ball"]
        const reindeers = ['']
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.equal(howManyBoxes, false)
    })

    test('it should return 2', () => {
        const packOfGifts = ["book", "doll", "ball"]
        const reindeers = ["dasher", "dancer"]
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.strict.equal(howManyBoxes, 2)
    })

    test('it should return 1', () => {
        const packOfGifts = ['a', 'b', 'c']
        const reindeers = ['d', 'e']
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.strict.equal(howManyBoxes, 1)
    })

    test('it should return 0', () => {
        const packOfGifts = ['videogames', 'console']
        const reindeers = ['midu']
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.strict.equal(howManyBoxes, 0)
    })

    test('it should return 5', () => {
        const packOfGifts = ['game', 'videoconsole', 'computer']
        const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.strict.equal(howManyBoxes, 5)
    })

    test('it should return 26', () => {
        const packOfGifts = ['music']
        const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
        const howManyBoxes = distributeGifts(packOfGifts, reindeers)

        assert.strict.equal(howManyBoxes, 26)
    })
})