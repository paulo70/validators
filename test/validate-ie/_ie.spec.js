jest.mock('../../../validate/src/validate-ie/_ieAC')
jest.mock('../../../validate/src/validate-ie/_ieAL')
jest.mock('../../../validate/src/validate-ie/ieAP')
jest.mock('../../../validate/src/validate-ie/_ieAM')
jest.mock('../../../validate/src/validate-ie/ieBA')
jest.mock('../../../validate/src/validate-ie/_ieCE')
jest.mock('../../../validate/src/validate-ie/_ieDF')
jest.mock('../../../validate/src/validate-ie/_ieES')
jest.mock('../../../validate/src/validate-ie/ieGO')
jest.mock('../../../validate/src/validate-ie/_ieMA')
jest.mock('../../../validate/src/validate-ie/_ieMT')
jest.mock('../../../validate/src/validate-ie/_ieMS')
jest.mock('../../../validate/src/validate-ie/ieMG')
jest.mock('../../../validate/src/validate-ie/_iePA')
jest.mock('../../../validate/src/validate-ie/_iePB')
jest.mock('../../../validate/src/validate-ie/_iePR')
jest.mock('../../../validate/src/validate-ie/_iePE')
jest.mock('../../../validate/src/validate-ie/_iePI')
jest.mock('../../../validate/src/validate-ie/_ieRJ')
jest.mock('../../../validate/src/validate-ie/_ieRN')
jest.mock('../../../validate/src/validate-ie/_ieRS')
jest.mock('../../../validate/src/validate-ie/_ieRO')
jest.mock('../../../validate/src/validate-ie/_ieRR')
jest.mock('../../../validate/src/validate-ie/_ieSC')
jest.mock('../../../validate/src/validate-ie/ieSP')
jest.mock('../../../validate/src/validate-ie/_ieSE')
jest.mock('../../../validate/src/validate-ie/_ieTO')

import _ieAC from '../../../validate/src/validate-ie/_ieAC'
import _ieAL from '../../../validate/src/validate-ie/_ieAL'
import _ieAP from '../../../validate/src/validate-ie/ieAP'
import _ieAM from '../../../validate/src/validate-ie/_ieAM'
import ieBA from '../../../validate/src/validate-ie/ieBA'
import _ieCE from '../../../validate/src/validate-ie/_ieCE'
import _ieDF from '../../../validate/src/validate-ie/_ieDF'
import _ieES from '../../../validate/src/validate-ie/_ieES'
import ieGO from '../../../validate/src/validate-ie/ieGO'
import _ieMA from '../../../validate/src/validate-ie/_ieMA'
import _ieMT from '../../../validate/src/validate-ie/_ieMT'
import _ieMS from '../../../validate/src/validate-ie/_ieMS'
import  ieMG from '../../../validate/src/validate-ie/ieMG'
import _iePA from '../../../validate/src/validate-ie/_iePA'
import _iePB from '../../../validate/src/validate-ie/_iePB'
import _iePR from '../../../validate/src/validate-ie/_iePR'
import _iePE from '../../../validate/src/validate-ie/_iePE'
import _iePI from '../../../validate/src/validate-ie/_iePI'
import _ieRJ from '../../../validate/src/validate-ie/_ieRJ'
import _ieRN from '../../../validate/src/validate-ie/_ieRN'
import _ieRS from '../../../validate/src/validate-ie/_ieRS'
import _ieRO from '../../../validate/src/validate-ie/_ieRO'
import _ieRR from '../../../validate/src/validate-ie/_ieRR'
import _ieSC from '../../../validate/src/validate-ie/_ieSC'
import _ieSP from '../../../validate/src/validate-ie/ieSP'
import _ieSE from '../../../validate/src/validate-ie/_ieSE'
import _ieTO from '../../../validate/src/validate-ie/_ieTO'
import _ie   from '../../../validate/src/validate-ie/_ie'

describe('_ie', () => {
  beforeEach(() => {
    _ieAC.mockClear()
    _ieAL.mockClear()
    _ieAP.mockClear()
    _ieAM.mockClear()
    ieBA.mockClear()
    _ieCE.mockClear()
    _ieDF.mockClear()
    _ieES.mockClear()
     ieGO.mockClear()
    _ieMA.mockClear()
    _ieMT.mockClear()
    _ieMS.mockClear()
     ieMG.mockClear()
    _iePA.mockClear()
    _iePB.mockClear()
    _iePR.mockClear()
    _iePE.mockClear()
    _iePI.mockClear()
    _ieRJ.mockClear()
    _ieRN.mockClear()
    _ieRS.mockClear()
    _ieRO.mockClear()
    _ieRR.mockClear()
    _ieSC.mockClear()
    _ieSP.mockClear()
    _ieSE.mockClear()
    _ieTO.mockClear()

    window.I18n = { t: () => '' }
    document.body.innerHTML = `
      <input type="text" id="ie">
      <input type="text" id="state">
    `
  })

  afterEach(() => {
    delete window.I18n
  })

  it('validates IE input', () => {
    const ieInput      = document.querySelector('#ie')
    const stateInput   = document.querySelector('#state')
    const examples     = [
      { stateCode: '12', stateValidator: _ieAC },
      { stateCode: '27', stateValidator: _ieAL },
      { stateCode: '16', stateValidator: _ieAP },
      { stateCode: '13', stateValidator: _ieAM },
      { stateCode: '29', stateValidator: ieBA },
      { stateCode: '23', stateValidator: _ieCE },
      { stateCode: '53', stateValidator: _ieDF },
      { stateCode: '32', stateValidator: _ieES },
      { stateCode: '52', stateValidator: ieGO },
      { stateCode: '21', stateValidator: _ieMA },
      { stateCode: '51', stateValidator: _ieMT },
      { stateCode: '50', stateValidator: _ieMS },
      { stateCode: '31', stateValidator:  ieMG },
      { stateCode: '15', stateValidator: _iePA },
      { stateCode: '25', stateValidator: _iePB },
      { stateCode: '41', stateValidator: _iePR },
      { stateCode: '26', stateValidator: _iePE },
      { stateCode: '22', stateValidator: _iePI },
      { stateCode: '33', stateValidator: _ieRJ },
      { stateCode: '24', stateValidator: _ieRN },
      { stateCode: '43', stateValidator: _ieRS },
      { stateCode: '11', stateValidator: _ieRO },
      { stateCode: '14', stateValidator: _ieRR },
      { stateCode: '42', stateValidator: _ieSC },
      { stateCode: '35', stateValidator: _ieSP },
      { stateCode: '28', stateValidator: _ieSE },
      { stateCode: '17', stateValidator: _ieTO }
    ]

    examples.forEach(example => {
      stateInput.value = example.stateCode
      _ie(ieInput, stateInput)

      expect(example.stateValidator).toBeCalledWith(ieInput)
    })
  })

  it('returns true if state element value is empty', () => {
    const ieInput    = document.querySelector('#ie')
    const stateInput = document.querySelector('#state')

    stateInput.value = ''

    expect(_ie(ieInput, stateInput)).toBeTruthy()
  })
})
