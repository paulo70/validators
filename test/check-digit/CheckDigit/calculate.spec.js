import CheckDigit from '../../../src/check-digit/CheckDigit'

describe('CheckDigit#calculate', () => {
  const storageMultiplyWeights = CheckDigit.prototype.multiplyWeights

  beforeEach(() => {
    CheckDigit.prototype.multiplyWeights = jest.fn()
  })

  afterEach(() => {
    CheckDigit.prototype.multiplyWeights = storageMultiplyWeights
  })

  it('calculates', () => {
    const multiplyWeightsResult = 20
    const multiplyWeights = CheckDigit.prototype.multiplyWeights

    multiplyWeights.mockReturnValue(multiplyWeightsResult)

    const numberArray = [0, 1, 1, 0, 2, 1]
    const options = { weights: [2, 3, 4], module: 5 }
    const object = new CheckDigit(options)
    const outcome = object.calculate(numberArray)

    expect(multiplyWeights).toBeCalledWith(numberArray)
    expect(outcome).toBe(
      Math.abs(
        (multiplyWeightsResult % options.module) - options.module
      )
    )
  })

  describe('when "withoutModuleComplement" argument is true', () => {
    const withoutModuleComplement = true

    it('returns calculated module', () => {
      const multiplyWeightsResult = 20
      const multiplyWeights = CheckDigit.prototype.multiplyWeights

      multiplyWeights.mockReturnValue(multiplyWeightsResult)

      const numberArray = [0, 1, 1, 0, 2, 1]
      const options = { weights: [2, 3, 4], module: 5, withoutModuleComplement }
      const object = new CheckDigit(options)
      const calculatedModule = multiplyWeightsResult % options.module
      const outcome = object.calculate(numberArray)

      expect(outcome).toBe(calculatedModule)
    })
  })

  describe('when default calculation is bigger than 9', () => {
    it('returns 0', () => {
      const multiplyWeightsResult = 210
      const multiplyWeights = CheckDigit.prototype.multiplyWeights

      multiplyWeights.mockReturnValue(multiplyWeightsResult)

      const numberArray = [0, 1, 1, 0, 2, 1]
      const options = { weights: [2, 3, 4], module: 11, withoutModuleComplement: false }
      const object = new CheckDigit(options)
      const outcome = object.calculate(numberArray)

      expect(outcome).toBe(0)
    })
  })
})
