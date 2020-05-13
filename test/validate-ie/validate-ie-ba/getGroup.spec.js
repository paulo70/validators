import getGroup from '../../../src/validate-ie/validate-ie-ba/getGroup'

describe('getGroup', () => {
  it('returns 1 when first digit is 0, 1, 2, 3, 4, 5 or 8', () => {
    const numbers = ['00456', '10456', '20456', '30456', '40456', '50456', '80456']
    const length = 8

    numbers.forEach(number => {
      expect(getGroup(number, length)).toBe(1)
    })
  })

  it('returns 2 when first digit is 7, 8 or 9', () => {
    const numbers = ['60456', '70456', '90456']
    const length = 8

    numbers.forEach(number => {
      expect(getGroup(number, length)).toBe(2)
    })
  })

  it('returns 1 when second digit is 0, 1, 2, 3, 4, 5 or 8', () => {
    const numbers = ['00456', '11456', '22456', '33456', '44456', '55456', '88456']
    const length = 9

    numbers.forEach(number => {
      expect(getGroup(number, length)).toBe(1)
    })
  })

  it('returns 2 when second digit is 7, 8 or 9', () => {
    const numbers = ['66456', '77456', '99456']
    const length = 9

    numbers.forEach(number => {
      expect(getGroup(number, length)).toBe(2)
    })
  })
})
