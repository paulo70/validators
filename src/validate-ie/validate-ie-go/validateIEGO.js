import ieBase from '../ieBase'

import isCheckDigitValid from './isCheckDigitValid'
import isInitialCharsValid from './isInitialCharsValid'

export default function validateIEGO (value) {
  const number = value.replace(/[^\d]+/g, '')
  const initialChars = ['10', '11', '15']

  return ieBase(value, {
    numDigits: 1,
    customConditions: isCheckDigitValid(number) && isInitialCharsValid(number, initialChars),
    ignoresCheckDigit: true,
  })
}
