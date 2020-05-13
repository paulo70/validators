import ieBase from '../ieBase'

export default function validateRR (value) {
  return ieBase(value, {
    initialChars: '24',
    module: 9,
    numDigits: 1,
    weights: [8, 7, 6, 5, 4, 3, 2, 1],
    withoutModuleComplement: true
  })
}
