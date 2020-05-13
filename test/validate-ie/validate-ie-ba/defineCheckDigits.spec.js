jest.mock('../../../src/validate-ie/validate-ie-ba/defineCheckDigitOptions')

import defineCheckDigits from '../../../src/validate-ie/validate-ie-ba/defineCheckDigits'
import CheckDigit from '../../../src/check-digit/CheckDigit'
import defineCheckDigitOptions from '../../../src/validate-ie/validate-ie-ba/defineCheckDigitOptions'

describe('defineCheckDigits', () => {
  beforeEach(() => {
    defineCheckDigitOptions.mockClear()
  })

  it('...', () => {
    const group = 1
    const numLength = 8

    expect(defineCheckDigits(group, numLength)).toEqual([
      expect.any(CheckDigit), expect.any(CheckDigit)
    ])
  })

  it('...', () => {
    const group = 1
    const numLength = 8

    defineCheckDigits(group, numLength)

    expect(defineCheckDigitOptions).nthCalledWith(1, 1, group, numLength)
    expect(defineCheckDigitOptions).nthCalledWith(2, 2, group, numLength)
  })
})
