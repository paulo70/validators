import { mod } from '../../helpers/'

export default function multiplyWeights (number) {
  const weights = [1, 2]

  return number
    .split('')
    .slice(0)
    .map((current, i) => current * weights[mod(i, weights.length)])
}
