import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FruitsData } from '../mock-data/fruits';
import { RequestModel } from '../models/request-model';
import { ValidateDropdown } from './form-components/dropdown/dropdown.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: 'reactive-form.component.html',
  styleUrls: ['reactive-form.component.scss']
})

export class ReactiveFormComponent implements OnInit {
  // Variables Section
  reactiveForm!: FormGroup;

  textareaMaxLength = 250;
  passwordStatus = true;
  listOptions = FruitsData;
  debugBtnStatus = false;
  
  reactiveFormError = 'The ReactiveForm is invalid! Please verify.';
  passwordLabel = 'Password Field'; 
  textareaLabel = 'Textarea Field';
  hintLabel = `Max ${this.textareaMaxLength} characters`;

  // Constructor Section
  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {}
  

  // LifeCycle Hooks Section
  ngOnInit(): void {
    this.initFormGroup();
  }

  // Methods Section
  private initFormGroup(): void {
    this.reactiveForm = this.formBuilder.group({
      input: this.formBuilder.control(null, [Validators.required, Validators.minLength(10)]),
      dropdown: this.formBuilder.array([
        [
          {
            id: null,
            label: null,
          } 
        ],
      ], [ValidateDropdown]),
      password: this.formBuilder.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(30)]),
      textarea: this.formBuilder.control(null, [Validators.required, Validators.minLength(10), Validators.maxLength(this.textareaMaxLength)]),
    });
  }

  submitValues(): void {
    if (!this.reactiveForm.valid) {
      this.reactiveFormError = 'ReactiveForm is not valid. Please verify!';
      throw new Error('ReactiveForm is not valid.');
    }

    // SUCCESS
    const request: RequestModel = {
      ...this.reactiveForm.value,
    };
    console.log({ submitedValues: request });
  }

  feedback(duration: number, message: string, buttonLabel: string): void {
    this._snackBar.open(message, buttonLabel, {
      duration: duration,
    });
  }

  toggleDebugInformation(): void {
    this.debugBtnStatus = !this.debugBtnStatus;
    console.log("was klicked");
  }

  showInformation(): void {
    const informationText = 'This App has the purpose to show how to use ReactiveForms. As well as how to make Custom Forms and Custom Validation in Angular.';
    this.feedback(10000, informationText, 'Close');
  }

  //Getters and Setters Section
  get textarea(): FormControl {
    return this.reactiveForm.get('textarea') as FormControl;
  }
}
