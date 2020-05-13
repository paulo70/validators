import toDigit from './toDigit'

import CheckDigit from '../../check-digit'

export default function ieSPForIndustryAndCommerce (value) {

  if (value.length !== 12) return false

  const interactions = [
    { checkDigitIndex: 8,  checkDigitweights: [10, 8, 7, 6, 5, 4, 3, 1] },
    { checkDigitIndex: 11, checkDigitweights: [2, 3, 4, 5, 6, 7, 8, 9, 10] },
  ]

  for (let interaction of interactions) {
    const number = value.substring(0, interaction.checkDigitIndex)
    const numCheckDigit = value.charAt(interaction.checkDigitIndex)
    const checkDigit = new CheckDigit({
      numDigits: 1,
      weights: interaction.checkDigitweights,
      withoutModuleComplement: true
    })

    if (toDigit(checkDigit.calculate(number)) !== numCheckDigit) {
      return false
    }
  }

  return true
}
