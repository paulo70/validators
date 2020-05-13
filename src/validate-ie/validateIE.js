import _ieAC from './_ieAC'
import validateIEAC  from './validate-ie-ac'
import _ieAL from './_ieAL'
import ieAP from './ieAP'
import _ieAM from './_ieAM'
import ieBA from './ieBA'
import _ieCE from './_ieCE'
import _ieDF from './_ieDF'
import _ieES from './_ieES'
import ieGO from './ieGO'
import _ieMA from './_ieMA'
import _ieMT from './_ieMT'
import _ieMS from './_ieMS'
import ieMG from './ieMG'
import _iePA from './_iePA'
import _iePB from './_iePB'
import _iePR from './_iePR'
import _iePE from './_iePE'
import _iePI from './_iePI'
import _ieRJ from './_ieRJ'
import _ieRN from './_ieRN'
import _ieRS from './_ieRS'
import _ieRO from './_ieRO'
import _ieRR from './_ieRR'
import _ieSC from './_ieSC'
import _ieSP from './ieSP'
import _ieSE from './_ieSE'
import validateIETO from './validate-ie-to'

const validators = {
  'AC':	_ieAC,
  'AL':	_ieAL,
  'AP':	ieAP,
  'AM':	_ieAM,
  'BA':	ieBA,
  'CE':	_ieCE,
  'DF':	_ieDF,
  'ES':	_ieES,
  'GO':	ieGO,
  'MA':	_ieMA,
  'MT':	_ieMT,
  'MS':	_ieMS,
  'MG':	ieMG,
  'PA':	_iePA,
  'PB':	_iePB,
  'PR':	_iePR,
  'PE':	_iePE,
  'PI':	_iePI,
  'RJ':	_ieRJ,
  'RN':	_ieRN,
  'RS':	_ieRS,
  'RO':	_ieRO,
  'RR':	_ieRR,
  'SC':	_ieSC,
  'SP':	_ieSP,
  'SE':	_ieSE,
  'TO':	_ieTO
}

export default function validateIE (state, value) {

  return validators[state](value)
}
