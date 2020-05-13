import validateIETO from '../../../src/validate-ie/validate-ie-to/validateIETO'

 describe('validateIETO', () => {

  it('validates Tocantins IE input', () => {
    const examples = [
      { value: '29.01.022783-6',  return: true },
      { value: '3303752070-4',    return: true },
      { value: '17035305390',     return: true },
      { value: '29 01 022783 0',  return: false },
      { value: '29.04.022783-6',  return: false },
      { value: '29.022783-6',     return: false }
    ]

    examples.forEach(example => {
      expect(validateIETO(example.value)).toBe(example.return)
    })
  })
})
