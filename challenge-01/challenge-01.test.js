'use strict'

import { describe, test } from 'node:test'
import assert from 'node:assert'
import { wrapping } from './challenge-01.js'

describe('Tests of challenge 01', () => {
    test('it shouldn\'t return an empty array', () => {
        const gifts = ['ivan']
        const giftsWrapped = wrapping(gifts)

        assert.notEqual(giftsWrapped, [])
    })

    test('it should return the same number of items', () => {
        const gifts = ['ivan']
        const giftsWrapped = wrapping(gifts)

        assert.equal(giftsWrapped.length, gifts.length)
    })

    test('it should return an empty array', () => {
        const gifts = []
        const giftsWrapped = wrapping(gifts)

        assert.equal(giftsWrapped.length, gifts.length)
    })

    test('it should return the correct wrapped gifts', () => {
        const gifts = ['cat', 'game', 'socks']
        const giftsWrapped = wrapping(gifts)
        const expectedResult = [
            "*****\n*cat*\n*****",
            "******\n*game*\n******",
            "*******\n*socks*\n*******"
        ]
    
        giftsWrapped.forEach((giftWrapped, i) => {
            assert.equal(giftWrapped, expectedResult[i])
        });
    })

    test('it should return the correct wrapped gifts', () => {
        const gifts = ['ivan']
        const giftsWrapped = wrapping(gifts)
        const expectedResult = [
            "******\n*ivan*\n******"
        ]
    
        assert.equal(giftsWrapped.length, expectedResult.length)
    })
})