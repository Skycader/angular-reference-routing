import { FormBuilder } from "@angular/forms"
import { EMPTY } from "rxjs"
import { FormComponent } from "./form.component"


describe('form component', () => {

  let component: FormComponent = new FormComponent(new FormBuilder())
  let E = EMPTY
  
  beforeEach(() => {
    component = new FormComponent(new FormBuilder())
  })
  it('should have form email control', () => {
    expect(component.form.contains('email')).toBeTruthy()
  })
  it('should have form2 email control', () => {
    expect(component.form2.contains('email')).toBeTruthy()
  })

  it('should mark email as invalid if empty value', () => {
    const emailControl = component.form.get('email')
    emailControl.setValue('')
    expect(emailControl.valid).toBeFalsy()
  })

})