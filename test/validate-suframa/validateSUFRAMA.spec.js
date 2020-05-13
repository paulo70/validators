import validateSUFRAMA from '../../src/validate-suframa/validateSUFRAMA'

describe('validateSUFRAMA', () => {
  it('validates validateSUFRAMA document', () => {
    const examples = [
      { value: '55.0309.01-2', return: true  },
      { value: '100698107',    return: true  },
      { value: '11.1279.10-0', return: true  },
      { value: '100955100',    return: true  },
      { value: '10.1040.10-5', return: true  },
      { value: '101362102',    return: true  },
      { value: '10.0695.10-8', return: true  },
      { value: '101160100',    return: true  },
      { value: '60.0215.10-5', return: true  },
      { value: '111266106',    return: true  },
      { value: '10.0170.10-2', return: true  },
      { value: '101416105',    return: true  },
      { value: '10.1200.10-2', return: true  },
      { value: '110344103',    return: true  },
      { value: '11.1273.10-2', return: true  },
      { value: '100480101',    return: true  },
      { value: '10.0628.10-9', return: true  },
      { value: '100394108',    return: true  },
      { value: '10.1289.10-3', return: true  },
      { value: '101139101',    return: true  },
      { value: '10.0880.10-0', return: true  },
      { value: '100826105',    return: true  },
      { value: '11.0410.10-6', return: true  },
      { value: '100764100',    return: true  },
      { value: '11.0425.10-3', return: true  },
      { value: '100965105',    return: true  },
      { value: '1103441',      return: false },
      { value: '000965100',    return: false },
      { value: '100965100',    return: false },
      { value: '1009651000',   return: false }
    ]

    for (let example of examples) {
      expect(validateSUFRAMA(example.value)).toBe(example.return)
    }
  })
})
