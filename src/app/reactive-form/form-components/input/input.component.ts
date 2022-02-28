import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  // This part must always be provided in the component to be able to use the NG-VALUE-ACCESSOR
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    }
  ],
})
export class InputComponent implements ControlValueAccessor {
  // in Angular 12+ we MUST initialize a variable with value so we use ! when we just declare them
  @Input() parentForm!: FormGroup;
  @Input() fieldName!: string;
  @Input() label!: string;

  value!: string;
  changed!: (value: string) => void;
  touched!: () => void;
  isDisabled!: boolean;
  
  constructor() { }

  // called to write when programmatic changes from model to view are requested.
  writeValue(value: string): void {
    this.value = value;
  }
  onChange(event: Event): void {
    const value: string = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }
  // is called when the control's value changes in the UI.
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  // is called to update the form model on blur.
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  // when the control status changes to or from 'DISABLED'.
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }   
}
