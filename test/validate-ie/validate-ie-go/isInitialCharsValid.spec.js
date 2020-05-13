import isInitialCharsValid from '../../../src/validate-ie/validate-ie-go/isInitialCharsValid'

describe('isInitialCharsValid', () => {
  it('returns true when values has initial chars ', () => {
    const values = ['109876547', '110944020', '153682736']
    const initialChars = ['10', '11', '15']

    values.forEach(value => expect(isInitialCharsValid(value, initialChars)).toBeTruthy())
  })

  it('returns false when values has initial chars ', () => {
    const values = ['209876547', '310944020', '453682736']
    const initialChars = ['10', '11', '15']

    values.forEach(value => expect(isInitialCharsValid(value, initialChars)).toBeFalsy())
  })
})
