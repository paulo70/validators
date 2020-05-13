import validateIEGO from '../../../src/validate-ie/validate-ie-go/validateIEGO'

describe('validateIEGO', () => {

  it('validates Goiás IE input', () => {

    const examples = [
      { value: '10.987.654-7', return: true },
      { value: '10.103.119-1', return: true },
      { value: '15.368.273-6', return: true },
      { value: '110944020',    return: true },
      { value: '110944021',    return: true },
      { value: '15.987.654-0', return: true },
      { value: '15.987.694-0', return: true },
      { value: '10.987.654-8', return: false },
      { value: '10.103.119-2', return: false },
      { value: '15.368.273-7', return: false },
      { value: '12.345.678-9', return: false }
    ]

    examples.forEach(example => {
      expect(validateIEGO(example.value)).toBe(example.return)
    })
  })
})
