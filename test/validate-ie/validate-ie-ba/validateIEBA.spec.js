import validateIEBA from '../../../src/validate-ie/validate-ie-ba/validateIEBA'

describe('validateIEBA', () => {

  it('validates Bahia IE input', () => {

    const examples     = [
      { value: '612345-57',  return: true },
      { value: '123456-63',  return: true },
      { value: '1000003-06', return: true },
      { value: '1057652-04', return: true },
      { value: '0635718-30', return: true },
      { value: '0770288-84', return: true },
      { value: '77.028.884', return: true },
      { value: '612345-67',  return: false },
      { value: '123456-73',  return: false },
      { value: '1000003-16', return: false },
      { value: '1057652-05', return: false },
      { value: '0635718-31', return: false },
      { value: '0770288-94', return: false },
      { value: '77.028.880', return: false },
    ]

    examples.forEach(example => {
      expect(validateIEBA(example.value)).toBe(example.return)
    })
  })
})
