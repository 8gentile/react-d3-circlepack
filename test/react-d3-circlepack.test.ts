import ReactD3CirclePack from '../src/pack/react-d3-circlepack'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('ReactD3CirclePack is instantiable', () => {
    expect(new ReactD3CirclePack({ name: 'jeff' })).toBeInstanceOf(ReactD3CirclePack)
  })
})
