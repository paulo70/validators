import isCheckDigitValid from './isCheckDigitValid'

export default function validateIEBA (value) {
  const number = value.replace(/[^\d]+/g, '')
  const validLengths = [8, 9]

  if (!validLengths.includes(number.length)) return false

  return isCheckDigitValid(number) || false
}
