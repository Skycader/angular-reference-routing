import { greet } from "./greet"


describe('greet', () => {
  it(`should contain a greeter's name`, () => {
    expect(
      greet('Angular')
    )
    .toContain(
      'Angular'
    )
  })
})