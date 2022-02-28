import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    MatCommonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  exports: [
    MatCommonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
  ],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, 
    useValue: { appearance: 'fill' }
  }],
})
export class AngularMaterialModule { }
