import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required])
  })

  form2 = this.formBuilder.group({
    email: ['', Validators.required]
  })
  
  constructor(protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  submit() {}

}
