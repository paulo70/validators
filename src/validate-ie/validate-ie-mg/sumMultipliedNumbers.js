import multiplyWeights from './multiplyWeights'

export default function sumMultipliedNumbers (number) {
  const multipliedNumbers = multiplyWeights(number)

  return multipliedNumbers
    .join('')
    .split('')
    .reduce((acc, curr) => parseInt(acc) + parseInt(curr))
}
