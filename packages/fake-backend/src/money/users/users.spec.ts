import { mindingo } from '.'

describe('Mindingo', () => {
  it('should return mindingo as string', () => {
    const result = mindingo()
    expect(result).toBe('test')
  })
})
