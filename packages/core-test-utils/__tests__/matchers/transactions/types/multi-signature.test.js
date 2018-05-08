const { MULTI_SIGNATURE } = require('@arkecosystem/client').constants

expect.extend({
  toBeMultiSignatureType: require('../../../../lib/matchers/transactions/types/multi-signature')
})

describe('.toBeMultiSignatureType', () => {
  test('passes when given a valid transaction', () => {
    expect({ type: MULTI_SIGNATURE }).toBeMultiSignatureType()
  })

  test('fails when given an invalid transaction', () => {
    expect({ type: 'invalid' }).not.toBeMultiSignatureType()
  })
})
