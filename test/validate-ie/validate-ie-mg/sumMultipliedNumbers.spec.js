jest.mock('../../../src/validate-ie/validate-ie-mg/multiplyWeights')

import sumMultipliedNumbers from '../../../src/validate-ie/validate-ie-mg/sumMultipliedNumbers'
import multiplyWeights      from '../../../src/validate-ie/validate-ie-mg/multiplyWeights'

describe('sumMultipliedNumbers', () => {
  it('returns the sum of multiplied numbers', () => {
    const number = '27'

    multiplyWeights.mockReturnValue([2, 14])

    expect(sumMultipliedNumbers(number)).toBe(7)
  })

  it('calls "multiplyWeights" passing number as argument', () => {
    const number = '27'

    sumMultipliedNumbers(number)

    expect(multiplyWeights).toHaveBeenCalledWith(number)
  })
})
