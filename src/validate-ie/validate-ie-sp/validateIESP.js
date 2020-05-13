import ieSPForIndustryAndCommerce from './ieSPForIndustryAndCommerce'
import ieSPForRural from './ieSPForRural'

export default function ieSP (value) {
  const ruralPrefix = ['P', 'p']
  const number = value.replace(/[\W|]+/g, '')

  if (ruralPrefix.includes(number.charAt(0))) {
    return ieSPForRural(number)
  }

  return ieSPForIndustryAndCommerce(number)
}
