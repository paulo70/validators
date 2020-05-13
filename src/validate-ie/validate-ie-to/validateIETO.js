import ieBase from '../ieBase'

export default function validateIETO (value) {
  const unMaskedValue = value.replace(/[^\d]+/g, '')
  const companyType = unMaskedValue.substring(2, 4)
  const companyAcceptedTypes = ['01', '02', '03']

  return ieBase(unMaskedValue.replace(companyType, ''), {
    numDigits: 1,
    customConditions: companyAcceptedTypes.includes(companyType)
  })
}
