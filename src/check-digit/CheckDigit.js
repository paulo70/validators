import { mod } from '../helpers'

export default class CheckDigit {
  constructor (userOptions) {
    const options = Object.assign({
      numDigits: 2,
      module: 11,
      weights: [2, 3, 4, 5, 6, 7, 8, 9],
      withoutModuleComplement: false
    }, userOptions)

    this._numDigits = options.numDigits
    this._module = options.module
    this._weights = options.weights
    this._withoutModuleComplement = options.withoutModuleComplement
  }

  multiplyWeights (number) {
    const numberArray = number.split('')

    return numberArray
      .slice(0)
      .reverse()
      .map((current, i) => current * this._weights[mod(i, this._weights.length)])
      .reduce((acc, current) => acc + current, 0)
  }

  extractNumberWithoutDigits (number) {
    return number.substring(0, number.length - this._numDigits)
  }

  extractDigits (number) {
    return number.substring(number.length - this._numDigits)
  }

  calculate (number) {
    const multipliedWeights = this.multiplyWeights(number)
    const calculatedModule = multipliedWeights % this._module
    const subtractionByModule = Math.abs(calculatedModule - this._module)

    if (this._withoutModuleComplement) return calculatedModule

    return subtractionByModule <= 9 ? subtractionByModule : 0
  }

  isValid (number) {
    let numberWithoutDigit = this.extractNumberWithoutDigits(number)
    const digits = this.extractDigits(number)

    for (let digit of digits) {
      const calculatedDigit = this.calculate(numberWithoutDigit)

      if (calculatedDigit !== parseInt(digit)) return false

      numberWithoutDigit += digit
    }

    return true
  }

  get module () {
    return this._module
  }
}
