import { CounterComponent } from "./counter.component"

describe('counter component', () => {

  let component: CounterComponent
  beforeEach(() => {
    component = new CounterComponent()
  })

  it('should increment counter by 1', () => {
    component.increment()
    expect(component.counter).toBe(1)
  })

  it ('should decrement counter by 1', () => {
    component.decrement()
    expect(component.counter).toBe(-1)
  })

  it('eventer should return count', () => {
    let result = null
    component.eventer.subscribe(res => result = res)
    component.increment()
    expect(result).toBe(1)
  })
 
})