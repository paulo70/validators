jest.mock('../../../src/validate-ie/validate-ie-sp/ieSPForIndustryAndCommerce')
jest.mock('../../../src/validate-ie/validate-ie-sp/ieSPForRural')

import validateIESP from '../../../src/validate-ie/validate-ie-sp/validateIESP'
import ieSPForIndustryAndCommerce from '../../../src/validate-ie/validate-ie-sp/ieSPForIndustryAndCommerce'
import ieSPForRural from '../../../src/validate-ie/validate-ie-sp/ieSPForRural'

describe('validateIESP', () => {
  beforeEach(() => {
    ieSPForIndustryAndCommerce.mockClear()
    ieSPForRural.mockClear()
  })

  it('calls "_ieSPForIndustryAndCommerce"', () => {
    const value = '110.042.490.114'

    validateIESP(value)

    expect(ieSPForIndustryAndCommerce).toBeCalledWith('110042490114')
  })

  for (let char of ['P', 'p']) {
    it(`calls "ieSPForRural" if input value starts with ${char}`, () => {
      const value = `${char}-01100424.3/002`

      validateIESP(value)

      expect(ieSPForRural).toBeCalledWith(`${char}011004243002`)
    })
  }
})
