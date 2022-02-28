import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FruitsData } from '../mock-data/fruits';
import { RequestModel } from '../models/request-model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: 'reactive-form.component.html',
  styleUrls: ['reactive-form.component.scss']
})

export class ReactiveFormComponent {
  // Variables Section
  formInput = new FormControl(null, { validators: [Validators.required, Validators.minLength(10)] });
  formDropdown = new FormControl(null, { validators: [Validators.required] });
  formPassword = new FormControl(null, { validators: [Validators.required, Validators.minLength(10), Validators.maxLength(30)] });
  formTextarea = new FormControl(null, { validators: [Validators.required, Validators.minLength(10), Validators.maxLength(250)] });
  reactiveForm: FormGroup;
  
  reactiveFormError = 'The ReactiveForm is invalid! Please verify.';
  passwordLabel = 'Password Field'; 
  textareaLabel = 'Textarea Field';
  
  passwordStatus = true;
  listOptions = FruitsData;

  // Constructor Section
  constructor(fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.reactiveForm = fb.group({
      input: this.formInput,
      dropdown: this.formDropdown,
      password: this.formPassword,
      textarea: this.formTextarea,
    })
   }

  // Methods Section
  submitValues(): void {
    if (!this.reactiveForm.valid) {
      this.reactiveFormError = 'ReactiveForm is not valid. Please verify!';
      throw new Error('ReactiveForm is not valid.');
    }
    // SUCCESS
    const request: RequestModel = {
      ...this.reactiveForm.value,
    };
    console.log({ request });
  }

  feedback(duration: number, message: string, buttonLabel: string): void {
    this._snackBar.open(message, buttonLabel, {
      duration: duration,
    });
  }
}
