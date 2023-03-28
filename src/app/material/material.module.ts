import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatRadioModule} from "@angular/material/radio";
import {MatDividerModule} from '@angular/material/divider';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule,
  ],
  exports: [
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatToolbarModule,
    MatListModule

  ]
})
export class MaterialModule { }
