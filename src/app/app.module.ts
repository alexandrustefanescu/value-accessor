import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './reactive-form/form-components/dropdown/dropdown.component';
import { InputComponent } from './reactive-form/form-components/input/input.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AngularMaterialModule } from './reactive-form/reactive-forms.module';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    InputComponent,
    DropdownComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [MatSnackBar],
  bootstrap: [AppComponent]
})
export class AppModule { }
