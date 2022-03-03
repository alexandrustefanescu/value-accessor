import { Component, forwardRef, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormGroup, NG_VALUE_ACCESSOR, ValidationErrors } from '@angular/forms';
import { of } from 'rxjs';
import { FruitsData } from 'src/app/mock-data/fruits';
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],

  // This part must always be provided in the component to be able to use the NG-VALUE-ACCESSOR
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DropdownComponent),
    multi: true,
  }],
})
export class DropdownComponent implements ControlValueAccessor {
  // in Angular 12+ we MUST initialize a variable with value so we use ! when we just declare them
  @Input() parentForm!: FormGroup;
  @Input() label!: string; 

  optionsList = FruitsData;

  value!: string;
  private onChanged!: Function;
  private onTouched!: Function;
  isDisabled!: boolean;

  constructor() { }

  selectOption(option: string, id: string) {
    this.value = option;
    this.parentForm.patchValue(
      { 
        dropdown: [{ id, label: option }] 
      },
    ); 
  }

  // called to write when programmatic changes from model to view are requested.
  writeValue(value: string): void {
    this.value = value;
  }
  // is called when the control's value changes in the UI.
  registerOnChange(fn: any): void {
    this.onChanged = fn;
  }
  // is called to update the form model on blur.
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  // when the control status changes to or from 'DISABLED'.
  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}

export function ValidateDropdown(control: AbstractControl): ValidationErrors | null {
  const controlForm = control.value;
  const result: Boolean = controlForm.some((item: { id: any; }) => item.id === null);
  
  return (result) ? { 'dropdownInvalid': true } : null;
}
