import CheckDigit from '../../../src/check-digit/CheckDigit'

describe('CheckDigit.constructor', () => {
  it('assigns "_numDigits", "_module", "_weights" and "_withoutModuleComplement" with default values', () => {
    const instance = new CheckDigit()

    expect(instance._numDigits).toBe(2)
    expect(instance._module).toBe(11)
    expect(instance._weights).toEqual([2, 3, 4, 5, 6, 7, 8, 9])
    expect(instance._withoutModuleComplement).toBeFalsy()
  })

  it('assigns "_numDigits", "_module" and "_weights" with correspondent option', () => {
    const options  = { numDigits: 3, module: 10, weights: [1, 2, 3], withoutModuleComplement: false }
    const instance = new CheckDigit(options)

    expect(instance._numDigits).toBe(options.numDigits)
    expect(instance._module).toBe(options.module)
    expect(instance._weights).toBe(options.weights)
    expect(instance._withoutModuleComplement).toBe(options.withoutModuleComplement)
  })
})
