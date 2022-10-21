const {shuffleArray} = require('./utils')
const { bots } = require('./data')

describe('shuffleArray should', () => { 
    test('Return an array with the same length as the argument', () => {
        expect(shuffleArray(bots).length).toEqual(bots.length)
    })

    test('', () => {
        expect(typeof shuffleArray(bots)).toBe('object')
    })
});