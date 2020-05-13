import validateIERR from '../../../src/validate-ie/validate-ie-rr/validateIERR'

describe('validateIERR', () => {
  it('validates Roraima IE input', () => {
    const examples     = [
      { value: '24006628-1', return: true },
      { value: '24001755-6', return: true },
      { value: '24003429-0', return: true },
      { value: '24001360-3', return: true },
      { value: '24008266-8', return: true },
      { value: '24006153-6', return: true },
      { value: '24007356-2', return: true },
      { value: '24005467-4', return: true },
      { value: '24004145-5', return: true },
      { value: '24001340-7', return: true },
      { value: '24001340-2', return: false },
    ]

    examples.forEach(example => {
      expect(validateIERR(example.value)).toBe(example.return)
    })
  })
})
