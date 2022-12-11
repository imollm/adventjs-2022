'use strict'

const wrapping = require('./challenge-01')

describe('Tests of challenge 01', () => {
    test('it shouldn\'t return an empty array', () => {
        const gifts = ['ivan']
        const giftsWrapped = wrapping(gifts)

        expect(giftsWrapped).not.toEqual([])
    })

    test('it should return the same number of items', () => {
        const gifts = ['ivan']
        const giftsWrapped = wrapping(gifts)

        expect(giftsWrapped.length).toEqual(gifts.length)
    })

    test('it should return an empty array', () => {
        const gifts = []
        const giftsWrapped = wrapping(gifts)

        expect(giftsWrapped).toEqual([])
    })

    test('it should return the correct wrapped gifts', () => {
        const gifts = ['cat', 'game', 'socks']
        const expectedResult = [
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
        ]
    
        expect(wrapping(gifts)).toEqual(expectedResult)
    })

    test('it should return the correct wrapped gifts', () => {
        const gifts = ['ivan']
        const expectedResult = [
            "******\n*ivan*\n******"
        ]
    
        expect(wrapping(gifts)).toEqual(expectedResult)
    })
})