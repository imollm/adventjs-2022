'use strict'

import { describe, test } from 'node:test'
import assert from 'node:assert'
import { countHours } from './challenge-02.js'

describe('Tests of challenge 02', () => {
    test('it should be 0 when no holidays', () => {
        const year = 2022
        const holidays = []
        const recoupHours = countHours(year, holidays)

        assert.equal(recoupHours, 0)
    })

    test('it should return type number', () => {
        const year = 2022
        const holidays = ['01/06', '04/01', '12/25']
        const recoupHours = countHours(year, holidays)

        assert.equal(typeof recoupHours, 'number')
    })

    test('i should be 4 hours', () => {
        const year = 2023
        const holidays = ['01/06', '04/01', '12/25']
        const recoupHours = countHours(year, holidays)

        assert.equal(recoupHours, 4)
    })

    test('it should be 4 hours', () => {
        const year = 2022
        const holidays = ['01/06', '04/01', '12/25']
        const recoupHours = countHours(year, holidays)

        assert.equal(recoupHours, 4)
    })

    test('it should be 10 hours', () => {
        const year = 1985
        const holidays = ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']
        const recoupHours = countHours(year, holidays)

        assert.equal(recoupHours, 10)
    })

    test('it should be 0 hours', () => {
        const year = 2000
        const holidays = ['01/01']
        const recoupHours = countHours(year, holidays)

        assert.equal(recoupHours, 0)
    })
})