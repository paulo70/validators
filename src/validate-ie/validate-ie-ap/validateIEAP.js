import isCheckDigitValid from './isCheckDigitValid'

export default function validateIEAP (value) {
  const number = value.replace(/[^\d]+/g, '')

  if (number.length !== 9) return false

  if (number.substring(0, 2) !== '03') return false

  return isCheckDigitValid(number) || false
}
