import { compute } from "./compute"


describe('compute', () => {
  it('should return 0 on negative input', () => {
    expect(compute(-5)).toBe(0)
  })
  it('should return x+1 on positive input', () => {
    expect(compute(4)).toBe(5)
  })
})