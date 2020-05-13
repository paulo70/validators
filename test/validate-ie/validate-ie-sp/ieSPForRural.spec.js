import ieSPForRural from '../../../src/validate-ie/validate-ie-sp/ieSPForRural'

describe('ieSPForRural', () => {

  it('validates São Paulo Rural IE values', () => {
    const errorMessage = 'não é válido'
    const examples = [
      { value: 'P011004243002',  return: true },
      { value: 'P110004243002',  return:false },
      { value: 'P0110042430002', return:false }
    ]

    examples.forEach(example => {
      expect(ieSPForRural(example.value)).toBe(example.return)
    })
  })
})
