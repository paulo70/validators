import ieSPForIndustryAndCommerce from '../../../src/validate-ie/validate-ie-sp/ieSPForIndustryAndCommerce'

describe('ieSPForIndustryAndCommerce', () => {

  it('validates São Paulo Industrial and Commercial IE values', () => {

    const examples = [
      { value: '110042490114',  return: true },
      { value: '110042490110',  return: false },
      { value: '1100424901100', return: false },
    ]

    examples.forEach(example => {
      expect(ieSPForIndustryAndCommerce(example.value)).toBe(example.return)
    })
  })
})
