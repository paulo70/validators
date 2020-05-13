import ieBase from '../ieBase'

export default function validateIEPR (value) {
  return ieBase(value, { valueLength: 10, weights: [2, 3, 4, 5, 6, 7] })
}
