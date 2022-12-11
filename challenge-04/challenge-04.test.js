'use strict'

const fitsInOneBox = require('./challenge-04')

describe('Tests of challenge 04', () => {
    test('it should return false, when no boxes', () => {
        const boxes = []

        const canBeFitted = fitsInOneBox(boxes)

        expect(canBeFitted).toBe(false)
    })

    test('it should return true', () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 }
        ]

        const canBeFitted = fitsInOneBox(boxes)

        expect(canBeFitted).toBe(true)
    })

    test('it should return false', () => {
        const boxes = [
            { l: 1, w: 1, h: 10 },
            { l: 2, w: 2, h: 1 },
            { l: 3, w: 3, h: 12 },
        ]

        const canBeFitted = fitsInOneBox(boxes)

        expect(canBeFitted).toBe(false)
    })

    test('it should return false', () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 3, w: 1, h: 3 }
        ]

        const canBeFitted = fitsInOneBox(boxes)

        expect(canBeFitted).toBe(false)
    })

    test('it should return false', () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 2, w: 2, h: 2 },
            { l: 2, w: 10, h: 2 }
        ]

        const canBeFitted = fitsInOneBox(boxes)

        expect(canBeFitted).toBe(false)
    })

    test('it should return true', () => {
        const boxes = [
            { l: 1, w: 1, h: 1 },
            { l: 3, w: 3, h: 3 },
            { l: 2, w: 2, h: 2 }
        ]

        const canBeFitted = fitsInOneBox(boxes)

        expect(canBeFitted).toBe(true)
    })
})