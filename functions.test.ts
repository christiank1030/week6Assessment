const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => { 
    test('Return an array with the same length as the argument', () => {
        expect(shuffleArray([1, 2, 3]).length).toEqual([1, 2, 3].length)
    })

    test('Return an array', () => {
        expect(typeof shuffleArray([])).toEqual(expect.arrayContaining([]))
    })
});