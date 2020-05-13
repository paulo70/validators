import CheckDigit from '../check-digit'
import { toArray } from '../helpers'

export default function ieBase (value, userOptions = {}) {
  const unmaskedvalue = value.replace(/[^\d]+/g, '')
  const defaults = { initialChars: '', valueLength: 9, customConditions: true }
  const options = Object.assign(defaults, userOptions)
  const checkDigit = new CheckDigit(options)

  if (unmaskedvalue.substring(0, options.initialChars.length) !== options.initialChars) {
    return false
  }

  if (!options.customConditions) {
    return false
  }

  if (!toArray(options.valueLength).includes(unmaskedvalue.length)) {
    return false
  }

  if (!options.ignoresCheckDigit && !checkDigit.isValid(unmaskedvalue)) {
    return false
  }

  return true
}
