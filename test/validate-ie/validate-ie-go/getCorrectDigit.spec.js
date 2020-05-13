import getCorrectDigit from '../../../src/validate-ie/validate-ie-go/getCorrectDigit'

describe('getCorrectDigit', () => {
  it('returns array containing 0 and 1 when number equals to 11094402', () => {
    const number = '11094402'
    const calculatedModule = 1

    expect(getCorrectDigit(number, calculatedModule)).toEqual([0, 1])
  })

  it('returns 0 when "calculatedModule" equals to 0', () => {
    const number = '15987654'
    const calculatedModule = 0

    expect(getCorrectDigit(number, calculatedModule)).toBe(0)
  })

  it('returns 1 when "calculatedModule" equals 1 number is bigger or equals to 10103105 and smaller or equals to 10119997', () => {
    const number = '10103105'
    const calculatedModule = 1

    expect(getCorrectDigit(number, calculatedModule)).toBe(1)
  })

  it('returns 0 when "calculatedModule" equals 1 and number is smaller then 10103105 and bigger then 10119997', () => {
    const number = '15987694'
    const calculatedModule = 1

    expect(getCorrectDigit(number, calculatedModule)).toBe(0)
  })
})
