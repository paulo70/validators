import multiplyWeights from '../../../src/validate-ie/validate-ie-mg/multiplyWeights'

describe('multiplyWeights', () => {
  it('returns an array with multiplied weights', () => {
    const number = '1342'

    expect(multiplyWeights(number)).toEqual([1, 6, 4, 4])
  })
})
