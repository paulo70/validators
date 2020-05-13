import getAuxValues from '../../../src/validate-ie/validate-ie-ap/getAuxValues'

describe('getAuxValues', () => {
  it('returns "p" equals 5 and "d" equals 0 when value is between 3000001 and 3017000 range', () => {
    const numbers = ['03000001', '03015000', '03017000']

    for (let number of numbers) {
      expect(getAuxValues(number)).toEqual({ p: 5, d: 0 })
    }
  })

  it('returns "p" equals 9 and "d" equals 1 when value is between 3017001 and 3019022 range', () => {
    const numbers = ['03017001', '03017500', '03019022']

    for (let number of numbers) {
      expect(getAuxValues(number)).toEqual({ p: 9, d: 1 })
    }
  })

  it('returns "p" and "d" equals 0 when value is bigger then 3019023', () => {
    const numbers = ['03019023', '03029023']

    for (let number of numbers) {
      expect(getAuxValues(number)).toEqual({ p: 0, d: 0 })
    }
  })
})
