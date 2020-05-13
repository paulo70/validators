import ieBase from '../ieBase'

export default function validateIEAL (documentNumber) {
  const companyType = parseInt(documentNumber.replace(/[^\d]+/g, '')[2])
  const companyAcceptedTypes = [0, 3, 5, 7, 8]

  if (!companyAcceptedTypes.includes(companyType)) return false

  return ieBase(documentNumber, { numDigits: 1, initialChars: '24' })
}
