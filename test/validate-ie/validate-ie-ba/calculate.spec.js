import calculate  from '../../../src/validate-ie/validate-ie-ba/calculate'

describe('calculate', () => {
  it('returns an array equals to calculated first and second digits', () => {
    const firstDigit = 1
    const secondDigit = 2
    const firstCheckDigit  = { calculate: () => firstDigit }
    const secondCheckDigit = { calculate: () => secondDigit }
    const number = '12345'

    expect(calculate(firstCheckDigit, secondCheckDigit, number)).toEqual([firstDigit, secondDigit])
  })

  it('...', () => {
    const secondDigit = 1
    const firstCheckDigit  = { calculate: jest.fn() }
    const secondCheckDigit = { calculate: jest.fn(() => secondDigit) }
    const number = '12345'

    calculate(firstCheckDigit, secondCheckDigit, number)

    expect(firstCheckDigit.calculate).toBeCalledWith(number.concat(secondDigit))
    expect(secondCheckDigit.calculate).toBeCalledWith(number)
  })
})
