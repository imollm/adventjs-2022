'use strict'

const wrapping = require('./challange-01')

describe('Tests of challange 01', () => {
    test('it shouldn\'t returns an empty array', () => {
        const gifts = ['ivan']
        const giftsWrapped = wrapping(gifts)

        expect(giftsWrapped).not.toEqual([])
    })

    test('it should returns the same number of items', () => {
        const gifts = ['ivan']
        const giftsWrapped = wrapping(gifts)

        expect(giftsWrapped.length).toEqual(gifts.length)
    })

    test('it should returns an empty array', () => {
        const gifts = []
        const giftsWrapped = wrapping(gifts)

        expect(giftsWrapped).toEqual([])
    })

    test('it should returns the correct wrapped gifts', () => {
        const gifts = ['cat', 'game', 'socks']
        const expectedResult = [
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
        ]
    
        expect(wrapping(gifts)).toEqual(expectedResult)
    })

    test('it should returns the correct wrapped gifts', () => {
        const gifts = ['ivan']
        const expectedResult = [
            "******\n*ivan*\n******"
        ]
    
        expect(wrapping(gifts)).toEqual(expectedResult)
    })
})