import defineCheckDigitOptions from '../../../src/validate-ie/validate-ie-ba/defineCheckDigitOptions'

describe('defineCheckDigitOptions', () => {
  const interations = [
    { args: [1, 1, 8], outcome: { module: 10, weights: [2, 3, 4, 5, 6, 7, 8]    } },
    { args: [1, 1, 9], outcome: { module: 10, weights: [2, 3, 4, 5, 6, 7, 8, 9] } },
    { args: [1, 2, 8], outcome: { module: 11, weights: [2, 3, 4, 5, 6, 7, 8]    } },
    { args: [1, 2, 9], outcome: { module: 11, weights: [2, 3, 4, 5, 6, 7, 8, 9] } },
    { args: [2, 1, 8], outcome: { module: 10, weights: [2, 3, 4, 5, 6, 7]       } },
    { args: [2, 1, 9], outcome: { module: 10, weights: [2, 3, 4, 5, 6, 7, 8]    } },
    { args: [2, 2, 8], outcome: { module: 11, weights: [2, 3, 4, 5, 6, 7]       } },
    { args: [2, 2, 9], outcome: { module: 11, weights: [2, 3, 4, 5, 6, 7, 8]    } }
  ]

  for (let interation of interations) {
    it('define "CheckDigit" options based on "digit", "group" and "numberLength"', () => {
      expect(defineCheckDigitOptions(...interation.args)).toEqual(interation.outcome)
    })
  }
})
