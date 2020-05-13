import addZeroToNumber from '../../../src/validate-ie/validate-ie-mg/addZeroToNumber'

describe('addZeroToNumber', () => {
  it('Add to IE an zero number', () => {
    const number = '06230790400'

    expect(addZeroToNumber(number)).toBe('062030790400')
  })
})

