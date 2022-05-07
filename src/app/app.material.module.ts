import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule} from '@angular/material/divider';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatSelectModule} from '@angular/material/select';
import { MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule} from '@angular/material/core';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatDividerModule, MatDatepickerModule,
    MatInputModule, MatCardModule, MatIconModule, MatSelectModule, MatRadioModule, MatNativeDateModule,
    MatTableModule, MatPaginatorModule
  ],
  exports: [
    MatButtonModule, MatCheckboxModule, MatToolbarModule, MatDividerModule, MatDatepickerModule,
    MatInputModule,MatCardModule, MatIconModule, MatSelectModule, MatRadioModule, MatNativeDateModule,
    MatTableModule, MatPaginatorModule
  ]
})
export class AppMaterialModule { }
